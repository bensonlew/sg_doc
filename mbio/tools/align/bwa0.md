bwa比对
===========

Tool 说明
-----------------------------------

PATH
---------

**align.bwa**

程序及安装路径
------------

/app/bioinfo/align/bwa-0.7.9a/bwa

功能描述
--------
将reads比对宿主DNA序列

主要命令及功能模块
------------------
```
bwa aln -f bwa_pair.1.sai -t 6 suzhu_genomic.fasta clip.sickle.1.fq ;
bwa aln -f bwa_pair.2.sai -t 6 suzhu_genomic.fasta clip.sickle.2.fq ;
bwa sampe -f bwa_pair.sam suzhu_genomic.fasta bwa_pair.1.sai bwa_pair.2.sai clip.sickle.1.fq clip.sickle.2.fq ;
bwa aln -f bwa_single.sai -t 6 suzhu_genomic.fasta clip.sickle.s.fq ;
bwa samse -f bwa_single.sam suzhu_genomic.fasta bwa_single.sai clip.sickle.s.fq
```

参数设置
--------
```
{"name": "ref_database", "type": "string", "default": ""},  # 宿主参考序列库中对应的物种名，eg：E.coli ,B.taurus
{"name": "ref_undefined", "type": "infile", "format": "sequence.fasta_dir"},  # 未定义的宿主序列所在文件加，多个宿主cat到一个文件，并作为tool:align.bwa的输入文件
{"name": "fq_type", "type": "string", "default": "PSE"},  # fq类型，PE、SE、PSE（即PE+SE，单端加双端）
{"name": "fastq_dir", "type": "infile", "format": "sequence.fastq_dir"}, # 输入质控后的fastq文件夹其中包含list文件
{"name": "head", "type": "string", "default": "'@RG\\tID:sample\\tLB:rna-seq\\tSM:sample\\tPL:ILLUMINA'"},  # 设置结果头文件
{"name": "sam", "type": "outfile", "format": "align.bwa.sam_dir"},     # sam格式文件,内含对应list文件
{"name": "method", "type": "string", "default": "align"},     # sam格式文件，另种模式为index
###增加一个查看pair-reads是否有误的file工具
```

运行逻辑
-------
1.宿主序列准备：
a：参数是已有宿主，则根据宿主名称，直接从宿主database中提取宿主；
b：参数为未定义宿主时，提供宿主所在位置（多个宿主将cat成一个fasta），构建index。

2.输入文件必须提供fastq文件夹，且该目录下必须有reads对应list文件（具体内容与"fq_type"相关）下为“PSE”时的格式：
 ```
    HB_H1_sickle_r.fq   HB_H1   r
    HB_H1_sickle_l.fq   HB_H1   l
    HB_H1_sickle_s.fq   HB_H1   s
 ```
3.最终生成sam格式结果文件夹和list文件。

# test by yuguo
