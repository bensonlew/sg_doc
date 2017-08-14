rename_combine_gene
==========================

模块Path
-----------

**tools.metaGenomic.uni_gene.cdhit_unigen.rename_combine_gene**

功能描述
-----------------------------------

基因改名与合并

调用程序
-----------------------------------

combine.py

安装路径
-----------------------------------





主要命令及功能模块
-----------------------------------

```

```

参数设计
-----------------------------------

```
{"name": "gene_predict","type": "infile","format": "uniGene.genepre_dir"},#
提供GenePredict结果的文件夹。
{"name":"gene_tmp_fa","type":"outfile","format":"sequence.fasta"},#输出改名并合并的序列

```

运行逻辑
-----------------------------------

读取预测的基因文件夹，并在序列前加上样品合并输出为一个fasta文件

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = '3G'
```


