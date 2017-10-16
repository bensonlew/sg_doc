宏基因组创建丰度表格
===========


工具PATH
---------

**meta.create_abund_table**


功能描述
--------
利用基因丰度文件和数据库的注释表格/基因list根据提供的筛选参数生成相应的丰度文件用于后续各种分析的输入文件。


参数设置
--------
```
{"name": "anno_table", "type": "infile", "format": "meta.profile"},  # 各数据库的注释表格
{"name": "geneset_table", "type": "infile", "format": "meta.otu.otu_table"},
{"name": "gene_list", "type": "infile", "format": "meta.profile"},  # 挑选的用于后续分析的基因list，
{"name": "level_type", "type": "string", "default": ""},  # 注释表的字段，eg：Pathway，Level1，Level2
{"name": "level_type_name", "type": "string", "default": ""},   # 注释表字段的具体levelname，eg：Level1下Metabolism(对应的ko)
{"name": "lowest_level", "type": "string", "default": ""},  # 注释表数据库对应的最低分类，eg：KEGG的ko(Pathway)
{"name": "out_table", "type": "outfile", "format": "meta.otu.otu_table"},
```

运行逻辑
-------
```
1.必须提供"geneset_table"文件（共六种丰度计算的geneset_table文件，择其一）。

2.geneset_table
结合物种/功能/基因表格和筛选参数生成统一丰度表格。
  a.当提供"gene_list"文件时，直接从"geneset_table"提取基因生成新的丰度表格。
  b.当不提供"gene_list"文件时，则必须提供"anno_table"注释表格，同时设置筛选的注释表字段"level_type"（如KEGG的Level1）；当"level_type_name"为空
  时，表示计算"level_type"（如Level1）的丰度表；当"level_type_name"不为空时，则必须提供"lowest_level"，表示计算某分类下注释表数据库对应的最低
  分类的丰度表（如：Level1[evel_type]下Metabolism[level_type_name]对应的ko[lowest_level]）。
```


资源配置
------------------------
```
self._cpu = 1
self._memory = '2G'
```

测试命令
-----------------------------------
```
from mbio.workflows.single import SingleWorkflow
from biocluster.wsheet import Sheet

data = {
       "id": "create_abund_table_test",
       "type": "tool",
       "name": "meta.create_abund_table",
       "options": {
           #"anno_table": "/mnt/ilustre/users/sanger-dev/sg-users/zhujuan/tools_test/database/kegg_result_dir/test.xls",,
           "geneset_table": "/mnt/ilustre/users/sanger-dev/workspace/20171013/MetaGenomic_metagenome_anno_all_test/UniGene/output/gene_profile/RPKM.xls",
           "gene_list": "/mnt/ilustre/users/sanger-dev/workspace/20171013/MetaGenomic_metagenome_anno_all_test/UniGene/output/gene_profile/gene_list",
           #"level_type": "Level2",
           #"level_type_name": "Metabolism   Nucleotide metabolism",
           #"lowest_level": "Pathway"
           }
      }

wsheet = Sheet(data=data)
wf = SingleWorkflow(wsheet)
wf.run()
```


测试结果
-----------------------------------
tool测试的结果路径:

/mnt/ilustre/users/sanger-dev/workspace/20171016/Single_create_abund_table_test/CreateAbundTable/output/