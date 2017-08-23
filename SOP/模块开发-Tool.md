# 模块开发之Tool开发

> Tool/Agent对是一个对象在两台不同计算机上的映射，他们只有共同协调工作才能正常运行,所以Tool/Agent应该同时定义在src/mbio/tools目录下的模块中。Agent和Tool互相通信，使用Actor消息处理器，Actor随着Agent和Tool的运行而启动，不需要人为干预.

### tool命名

* tool模块文件命令以小写字母和下划线组合单词命名，例如pca.py 或taxon_assign.py;

* 模块中的类按驼峰法命名，以“pca”为例，agent命名为“PcaAgent”，tool对应命名为“Pca_Tool”；


### ToolAgent
	
* 每个Agent对象都会生成一个LocalActor对象，循环处理接受的消息并负责记录最新状态更新时间,根据接收到的不同信息调用不同的处理函数。

* ToolAgent类继承Agent的属性和方法，Agent继承基础模块Basic。

##### ToolAgent编写
	
1. 初始化实例，初始化父类，设置参数

    '''
    class UsearchOtuAgent(Agent):
        """
        Usearch：uparse
        version v7
        author：yuguo
        last_modify:2015.11.03
        """
        def __init__(self, parent=None):
            super(UsearchOtuAgent, self).__init__(parent)
            options = [
                # 输入fasta文件，序列名称格式为'>sampleID_seqID'.
                {'name': 'fasta', 'type': 'infile', 'format': 'sequence.fasta'},
                # 相似性值，范围0-1.
                {'name': 'identity', 'type': 'float', 'default': 0.97},
                {'name': 'otu_table', 'type': 'outfile',
                    'format': 'meta.otu.otu_table'},  # 输出结果otu表
                {'name': 'otu_rep', 'type': 'outfile',
                    'format': 'sequence.fasta'},  # 输出结果otu代表序列
                {'name': 'otu_seqids', 'type': 'outfile',
                    'format': 'meta.otu.otu_seqids'},  # 输出结果otu中包含序列列表
                {'name': 'otu_biom', 'type': 'outfile',
                    'format': 'meta.otu.biom'}  # 输出结果biom格式otu表
            ]
            self.add_option(options)
    '''

2. 检查参数设置

在模块开始运行前，检查参数是否符合运行要求，将错误产生在运行开始前。

'''
def check_options(self):
    """
    检查参数设置
    """
    if not self.option("fasta").is_set:
        raise OptionError("必须设置输入fasta文件.")
    if self.option("identity") < 0 or self.option("identity") > 1:
        raise OptionError("identity值必须在0-1范围内.")
    return True
'''

3. 设置所需使用资源

计算任务开始运行前，需要先告诉集群系统需要多少资源来运行该任务。这个数字越准确，那么集群的资源利用率也越高。这个数值不准确，可能导致集群死机或者资源空置。

生信计算中，一般资源的需求随着输入文件大小和计算方法改变。所以一般这个值应该是一个动态的值。所以我们可能需要在set_resource中给出一定的算法来动态计算资源使用量

'''
def set_resource(self):
    """
    设置所需资源，需在之类中重写此方法 self._cpu ,self._memory
    可以在其中编写复杂逻辑，比如通过判断输入文件大小来动态给出所需资源，使其尽量匹配实际情况
    """
    self._cpu = 10
    total = os.path.getsize(self.option("fasta").prop["path"])
    total = int(math.ceil(total / (1024 * 1024 * 1024)))
    total = int(total * 10)
    self._memory = "{}G".format(total)

'''

4. 设置结果目录，触发结束事件

设置结果目录有两种规则方式，一种是绝对文件路径：`add_relpath_rules`,一种是模式匹配：`add_regexp_rules`

'''
    def end(self):
        result_dir = self.add_upload_dir(self.output_dir)
        result_dir.add_relpath_rules([
            [".", "", "结果输出目录"],
            ["otu_reps.fasta", "sequence.fasta", "代表序列"],
            ["otu_seqids.txt", "xls", "OTU代表序列对应表"],
            ["otu_table.biom", 'meta.otu.biom', "OTU表对应的Biom文件"],
            ["otu_table.xls", "meta.otu.otu_table", "OTU表"]
        ])
        super(UsearchOtuAgent, self).end()
'''


### Tool

* 每个Tool在远程节点运行时都会产生一个RemoteActor对象,负责远端运行时的消息处理机制。将Tool运行过程中添加的State状态发送到其对应的Agent对象，并调用对应的函数进行处理。

	+ Tool内置基本的状态消息state：

		- keepalive：定时触发
		- finish：调用end方法触发（对应Agent中处理函数finish_callback）
		- error：调用set_error方法触发（对应Agent中处理函数error_callback）

	+ 自定义状态：

	`toolobject.add_state(statename,data)`即可添加一个状态发送到Agent。同时在对应的Agent中添加对应的State Callback处理函数，命名规则为 (statename)`_callback`。Agent在接受到这个State状态信息后会调用对应的Callback处理函数执行。

* Tool类继承Tool基类，通过actor获取Agent发送的config对象，并加载congfig对象的属性绑定到tool自己的属性中，相当于把ToolAgent的属性克隆为自己的属性。

#### Tool编写：

1. 初始化实例，初始化父类，加载config，设置环境变量

调用的软件命令以及路径从app目录开发，通过Tool的set_environ方法来动态设置环境变量满足其下Command命令的运行要求。
```
class DistanceCalcTool(Tool):

    def __init__(self, config):
        super(DistanceCalcTool, self).__init__(config)
        self._version = '1.9.1'  # qiime版本
        self.cmd_path = 'program/Python/bin/beta_diversity.py'
        # 设置运行环境变量
        self.set_environ(LD_LIBRARY_PATH=self.config.SOFTWARE_DIR + '/gcc/5.1.0/lib64')
        self.real_otu = self.gettable()  # 获取真实的OTU表路劲
        self.biom = self.biom_otu_table()  # 传入otu表需要转化为biom格式
```

2. 编写运行方法，调用程序添加到command运行

运行程序有2种方式：

	- 自定义编写处理函数方法，放在tool的函数中（自能自己调用），或放在src/mbio/packages目录下（方便其他模块调用），在Tool主线程中运行，注意方法尽可能简洁，运行时间必须非常短，否则会造成主进程阻塞。

	- 通过Command对象负责运行一个命令，并监控其运行过程，command会新建一个线程运行命令，发起一个子进程调用外部程序，返回命令程序退出时的状态编码(exit code，如果顺利运行，为0；如果有错误或异常状况，为>0的整数)）

		**退出状态码**：

			* 0 命令成功完成
			* 1通常的未知错误
			* 2误用shell命令
			* 126命令无法执行
			* 127没有找到命令
			* 128无效的退出参数
			* 128 x使用Linux信号x的致命错误.
			* 130使用Ctrl-C终止的命令
			* 255规范外的退出状态	

	- add_command添加命令,run运行命令,wait暂停当前线程等待命令跑完

		注意判断和捕获所有错误或异常情况，使用set_error返回错误信息，程序退出。

	```
	def run_beta_diversity(self):
	    """
	    运行qiime:beta_diversity.py
	    """
	    cmd = self.cmd_path
	    cmd += ' -m %s -i %s -o %s' % (self.option('method'), self.biom,
	                                   self.work_dir)
	    if self.option('method') in DistanceCalcAgent.UNIFRACMETHOD:
	        cmd += ' -t %s' % (self.option('newicktree').prop['path'])
	    self.logger.info('运行qiime:beta_diversity.py程序')
	    self.logger.info(cmd)
	    dist_matrix_command = self.add_command('distance_matrix', cmd)
	    dist_matrix_command.run()
	    self.wait()
	    if dist_matrix_command.return_code == 0:
	        self.command_successful()
	    elif dist_matrix_command.return_code is None:
	        self.logger.warn("运行命令出错，返回值为None，尝试重新运行")
	        dist_matrix_command.rerun()
	        self.wait()
	        if dist_matrix_command.return_code is 0:
	            self.command_successful()
	        else:
	            self.set_error("运行qiime:beta_diversity.py出错")

	    else:
	        self.set_error('运行qiime:beta_diversity.py出错')
	```

- linkfile链接文件，option设置输出参数路径，end结束发送finish状态

	最后命令完成后，别忘了将最终结果放置在output_dir目录下，如果you下游模块还需要设置输出参数文件对象的路径。
	```
    def command_successful(self):
        self.logger.info('运行qiime:beta_diversity.py完成')
        filename = self.work_dir + '/' + \
            self.option('method') + '_temp.txt'
        basename = os.path.splitext(os.path.basename(self.real_otu))[0]
        linkfile = self.output_dir + '/' + \
            self.option('method') + '_' + basename + '.xls'
        if os.path.exists(linkfile):
            os.remove(linkfile)
        os.link(filename, linkfile)
        # self.option('dis_matrix').set_path(linkfile)
        self.option('dis_matrix', linkfile)
        self.end()				
	```


3. run触发command运行

运行command前必须先触发父类run运行起来开启actor并建立线程。
```
    def run(self):
        """
        运行
        """
        super(DistanceCalcTool, self).run()
        self.run_beta_diversity()
```

















