metagen_kegg_anno
==========================

模块Path
-----------

**tools.meta_genomic.metagen_kegg_anno**

功能描述
-----------------------------------

宏基因kegg注释tool

调用脚本
-----------------------------------

meta_kegg_mongo.py

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/annotation/scripts/`

主要命令及功能模块
-----------------------------------

```
    table = xml2table(self.option('kegg_xml').prop['path'], self.work_dir + '/tmp_kegg_table.xls')
    cmd = '{} {} {} {}'.format(self.python_path, self.python_script, table, self.output_dir)

```

参数设计
-----------------------------------

```
        {"name": "kegg_xml", "type": "infile", "format": "align.blast.blast_xml"},  # 输入的比对结果xml文件
        {"name": "result_dir", "type": "outfile", "format": "meta_genomic.kegg_dir"}  # 输出结果文件夹
```

运行逻辑
-----------------------------------

调用脚本meta_kegg_mongo对xml文件进行注释，通过hit_id去数据库里查找信息生成信息表

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = "10G"
```
