
工具说明
==========================

Path
-----------

**sequence.length_distribute**

程序安装路径
-----------------------------------
/mnt/ilustre/users/sanger-dev/app/bioinfo/metaGenomic/scripts

功能和用途描述
-----------------------------------

对fasta序列做长度分布图输入表。

使用程序
-----------------------------------

seq-distribut.pl

资源配置
-----------------------------------

self._cpu = 1

self._memory = "2G"

主要命令及功能模块
-----------------------------------

perl seq-distribut.pl  -f <fa序列>  -x <长度跨越区间> -m  <最小统计的contig长度>

参数设计
-----------------------------------

```
            {"name": "contig_dir", "type": "infile", "format": "sequence.fasta_dir"},  # 输入文件，组装后的序列路径
            {"name": "len_range", "type": "string"},  # 长度分布取值范围，逗号分隔
            {"name": "min_contig", "type": "int", "default": 300},  #  统计到最小的contig长度
            {"name": "len_dir", "type": "outfile", "format": "sequence.profile_table_dir"},  # 输出文件，统计组装后的结果文件路径
```


运行逻辑
-----------------------------------

1、调用脚本seq-distribut.pl，做fasta长度分布图；