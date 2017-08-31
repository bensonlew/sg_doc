
工具说明
==========================

Path
-----------

**align.bowtie2**

程序安装路径
-----------------------------------
/mnt/ilustre/users/sanger-dev/app/bioinfo/metaGenomic/scripts
/mnt/ilustre/users/sanger-dev/app/bioinfo/metaGenomic

功能和用途描述
-----------------------------------

将reads与参考fasta序列用bowtie2进行比对。

使用程序
-----------------------------------

bowtie2_build, bowtie2

资源配置
-----------------------------------

self._cpu = 6

self._memory = "20G"

主要命令及功能模块
-----------------------------------
bowtie2_build [method]

bowtie2 [method]

参数设计
-----------------------------------

```
            {"name": "ref_fasta", "type": "infile", "format": "sequence.fasta"},  # 输入文件,sample.contig.fa
            {"name": "fastq1", "type": "infile", "format": "sequence.fastq"},  # 输入文件,sample.sickle.l.fastq
            {"name": "fastq2", "type": "infile", "format": "sequence.fastq"},  # 输入文件,sample.sickle.r.fastq
            {"name": "fastqs", "type": "infile", "format": "sequence.fastq"},  # 输入文件,sample.sickle.s.fastq
            {"name": "sam_file", "type": "outfile", "format": "align.bwa.sam_dir"},  # 输出文件,map结果的sam路径
```


运行逻辑
-----------------------------------
1、建立contig比对索引；

2、将clean reads进行比对；
