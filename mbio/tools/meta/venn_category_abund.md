生成venn分析中的物种/功能/基因分布饼图
===========


工具PATH
---------

**meta.venn_category_abund**


功能描述
--------
生成venn每个Category对应的百分比文件，用于venn分析中的物种/功能/基因分布饼图


参数设置
--------
```
{"name": "abund_file", "type": "infile", "format": "meta.otu.otu_table"},  # 用于计算venn的丰度表格
{"name": "venn_table", "type": "infile", "format": "graph.venn_table"},  # venn分析得到的“venn_table.xls”
{"name": "other", "type": "float", "default": "0.0001,0.0005,0.001,0.01,0.02,0.05"},
{"name": "out_table", "type": "outfile", "format": "graph.venn_table"},
```

运行逻辑
-------
```
1.必须提供"abund_file"和"venn_table"文件。

2.结合"abund_file"和"venn_table"计算每个category（eg：H & L）所含物种/功能在所有样品中的占比，共计算other为0.0001,0.0005,0.001,0.01,0.02,0.05的六种情况。
```


资源配置
------------------------
```
self._cpu = 1
self._memory = '3G'
```

测试命令
-----------------------------------
```
from mbio.workflows.single import SingleWorkflow
from biocluster.wsheet import Sheet

data = {
       "id": "venn_category_abund",
       "type": "tool",
       "name": "meta.venn_category_abund",
       "options": {
           "abund_file": "/mnt/ilustre/users/sanger-dev/sg-users/zhujuan/otu_table.xls",
           "venn_table": "/mnt/ilustre/users/sanger-dev/workspace/20170930/Single_venn_test/VennTable/output/venn_table.xls",
           }
      }

wsheet = Sheet(data=data)
wf = SingleWorkflow(wsheet)
wf.run()
```