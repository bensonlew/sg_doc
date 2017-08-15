
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

输入fq，对单个样品进行拼接。

使用程序
-----------------------------------

fq2fa,idba_ud

资源配置
-----------------------------------

self._cpu = 16

self._memory = ""             #动态改变

主要命令及功能模块
-----------------------------------

idba_ud

参数设计
-----------------------------------

```
            {"name": "QC_dir", "type": "infile", "format": "sequence.fastq_dir，sequence.fasta_dir"},  # 输入文件，质控后的文件夹，或者
            {"name": "quantity", "type": "int", 'default': 0},  #合同测序含量，可以不提供
            {"name": "mink", "type": "int", "default": 47},  # 最小kmer值，例"47"
            {"name": "maxk", "type": "int", "default": 97},  # 最大kmer值
            {“name": "step", "type": "int", "default": 10},  # kmer步长
            {"name": "min_contig", "type": "int", "default": 200},  # 拼接contig最小长度
            {"name": "contig", "type": "outfile", "format": "sequence.fasta"},  # 输出文件,sample.contig.fa
```


运行逻辑
-----------------------------------
1、将fq转换为fa；

2、进行拼接；