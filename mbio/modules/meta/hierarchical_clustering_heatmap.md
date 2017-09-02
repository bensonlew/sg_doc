heatmap
===========

Module 说明
-----------------------------------

PATH
---------

**meta_genomic.report.hierarchical_clustering_heatmap**

功能描述
--------
进行heatmap分析。

主要命令及功能模块
------------------
```
sort_samples#挑选样品，并对其排序
distance_calc#距离计算
hcluster#样品、物种/功能聚类
```

参数设置
--------
```
{"name": "in_otu_table", "type": "infile", "format": "meta_genomic.anno.abuand_table"},  # 输入的物种/功能丰度表
{"name": "input_otu_id", "type": "string"},  # 输入的物种/功能 id对应要做的物种/功能数
{"name": "level", "type": "string", "default": "具体数据库对应"},  # 输入物种/功能分类水平
{"name": "group_detail", "type": "string"},  # 输入的分组信息，与add_Algorithm有关
{"name": "species_number", "type": "string", "default": "50"},  # 物种/功能数目，默认top50
{"name": "method", "type": "string", "default": ""},  # 物种/功能层次聚类方式，默认不聚类
{"name": "sample_method", "type": "string", "default": ""},  # 样本层次聚类方式，默认不聚类
{"name": "add_Algorithm", "type": "string", "default": ""},  # 分组样本求和算法，默认不求和
```

运行逻辑
-------
1.根据分组要求和显示数目，从原始的丰度表中提取数据作为新的分析输入文件；

2.聚类参数选择后，需要进行相应数据的聚类分析，得到对应的树文件；

3.用丰度表格和树文件，进行heatmap作图。
