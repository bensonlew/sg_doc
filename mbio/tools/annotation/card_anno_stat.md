card_anno_stat
==========================

模块Path
-----------

**tools.meta_genomic.card_anno_stat**

功能描述
-----------------------------------

宏基因card注释部分各样本的丰度表统计tool

调用脚本
-----------------------------------

card_anno_stat.py

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/annotation/scripts/`

主要命令及功能模块
-----------------------------------

```
 cmd = "{} {} -i {} -r {} -o {}".format(self.python_path, self.python_script, self.option('card_table'),self.option('reads_profile_table'), self.output_dir)

```

参数设计
-----------------------------------

```
       {"name": "card_table", "type": "infile", "format": "sequence.profile_table"}, # 比对到card库的注释结果文件
       {"name": "reads_profile_table", "infile": "infile", "format": "sequence.profile_table"}
       {"name": "card_result", "type": "outfile", "format": "meta_genomic.annotation_dir"}
```

运行逻辑
-----------------------------------

调用脚本根据reads_profile_table以及card_table(注释获得的信息)获取最终的样本信息表

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = "5G"
```
```
