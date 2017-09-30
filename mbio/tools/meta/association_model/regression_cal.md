regression_cal
==========================

模块Path
-----------

**tools.meta.association_model.regression**

调用脚本
-----------------------------------

regression_cal.py

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/scripts/`

主要命令及功能模块
-----------------------------------

```
 cmd = " {} -t {} -f {} -o {}".format(
            self.script, self.option("tax_div").prop['path'], self.option("func_div").prop['path'], self.output_dir)

```

参数设计
-----------------------------------

```
       {"name": "tax_div", "type": "infile", "format": "sequence.profile_table"}, # 物种多样性指数表格
       {"name": "fun_div", "type": "infile", "format": "sequence.profile_table"}, # 功能多样性指数表格

```

运行逻辑
-----------------------------------

调用物种多样性表格和功能多样性表格计算回归分析文件

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = "5G"
```

可能存在问题
-----------------------------------

测试命令
-----------------------------------
```

测试结果路径：
```


测试结果
-----------------------------------