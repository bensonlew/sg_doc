格式说明
==========================

Path
-----------

**meta.otu_table**


功能和用途描述
-----------------------------------

OTU表格，用于记录每个样本的OTU信息


格式定义文档
-----------------------------------

样例见格式举例
列之间以制表符分割
行为样本，列为OTU或者物种分类信息(界/门/纲/目/科/属/种),数值代表样本在OTU中的数目的绝对值或者是相对值

格式举例
-----------------------------------

::
 OTU ID  N23     N21     N10     N26     N5      N16     N17     N19     N1      N7      N9      N12     N11
 OTU1    1       0       0       0       0       0       0       0       0       0       0       0       0
 OTU2    0       2       1       1       1       0       0       0       0       0       0       0       0
 OTU3    0       0       1       0       0       1       0       0       0       0       0       0       0
 OTU4    0       0       0       0       0       0       1       0       0       0       0       0       0
 OTU5    0       0       0       0       0       1       0       1       1       0       0       0       0
 OTU6    0       1       0       0       1       0       0       0       0       3       2       0       0
 
                                                                 
属性及其含义
-----------------------------------

``otu_number``  这个合同下OTU数目
``sample_number``   这个合同下的样本数目

相关方法
-----------------------------------

``convert_to_biom`` 将这个otu表格转化为同名的biom文件
``convert_to_shared`` 将otu表格转化为shared文件

