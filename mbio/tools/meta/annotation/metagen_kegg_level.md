metagen_kegg_level
==========================

模块Path
-----------

**tools.meta_genomic.metagen_kegg_level**

功能描述
-----------------------------------

宏基因获得kegg的pathway level的对应表

调用脚本
-----------------------------------

metagen_kegg_level.py

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/taxon/scripts/`

主要命令及功能模块
-----------------------------------

```
cmd2 = self.python_path + ' {} -i {} -p {} -o {}'.format(self.python_script_2,
      self.option('kegg_anno_profile'), self.option('uniq_gene_profile'),self.output_dir)


```

参数设计
-----------------------------------

```
       {"name": "kegg_table", "type": "infile", "format": "annotation.kegg.kegg_table"}, # 比对到kegg库的注释结果文件
       {"name": "reads_profile_table", "type": "infile", "format": "sequence.profile_table"}
```

运行逻辑
-----------------------------------

调用脚本metagen_kegg_level，通过kegg注释文件和基因profile文件以及内部的level table生成带各层级对应关系的丰度表。

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = "5G"
```
