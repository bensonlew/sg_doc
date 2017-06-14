metagen_nr
==========================

模块Path
-----------

**tools.meta_genomic.metagen_nr**

功能描述
-----------------------------------

宏基因nr注释的tax_profile文件获取

调用脚本
-----------------------------------

nr_profile.py

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/taxon/scripts/`

主要命令及功能模块
-----------------------------------

```
from mbio.packages.annotation.nr_stat import nr_stat
nr.detail_to_level(detail_file=self.option('taxon_out').prop['path'], out_dir=self.work_dir)
cmd = "{} {} -i {} -r {} -o {}".format(self.python_path, self.python_script, self.new_query_taxons, self.option('reads_profile_table').prop['path'], self.output_dir)

```

参数设计
-----------------------------------

```
     {"name": "taxon_out", "type": "infile", "format": "annotation.nr.nr_taxon"},# 比对到nr库的结果文件query_taxons_detail.xls
     {"name": "reads_profile_table", "type": "infile", "format": "sequence.profile_table"}  # 样本序列丰度表
```

运行逻辑
-----------------------------------

首先调用package(nr_stat)生成query_taxon文件(各个reads的注释结果表)，后调用脚本nr_profile.py结合reads_profile_table生成各个样本的分类表

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = "5G"
```
