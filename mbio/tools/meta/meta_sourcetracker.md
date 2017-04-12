meta_sourcetracker
==========================

模块Path
-----------

**tools.meta.beta_diversity.meta_sourcetracker**

功能描述
-----------------------------------

微生物涞源组成比例分析，根据已有的物种信息，通过运算获得每个source环境对每个sink样本的相对贡献比例。

调用程序
-----------------------------------

biom 

filter_otus_from_otu_table.py

sourcetracker_for_qiime.r

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/program/Python/bin/`

`/mnt/ilustre/users/sanger-dev/app/install_packages/sourcetracker-1.0.0-release/`



主要命令及功能模块
-----------------------------------

```
biom convert -i otu_table -o temp.biom --table-type "OTU table" --to-hdf5
python filter_otus_from_otu_table.py -i temp.biom -o filtered.biom -s 1
biom convert -i filtered.biom -o filtered.txt --table-type "OTU table" --to-tsv
Rscript sourcetracker_for_qiime.r -i filtered.txt -m map_table -o output_dir
```

参数设计
-----------------------------------

```
    {"name": "otu_table", "type": "string"},  # 输入的OTU文件,在workflow里面处理过的OTU表格路径
    {"name": "map_table", "type": "infile", "format": "meta.otu.group_table"},  # 输入的map文件
    {"name": "s", "type": "string"}  # 物种筛选系数
```

运行逻辑
-----------------------------------

根据传入的`otu_table`和`map_table`以及s对otu表进行筛选后完成分析获得占比数据信息。

资源配置
-----------------------------------

```
self._cpu = 1
self._memory = "10G"
```