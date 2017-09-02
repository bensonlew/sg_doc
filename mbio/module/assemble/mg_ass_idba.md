
模块说明
==========================

Path
-----------

**assemble.mg_ass_idba**

功能和用途描述
-----------------------------------

宏基因组运用idba_ud对样本多个kmer连续拼接

主要命令及功能模块
-----------------------------------

tool: assemble.idba, align.bowtie2, sequence.extract_fastq, sequence.cat_reads, assemble.rm_kmer, sequence.cut_length,
assemble.newbler, assemble.sort_idba_result, assemble.contig_stat, sequence.length_distribute

参数设计
-----------------------------------

```
            {"name": "QC_dir", "type": "infile", "format": "sequence.fastq_dir"},  # 输入文件，质控后的文件夹
            {"name": "quantity", "type": "int", "default": "10"},  #clean reads碱基含量
            {"name": "sample_type", "type": "int", "default": "1"},  #样品类型
            {"name": "quantity_threshold", "type": "int"，"default": "20"},  #测序量限定值，判断去kmer/拆分reads标准之一
            {"name": "overall_quantity_threshold", "type": "int", "default": "200"},  #总测序量限定值，判断去kmer标准之一
            {”name“: "method","type": "string"},  #拼接方法选择[simple_assemble|multiple_assemble]
            {"name": "min_contig", "type": "string", "default": "300"},  # 输出最短contig长度，默认300
            {"name": "contig","type": "outfile", "format": "sequence.fasta_dir"},  #输出文件路径，sample.contig.fa
            {"name": "contig_stat", "type": "outfile", "format": "sequence.profile_table"},  #输出contig质量统计结果表
            {"name": "length_distribute", "type": "outfile", "format": "sequence.profile_table_dir"},  #输出长度分布表
```

运行逻辑
-----------------------------------
1、进行idba_ud拼接；

2、reads mapping，获取未map的reads；

3、结合成一组fq1,fq2,fqs；

4、进行idba_ud拼接；

5、按1000bp长度进行筛选；

6、对小于1000bp长度的contig进行newbler拼接；

7、整理所有的拼接结果；

8、组装结果汇总，长度分布图。
