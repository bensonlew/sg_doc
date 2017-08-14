
工具说明
==========================

Path
-----------

**betadiversity.distancecalc**  # 工具目录设置，待定

程序安装路径
-----------------------------------

/mnt/ilustre/users/sanger/app/qiime  # qiime软件安装路径

使用程序
-----------------------------------

qiime/beta_diversity.py: http://www.qiime.org/

功能和用途描述
-----------------------------------

用于计算otu表中样本的距离矩阵

主要命令及功能模块
-----------------------------------

beta_diversity.py -i otu_table -m binary_euclidean -o beta_div

参数设计
-----------------------------------

::

            {"name": "method", "type": "string", "default": "bray_curtis"},  # 矩阵计算方法选择
            {"name": "input1", "type": "infile", "format": "abudance_table"},  # 输入文件,为abundance_table文本格式需要转换为biom格式
            {"name": "output", "type": "outfile", "format": "distancematrix"},  # 输出文件，为距离矩阵



运行逻辑
-----------------------------------

提供一个abundance_table格式的文件





