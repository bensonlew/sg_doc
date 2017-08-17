venn
==========================

Module 说明
-----------

PATH
-----------

**meta.report.venn**

功能描述
-----------------------------------

统计进行venn图绘制

主要命令及功能模块
-----------------------------------

```
tool：graph.venn_table
```

参数设计
-----------------------------------

```
{"name": "abundtable", "type": "infile", 'format': "abund_table"},##物种/功能丰度表格
{"name": "group_table", "type": "infile", 'format': "meta.otu.group_table"},##分组文件，可挑选样品/合并分组
{"name": "group_detail", "type": "string"},
{"name": "samples", "type": "string"},
{"name": "venn_id", "type": "string"}
```

运行逻辑
-----------------------------------
根据分组去处理丰度表格，用于R统计和作图。

