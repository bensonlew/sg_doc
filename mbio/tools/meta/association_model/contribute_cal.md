contribute_cal
==========================

模块Path
-----------

**tools.meta.association_model.contribute_cal**

功能描述
-----------------------------------

宏基因贡献度分析

调用脚本
-----------------------------------

contribute_cal.py

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/scripts/`

主要命令及功能模块
-----------------------------------

```
 cmd = " {} -t {} -o {}".format(
            self.script, self.option("tax_fun").prop['path'], self.option("tax_fun_bar").prop['path'])
```

参数设计
-----------------------------------

```
       {"name": "tax_fun", "type": "intfile", "format": "sequence.profile_table"}, # 物种或功能对应关系表格
       {"name": "tax_fun_bar", "type": "outfile", "format": "sequence.profile_table"}, # 输出文件

```

运行逻辑
-----------------------------------
```
根据输入的物种与功能或功能与物种对应关系表格调用contribute_cal计算画图所需表格

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