
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

宏基因组装之序列处理，去"N"得到contig，长度筛选，质量统计。

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
            {"name": "idba_contig", "type": "infile", "format": "sequence.fasta_dir"},  # 输入idba拼接结果路径（可能需要再给第二次拼接的路径）
            {"name": "newbler_contig", "type": "infile", "format": "sequence.fasta_dir"},  # 输入newbler拼接结果路径
            {"name": "min_contig", "type": "int", "default": 300},  # 输入最短contig长度，默认300
            {"name": "result". "type": "outfile", "format": "sequence.fasta_dir"},  #输出fasta结果文件夹
```

运行逻辑
-----------------------------------
1、处理contig结果，并挑选300bp以上的做最终结果；

