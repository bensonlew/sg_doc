pca
==========================

模块Path
-----------

**tools.meta.beta_diversity.pca**

功能描述
-----------------------------------

进行PCA分析

调用程序
-----------------------------------

ordination.pl

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/statistical/scripts`



主要命令及功能模块
-----------------------------------

```
ordination.pl -type pca -outdir outdir -community otutable -environment envdata
```

参数设计
-----------------------------------

```
{"name": "otutable", "type": "infile", "format": "meta.otu.otu_table, meta.otu.tax_summary_dir"},
{"name": "level", "type": "string", "default": "otu"},
{"name": "eigenvalue", "type": "string", "default": "row"},  # column
{"name": "envtable", "type": "infile", "format": "meta.otu.group_table"},
{"name": "envlabs", "type": "string", "default": ""}
```

运行逻辑
-----------------------------------

根据提供的otu表和可选环境因子表，调用脚本计算出样本的坐标表，环境因子的向量，并提供otu权重值表和主成分解释度表，存放在输出文件夹。

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = '3G'
```
