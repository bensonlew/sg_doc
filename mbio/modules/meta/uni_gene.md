uni_gene
==========================

模块Path
-----------

**modules.metaGenomic.uni_gene**

功能描述
-----------------------------------

非冗余基因集构建及丰度表生成

主要命令及功能模块
-----------------------------------

```
self.add_module("rename_combine_gene")
self.add_tool("unigene_stat")
self.add_module("mapGeneSet")
self.add_tool("unigene_profile")

```

参数设计
-----------------------------------

```
{"name": "gene_predict","type": "infile","format": "uniGene.genepre_dir"},#
提供GenePredict结果的文件夹
{"name": "identity","type":"float","default":0.95},##给出cdhit的参数identity
{"name":"coverage","type":"float","default":0.9},##给出cdhit的参数coverage
{"name":"table","type":"int","default":11}, ##给出transeq参数table，11为bacteria。
{"name":"fafile","type":"outfile","format":"sequence.fasta"},
{"name":"faafile","type":"outfile","format":"sequence.fastaa"}

```

运行逻辑
-----------------------------------

1、cd-hit生成非冗余基因集
2、统计去冗余前后基因的数据
3、SOAPaligner mapping高质量reads到非冗余基因集上
4、生成非冗余基因表