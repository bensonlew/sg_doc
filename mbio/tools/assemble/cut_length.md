
工具说明
==========================

Path
-----------

**assemble.cut_length**

程序安装路径
-----------------------------------
/mnt/ilustre/users/sanger-dev/app/bioinfo/metaGenomic/scripts

功能和用途描述
-----------------------------------

将拼接结果按1000bp分割。

使用程序
-----------------------------------

split_length.pl

资源配置
-----------------------------------

self._cpu = 1

self._memory = "2G"

主要命令及功能模块
-----------------------------------

perl split_length.pl [fasta] [长度标准] [输出名称前缀]

参数设计
-----------------------------------

```
            {"name": "contig", "type": "infile", "format": "sequence.fasta_dir"},  # 输入contig文件路径
            {"name": "cut_length", "type": "float", "default": "1000"},  # 拆分序列长度标准，默认1000
            {"name": "cut_contig", "type": "outfile", "format": "sequence.fasta_dir"},  # 输出contig文件路径
            {"name": "short_contig", "type": "outfile", "format": "sequence.fasta"},  #输出供newbler拼接使用的contig文件
```


运行逻辑
-----------------------------------
1、将输入的序列按1000bp进行拆分，大于等于1000bp为一个fa，小于1000bp为一个fa；

2. 将小于1000bp的fa合并为newbler的输入结果。

