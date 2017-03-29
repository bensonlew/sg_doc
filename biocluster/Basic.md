=========================
基础
=========================

查看其它章节：
    * [概述](biocluster)
    * [基础](/biocluster/Basic)
    * [事件驱动编程](/biocluster/Event_Oriented)
    * [Module/Workflow开发](/biocluster/Moudule_Workflow)
    * [Tool/Agent开发](/biocluster/Tool_Agent)
    * [运行和测试](/biocluster/Run_Test)

-----------------------
层级关系
-----------------------
在Biocluster框架模型中，主线程中的Workflow/Module/Agent是拥有一定层级关系组装起来的。

Workflow中可以通过 ``add_module`` 方法添加下属Moudle ，通过 ``add_tool`` 添加下属Agent

Module中可以通过 ``add_tool`` 添加下属Agent

以上方法不需要手动import需要的模块类，会根据 :ref:`autoload` 自动导入

Workflow/Module中通过 ``children`` 属性可获取所有下属(子)对象

Module/Agent中通过 ``parent`` 属性可获取上级（父）对象

示例代码:

```

		from biocluster.workflow import Workflow


		class TestWorkflow(Workflow):  # 继承Workflow

			def __init__(self, work_id):  # __init__重写，注意work_id需要传递给父方法
				super(TestWorkflow, self).__init__(work_id)  # 调用父类的方法
				self._test_module = self.add_module("annotation") # 添加Module下属,自动加载 /src/mbio/modules/annotation.py 并获取 AnnotationModule类对象
				self._test_tool = self.add_tool("ncbi.blast")  # 添加tool下属 自动加载 /src/mbio/modules/ncbi/blast.py 并获取 BlastAgent类对象
				# some other things ....

			def run(self):   # 重写run
				self._test_module.run()
				# some other things ....
				self._test_tool.run()
				# some other things ....
				super(TestWorkflow, self).run()  # 异步阻塞、开始运行流程监听

			def test(self):
				print self.children  # 返回 _test_module  _test_tool对象
				print self._test_module.parent #  返回 self 对象

```
-----------------------
参数定义
-----------------------




参数设计原则

**设计参数的目的** ：

	* 统一规则的外部调用

	* 简化调用过程

	* 方便模块间自定义连接

**参数设计原则** :

	* 模块参数实在命令参数归类整理的基础之上设计的，不应该一一对应
	* 参数名尽量使用完整的有意义的名称
	* 不同模块间代表相同意义的参数名尽量相同
	* 尽量给出参数的可选范围(单选多选或是否选择)
	* 除特殊情况外，输入文件外的所有参数都应该有默认值,且在默认值下能够正常工作
	* 参数默认值一般情况下不需要修改
	* 参数数量越少越好，很少使用的参数尽量不提供，以后根据需要添加


文件参数

文件参数分为输入文件和输出文件两种:

	* **输入文件** 指有外部提供的、运行必须的、程序运行计算的对象。如果是程序、模块自身能够提供的文件、或可以供选择的不应作为输入文件。
	* **输出文件** 输出文件时指模块运行的最终结果

输出文件都有特定的格式或特征，文件可能是一个文件对象或者一个文件夹。

自定义的文件格式类应该存放在src/mbio/files/目录下，并遵循 :ref:`autoload`

在定义参数前需要先确定输入输出的标准格式，并扩展对于的文件格式类，这些类都是基于biocluster.iofile.FileBase

  * ``单个文件``   基类biocluster.iofile.File
  * ``文件夹``     基类biocluster.iofile.Directory

文件格式类的定义原则:

	* 应该是常用生物信息格式
	* 相同功能的格式应该只选用其中最常用最具代表性的一种
	* 文件格式应该会作为模块的输入或输出文件
	* 文件格式作为判断模块间输入和输出是否可以连接的标准，所有应该具有非常明确的功能性
	* 文件格式应该有特定的书写格式和特征
	* 以 ``文件夹`` 作为文件格式时，文件夹应该是以整体为单位进行输入和输出传递


参数定义

在Biocluster框架中每个模块可以有多个参数,每个参数都是biocluster.option类的实例。

实例代码如下 ::
```
	class BlastAgent(Agent):

		def __init__(self, parent):
			super(BlastAgent, self).__init__(parent)
			options = [
				{"name": "customer_mode", "type": "bool", "default": False},  # customer 自定义数据库
				{"name": "query", "type": "infile", "format": "fasta"},  # 输入文件
				{"name": "database", "type": "string", "default": "nr"},  # 比对数据库 nt nr strings GO swissprot uniprot KEGG
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
					raise OptionError("必须设置参数query")
				if self.option("customer_mode") is True and not self.option("reference").is_set:
					raise OptionError("使用自定义数据库模式时必须设置reference")
				if self.option("database") not in ["nt", "nr", "string"]:
					raise OptionError("数据库%s不被支持" % self.option("database"))
				return True

	option_test = biocluster.option.Option({"name": "customer_mode", "type": "bool", "default": False})
	print option_test
```

参数定以后应在重写check_options方法来检测参数合法性

参数在Workflow/Module/Agent中定义，Tool中的参数是其对应Agent对象参数的克隆。

参数的种类:

===================== =========================== ==========  
种类                  Python数据类型              type 值     
===================== =========================== ==========
布尔参数              bool                        bool
整数参数              int                         int
浮点参数              float                       float
字符串参数            str / unicode               string
输入文件              biocluster.iofile.FileBase  infile
输出文件              biocluster.iofile.FileBase  outfile  
===================== =========================== ==========

在定义参数时,每个biocluster.option.Option参数是一个对象是dict字典:

	**name** 参数名

	**type** 参数类型

	**default** 默认值，可选，但是除输入输出文件外其他，一般参数都推荐设置默认值

	**format** 文件格式 参考  :ref:`autoload`   format只对输入输出文件有效

	**check**  可选，文件格式检测函数，只对输入输出文件有效，指定该参数的检测函数，如未定义则使用默认的检测函数  :ref:`formatcheck`


-----------------------
扩展文件类型
-----------------------

文件格式类的定义


文件格式类的定义举例:

```

		# -*- coding: utf-8 -*-
		from biocluster.iofile import File
		import re
		import subprocess
		from biocluster.config import Config
		import os
		from biocluster.core.exceptions import FileError


		class FastaFile(File):
			"""
			定义Fasta文件， 需安装seqstat工具软件
			"""
			def __init__(self):
				super(FastaFile, self).__init__()
				self.seqstat_path = os.path.join(Config().SOFTWARE_DIR, "biosquid/bin/seqstat")  # 定义软件路径

			def get_info(self):                                # 获取文件信息
				"""
				获取文件属性
				:return:
				"""
				super(FastaFile, self).get_info()
				seqinfo = self.get_seq_info()
				self.set_property("format", seqinfo[0])   # 设置文件属性
				self.set_property("seq_type", seqinfo[1])
				self.set_property("seq_number", seqinfo[2])
				self.set_property("bases", seqinfo[3])
				self.set_property("longest", seqinfo[4])
				self.set_property("shortest", seqinfo[5])

			def check(self):                              # 检测文件是否满足运行要求
				"""
				检测文件是否满足要求,发生错误时应该触发FileError异常
				:return:
				"""
				# print self.prop
				if super(FastaFile, self).check():
					if self.prop['format'] != 'FASTA':
						raise FileError(u"文件格式错误")
					if self.prop["seq_number"] < 1:
						raise FileError(u"应该至少含有一条序列")
				return True

			def ncbi_blast_tool_check(self):              # /src/mbio/tools/ncbi/blast.py  BlastAgent类的运行检测函数
				"""
				供ncbi.blast Tool检查

				Author: guoquan

				modify: 2015.9.18

				:return: bool
				"""
				if self.check():
					if self.prop['seq_type'] not in {"DNA", "Protein"}:
						raise FileError(u"不支持此类型的Fasta进行blast比对")
				return True

			def get_seq_info(self):                      # 文件格式相关的自定义方法
				"""
				获取Fasta信息
				:return: (format,seq_type,seq_number,bases,longest,shortest)
				"""
				try:
					subpro = subprocess.check_output(self.seqstat_path + " " + self.prop['path'], shell=True)
					result = subpro.split('\n')
					fformat = re.split(r':\s+', result[5])[1]
					seq_type = re.split(r':\s+', result[6])[1]
					seq_number = re.split(r':\s+', result[7])[1]
					bases = re.split(r':\s+', result[8])[1]
					shortest = re.split(r':\s+', result[9])[1]
					longest = re.split(r':\s+', result[10])[1]
					# print (fformat, seq_type, seq_number, bases, longest, shortest)
					return fformat, seq_type, seq_number, bases, longest, shortest
				except subprocess.CalledProcessError:
					raise Exception(u"seqstat 运行出错！")

			def split(self, output, chunk=10000):                    # 文件格式相关的自定义方法
				"""
				拆分Fasta文件成最大chunk大小的快
				:param output:  String 输出目录
				:param chunk:  int 块大小
				:return:
				"""
				s, n = 1, 0
				wf = open("%s/%s.fa" % (output, s), 'w')
				with open(self.prop['path'], 'r') as f:
					while 1:
						line = f.readline()
						if not line:
							wf.close()
							break
						re_id = re.compile(r'>(\S+)')
						m_id = re_id.match(line)
						if m_id is not None:
							n += 1
							if n == chunk+1:
								wf.close()
								s += 1
								n = 0
								wf = open("%s/%s\.fa" % (output, s), 'w')
						wf.write(line)
```

"""""""""""""""""""""""""""						
设置和获取文件属性
"""""""""""""""""""""""""""

"""""""""""""""""""""""""""						
必须重写的方法
"""""""""""""""""""""""""""

	在自定义文件格式类中，应该至少完成以下两件事情：

		* 获取文件格式相关的必要信息，需要重写 get_info方法,在调用set_path方法设置文件路径时，此方法会被自动执行
		* 检测文件是否满足基本运行要求,需要重写check 方法，如检测不满足要求应该抛出FileError错误




"""""""""""""""""""""""""""
模块参数文件格式检测函数
"""""""""""""""""""""""""""

在Workflow/Module/Agent输出参数设置值时，会默认执行文件格式检测函数.

如果参数定义中指定了"check"选项，则会在对应的文件格式类中执行名称为"check"选项值的函数

如果没有指定"check"选项，这会根据当前模块类的自动加载path名 :ref:`autoload`  来调用对应函数。具体规则为将 path中的"."替换成下划线，然后加上`_tool_check`, ``_module_check``,`_workflow_check`
例如::

	src/mbio/workflows/resequence/human/snp_annotation.py  # 自定义流程文件
	resequence.human.snp_annotation       # 自定加载path名
	SnpAnnotationWorkflow				   # 类名
	resequence_human_snp_annotation_workflow_check()			   # 检测函数名

如果此函数也没有定义，则会执行默认的 ``check()`` 函数

"""""""""""""""""""""""""""						
文件检测异常
"""""""""""""""""""""""""""


---------------------------
内置事件及内置事件处理函数
---------------------------

---------------------------
内置事件及内置事件处理函数
---------------------------
Workflow/Module/Agent事件对象中有多个内置事件( :ref:`event` ) ，用于提供最基本的状态消息传递

===================== ============================================================= ======================== ======================
事件                  触发条件                                                      参数                     触发模块
===================== ============================================================= ======================== ======================
keepaliveout          远程Tool超过时间没有返回信息                                  None                     Agent
waittimeout           远程Tool超过时间没有开始运行                                  None                     Agent  
runstart              远程Tool超过开始运行                                          远程主机名               Agent
end                   当前模块运行正常结束时,需手动调用self.end()                   None                     Workflow/Module/Agent
error                 远程Tool返回error状态 默认调用Workflow.exit()    错误提示                 Agent
childend              当子模块正常结束时触发                                        子模块对象               Workflow/Module
childerror            当子模块发生error时触发                                       子模块对象               Workflow/Module
===================== ============================================================= ======================== ======================

内置事件是通过内置保定的事件处理函数工作的，这些函数以__event_(eventname)或_event_(eventname)命名。

在我们自定义模块中，这些事件可能不能满足所有需求，我们可以自定义事件。或者为已存在的事件绑定行的事件处理函数。

对于需要修改默认事件处理方法的，应该重新事件处理函数。如:

如error事件发生时不希望退出当前流程，而是有其他方法来完成同样的功能，此时应该重写Agent类的error_callback方法。
并且在上级模块中捕捉childerror事件进行处理。

原则上Workflow/Module不应该被触发error事件，应为它们不涉及的计算，你应该保证它们的正常完成。

-----------------------
依赖
-----------------------
依赖是指一个模块运行需要其他一个或多个模块运行正常完成。

在本框架中模块时并行运行的，通过添加依赖，可以非常容易的控制一个模块什么时候启动运行。

依赖底层是基于childend事件触发来完成的

示例如下：

```

		from biocluster.module import Module


		class TestModule(Module):

			def __init__(self, parent):
				 super(TestModule, self).__init__(parent)
				 self.tool1 = self.add_tool("tool1")   # 添加工具tool1
				 self.tool2 = self.add_tool("tool2")   # 添加工具tool2
				 self.on_rely([self.tool1,self.tool2],self.run_tool3)			 # 添加依赖

			def run_tool3(self):                   # 运行tool3
				tool3 = self.add_tool("tool3")
				tool3.run()
				self.on_rely(tool3,self.run_tool4)   # 添加依赖

			def run_tool4(self):                  # 运行tool4
				tool4 = self.add_tool("tool4")
				tool4.run()
				tool4.on("end", self.end())       # 模块运行结束

			def run(self):   # 开始运行
				super(TestModule, self).run()   # 调用父类方法
				self.tool1.run()                # tool1开始运行
				self.tool2.run()                # tool2开始运行

```
-----------------------
输出目录
-----------------------
Workflow/Module/Agent/Tool都拥有一个属性 ``output_dir`` ,此目录在模块初始化时即建立。output_dir在biocluster框架中只是一个目录路径，并没有做任何限制。

每个模块都应该拥有自己的最终输出结果，output_dir用于单独存放这些结果。你可以将最终结果按一定目录结构组织存放在output_dir下，可以是文件，也可是链接。

output_dir最主要的功能是提供给Web端访问和保存最终结果。Agent/Tool的最终结果不一定是Module/Workflow的最终结果，所以你的每层级模块都应在定义自己的最终结果。

-----------------------		
日志对象
-----------------------
Workflow/Module/Agent/Tool都拥有一个属性 ``logger`` ，logger是通过biocluster.logger.Wlog类get_logger方法获得的logging.Logger对象。

logger用于日志输出,在编写模块的过程中，应在每个节点都有日志输出，便于程序日志的阅读和调试。


Logger是一个树形层级结构，输出信息之前都要获得一个Logger（如果没有显示的获取则自动创建并使用root Logger，如第一个例子所示）。
logger = logging.getLogger()    返回一个默认的Logger也即root Logger，并应用默认的日志级别、Handler和Formatter设置。
当然也可以通过Logger.setLevel(lel)指定最低的日志级别，可用的日志级别有：
logging.DEBUG、logging.INFO、logging.WARNING、logging.ERROR、logging.CRITICAL。
Logger.debug()、Logger.info()、Logger.warning()、Logger.error()、Logger.critical()
输出不同级别的日志，只有日志等级大于或等于设置的日志级别的日志才会被输出。

示例::

	logger.debug('logger debug message')     # 调试信息
	logger.info('logger info message')       # 提示信息
	logger.warning('logger warning message')  # 警告信息
	logger.error('logger error message')     # 错误信息
	logger.critical('logger critical message')   # 严重错误信息

-----------------------		
步骤更新
-----------------------


查看其它章节：
    * [概述](biocluster)
    * [基础](/biocluster/Basic)
    * [事件驱动编程](/biocluster/Event_Oriented)
    * [Module/Workflow开发](/biocluster/Moudule_Workflow)
    * [Tool/Agent开发](/biocluster/Tool_Agent)
    * [运行和测试](/biocluster/Run_Test)
