
模块说明
==========================

Path
-----------

**assemble.idba**

功能和用途描述
-----------------------------------

宏基因组idba拼接组装程序,提供三种组合方法，可根据提供的合同测序量判断是否需要拆分reads拼接，如不提供，则自动根据实际base数进行判断

主要命令及功能模块
-----------------------------------

Tool: assemble.rm_kmer,assemble.split,assemble.idba,assemble.combine_idba,assemble.contig_stat

参数设计
-----------------------------------

```
            {"name": "QC_dir", "type": "infile", "format": "sequence.fastq_dir"},  # 输入文件，质控后的文件夹
            {"name": "khmer", "type": "bool", 'default': False},  # 是否拼接前去除kmer，默认不去除
            {"name": "quantity", "type": "int", 'default': 0},  #合同测序含量，可以不提供
            {"name": "mink", "type": "int", "default": 47},  # 最小kmer值，例"47"
            {"name": "maxk", "type": "int", "default": 97},  # 最大kmer值
            {“name": "step", "type": "int", "default": 10},  # kmer步长
            {"name": "min_contig", "type": "int", "default": 200},  # 拼接contig最小长度
            {”name“: "stat_len", "type": "int", "default": 300},  # 拼接统计contig的最小长度
            {"name": "contig", "type": "outfile", "format": "sequence.fasta"},  # 输出文件,sample.contig.fa
            {"name": "contig_stat", "type": "outfile", "format": "sequence.profile_table"},  # 输出文件，对组装后的序列进行信息统计
```

运行逻辑
-----------------------------------
1、根据实际情况，选择拼接前处理方法；

2、运行idba_ud进行拼接；

3、运行cut_more.pl，选择300bp以上的序列统计；

4、统计contig质量。
