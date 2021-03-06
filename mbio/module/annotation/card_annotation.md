card_annotation
==========================

模块Path
-----------

**modules.annotation.card_align_anno**

功能描述
-----------------------------------

宏基因card注释模块（包括比对和注释和统计）

主要命令及功能模块
-----------------------------------

```
     self.ardb_align_anno = self.add_module("annotation.card_align_anno")
     self.anno_stat = self.add_tool("annotation.card_anno_stat")
```

参数设计
-----------------------------------

```
            {"name": "query", "type": "infile", "format": "sequence.fasta"},  # 输入文件
            {"name": "reads_profile_table", "type": "infile", "format": "sequence.profile_table"},  # gene_profile.reads_number.txt
            {"name": "card_out_dir", "type": "outfile", "format": "meta_genomic.annotation_dir"}
```

运行逻辑
-----------------------------------

1、拆分氨基酸fasta文件；
2、调用diamond工具对拆分完的fastq文件进行card数据库比对；
3、输出xml文件调用tool(card_anno)进行分别注释，并用tool(cat_hmmscanout)合并；
4、最后根据reads_profile_table文件以及tool(card_anno_stat)进行注释统计；