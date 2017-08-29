
工具说明
==========================

Path
-----------

**assemble.sort_result**

程序安装路径
-----------------------------------
/mnt/ilustre/users/sanger-dev/app/bioinfo/metaGenomic/scripts

功能和用途描述
-----------------------------------

从less1000的fasta中挑选出没有在newbler拼接上的contig，并且挑选大于等于最短contig长度的，放回至原样品。

使用程序
-----------------------------------

treat_result.pl  #需要修改treat_newbler_result.pl脚本

资源配置
-----------------------------------

self._cpu = 1

self._memory = "2G"

主要命令及功能模块
-----------------------------------

perl treat_result.pl [idba拼接结果路径] [newbler拼接结果路径] [最短contig长度]

参数设计
-----------------------------------

```
            {"name": "idba_contig", "type": "infile", "format": "sequence.fasta_dir"},  # 输入idba拼接结果路径
            {"name": "newbler", "type": "string"},  # 输入newbler拼接结果路径
            {"name": "min_contig", "type": "int", "default": 300},  # 输入最短contig长度，默认300
            {"name": "result". "type": "outfile", "format": "sequence.fasta_dir"},  #输出fasta结果文件夹
```

运行逻辑
-----------------------------------
1、从less1000的fasta中挑选出没有在newbler拼接上的contig，并且挑选大于等于最短contig长度的，放回至原样品；

2、输出整合后的结果路径

