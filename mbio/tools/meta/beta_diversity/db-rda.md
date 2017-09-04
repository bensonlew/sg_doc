dbrda
==========================

Tool说明
--------

PATH
-----------

**tools.meta.beta_diversity.dbrda**

功能描述
-----------------------------------

进行db-RDA分析

调用程序
-----------------------------------

/bioinfo/statistical/scripts/pearsonsCorrelation.py




主要命令及功能模块
-----------------------------------

```
/bioinfo/statistical/scripts/pearsonsCorrelation.py
```

参数设计
-----------------------------------

```
{"name": "otutable", "type": "infile", "format": "abund_table"},##物种/功能丰度表格
{"name": "method", "type": "string", "default": "bray_curtis"},
{"name": "level", "type": "string", "default": ""},
{"name": "dis_matrix", "type": "infile", "format": "meta.beta_diversity.distance_matrix"},
{"name": "envtable", "type": "infile", "format": "meta.otu.group_table"},
{"name": "envlabs", "type": "string", "default": ""}  # 用逗号分隔的环境因子名称
```

运行逻辑
-----------------------------------

先通过距离算法和otutable获得距离矩阵，根据距离矩阵和环境因子表调用pearsonsCorrelation.py进行计算db-RDA。

