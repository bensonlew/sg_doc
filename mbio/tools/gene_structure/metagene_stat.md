
工具说明
==========================

Path
-----------

**gene_structure.metagene_stat**

程序安装路径
-----------------------------------
/mnt/ilustre/users/sanger-dev/app/bioinfo/metaGenomic/scripts

功能和用途描述
-----------------------------------

对基因进行统计，将所有样品的基因序列合并为一个，提供去冗余的输入文件。

使用程序
-----------------------------------

metagene_stat.py

主要命令及功能模块
-----------------------------------

gene_stat.py -gene_dir GENE_DIR -output_stat  STAT_RESULT  -output_fa  FA_RESULT

FA_DIR 结果fasta文件路径
FINAL_STAT 最终fasta质量统计表

参数设计
-----------------------------------

```
            {"name": "contig_dir", "type": "string"},  # 输入文件，预测后的序列路径，进行步长统计
            {"name": "sample_stat", "type": "outfile", "format": "sequence.profile_table"},  # 输出文件，对全部基因预测结果进行统计
            {"name": "tmp_stat", "type": "outfile", "format": "sequence.profie"},  # 输出文件，le_tabl在非冗余基因集统计时调用
```


运行逻辑
-----------------------------------
1、统计基因预测结果；

2、将结果合并为一个文件；