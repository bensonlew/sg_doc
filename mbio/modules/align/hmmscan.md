hmmscan
==========================

模块Path
-----------

**modules.align.hmmscan**

功能描述
-----------------------------------

hmmscan比对dbCAN库

主要命令及功能模块
-----------------------------------

```
self.add_tool("sequence.split_fasta")
self.add_tool('align.hmmscan')
self.add_tool("align.cat_hmmscanout")
```

参数设计
-----------------------------------

```
    {"name": "query", "type": "infile", "format": "sequence.fasta"},  # 输入文件
    {"name": "lines", "type": "int", "default": 200000},  # 将fasta序列拆分此行数的多个文件
    {"name": "align_result", "type": "outfile", "format": "paternity_test.tab"}  # 设置结果文件后面要用
``` 

运行逻辑
-----------------------------------

利用split_fasta将较大的fasta文件进行拆分，拆成比较小的文件
利用hmmscan对每个较小的fasta文件进行比对，获得各个小文件的比对结果
利用cat_hmmscanout将较小的比对结果合并在一起，方便后续进行anno

