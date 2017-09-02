
工具说明
==========================

Path
-----------

**assemble.idba**

程序安装路径
-----------------------------------
/mnt/ilustre/users/sanger-dev/app/bioinfo/metaGenomic/scripts

功能和用途描述
-----------------------------------

输入fq，对单个样品进行idba拼接。

使用程序
-----------------------------------

fq2fa，split_fa.pl, idba_ud

资源配置
-----------------------------------

self._cpu = 16

self._memory = "option{mem}"

主要命令及功能模块
-----------------------------------

fq2fa [fq] [fa]

fq2fa --merge [fq1] [fq2] [fa]

split_fa.pl n [拆分个数] [fa] [输出fa名称前缀]

idba_ud -r [输入fasta reads] -o [输出路径] --pre_correction --num_threads [线程数] --mink [最小kmer数] --maxk [最大kmer数] --step [kmer拼接步长] --min_contig [最短contig长度] 1>out 2>err

参数设计
-----------------------------------

```
            {"name": "fastq1", "type": "infile", "format": "sequence.fastq"},  # 输入文件,sample.sickle.l.fastq
            {"name": "fastq2", "type": "infile", "format": "sequence.fastq"},  # 输入文件,sample.sickle.r.fastq
            {"name": "fastqs", "type": "infile", "format": "sequence.fastq"},  # 输入文件,sample.sickle.s.fastq
            {"name": "fasta", "type":"infile", "format": "sequence.fasta"},  #输入文件，一个样品的reads[fasta格式]
            {“name”: "mem", "type": "int", "default": 100},  # 拼接使用内存
            {"name": "mink", "type": "int", "default": 47},  # 最小kmer值，例"47"
            {"name": "maxk", "type": "int", "default": 97},  # 最大kmer值
            {“name": "step", "type": "int", "default": 10},  # kmer步长
            {"name": "min_contig", "type": "int", "default": 200},  # 拼接contig最小长度
            {"name": "contig", "type": "outfile", "format": "sequence.fasta"},  # 输出文件,sample.contig.fa
```


运行逻辑
-----------------------------------
1、将fq转换为fa；

2、判断测序量是否过大，过大则进行拆分，供后续分别进行拼接；

3、进行拼接；

4、如步骤2已拆分，此步骤对结果contig进行合并；