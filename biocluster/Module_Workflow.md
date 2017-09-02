=========================
Module/Workflow开发
=========================

查看其它章节：
    * [概述](biocluster)
    * [基础](/biocluster/Basic)
    * [事件驱动编程](/biocluster/Event_Oriented)
    * [Module/Workflow开发](/biocluster/Module_Workflow)
    * [Tool/Agent开发](/biocluster/Tool_Agent)
    * [运行和测试](/biocluster/Run_Test)

-----------------------
实例
-----------------------
```

		from biocluster.workflow import Workflow
		from biocluster.core.exceptions import OptionError
		from biocluster.core.function import load_class_by_path


		class TestWorkflow(Workflow):
			def __init__(self, work_id):
				super(TestWorkflow, self).__init__(work_id)
				options = [	{"name": "file1", "type": "infile", "format": "test1"},   
							{"name": "file2", "type": "infile", "format": "test2"},  
							{"name": "option1", "type": "string", "default": "test"},
							{"name": "option2", "type": "int", "default": 1},  
							{"name": "option3", "type": "float", "default": 1e-5},
							{"name": "option4", "type": "string", "default": "test"},
							{"name": "file3", "type": "outfile", "format": "test3"}
					]
				self.add_option(options)

			def check_options(self):
				if self.option("option1") == self.option("option4"):
					raise OptionError(u"option1和option4不能相同")

			def mblast_run(self):
				mblast = self.add_tool("mblast")
				mblast.set_options({"test1": self.option("file1"),"test2": self.option("option1"),"test3": "3333"})
				mblast.add_event("failed")

				def error_callback():  # 重写State回调
					mblast.logger("运行失败，触发failed事件")
					mblast.fire("failed")

				mblast.setattr(mblast,"error_callback", error_callback) # 动态修改状态回调函数 error是不退出流程
				mblast.on("failed",self.blast_run)
				self.on_rely(mblast,self.testmodule_run)
				mblast.run()

			def blast_run(self):          # 运行blast
				blast = self.add_tool("ncbi.blast")
				blast.set_options({"test1": self.option("file1"),"test2": self.option("option2"),"test3": "444444"})
				self.on_rely(blast,self.testmodule_run)
				blast.run()


			def testmodule_run(self, relyobj):    # 运行 testmodule
				blast_agent_class = load_class_by_path("ncbi.blast")
				mblast_agent_class = load_class_by_path("mblast")
				ouput_file_obj = None
				if isinstance(relyobj.rely[0],blast_agent_class):
					ouput_file_obj = relyobj.rely[0].option("blastout")
				elif isinstance(relyobj.rely[0],mblast_agent_class):
					ouput_file_obj = relyobj.rely[0].option("mblastout")

				testmodule = self.add_module("testmodule")
				testmodule.set_options({"test1": ouput_file_obj,"test2": self.option("option3"),"test3": "444"})
				testmodule.on("end",self.set_output)
				testmodule.run()


			def set_output(self,event):
				testmodule = event["bind_object"]
				self.option("file3",testmodule.option("outfile"))  # 设置输出参数
				self.option("file3").link(self.output_dir)         # 设置结果目录
				self.end()                                         # 运行完成流程结束

			def run(self):
				self.mblast_run()
				super(TestWorkflow, self).run()                   # 这句是阻塞语句，启动RPC服务器，得放最后面

```
-----------------------
非阻塞
-----------------------
-----------------------
参数定义
-----------------------
-----------------------
参数的传递和文件检验
-----------------------
-----------------------
添加下级
-----------------------
-----------------------
自定义事件
-----------------------


查看其它章节：
    * [概述](biocluster)
    * [基础](/biocluster/Basic)
    * [事件驱动编程](/biocluster/Event_Oriented)
    * [Module/Workflow开发](/biocluster/Module_Workflow)
    * [Tool/Agent开发](/biocluster/Tool_Agent)
    * [运行和测试](/biocluster/Run_Test)
