lefse
==========================

模块Path
-----------

**tools.statistical.lefse**

功能描述
-----------------------------------

进行LEfSe分析

调用程序
-----------------------------------

biom
summary_taxa.py
lefse分析包

安装路径
-----------------------------------
/program/Python/bin/  # biom路径
/program/Python/bin/  # summarize_taxa路径
/bioinfo/statistical/lefse/  # lefse 分析包路径

主要命令及功能模块
-----------------------------------

```
biom convert -i [otu_taxa_table] -o [otu_taxa_table.biom] --table-type "OTU table" --process-obs-metadata taxonomy --to-hdf5
summarize_taxa.py -i [otu_taxa_table.biom] -o [tax_summary_a] -L [level] -a
lefse-input.py -i [tax_summary_a] -g [lefse_group] -o [lefse_input.txt]
format_input.py [lefse_input.txt] [lefse_format.txt] -f r -c 1 [-u 2 | -s 2 -u 3] -o [1000000]
run_lefse.py [lefse_format.txt] [lefse_LDA.xls] -l [lda_filter] -y [strict]
plot_res.py [lefse_LDA.xls] [lefse_LDA.xls] [lefse_LDA.png]
plot_cladogram.py [lefse_LDA.xls] [lefse_LDA.cladogram.png] --format [png]
```

参数设计
-----------------------------------

```
{"name": "lefse_input", "type": "infile", "format": "meta.otu.otu_table"},  # 输入文件，biom格式的otu表
{"name": "lefse_group", "type": "infile", "format": "meta.otu.group_table"},  # 输入分组文件
{"name": "lda_filter", "type": "float", "default": 2.0},
{"name": "strict", "type": "int", "default": 0},
{"name": "lefse_gname", "type": "string"},
{"name": "start_level", "type": "int", "default": 3},
{"name": "end_level", "type": "int", "default": 7},
```

运行逻辑
-----------------------------------

1.用biom将丰度表转换为二进制格式
2.summarize_taxa.py进一步处理丰度表，结果文件路径作为LEfSe输入
3.进行LEfSe分析
4.对分析结果作图

资源配置
-----------------------------------

```
self._cpu = 10
self._memory = '10G'
```

