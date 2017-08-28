diamond(modify)
==========================

模块Path
-----------

**modules.align.diamond**

功能描述
-----------------------------------

宏基因diamond软件比对模块

主要命令及功能模块
-----------------------------------

```
        self.splitfasta = self.add_tool("sequence.split_fasta")
        self.add_tool('align.diamond')
        #self.catblast = self.add_tool("align.cat_blastout")
```

参数设计
-----------------------------------

```
            {"name": "query", "type": "infile", "format": "sequence.fasta"},  # 输入文件
            {"name": "lines", "type": "int", "default": 100000},  # 将fasta序列拆分此行数的多个文件
            {"name": "query_type", "type": "string"，"default": "prot"},  # 输入的查询序列的格式，为nucl或者prot
            {"name": "database", "type": "string", "default": "nr"},
            # 比对数据库 nt nr string swissprot kegg customer_mode ardb card vfdb eggNOG
            {"name": "outfmt", "type": "int", "default": 5},  # 输出格式，只为5
            {"name": "blast", "type": "string","default": "blastp"},#blastp or blastx
            {"name": "identity", "type": "float", "default": 0.0},  #一致性阈值
            {"name": "coverage", "type": "float"，"default": 0.0},  # 覆盖度阈值
            {"name": "evalue", "type": "float", "default": 1e-5},  # evalue值
            {"name": "num_threads", "type": "int", "default": 10},  # cpu数
            {"name": "reference", "type": "infile", "format": "sequence.fasta"},  # 参考序列  选择customer时启用
            {"name": "outxml", "type": "outfile", "format": "align.blast.blast_xml"},  # 输出格式为5时输出
            {"name": "outtable", "type": "outfile", "format": "align.blast.blast_table"},  # 输出格式为6时输出
            {"name": "sensitive", "type": "int", "default": 0} #fast模式
            # 当输出格式为非5，6时，只产生文件不作为outfile
```

运行逻辑
-----------------------------------

1、先使用split_fasta将序列文件拆分；
2、再用diamond工具分别比对，默认产生xml文件集；
3、合并xml结果。