去宿主
===========

Moudle 说明
-----------------------------------

PATH
---------

**meta_genomic.remove_host**

程序及安装路径
------------

/app/bioinfo/align/bwa-0.7.9a/bwa
/bioinfo/seq/scripts/remove_AlignSeq_bysam.pl

功能描述
--------
将reads比对宿主DNA序列，并去除比对相似性高的污染reads。

主要命令及功能模块
------------------
```
tool：align.bwa
file:align.bwa.remove_host_reads
tool:sequence.bwa_stat
```

参数设置
--------
```
{"name": "fastq_dir", "type": "infile", "format": "sequence.fastq_dir"},  # 输入质控后的fastq文件夹其中包含list文件
{"name": "reference", "type": "infile", "format": "fasta"},  # 宿主参考序列
{"name": "pipe_type", "type": "string", "default": "AB"} # add "pipe_type" for meta_g's single read
{"name": "pipe_type", "type": "string", "default": "AB"} # add "pipe_type" for meta_g's single read
{"name": "result_fq_dir", "type": "outfile", "format": "sequence.fastq_dir"},  # 设置结果文件后面要用
{"name": "remove_host_stat", "type": "outfile", "format": "sequence.profile_table"},  # 统计去宿主后序列信息
```

运行逻辑
-------
1.当"fastq_dir"、"reference"两个参数都满足时，调用align.bwa Tool去做宿主mapping；
[align.bwa 原工具需修改，metagenomic宿主已存在的无需再构索引,做mapping需添加single reads的比对];

2.利用mapping结果，去除属于宿主的序列[sequence.remove_host_reads]；

3.统计去宿主后的数据信息。
