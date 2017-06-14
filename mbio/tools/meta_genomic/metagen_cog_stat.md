metagen_cog_stat
==========================

模块Path
-----------

**tools.meta_genomic.metagen_cog_stat**

功能描述
-----------------------------------

宏基因cog注释部分各样本的丰度表统计tool

调用脚本
-----------------------------------

meta_genomic_cog_stat.py

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/annotation/scripts/`

主要命令及功能模块
-----------------------------------

```
 cmd = "{} {} -i {} -r {} -o {}".format(self.python_path, self.python_script, self.option('cog_table').prop['path'],self.option('reads_profile_table').prop['path'], self.output_dir)

```

参数设计
-----------------------------------

```
       {"name": "cog_table", "type": "infile", "format": "annotation.cog.cog_table"}, # 比对到string库的注释结果文件
       {"name": "reads_profile_table", "type": "infile", "format": "sequence.profile_table"}
```

运行逻辑
-----------------------------------

调用脚本根据reads_profile_table以及cog_table(注释获得的信息)获取最终的样本信息表

资源配置
-----------------------------------

```
self._cpu = 5
self._memory = "10G"
```
