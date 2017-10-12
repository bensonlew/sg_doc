regression_cal
==========================

模块Path
-----------

**tools.meta.association_model.regression**

调用脚本
-----------------------------------

regression_calculation.py

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/meta/scripts/`

主要命令及功能模块
-----------------------------------

```
 modules.meta.alpha_diversity.py
 modules.meta.beta_diversity.py
 tools.meta.beta_diversity.environmental_regression.py

```

参数设计
-----------------------------------

```
       {"name": "otutable", "type": "infile",
             "format": "meta.otu.otu_table, meta.otu.tax_summary_dir, toolapps.table"}, 
       {"name": "level", "type": "string", "default": "genus"}
       {"name": "fun_abundance", "type": "infile", "format": "sequence.profile_table"}, # 功能丰度表格
       {"name": "group_table", "type": "infile", "format": "toolapps.group_table"}  

```

运行逻辑
-----------------------------------

获取物种及功能丰度表，计算其α多样性指数或β多样性指数，并基于该结果进行回归分析。

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = "5G"

```

可能存在问题
-----------------------------------
```
对样本个数及注释到的功能个数有要求
```

测试命令
-----------------------------------
```
测试结果路径：
```


测试结果
-----------------------------------