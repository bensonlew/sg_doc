
工具说明
==========================

Path
-----------

**gene_structure.metagene**

程序安装路径
-----------------------------------
/mnt/ilustre/users/sanger-dev/app/bioinfo/metaGenomic/scripts
/mnt/ilustre/users/sanger-dev/app/bioinfo/seq/EMBOSS-6.6.0/emboss

功能和用途描述
-----------------------------------

对单个样品做基因预测

使用程序
-----------------------------------

软件：

metagene：http://metagene.cb.k.u-tokyo.ac.jp/

脚本：

/mnt/ilustre/users/sanger/app/bioinfo/seq/EMBOSS-6.6.0/emboss/transeqmetagene_seqs.pl，cut_more.pl，transeq

资源配置
-----------------------------------

self._cpu = 1

self._memory = "3G"

主要命令及功能模块
-----------------------------------

metagene.sh  [metagene路径] [contig] [output]
metagene_seqs.pl -m [csv] -f [scaftig] -o [fna]
cut_more.pl [run_MetageneSeqs的输出文件] [最短contig长度] [输出文件的名称前缀]
transeq -sequence [fna.more] -table 11 -trim -outseq [faa]

参数设计
-----------------------------------

```
            {"name": "cut_more_scaftig", "type": "infile", "format": "sequence.fasta"},  # 输出文件，去掉小于最短contig长度的序列
            {"name": "sample_name", "type": "string"},  # 样本的名称
            {"name": "min_gene", "type": "string", "default": "100"},  # 输入最短基因长度，如100
            {"name": "fna", "type": "outfile", "format": "sequence.fasta"},  # 输出文件，样本的核酸序列
            {"name": "cut_more_fna", "type": "outfile", "format": "sequence.fasta"},  # 输出文件，样本去除最小值后的核酸序列
            {"name": "faa", "type": "outfile", "format": "sequence.fasta"},  # 输出文件，样本的蛋白序列
   ```


运行逻辑
-----------------------------------
1、对单个样品做基因预测；

2、根据预测结果提取序列；

3、长度筛选；

4、将fa转换为faa格式。

5、长度分布统计