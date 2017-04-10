otu_taxon_stat
==========================

模块Path
-----------

**tools.meta.otu.otu_taxon_stat**

功能描述
-----------------------------------

根据原始的otu表和otu的分类信息表生成绝对丰度和相对丰度的单一水平物种分类统计表和多水平物种分类统计

调用程序
-----------------------------------

biom

summarize_taxa.py

sum_tax.fix.pl

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/program/Python/bin/`

`/mnt/ilustre/users/sanger-dev/app/bioinfo/taxon/scripts/`

主要命令及功能模块
-----------------------------------

```
/mnt/ilustre/users/sanger-dev/app/program/Python/bin/biom convert -i taxon_otu -o biom  --process-obs-metadata taxonomy --table-type \"OTU table\" --to-hdf5
python /mnt/ilustre/users/sanger-dev/app/program/Python/bin/summarize_taxa.py -i biom -o tax_summary_a_dir " -L 1,2,3,4,5,6,7,8 -a "
python /mnt/ilustre/users/sanger-dev/app/program/Python/bin/summarize_taxa.py -i biom -o tax_summary_a_dir " -L 1,2,3,4,5,6,7,8 "
perl bioinfo/taxon/scripts/sum_tax.fix.pl -i my_otu_table -o otu_name
```

参数设计
-----------------------------------

```
    {'name': 'in_otu_table', 'type': 'infile', 'format': 'meta.otu.otu_table'},  # 输入的otu表
    {'name': 'taxon_file', 'type': 'infile', 'format': 'taxon.seq_taxon'},  # 输入的taxon文件
    {'name': 'otu_taxon_biom', 'type': 'outfile', 'format': 'meta.otu.biom'},  # 输出的biom文件
    {'name': 'otu_taxon_table', 'type': 'outfile', 'format': 'meta.otu.otu_table'},  # 输出的otu表文件
    {'name': 'otu_taxon_dir', 'type': 'outfile', 'format': 'meta.otu.tax_summary_dir'}, # 输出的otu_taxon_dir(absolute)文件夹
```

运行逻辑
-----------------------------------

根据原始的otu表和otu的分类信息表生成绝对丰度和相对丰度的单一水平物种分类统计表和多水平物种分类统计

资源配置
-----------------------------------

```
self._cpu = 1
self._memory = '3G'
```