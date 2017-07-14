cat_ssu_result
==========================

模块Path
-----------

**tools.meta_genomic.cat_ssu_result**

功能描述
-----------------------------------

合并不同样本的ssu注释结果

调用脚本
-----------------------------------

cat_ssu.py

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/annotation/scripts/`

主要命令及功能模块
-----------------------------------

```
    cmd = self.python_path + ' {} -i {} -o {}'.format(self.python_script, self.option('ssu_table_dir').prop['path'], self.output_dir)
```

参数设计
-----------------------------------

```
            {"name": "ssu_table_dir", "type": "infile", "format": "meta_genomic.nr_dir"},
            {'name': "ssu_result", "type": "outfile", "format": "annotation.nr.nr_taxon"}
```

运行逻辑
-----------------------------------

将文件夹中同一格式不同样本的结果文件进行合并

资源配置
-----------------------------------

```
self._cpu = 1
self._memory = '5G'

```
