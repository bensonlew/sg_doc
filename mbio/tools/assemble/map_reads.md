
工具说明
==========================

Path
-----------

**assemble.map_reads**

程序安装路径
-----------------------------------
/mnt/ilustre/users/sanger-dev/app/bioinfo/metaGenomic/scripts
/mnt/ilustre/users/sanger-dev/app/bioinfo/metaGenomic

功能和用途描述
-----------------------------------

宏基因组装之序列处理，去"N"得到contig，长度筛选，质量统计。

使用程序
-----------------------------------

bowtie2, choose_AlignSeq_bysam.pl

资源配置
-----------------------------------

self._cpu = 8

self._memory = "20G"

主要命令及功能模块
-----------------------------------
bowtie2_build [method]

perl choose_AlignSeq_bysam.pl [samfile] [fq1,fq2|fqs] [输出文件名前缀]

参数设计
-----------------------------------

```
            {"name": "contig", "type": "infile", "format": "sequence.fasta"},  # 输入文件,sample.contig.fa
            {"name": "fastq1", "type": "infile", "format": "sequence.fastq"},  # 输入文件,sample.sickle.l.fastq
            {"name": "fastq2", "type": "infile", "format": "sequence.fastq"},  # 输入文件,sample.sickle.r.fastq
            {"name": "fastqs", "type": "infile", "format": "sequence.fastq"},  # 输入文件,sample.sickle.s.fastq
            {"name": "unmap1", "type": "outfile", "format": "sequence.fastq"},  # 输出文件,sample.unmap.l.fastq
            {"name": "unmap2", "type": "outile", "format": "sequence.fastq"},  # 输出文件,sample.unmap.r.fastq
            {"name": "unmaps", "type": "outfile", "format": "sequence.fastq"},  # 输出文件,sample.unmap.s.fastq
```


运行逻辑
-----------------------------------
1、建立contig比对索引；

2、将clean reads进行比对；

3、根据比对结果挑选未map的reads；
