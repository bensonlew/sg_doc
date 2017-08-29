cazy_align_anno
==========================

模块Path
-----------

**modules.meta_genomic.cazy_align_anno**

功能描述
-----------------------------------

宏基因cazy注释模块（包括比对和注释）

主要命令及功能模块
-----------------------------------

```
     self.hmmscan = self.add_module("align.hmmscan")  # 使用统一的质控模块，用参数控制使用该模块
     self.anno = self.add_tool("annotation.cazy_anno")  # 质控前后序列信息统计
```

参数设计
-----------------------------------

```
			{"name": "query", "type": "infile", "format": "sequence.fasta"},  # 非冗余基因集的输出
            {"name": "reads_profile_table", "type": "infile", "format": "sequence.profile_table"},  # gene_profile.reads_number.txt
            {"name": "cazy_family_profile", "type": "outfile", "format": "sequence.profile_table"},
            {"name": "cazy_class_profile", "type": "outfile", "format": "sequence.profile_table"}
``` 

运行逻辑
-----------------------------------

调用hmmscan模块对输入的fastq文件进行cazy数据库比对，结束后，根据reads_profile_table文件以及tool(cazy_anno)进行注释
