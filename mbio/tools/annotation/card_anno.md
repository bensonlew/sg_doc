card_anno
==========================

模块Path
-----------

**tools.annotation.card_anno**

功能描述
-----------------------------------

宏基因card注释tool

调用脚本
-----------------------------------

meta_card_mongo.py

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/annotation/scripts/`

主要命令及功能模块
-----------------------------------

```
    table = xml2table(self.option('card_xml').prop['path'], self.work_dir + '/tmp_card_table.xls')
    cmd = '{} {} {} {}'.format(self.python_path, self.python_script, table, self.output)

```

参数设计
-----------------------------------

```
        {"name": "blastout", "type": "infile", "format": "align.blast.blast_xml"},
        "name": "anno_result", "type": "outfile", "format": "sequence.profile_table"}

```

运行逻辑
-----------------------------------

调用脚本meta_card_mongo对xml文件进行注释，通过hit_id去数据库里查找信息生成信息表

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = "5G"
```
```