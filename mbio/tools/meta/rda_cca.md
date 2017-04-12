rda_cca
==========================

模块Path
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
{"name": "otutable", "type": "infile", "format": "meta.otu.otu_table, meta.otu.tax_summary_dir"},
{"name": "level", "type": "string", "default": "otu"},
{"name": "envtable", "type": "infile", "format": "meta.otu.group_table"},
{"name": "envlabs", "type": "string", "default": ""}
```

运行逻辑
-----------------------------------

如果选择DCA分析，则进行DCA分析，在等RDA或者CCA参数传入，进行计算或者结果，也可直接选择RDA或CCA直接进行分析。

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = '3G'
```

