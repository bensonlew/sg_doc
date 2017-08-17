VIF方差膨胀因子分析
===========

Tool 说明
-----------------------------------

PATH
---------

**statistical.env.vif**

功能描述
--------
与物种/功能相关的环境因子有很多，但其中有部分是自相关的，在进行环境因子分析前，可以进行环境因子筛选（VIF），保留那些相互作用较
小的环境因子进行分析。

参数设置
--------
```
{"name": "abundtable", "type": "infile", "format": "abund_table"},##物种/功能丰度表格
{"name": "level", "type": "string", "default": "对应数据库"},##选择分析的水平
{"name": "envtable", "type": "infile", "format": "group_table"},##环境因子表
{"name": "envlabs", "type": "string", "default": ""},##环境因子标签
{"name": "VIFLIM“, "type": "int", "default": 10},##膨胀因子的筛选阈值[10-20]

```

运行逻辑
-------
1.必须提供丰度表格和环境因子表格作为输入文件；

2.内部进行RDA[小于3.5]/CCA[大于等于3.5]分析的评判；

3.最终利用RDA/CCA的结果进行VIF计算。
