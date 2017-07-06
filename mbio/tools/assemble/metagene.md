
工具说明
==========================

Path
-----------

**assemble.metagene **

程序安装路径
-----------------------------------

/mnt/ilustre/users/sanger/app/bioinfo/metaGenomic/metagene

功能和用途描述
-----------------------------------

运行metagene，进行基因预测


使用程序
-----------------------------------

软件：

metagene：http://metagene.cb.k.u-tokyo.ac.jp/

/mnt/ilustre/users/sanger/app/bioinfo/seq/EMBOSS-6.6.0/emboss/transeq

脚本：

/mnt/ilustre/users/sanger/app/bioinfo/metaGenomic/scripts/metagene_seqs.pl

/mnt/ilustre/users/sanger/app/bioinfo/metaGenomic/scripts/cut_more.pl



资源配置
-----------------------------------

self._cpu = 1

self._memory = "3G"


主要命令及功能模块
-----------------------------------

metagene <input> -m > <output>

perl   metagene_seqs.pl -m <csv> -f  <scaftig> -o <fna>

perl cut_more.pl <run_MetageneSeqs的输出文件> <最短contig长度> <输出文件的名称前缀>

transeq -sequence <fna.more> -table 11 -trim -outseq <faa>

参数设计
-----------------------------------

::

            {"name": "cut_more_scaftig", "type": "infile", "format": "sequence.fasta"},
            # 输出文件，去掉小于最短contig长度的序列
            {"name": "sample_name", "type": "string"},  # 样本的名称
            {"name": "min_gene", "type": "string", "default": "100"},  # 输入最短基因长度，如100
            {"name": "fna", "type": "outfile", "format": "sequence.fasta"},  # 输出文件，样本的核酸序列
            {"name": "cut_more_fna", "type": "outfile", "format": "sequence.fasta"},  # 输出文件，样本去除最小值后的核酸序列
            {"name": "faa", "type": "outfile", "format": "sequence.fasta"},  # 输出文件，样本的蛋白序列
            


运行逻辑
-----------------------------------

1、运行metagene,得到csv文件

2、运行metagene_seqs.pl，得到氨基酸序列；

3、运行cut_more.pl，去除低质量序列；

4、运行transeq，得到对应的蛋白序列；

5、调用函数step_count,统计步长信息。