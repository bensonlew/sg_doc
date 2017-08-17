rda_cca
==========================

Tool说明
-------

PATH
-----------

**tools.meta.beta_diversity.rda_cca**

功能描述
-----------------------------------

进行RDA/CCA分析

调用程序
-----------------------------------

ordination.pl

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/statistical/scripts`



主要命令及功能模块
-----------------------------------

```
ordination.pl -type rda -outdir outdir -community otutable -environment envdata
```

参数设计
-----------------------------------

```
{"name": "abundtable", "type": "infile", "format": "abund_table"},##物种/功能丰度表格
{"name": "envtable", "type": "infile", "format": "group_table"},
{"name": "envlabs", "type": "string", "default": ""}
```

运行逻辑
-----------------------------------

1.必须提供丰度表格和环境因子表格作为输入文件；

2.内部进行RDA[小于3.5]/CCA[大于等于3.5]分析的评判；

3.最终选定RDA/CCA得到分析结果。

