all_soap_gene
==========================

模块Path
-----------

**modules.metaGenomic.uni_gene.mapGeneSet.all_soap_gene**

功能描述
-----------------------------------

所有样品的reads mapping到非冗余基因集上

主要命令及功能模块
-----------------------------------

```
self.add_tool("soap_gene")

```

参数设计
-----------------------------------

```
{"name": "QC_dir","type":"infile","format":""} ##QC后序列的文件夹
{"name": "insertSize","type": "infile","format": "uniGene.insert_size"},#插入片段
{"name": "repeat","type":"int","default":1}, ##how to report repeat hits, 0=none, 1=random one, 2=all
{"name": "seed","type":"int","default":35}, ##align the initial n bps as a seed means whole lengths of read
{"name": "mode","type":"int","default":4}, ##match mode for each read or the seed part of read, which shouldn't contain more than 2 mismatches: 0 for exact mathc only; 1 for 1 mismatch; 2 for 2 mismatch; 4 for find the best hits
{"name": "processors","type":"int","default":6},
{"name": "mismatch","type":"int","default":20}, ##maximum number of mismatches allowed on a read
{"name": "identity","type":"float","default":0.95} ##identity


```

运行逻辑
-----------------------------------

通过SOAPaligner将clean reads mapping到非冗余基因集
