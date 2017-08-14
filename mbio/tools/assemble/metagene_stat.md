
工具说明
==========================

Path
-----------

**assemble.metagene_stat**

程序安装路径
-----------------------------------
/mnt/ilustre/users/sanger-dev/app/bioinfo/metaGenomic/scripts

功能和用途描述
-----------------------------------

汇总统计结果，对预测结果做长度分布图。

使用程序
-----------------------------------

metagene_stat.py

主要命令及功能模块
-----------------------------------

fasta_stat.py -stat_dir STAT_DIR -fa_dir FA_DIR -final_stat  FINAL_STAT

STAT_DIR 所有样品统计路径
FA_DIR 结果fasta文件路径
FINAL_STAT 最终fasta质量统计表

参数设计
-----------------------------------

```
            {"name": "stat_dir", "type": "string"},  # 输入文件，对预测后的序列进行信息统计结果路径
            {"name": "contig_dir", "type": "string"},  # 输入文件，预测后的序列路径，进行步长统计
            {"name": "assembly_stat", "type": "outfile", "format": "sequence.profile_table"},  # 输出文件，预测后的结果文件
            {"name": "mix_stat", "type": "outfile", "format": "sequence.profile_table"},  # 输出文件，对全部基因预测结果进行统计
            {"name": "tmp_stat", "type": "outfile", "format": "sequence.profile_table"},  # 输出文件，在非冗余基因集统计时调用
```


运行逻辑
-----------------------------------
1、汇总统计结果；

2、做fasta长度分布图；