add_ssu_result
==========================

模块Path
-----------

**tools.meta_genomic.add_ssu_result**

功能描述
-----------------------------------

合并同一样本的ssu注释结果

调用脚本
-----------------------------------

add_ssu.py

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/annotation/scripts/`

主要命令及功能模块
-----------------------------------

```
 cmd = self.python_path + ' {} -i {} -o {}'.format(self.python_script, self.option('ssu_result_table').prop['path'], self.output_dir)

```

参数设计
-----------------------------------

```
             {"name": "ssu_result_table", "type": "infile", "format": "meta_genomic.profile"},
             {'name': "result", "type": "outfile", "format": "meta_genomic.profile"}
```

运行逻辑
-----------------------------------

获得一个样本的注释文件，将后面几列累加

资源配置
-----------------------------------

```
self._cpu = 1
self._memory = '5G'

```
