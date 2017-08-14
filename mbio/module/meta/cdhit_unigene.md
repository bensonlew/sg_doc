cdhit_unigene
==========================

模块Path
-----------

**modules.metaGenomic.uni_gene.cdhit_unigene**

功能描述
-----------------------------------

生成非冗余基因集

主要命令及功能模块
-----------------------------------

```
self.add_tool("rename_combine_gene.py")
self.add_tool('cdhit_split_fasta.py")
self.add_tool('cdhit_compare_betwen.py")
self.add_tool('cdhit_compare_single.py")
self.add_tool('cdhit_cat_compareout.py")
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

1、基因改名（在contig前加上样品名）并进行样品序列合并
2、按序列长度从高到低排列，切分fasta序列至n份
3、切分后的序列进行相互比较去冗余及内部去冗余
4、合并结果，生成非冗余基因集
