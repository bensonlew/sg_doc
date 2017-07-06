
工具说明
==========================

Path
-----------

**assemble.soap_denovo**

程序安装路径
-----------------------------------

/mnt/ilustre/users/sanger/app/bioinfo/metaGenomic/scripts

功能和用途描述
-----------------------------------

运行get_scaftig.pl，去N
运行cut_more.pl，去低质量
运行contig_stat.pl，统计序列信息


使用程序
-----------------------------------

脚本：
get_scaftig.pl
cut_more.pl
contig_stat.pl

资源配置
-----------------------------------

self._cpu = 1

self._memory = "2G"


主要命令及功能模块
-----------------------------------

perl get_scaftig.pl <scafseq.file> <输出文件的名称前缀>
perl cut_more.pl <run_get_scaftig的输出文件> <最短contig长度> <输出文件的名称前缀>
perl contig_stat.pl <run_cut_more的输出文件> <最短contig长度> <输出文件的名称全称>

参数设计
-----------------------------------

::

            {"name": "scafSeq", "type": "infile", "format": "sequence.fasta"},  # 输入文件,sample.scafSeq
            {"name": "min_contig", "type": "string", "default": "500"},  # 输入最短contig长度，默认500
            {"name": "scaftig", "type": "outfile", "format": "sequence.fasta"},  # 输出文件，scaffold去掉N后的序列
            {"name": "cut_more_scaftig", "type": "outfile", "format": "sequence.fasta"},  # 输出文件，去掉小于最短contig长度的序列
            {"name": "scaftig_stat", "type": "outfile", "format": "sequence.profile_table"},  # 输出文件，对组装后的序列进行信息统计
            


运行逻辑
-----------------------------------

1、运行get_scaftig.pl，去N

2、运行cut_more.pl，去低质量

3、运行contig_stat.pl，统计序列信息