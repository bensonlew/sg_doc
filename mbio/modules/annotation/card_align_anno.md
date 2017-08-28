card_align_anno
==========================

模块Path
-----------

**modules.annotation.card_align_anno**

功能描述
-----------------------------------

宏基因card注释模块（包括比对和注释）

主要命令及功能模块
-----------------------------------

```
     self.card_align = self.add_module("align.diamond")
     self.card_anno = self.add_tool("annotation.card_anno")
     self.card_cat = self.add_tool("align.cat_hmmscanout")
```

参数设计
-----------------------------------

```
            {"name": "query", "type": "infile", "format": "sequence.fasta"},  # 输入文件
            {"name": "anno_result", "type": "outfile", "format": "sequence.profile_table"}
```

运行逻辑
-----------------------------------

1、拆分氨基酸fasta文件；
2、调用diamond模块对拆分完的fastq文件进行card数据库比对；
3、输出xml文件调用tool(card_anno)进行分别注释，并用tool(cat_hmmscanout)合并；
