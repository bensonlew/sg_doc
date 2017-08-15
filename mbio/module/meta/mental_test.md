(Partial) Mantel Test分析
===========

Moudle 说明
-----------------------------------

PATH
---------

**statistical.mantel_test**

功能描述
--------
检验两矩阵之间的相关性，Partial需要提供控制矩阵（通过选择环境因子来确定）。

主要命令及功能模块
------------------
```
self.otudistance = self.add_tool('meta.beta_diversity.distance_calc')
self.facdistance = self.add_tool('statistical.factor_distance')
self.discomparison = self.add_tool('statistical.discomparison')
self.partial = self.add_tool('statistical.factor_distance')
```

参数设置
--------
```
{"name": "level", "type": "string", "default": ""},  # 物种/功能分类水平
{"name": "abundtable", "type": "infile", "format": "abund_table"},##物种/功能丰度表格
{"name": "otumatrixtype", "type": "string", "default": "bray_curtis"},  # 计算物种/功能距离矩阵的方法
{"name": "envtable", "type": "infile", "format": "group_table"},##环境因子表
{"name": "partial_factor", "type": "string"},  # 控制单位
{"name": "factormatrixtype", "type": "string", "default": "bray_curtis"},  # 计算因子距离矩阵的方法
{"name": "factorselected", "type": "string", "default": ""},
{"name": "partialmatrix", "type": "infile", "format": "meta.beta_diversity.distance_matrix"},
{"name": "dis_matrix", "type": "outfile", "format": "meta.beta_diversity.distance_matrix"},
{"name": "fac_matrix", "type": "outfile", "format": "meta.beta_diversity.distance_matrix"}
```

运行逻辑
-------
1.提供物种/功能丰度表格、环境因子表及其对应的距离方法，分别构建物种/功能距离、环境因子距离；

2.利用两个距离去做相关性分析，若选择了Partial则需挑选环境因子作为控制单位；

3.统计结果输出。
