
模块说明
==========================

Path
-----------

**assemble.mg_ass_soapdenovo** 原assemble.metagenomic_assemble**

功能和用途描述
-----------------------------------

对所有样本进行Soapdenovo2单个样品单个kmer分别组装，并对组装结果进行信息统计



主要命令及功能模块
-----------------------------------

module:assemble.single_soap_denovo

tool:assemble.contig_stat, sequence.length_distribute

参数设计
-----------------------------------

```
            {“name”: "data_id", "type": "string"},  # 主表任务ID
            {"name": "QC_dir", "type": "infile", "format": "sequence.fastq_dir"},  # 输入文件，质控后的文件夹
            # {"name": "quantity", "type": "int", "default": "10"},  #合同测序含量
            # {"name": "sample_type", "type": "int", "default": "1"},  #样品类型
            # {"name": "reads_stat", "type": "string"},  # read最大读长,质控后的统计文件
            # {"name": "insert_size", "type": "string"},  # 平均插入片段长度
            {"name": "reverse_seq", "type": "string", "default": "0"},  # 配置文件的其他参数
            {"name": "asm_flags", "type": "string", "default": "3"},  # 配置文件的其他参数
            {"name": "rank", "type": "string", "default": "1"},  # 配置文件的其他参数
            {"name": "min_contig", "type": "string", "default": "500"},  # 输入最短contig长度，默认500
            # {"name": "scafSeq", "type": "outfile", "format": "sequence.fasta"},  # 输出文件,sample.scafSeq
            # {"name": "scaftig", "type": "outfile", "format": "sequence.fasta"},  # 输出文件，scaffold去掉N后的序列
            {"name": "contig", "type": "outfile", "format": "sequence.fasta_dir"},  # 输出文件，去掉小于最短contig长度的序列路径
   ```


运行逻辑
-----------------------------------
1、进行SOAPdenovo2拼接；

2、汇总结果，kmer筛选，做长度分布统计；

测试命令
-----------------------------------
python /mnt/ilustre/users/sanger-dev/sg-users/guhaidong/soapdenovo_module2.py

模块测试的结果路径:
-----------------------------------
/mnt/ilustre/users/sanger-dev/workspace/20170913/Single_module_soapdenovo_test

测试结果
-----------------------------------