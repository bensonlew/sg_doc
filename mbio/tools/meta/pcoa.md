pcoa
==========================

模块Path
-----------

**tools.meta.beta_diversity.pcoa**

功能描述
-----------------------------------

进行PCOA分析

调用程序
-----------------------------------

ordination.pl

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/statistical/scripts`



主要命令及功能模块
-----------------------------------

```
ordination.pl -type pcoa -outdir outdir -dist distancematrix
```

参数设计
-----------------------------------

```
{"name": "dis_matrix", "type": "infile","format": "meta.beta_diversity.distance_matrix"}
```

运行逻辑
-----------------------------------

提供距离矩阵，计算PCOA分析得到几个结果表

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = '3G'
```
