ssu_align_anno
==========================

模块Path
-----------

**modules.meta_genomic.ssu_align_anno**

功能描述
-----------------------------------

宏基因ssu注释模块（包括比对和注释）

主要命令及功能模块
-----------------------------------

```
     self.align = self.add_module("align.blast")  # 核酸比核酸使用blast模块
     self.annotation = self.add_tool("taxon.ssu_taxon")  # 注释信息统计
     self.add_anno = self.add_tool('meta_genomic.add_ssu_result')
```

参数设计
-----------------------------------

```
			{"name": "database", "type": "string"},  # ssu 注释比对的库 可填写 128ssu 119ssu 123ssu
            {"name": "fasta", "type": "infile", "format": "sequence.fasta"},  # 输入的fasta文件
            {'name': 'ssu_anno', "type": "outfile", 'format': 'meta_genomic.profile'}  # 输出文件
``` 

运行逻辑
-----------------------------------

调用blast模块对输入的fastq文件进行ssu数据库比对，结束后，利用tool(ssu_taxon)进行注释，后续使用add_ssu_result对结果进行累加合并
