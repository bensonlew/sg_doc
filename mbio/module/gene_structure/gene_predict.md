
模块说明
==========================

Path
-----------

**gene_structure.gene_predict**


功能和用途描述
-----------------------------------

以样品为单位做基因预测


主要命令及功能模块
-----------------------------------

tool:assemble.metagene

参数设计
-----------------------------------

```
            {"name": "input_fasta", "type": "infile", "format": "sequence.fasta_dir"},  # 输入文件夹，去掉小于最短contig长度的序列
            {"name": "min_gene", "type": "string", "default": "100"},  # 输入最短基因长度，如100
            {"name": "out", "type": "outfile", "format": "sequence.fasta_dir"}, # 输出文件，基因预测输出路径
#            {"name": "fna", "type": "outfile", "format": "sequence.fasta"},  # 输出文件，样本的核酸序列
#            {"name": "cut_more_fna", "type": "outfile", "format": "sequence.fasta"},  # 输出文件，样本去除最小值后的核酸序列
#            {"name": "faa", "type": "outfile", "format": "sequence.fasta"},  # 输出文件，样本的蛋白序列
   ```


运行逻辑
-----------------------------------
1、对各个样品分别进行基因预测；

2、对预测结果进行统计，绘图；

测试命令
-----------------------------------
python /mnt/ilustre/users/sanger-dev/sg-users/guhaidong/metagene_module2.py

模块测试的结果路径
-----------------------------------
/mnt/ilustre/users/sanger-dev/workspace/20170913/Single_module_metagene

测试结果
-----------------------------------