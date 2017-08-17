相关性heatmap
===========

Tool 说明
-----------------------------------

PATH
---------

**statistical.corr_heatmap**

功能描述
--------
进行相关性heatmap分析。

调用程序
-------
pearsonsCorrelation.py

安装路径
--------
/mnt/ilustre/users/sanger-dev/app/bioinfo/statistical/scripts

主要命令及功能模块
------------------
```
pearsonsCorrelation.py abundance_table env_table pearsons_correlation pearsons_pvalue method
```

参数设置
--------
```
{"name": "abundtable", "type": "infile", "format": "abund_table"},##物种/功能丰度表格
{"name": "level", "type": "string", "default": "对应数据库"},##选择分析的水平
{"name": "envtable", "type": "infile", "format": "group_table"},##环境因子表
{"name": "envlabs", "type": "string", "default": ""},##环境因子标签
{"name": "method", "type": "string", "default": "pearsonr"},##做相关性分析的方法
{"name": "env_cluster", "type": "string", "default": "average"},##环境因子聚类方法选择
{"name": "species_cluster", "type": "string", "default": "average"},##物种/功能聚类方法
{"name": "cor_table", "type": "outfile", "format": "group_table"},##输出的相关性矩阵
{"name": "pvalue_table", "type": "outfile", "format": "group_table"},##R对应的P值
{"name": "top_species", "type": "int", "default": 0},##挑选丰度前多少的物种/功能
```

运行逻辑
-------
1.必须提供丰度表格和环境因子表格作为输入文件；

2.选择做相关性的分析方法和是否作聚类分析，计算得出相应结果，作为画图的输入；

3.最终调用R实现相关性heatmap作图。
