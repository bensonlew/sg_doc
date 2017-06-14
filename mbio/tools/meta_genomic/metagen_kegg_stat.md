metagen_kegg_stat
==========================

模块Path
-----------

**tools.meta_genomic.metagen_kegg_stat**

功能描述
-----------------------------------

宏基因kegg注释结果统计tool

调用脚本
-----------------------------------

meta_kegg_stat.py

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/annotation/scripts/`

主要命令及功能模块
-----------------------------------

```
    cmd = self.python_path + ' {} -k {} -e {} -p {}  -m {} -r {} -o {} '.format(self.python_script, kegg_anno, enzyme_list, pathway_list, module_list,self.option('reads_profile').prop['path'], self.output_dir)

```

参数设计
-----------------------------------

```
            {"name": "kegg_result_dir", "type": "infile", "format": "meta_genomic.kegg_dir"},
            {"name": "reads_profile", "type": "infile", "format": "sequence.profile_table"},
            {"name": "kegg_profile_dir", "type": "outfile", "format": "meta_genomic.kegg_dir"},
```

运行逻辑
-----------------------------------

调用脚本meta_kegg_stat对注释结果文件进行统计，获得各个样本的统计信息

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = "5G"
```
