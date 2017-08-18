
工具说明
==========================

Path
-----------

**assemble.rm_kmer**

程序安装路径
-----------------------------------
/mnt/ilustre/users/sanger-dev/app/bioinfo/metaGenomic/scripts

功能和用途描述
-----------------------------------

去除reads的低丰度khmer

使用程序
-----------------------------------

去khmer工具[需安装]

资源配置
-----------------------------------

self._cpu = 10

self._memory = "120G"

主要命令及功能模块
-----------------------------------

source  [路径]
interleave-reads.py
normalize-by-median.py
filter-abund.py
extract-paired-reads.py

参数设计
-----------------------------------

```
            {"name": "fastq1", "type": "infile", "format": "sequence.fastq"},  # 输入文件,sample.sickle.l.fastq
            {"name": "fastq2", "type": "infile", "format": "sequence.fastq"},  # 输入文件,sample.sickle.r.fastq
            {"name": "fastqs", "type": "infile", "format": "sequence.fastq"},  # 输入文件,sample.sickle.s.fastq
            {"name": "filt_fastq1", "type": "infile", "format": "sequence.fastq"},  # 输出文件,sample.filt.l.fastq
            {"name": "filt_fastq2", "type": "infile", "format": "sequence.fastq"},  # 输出文件,sample.filt.r.fastq
            {"name": "filt_fastqs", "type": "infile", "format": "sequence.fastq"},  # 输出文件,sample.filt.s.fastq
```


运行逻辑
-----------------------------------
1、去kmer，将结果reads放到一个文件夹中；
