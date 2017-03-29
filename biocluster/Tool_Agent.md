=========================
Tool/Agent开发
=========================

查看其它章节：
    * [概述](biocluster)
    * [基础](/biocluster/Basic)
    * [事件驱动编程](/biocluster/Event_Oriented)
    * [Module/Workflow开发](/biocluster/Moudule_Workflow)
    * [Tool/Agent开发](/biocluster/Tool_Agent)
    * [运行和测试](/biocluster/Run_Test)

Tool/Agent对是一个对象在两台不同计算机上的映射，他们只有共同协调工作才能正常运行。

所以Tool/Agent应该同时定义在src/mbio/tools目录下的模块中.

-----------------------
实例
-----------------------
src/mbio/tools/ncbi/blast.py 模块

```

		from biocluster.agent import Agent
		from biocluster.tool import Tool
		import os
		from biocluster.core.exceptions import OptionError


		class BlastAgent(Agent):
			"""
			ncbi blast+   请详细编写使用说明
			"""
			def __init__(self, parent):
				super(BlastAgent, self).__init__(parent)
				options = [
					{"name": "customer_mode", "type": "bool", "default": False},  # customer 自定义数据库
					{"name": "query", "type": "infile", "format": "fasta"},  # 输入文件
					{"name": "database", "type": "string", "default": "nr"},  # 比对数据库 nt nr string GO swissprot uniprot KEGG
					{"name": "reference", "type": "infile", "format": "fasta"},  # 参考序列  选择customer时启用
					{"name": "evalue", "type": "float", "default": 1e-5},  # evalue值
					{"name": "num_threads", "type": "int", "default": 10},  # cpu数
					{"name": "output", "type": "outfile", "format": "fasta"}  # cpu数
				]
				self.add_option(options)

			def check_options(self):
				"""
				重写参数检测函数
				:return:
				"""
				if not self.option("query").is_set:
					raise OptionError(u"必须设置参数query")
				if self.option("customer_mode") is True and not self.option("reference").is_set:
					raise OptionError(u"使用自定义数据库模式时必须设置reference")
				if self.option("database") not in ["nt", "nr", "string"]:
					raise OptionError(u"数据库%s不被支持" % self.option("database"))
				return True

			def set_resource(self):
				"""
				设置所需资源，需在之类中重写此方法 self._cpu ,self._memory
				可以在其中编写复杂逻辑，比如通过判断输入文件大小来动态给出所需资源，使其尽量匹配实际情况
				:return:
				"""
				self._cpu = 10
				self._memory = ''


		class BlastTool(Tool):
			def __init__(self, config):  # 注意 初始化Tool子类时是需要带参数的
				super(BlastTool, self).__init__(config)  # 调用父类初始化
				self._version = "2.2.31"  # 定义程序版本
				self.db_path = os.path.join(self.config.SOFTWARE_DIR, "blast/ncbi/db")
				self.cmd_path = "blast/ncbi/blast-2.2.31+/bin"   # 执行程序路径必须相对于 self.config.SOFTWARE_DIR
				self.relation = {
					"blastn": ["DNA", "DNA"],
					"blastp": ["Protein", "Protein"],
					"blastx": ["DNA", "Protein"],
					"tblastn": ["Protein", "DNA"]
				}
				self.db_type = {
					"nt": "DNA",
					"nr": "Protein",
					"strings": "Protein",
					"go": "Protein",
					"swissprot": "Protein",
					"uniprot": "Protein",
					"kegg": "Protein"
				}

			def get_blast_type(self):
				"""
				根据输入文件及数据库类型获取blast类型名

				:return: string blastn/ blastp/ blastx
				"""
				input_type = self.option("query").prop['seq_type']
				if self.option("customer_mode"):
					blast_db_type = self.option("reference").prop['seq_type']
				else:
					blast_db_type = self.db_type[self.option("database").lower()]
				for key, value in self.relation.items():
					if input_type == value[0] and blast_db_type == value[1]:
						return key
				raise Exception(u"不支持此类型的序列比对: input:%s  reference: %s" % (input_type, blast_db_type))

			def run_makedb_and_blast(self):
				"""
				运行makeblastdb和blast

				:return:
				"""
				db_name = os.path.basename(self.option("reference").prop['path'])
				cmd = os.path.join(self.cmd_path, "makeblastdb")
				seq_type = "nucl" if self.option("reference").prop['seq_type'] == "DNA" else "prot"
				cmd += " -dbtype %s -in %s -parse_seqids -title %s -out %s " % (seq_type, self.option("reference").prop['path'],
																				db_name, db_name)
				self.logger.info(u"开始运行makeblastdb")
				makedb_obj = self.add_command("makeblastdb", cmd).run()
				self.wait(makedb_obj)
				if makedb_obj.return_code == 0:
					self.logger.info(u"makeblastdb运行完成")
					self.run_blast(db_name)
				else:
					self.set_error(u"makeblastdb运行出错!")

			def run_blast(self, db_name):
				"""
				运行Blast

				:param db_name: blastdb名称
				:return:
				"""

				cmd = os.path.join(self.cmd_path, self.get_blast_type())
				outputfile = os.path.join(self.output_dir, os.path.basename(self.option("query").prop['path']) + "_vs_"
										  + db_name + ".xml")
				cmd += " -query %s -db %s -out %s -evalue %s -outfmt 5 -max_hsps 10 -max_target_seqs 10 -num_threads %s" % (
					self.option("query").prop['path'], db_name, outputfile, self.option("evalue"), self.option("num_threads"))
				self.logger.info(u"开始运行blast")  # 尽量多给出提示，便于调试和阅读程序进度
				blast_command = self.add_command("blast", cmd)   # 添加命令对象
				if self.option("customer_mode"):
					self.db_path = os.getcwd()
				self.set_environ(BLASTDB=self.db_path)   # 设置运行命令所需的环境变量，对整个Tool运行时生效,每个Tool应该设置环境变量保证自身的运行
				blast_command.run()   # 开始运行命令
				self.wait()  # 等待命令结束
				if blast_command.return_code == 0:  # 判断命令是否正常完成，需要根据命令实际情况编写 也可编写_check函数
					self.logger.info(u"运行blast完成")
					self.option("output", outputfile)  # 设置输出参数
					self.end()        # 设置Tool为正常完成状态，并将状态发送远程Agent
				else:
					self.set_error(u"blast运行出错!")  # 设置Tool为异常错误状态，并将状态发送远程Agent
					# 也可获取错误类型，根据情况调整参数后重新运行命令，使命令正确完成
					# 或者发送自定义State状态给远程Agent 由Module或Workflow中定义运行逻辑

			def run(self):
				"""
				运行
				:return:
				"""
				super(BlastTool, self).run()
				if self.option("customer_mode"):
					self.run_makedb_and_blast()
				else:
					db_name = self.option("database")
					self.run_blast(db_name)

```

-----------------------
状态State
-----------------------
远程运行的Tool通过State状态来将发生的信息传递给Agent,State包括一个状态名和一个相关的数据(python基础数据类型)

在Biocluster框架中，Tool内置了几个State:

===================== =========================== ================  
内置State             触发情况                    Agent中处理函数   
===================== =========================== ================
keepalive             定时触发                    -
finish                Tool调用end方法触发         finish_callback
error                 Tool调用set_error方法触发   error_callback
===================== =========================== ================

以上三个State提供了远程Tool运行最基本的状态反馈机制。我们在编写Tool工具时可根据需要自定义State.

``toolobject.add_state(statename,data)`` 即可添加一个状态发送到远程。

同时在对应的Agent中，应该添加对应的State Callback处理函数，命名规则为 (statename)`_callback`。
Agent在接受到这个State状态信息后会调用对应的Callback处理函数执行。

-----------------------
指令Action
-----------------------
State Callback处理函数执行完成后，会在Agent中发送一个对应的Action指令。通过这个指令我们可以控制远程Tool做一些特定的事情。
默认指令为 None,也就是什么也不执行

``agentobject.set_callback_action(actionname,data)`` 方法会设置一个指令，这个指令只会被获取一次。之后复原为默认指令(None)

在Tool中只有一个内置的指令处理函数 ``exit_action`` ,当发送action名称为exit的指令时，此函数会执行。此函数将会结束远程Tool的运行。

我们可以在Tool子类中编写名为 ``(actionname)_action`` 的方法来处理名为actionname的自定义指令。

-----------------------
收发器Actor
-----------------------
Agent和Tool定时通信，需要一个专门的信息处理器。

Actor即使这个信息处理器 biocluster.core.actor.LocalActor 是Agent的信息处理器, biocluster.core.actor.RemoteActor 是Tool的信息处理器

在Agent运行的本地程序中不应该有非阻塞操作，所以LocalActor是基于微线程的。而Tool负责计算，会有阻塞操作,所以RemoteActor是基于线程的.

Actor随着Agent和Tool的运行而启动，不需要人为干预.


-----------------------					
Agent开发
-----------------------
Agent开发主要需要定义以下几个部分的功能

**参数定义和参数检查**

	Tool和Agent的参数时共享的。也就是Agent的参数会被自动复制到远程Tool。

	参数定义请参考  :ref:`option` ,同时参数的设计应该参考 :ref:`optiondesign`

	同时你应该在模块开始运行前，检查参数是否符合运行要求，将错误产生在运行开始前。

	参数的错误检测需要重写 ``check_options`` 函数，此函数将在run函数运行前执行

**计算资源**

	计算任务开始运行前，需要先告诉集群系统需要多少资源来运行该任务。这个数字越准确，那么集群的资源利用率也越高。这个数值不准确，可能导致集群死机或者资源空置。

	定义计算资源需要重新Agent的 set_resource 方法, 并在其中修改_cpu和_memory属性的值。

	生信计算中，一般资源的需求随着输入文件大小和计算方法改变。所以一般这个值应该是一个动态的值。所以我们可能需要在set_resource中给出一定的算法来动态计算资源使用量

**运行模式及队列**

运行模式是指Tool运行的计算集群的类型。运行模式由Agent的_run_mode属性控制。默认值是"Auto"， 表示由 main.conf中的 platform参数决定

队列是指Tool运行的计算机集群队列名


**状态处理**

如果你在Tool中发送了自定义状态，你需要在Agent中定义对应的状态处理函数。参见 :ref:`state`

-----------------------
Tool开发
-----------------------

Tool开发主要需要完成以下几个任务。


运行命令


通过Tool的add_command方法我们可以方便的添加一个 biocluster.command.Command对象。

注意这个的命令路径应该是相对于main.conf中的 software_dir参数指定的路径，所有软件和其依赖的库文件应该都安装在这个目录下.

"""""""""""""""""""""""""""
环境变量
"""""""""""""""""""""""""""

在运行命令前，我们应在通过Tool的set_environ方法来动态设置环境变量满足其下Command命令的运行要求。

"""""""""""""""""""""""""""
命令状态监控
"""""""""""""""""""""""""""

运行命令的过程中，我们需要通过命令的监控来知道命令运行是否正常，是否出现了错误，出现了什么错误。

可以通过两种方式来判断：

**退出状态码:**
	规范编写的Linux程序运行结束时应该正确的返回状态码
	退出状态代码：

	* 0 命令成功完成

	* 1通常的未知错误

	* 2误用shell命令

	* 126命令无法执行

	* 127没有找到命令

	* 128无效的退出参数

	* 128 x使用Linux信号x的致命错误.

	* 130使用Ctrl-C终止的命令

	* 255规范外的退出状态

	通过commandobject.return_code即可获取运行结束的Command对象状态码

**运行输出:**

	单并非所有程序都编写规范，而且有些错误实在运行过程中产生，而且不会退出程序。这时我们就需要通过监控STDOUT和STDERR输出来判断命令运行的状态。

	在Tool子类中定义名称为`(commandname)_check`的函数即可实现这一个监控过程。

	如::
```
		class TestTool(Tool):

			def cmd1_check(self, command, line):
				if re.match(r"error:", line):
					command.kill()
					self.set_error("命令报错")

			def run(self):
				super(TestTool, self).run()
				cmd1 = self.add_command("cmd1", "bin/testrun")
				cmd1.run()
				self.wait()
				if cmd1.return_code == 0:
					self.end()
```

	`(commandname)_check`有3个参数，第一个self 是指Tool自身 ，第二个是运行该命令的Commnad对象，第三个是STDOUT和STDERR输出的一行。
	命令每输出一行，这个函数都会执行一次。


自定义包


在生信分析中，除了调用外部工具外，还有很多功能是自行编写的脚本工具。这些工具应该被设计编写为规范的模块，便于重复利用。

这些模块应该放在src/mbio/packages目录下。


输出定义


最后命令完成后，别忘了将最终结果放置在output_dir目录下


错误和完成


Tool中应该显示调用end（）方法来声明运行完成，set_error()方法声明无法继续运行的错误。否则Actor不会自动退出，程序也不会结束。


查看其它章节：
    * [概述](biocluster)
    * [基础](/biocluster/Basic)
    * [事件驱动编程](/biocluster/Event_Oriented)
    * [Module/Workflow开发](/biocluster/Moudule_Workflow)
    * [Tool/Agent开发](/biocluster/Tool_Agent)
    * [运行和测试](/biocluster/Run_Test)
