sickle_stat
==========================

模块Path
-----------

**tools.sequence.sickle_stat**

功能描述
-----------------------------------

宏基因统计质控前后的fastq信息

调用脚本
-----------------------------------

readStat.pl

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/seq/scripts/`

主要命令及功能模块
-----------------------------------

```
cmd = "{} {} {} {}".format(self.script_path, stat_list, sickle_list, self.output_dir + "/reads")

```

参数设计
-----------------------------------

```
     {"name": "base_info_dir", "type": "infile", "format": "sequence.baif_dir"},  # 碱基质量统计表的文件夹
     {"name": "sickle_dir", "type": "infile", 'format': "sequence.fastq_dir"},  # 经过质控的fastq文件的文件夹
```

运行逻辑
-----------------------------------

利用readStat.pl脚本根据碱基质量统计文件夹和质控后的fastq文件夹，对质控前后reads的信息进行统计

资源配置
-----------------------------------

```
self._cpu = 10
self._memory = "10G"
```
