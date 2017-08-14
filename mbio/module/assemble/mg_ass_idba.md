
模块说明
==========================

Path
-----------

**assemble.mg_ass_idba**

功能和用途描述
-----------------------------------

宏基因组运用idba_ud进行单个样本多个kmer连续拼接

主要命令及功能模块
-----------------------------------

module：assemble.idba
tool: assemble.map_reads,assemble.cat_reads,assemble.cut_length,
assemble.newbler,assemble.sort_newbler_result,assemble.metagen_ass_stat

参数设计
-----------------------------------

```
            {"name": "QC_dir", "type": "infile", "format": "sequence.fastq_dir"},  # 输入文件，质控后的文件夹
            {"name": "quantity", "type": "int", "default": "10"},  #合同测序含量
            {"name": "sample_type", "type": "int", "default": "1"},  #样品类型
            {"name": "sample_threshold", "type": "int", "default": "10"},  #样品数量限定值，判断去kmer标准之一
            {"name": "quantity_threshold", "type": "int"，"default": "20"},  #测序量限定值，判断去kmer/拆分reads标准之一
            {"name": "overall_quantity_threshold", "type": "int", "default": "400"},  #总测序量限定值，判断去kmer标准之一
            {”name“: "method","type": "string"},  #拼接方法选择[simple|multiple|triple]
            {"name": "min_contig", "type": "string", "default": "300"},  # 输入最短contig长度，默认300
            {"name": "contig","type": "outfile","format":"sequence.fasta"},  #输出文件，sample.contig.fa

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
