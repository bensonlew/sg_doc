cog_anno
==========================

模块Path
-----------

**tools.meta_genomic.cog_anno**

功能描述
-----------------------------------

宏基因cog注释

调用脚本
-----------------------------------

meta_cog_mongo.py

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/annotation/scripts/`

主要命令及功能模块
-----------------------------------

```
     table = xml2table(self.option('string_xml').prop['path'], self.work_dir + '/tmp_string_table.xls')
     cmd = '{} {} {} {}'.format(self.python_path, self.python_script, table, self.output_dir + "/cog_anno_result.xls")

```

参数设计
-----------------------------------

```
       {"name": "string_xml", "type": "infile", "format": "align.blast.blast_xml"},  # 比对到string库的xml文件
```

运行逻辑
-----------------------------------

根据xml转的table文件中的hit_id从参考库中获取信息

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = "5G"
```
