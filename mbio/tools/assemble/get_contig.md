
工具说明
==========================

Path
-----------

**assemble.get_contig**

程序安装路径
-----------------------------------
/mnt/ilustre/users/sanger-dev/app/bioinfo/metaGenomic/scripts

功能和用途描述
-----------------------------------

宏基因组装之序列处理，去"N"得到contig，长度筛选，质量统计。

使用程序
-----------------------------------

get_scaftig.pl, cut_more.pl

资源配置
-----------------------------------

self._cpu = 1

self._memory = "2G"

主要命令及功能模块
-----------------------------------

perl get_scaftig.pl [scafseq.file] [输出文件的名称前缀]

perl cut_more.pl [run_get_scaftig的输出文件] [最短contig长度] [输出文件的名称前缀]

perl contig_stat.pl [run_cut_more的输出文件] [最短contig长度] [输出文件的名称全称]

参数设计
-----------------------------------

```
            {"name": "scafSeq", "type": "infile", "format": "sequence.fasta"},  # 输入文件,sample.scafSeq
            {"name": "min_contig", "type": "string", "default": "500"},  # 输入最短contig长度，默认500
            {"name": "scaftig", "type": "outfile", "format": "sequence.fasta"},  # 输出文件，scaffold去掉N后的序列
            {"name": "cut_more_scaftig", "type": "outfile", "format": "sequence.fasta"},  # 输出文件，去掉小于最短contig长度的序列
```


运行逻辑
-----------------------------------
1、获取contig；

2、去短contig，默认筛选长度≥500；
