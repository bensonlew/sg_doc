nmds
==========================

模块Path
-----------

**tools.meta.beta_diversity.nmds**

功能描述
-----------------------------------

进行NMDS分析

调用程序
-----------------------------------

ordination.pl

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/statistical/scripts`



主要命令及功能模块
-----------------------------------

```
ordination.pl -type nmds -outdir outdir -dist distancematrix
```

参数设计
-----------------------------------

```
            {"name": "input", "type": "infile", "format": "distance_matrix"},  # 输入距离矩阵
            {"name": "output", "type": "outfile", "format": "nmds_outdir"},  # 包含样本坐标
```

运行逻辑
-----------------------------------

提供距离矩阵进行NMDS分析
