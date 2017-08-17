nr_tax_level
==========================

模块Path
-----------

**tools.meta_genomic.nr_tax_level**

功能描述
-----------------------------------

宏基因获得nr的各级分类信息丰度表

调用脚本
-----------------------------------

metagen_nr_taxlevel.py

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/taxon/scripts/`

主要命令及功能模块
-----------------------------------

```
cmd2 = self.python_path + ' {} -i {} -l 1,2,3,4,5,6,7,8 -o {}'.format(self.python_script_2, self.option('nr_taxon_profile').prop['path'], self.output_dir)

```

参数设计
-----------------------------------

```
       {"name": "nr_taxon_profile", "type": "infile", "format": "paternity_test.tab"}, # nr_taxon_profile文件
```

运行逻辑
-----------------------------------

通过脚本metagen_nr_taxlevel利用nr_tax_profile生成各级的分类信息丰度表

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = "5G"
```
