
格式说明
==========================

Path
-----------

**sequence.fasta_dir**


功能和用途描述
-----------------------------------

用于存储一组fasta文件


格式定义文档
-----------------------------------

后缀名称为fa/fasta/faa的文件路径

格式举例
-----------------------------------

::
 file_name	name
 fasta1.fasta	name1
 fasta2.fa	name2
 fasta3.fasta	name3
 fasta4.faa	name4
                                                                 
属性及其含义
-----------------------------------

* ``file_number``   文件夹中fasta文件的数目

相关方法
-----------------------------------

``cat_fasta``   将所有的fasta合并成一个fasta文件
``get_fasta_number``    获取这个文件夹下fasta的数目
``filter_name``         选择包含特定字符的fasta文件

