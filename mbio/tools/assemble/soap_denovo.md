
工具说明
==========================

Path
-----------

**assemble.soap_denovo**

程序安装路径
-----------------------------------

/mnt/ilustre/users/sanger/app/bioinfo/metaGenomic/SOAPdenovo2/bin/

功能和用途描述
-----------------------------------

运行SOAPdenovo2，对序列进行拼接


使用程序
-----------------------------------

SOAPdenovo2：http://soap.genomics.org.cn/


资源配置
-----------------------------------

CPU：17
内存：'45G'

主要命令及功能模块
-----------------------------------

SOAPdenovo2-63mer all -s <配置文件（需自己生成）> -o <输出文件的前缀> -K <kmer值> -p <线程数，默认16> -d 1 -D 1 -F -u 2

参数设计
-----------------------------------

::

            {"name": "fastq1", "type": "infile", "format": "sequence.fastq"},  # 输入文件,sample.sickle.l.fastq
            {"name": "fastq2", "type": "infile", "format": "sequence.fastq"},  # 输入文件,sample.sickle.r.fastq
            {"name": "fastqs", "type": "infile", "format": "sequence.fastq"},  # 输入文件,sample.sickle.s.fastq
            {"name": "max_rd_len", "type": "string"},  # read最大读长
            {"name": "insert_size", "type": "string"},  # 平均插入片段长度
            {"name": "reverse_seq", "type": "string", "default": "0"},   # 配置文件的其他参数
            {"name": "asm_flags", "type": "string", "default": "3"},  # 配置文件的其他参数
            {"name": "rank", "type": "string", "default": "1"},  # 配置文件的其他参数
            {"name": "kmer", "type": "string"},  # k_mer值，例"39"
            {"name": "scafSeq", "type": "outfile", "format": "sequence.fasta"},  # 输出文件,sample.scafSeq
            


运行逻辑
-----------------------------------

1、根据最大读长等信息，生成配置文件；

2、运行SOAPdenovo2进行拼接。