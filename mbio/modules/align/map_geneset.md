mapGeneSet
==========================

模块Path
-----------

**modules.align.mapGeneSet**

功能描述
-----------------------------------

SOAPaligner mapping高质量reads到非冗余基因集上

主要命令及功能模块
-----------------------------------

```
self.add_tool("align.bwt_builder")
self.add_tool("align.soap_aligner")
self.add_tool(statistical.unigene_profile")

```

参数设计
-----------------------------------

```
            {"name":"fafile","type":"infile","format":"sequence.fasta"},#非冗余基因集
            {"name":"insertsize","type":"string","default":""},#插入片段文件
            {"name": "QC_dir","type":"infile","format":"sequence.fastq_dir"},##qc后fastq文件夹
            {"name": "fq_type", "type": "string","default": "PE"},  # PE OR SE
            {"name": "reads_abundance","type":"outfile","format":"sequence.profile_table"},##reads_abundance
            {"name": "rpkm_abundance","type":"outfile","format":"sequence.profile_table"},##rpkm_abundance
            {"name": "seed","type":"int","default":35}, ##align the initial n bps as a seed means whole lengths of read
            {"name": "mode","type":"int","default":4}, ##match mode for each read or the seed part of read, which shouldn't contain more than 2 mismatches: 0 for exact mathc only; 1 for 1 mismatch; 2 for 2 mismatch; 4 for find the best hits
            {"name": "processors","type":"int","default":6},
            {"name": "mismatch","type":"int","default":20}, ##maximum number of mismatches allowed on a read
            {"name": "repeat","type":"int","default":1}, ##how to report repeat hits, 0=none, 1=random one, 2=all
            {"name": "identity","type":"float","default":0.95} ##identity


```

运行逻辑
-----------------------------------

1、2bwt-builder生成索引
2、SOAPaligner进行mapping
3、进行不同的丰度表