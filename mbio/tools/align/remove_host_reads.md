去除bwa比对到的结果
===========

Tool 说明
-----------------------------------

PATH
---------

**align.bwa.remove_host_reads**

程序及安装路径
------------
/bioinfo/seq/scripts/remove_AlignSeq_bysam.pl

功能描述
--------
从sam文件中提取比对到宿主的序列，并从质控fastq中剔除

主要命令及功能模块
------------------
```
检查sam文件，从中提出序列ID，把质控fastq的相应序列剔除
```

参数设置
--------
```
{"name": "bwa_dir", "type": "infile", "format": "align.bwa.sam_dir"} , # bwa比对宿主得到的sam文件夹
{"name": "fastq_dir", "type": "infile", "format": "sequence.fastq_dir"},  #质控后的fastq文件夹，含有list文件
{"name": "fq_type", "type": "string", "default": ""},  # fq类型PE or SE，必传
{"name": "remove_host_dir", "type": "outfile", 'format': "sequence.fastq_dir"},  # 输出文件夹,含有list文件
{"name": "pipe_type", "type": "string", "default": "AB"} # add "pipe_type" for meta_g's single read
```

运行逻辑
-------
1.检查bwa比对的sam格式文件是否正确；

2.调用remove_AlignSeq_bysam.pl提取sam文件的序列ID，并从对应fastq文件中剔除；

3.输出剔除宿主序列后的fastq和list文件备用。
