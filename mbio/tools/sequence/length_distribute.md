
工具说明
==========================

Path
-----------

**assemble.contig_stat**

程序安装路径
-----------------------------------
/mnt/ilustre/users/sanger-dev/app/bioinfo/metaGenomic/scripts

功能和用途描述
-----------------------------------

对fasta序列做长度分布图。

使用程序
-----------------------------------

length_distribute.py  #拆分自metagen_stat.py

资源配置
-----------------------------------

self._cpu = 1

self._memory = "2G"

主要命令及功能模块
-----------------------------------

python length_distribute.py  -sequence <fa序列>  -len_stat <长度分布文件>

参数设计
-----------------------------------

```
            {"name": "contig_dir", "type": "infile", "format": "sequence.fasta_dir"},  # 输入文件，组装后的序列路径
            {"name": "len_dir", "type": "outfile", "format": "sequence.profile_table"},  # 输出文件，统计组装后的结果文件
```


运行逻辑
-----------------------------------

1、调用函数step_count，做fasta长度分布图；