rarefaction
==========================

模块Path
-----------

**tools.meta.alpha_diversity.rarefaction**

功能描述
-----------------------------------

比较测序数据量不同的样本中物种的丰富度；说明样本的测序数据量是否合理，稀释性曲线。

调用程序
-----------------------------------

otu2shared

mothur

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger/app`



主要命令及功能模块
-----------------------------------

```
otu2shared.pl -i otu_table.xls -l 0.97 -o otu.shared

rarefaction.single(shared=otu.shared,calc=sobs-chao-shannon,groupmode=f,freq=100,processors=10)"
```

参数设计
-----------------------------------

```
    {"name": "otu_table", "type": "infile", "format": "meta.otu.otu_table,meta.otu.tax_summary_dir"},  # 输入文件
    {"name": "indices", "type": "string", "default": "sobs,shannon"},  # 指数类型
    {"name": "freq", "type": "int", "default": 100},  # 随机取样数   
    {"name": "level", "type": "string", "default": "otu"}  # level水平
```

运行逻辑
-----------------------------------

传入`OTUtable`后，根据默认参数值，输出统计结果。

资源配置
-----------------------------------

```
self._cpu = 11
self._memory = '5G'
```
