(Partial) Mantel Test分析
===========


模块PATH
---------

**statistical.mantel_test**


功能描述
--------
检验两矩阵之间的相关性，Partial需要提供控制矩阵（通过选择环境因子来确定）。


主要命令及功能模块
------------------
```
self.add_tool('meta.beta_diversity.distance_calc')
self.add_tool('statistical.factor_distance')
self.add_tool('statistical.discomparison')
self.partial = self.add_tool('statistical.factor_distance')
```

参数设置
--------
```
{"name": "otutable", "type": "infile", "format": "meta.otu.otu_table, meta.otu.tax_summary_dir"}, #物种/功能/基因丰度表格
{"name": "level", "type": "string", "default": "otu"},  # 物种水平，当非多样性流程时，"level"参数采用默认值"otu"
{"name": "otumatrixtype", "type": "string", "default": "weighted_unifrac"},  # 计算物种/功能距离矩阵的方法,默认值只适用多样性
{"name": "factor", "type": "infile", "format": "meta.otu.group_table"},  # 环境因子表
{"name": "partial_factor", "type": "string"},  # 控制单位
{"name": "factormatrixtype", "type": "string", "default": "bray_curtis"},  # 计算因子距离矩阵的方法
{"name": "factorselected", "type": "string", "default": ""},  # 挑选的环境因子
{"name": "newicktree", "type": "infile", "format": "meta.beta_diversity.newick_tree"},  #多样性流程中使用unifrac距离时必须提供
{"name": "partialmatrix", "type": "infile", "format": "meta.beta_diversity.distance_matrix"},  # 做Partial Mantel Test
{"name": "dis_matrix", "type": "outfile", "format": "meta.beta_diversity.distance_matrix"},  # 物种/功能/基因丰度表格生成的距离文件
{"name": "fac_matrix", "type": "outfile", "format": "meta.beta_diversity.distance_matrix"}  # 环境因子生成的距离文件
```

运行逻辑
-------
1.提供物种/功能丰度表格、环境因子表及其对应的距离方法，分别构建物种/功能距离、环境因子距离；

2.利用两个距离去做相关性分析，若选择了Partial则需挑选环境因子作为控制单位；

3.统计结果输出。



测试命令
-----------------------------------
```

```

测试结果
-----------------------------------
模块测试的结果路径:
