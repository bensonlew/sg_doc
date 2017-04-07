estimators
==========================

模块Path
-----------

**tools.meta.alpha_diversity.estimatos**

功能描述
-----------------------------------

计算样本的多样性指数ace、chao、shannon等，能够通过多样性指数了解微生物物种的多样性与丰度。

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

mothur "#summary.single(shared=otu.shared,groupmode=f,calc=ace-chao-shannon-simpson)"

estimatos.py
```

参数设计
-----------------------------------

```
{"name": "otu_table", "type": "infile", "format": "meta.otu.otu_table,meta.otu.tax_summary_dir"},  # 输入文件
{"name": "indices", "type": "string", "default": "ace,chao,shannon,simpson"},  # 指数类型
{"name": "level", "type": "string", "default": "otu"}  # level水平
```

运行逻辑
-----------------------------------

传入`OTUtable`后，计算出所有样本的各个指数值，最后输出统计结果。当用户选择特定指数类型时，改变输出结果。

资源配置
------------------------------------

```
self._cpu = 11
self._memory = ''
```
