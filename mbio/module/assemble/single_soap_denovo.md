
模块说明
==========================

Path
-----------

**assemble.single_soap_denovo**

功能和用途描述
-----------------------------------

宏基因组运用SOAPdenovo2进行单个样本单个kmer拼接

主要命令及功能模块
-----------------------------------

tool:assemble.soap_denovo,assemble.get_contig

参数设计
-----------------------------------

```
            {"name": "fastq1", "type": "infile", "format": "sequence.fastq"},  # 输入文件,sample.sickle.l.fastq
            {"name": "fastq2", "type": "infile", "format": "sequence.fastq"},  # 输入文件,sample.sickle.r.fastq
            {"name": "fastqs", "type": "infile", "format": "sequence.fastq"},  # 输入文件,sample.sickle.s.fastq
            {“name”: "sample_name", "type": "string"},  # 样品名称
            {"name": "mem", "type": "int", "default": 100}, # 拼接内存
            {"name": "max_rd_len", "type": "string"},  # read最大读长
            {"name": "insert_size", "type": "string"},  # 平均插入片段长度
            {"name": "reverse_seq", "type": "string", "default": "0"},   # 配置文件的其他参数
            {"name": "asm_flags", "type": "string", "default": "3"},  # 配置文件的其他参数
            {"name": "rank", "type": "string", "default": "1"},  # 配置文件的其他参数
            {"name": "kmer", "type": "string"},  # k_mer值，例"39"
            {"name": "min_contig", "type": "string", "default": "500"},  # 输入最短contig长度，默认500
            {"name": "scafSeq", "type": "outfile", "format": "sequence.fasta"},  # 输出文件,sample.scafSeq
            {"name": "scaftig", "type": "outfile", "format": "sequence.fasta"},  # 输出文件，scaffold去掉N后的序列
            {"name": "cut_more_scaftig", "type": "outfile", "format": "sequence.fasta"},  # 输出文件，去掉小于最短contig长度的序列
```

运行逻辑
-----------------------------------
1、对各样本单独运行SOAPdenovo2进行拼接；

2、去Ns，按最短contig长度进行筛选；

3、综合结果进行比较，筛选kmer；

4、得到的kmer做长度分布统计；