sam中提取fastq
===========

Tool 说明
-----------------------------------

PATH
---------

**sequence.extract_fastq_by_sam**

功能描述
--------
从sam中提取unmap/map上的fq序列，并统计序列信息。

主要命令及功能模块
------------------
```
/bioinfo/seq/scripts/get_fq_bysam.pl
```

参数设置
--------
```
{"name": "fq_type", "type": "string", "default": "PSE"},  # fq类型，PE、SE、PSE（即PE+SE，单端加双端）
{"name": "sam", "type": "infile", "format": "align.bwa.sam_dir"},     # sam格式文件,内含对应list文件
{"name": "extract_type", "type": "string", "default": "unmap"},  #提取的fq结果类型是 'map'的还是'unmap'的
{"name": "reasult_dir", "type": "outfile", 'format': "sequence.fastq_dir"}  # 输出文件夹
```

运行逻辑
-------
1.首先确定"fq_type"类型：

2.当传入"sam"参数时，根据"extract_type"参数提取map/unmap的序列，并统计fastq信息。

3.最终生成生成相关fq文件夹，其中含fq对应的'list.txt'和样品对应fq统计文件'stat.list.txt''。
