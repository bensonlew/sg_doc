
工具说明
==========================

Path
-----------

**assemble.idba**

程序安装路径
-----------------------------------
/mnt/ilustre/users/sanger-dev/app/bioinfo/metaGenomic/MaxBin-2.2.1/auxiliary/idba-1.1.1/bin

/mnt/ilustre/users/sanger-dev/app/bioinfo/metaGenomic/scripts

功能和用途描述
-----------------------------------

宏基因组idba拼接组装程序

使用程序
-----------------------------------

fq2fa, fa2fq, idba_ud, contig_stat.pl，cut_more.pl

主要命令及功能模块
-----------------------------------

fq2fa --merge  [fq1] [fq2] [pair.fa]

fq2fa [fqs] [single.fa]

fa2fq [fa] [fq]

idba_ud -r [fa] -o [dir] --pre_correction --num_thread [线程数]  --mink [最小kmer] --maxk [最大kmer]
--step [步长] --min_contig [最短序列长度]

perl cut_more.pl [run_get_scaftig的输出文件] [最短contig长度] [输出文件的名称前缀]

perl contig_stat.pl [idba的输出文件] [最短contig长度] [输出文件的名称全称]

参数设计
-----------------------------------

```
            {"name": "fastq1", "type": "infile", "format": "sequence.fastq"},  # 输入文件,sample.sickle.l.fastq
            {"name": "fastq2", "type": "infile", "format": "sequence.fastq"},  # 输入文件,sample.sickle.r.fastq
            {"name": "fastqs", "type": "infile", "format": "sequence.fastq"},  # 输入文件,sample.sickle.s.fastq
            {"name": "mink", "type": "int", "default": 47},  # 最小kmer值，例"39"
            {"name": "maxk", "type": "int", "default": 97},  #最大kmer值
            {“name": "step", "type": "int", "default": 10},  #kmer步长
            {"name": "min_contig", "type": "int", "default": 200},  #拼接contig最小长度
            {”name“: "stat_len", "type": "int", "default": 300},  #拼接统计contig的最小长度
            {"name": "contig", "type": "outfile", "format": "sequence.fasta"},  # 输出文件,sample.contig.fa
            {"name": "contig_stat", "type": "outfile", "format": "sequence.profile_table"},  # 输出文件，对组装后的序列进行信息统计
```

运行逻辑
-----------------------------------
1、将一个样品的质控序列转换为一个fasta文件；

2、运行idba_ud进行拼接；

3、运行cut_more.pl，选择300bp以上的序列统计；

4、统计contig质量。
