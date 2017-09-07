card_annotation
==========================

模块Path
-----------

**modules.annotation.card_annotation**

功能描述
-----------------------------------

宏基因card注释模块（包括比对和注释）

主要命令及功能模块
-----------------------------------

```
     self.card_align = self.add_module("align.diamond")
     self.anno = self.add_tool("annotation.card_anno")
     self.hmmscan = self.add_tool("align.cat_hmmscanout")
     self.anno = self.add_tool("annotation.card_anno_stat")
```

参数设计
-----------------------------------

```
			{"name": "query", "type": "infile", "format": "sequence.fasta"},  # 非冗余基因集的输出
            {"name": "reads_profile_table", "type": "infile", "format": "sequence.profile_table"},  # gene_profile.reads_number.txt
            {"name": "card_profile", "type": "outfile", "format": "sequence.profile_table"},
            {"name": "card_category_profile", "type": "outfile", "format": "sequence.profile_table"}
            {"name": "card_ARO_gene_number", "type": "outfile", "format": "card_ARO_gene_talle}
```

运行逻辑
-----------------------------------

1、调用meta_diamond模块对输入的fasta文件进行card数据库比对；
2、输出xml文件调用tool(card_anno)进行分别注释
3、将注释文件更改根据reads_profile_table文件以及tool(card_anno_stat)进行注释统计；
