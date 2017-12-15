VIF方差膨胀因子分析
===========


工具PATH
---------
**statistical.env_vif**


功能描述
--------
与物种/功能相关的环境因子有很多，但其中有部分是自相关的，在进行环境因子分析前，可以进行环境因子筛选（VIF），保留那些相互作用较
小的环境因子进行分析。

主要命令及功能模块
-----------------------------------
```
packages.statistical.env_vif
```

参数设置
--------
```
{"name": "abundtable", "type": "infile", "format": "meta.otu.otu_table,meta.otu.tax_summary_dir"},  # 物种/功能/基因丰度表格
{"name": "envtable", "type": "infile", "format": "meta.otu.group_table"},  # 环境因子表
{"name": "viflim“, "type": "int", "default": 10},  # 膨胀因子的筛选阈值[10-20]
{"name": "method", "type": "string", "default": ""},  # rda|cca，默认根据 DCA result（DCA1>=3.5,CCA;DCA1<3.5,RDA）
```

运行逻辑
-------
1.必须提供丰度表格、环境因子表格和分组表格作为输入文件。

2.内部进行RDA[小于3.5]/CCA[大于等于3.5]分析的评判。

3.最终利用RDA/CCA的结果进行VIF计算。


资源配置
------------------------
```
self._cpu = 2
self._memory = '3G'
```

测试命令
-----------------------------------
```

```


测试结果
-----------------------------------
