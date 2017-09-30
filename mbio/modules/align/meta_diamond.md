meta_diamond
==========================

模块Path
-----------

**modules.align.meta_diamond**

功能描述
-----------------------------------

宏基因diamond软件比对模块

主要命令及功能模块
-----------------------------------

```
        self.splitfasta = self.add_tool("sequence.split_fasta")
        self.add_tool('align.meta_diamond')
        self.catblast = self.add_tool("align.cat_blastout")

```

参数设计
-----------------------------------

```
            {"name": "query", "type": "infile", "format": "sequence.fasta"},  # 输入文件
            {"name": "lines", "type": "int", "default": 500},  # 将fasta序列拆分此行数的多个文件
            {"name": "query_type", "type": "string"},  # 输入的查询序列的格式，为nucl或者prot
            {"name": "database", "type": "string", "default": "nr"},
            # 比对数据库 nt nr string swissprot kegg customer_mode
            {"name": "outfmt", "type": "int", "default": 5},  # 输出格式，只为5
            {"name": "blast", "type": "string"},
            {"name": "reference", "type": "infile", "format": "sequence.fasta"},  # 参考序列  选择customer时启用
            {"name": "reference_type", "type": "string"},  # 参考序列(库)的类型  为nucl或者prot
            {"name": "evalue", "type": "float", "default": 1e-5},  # evalue值
            {"name": "num_threads", "type": "int", "default": 10},  # cpu数
            {"name": "outxml", "type": "outfile", "format": "align.blast.blast_xml"},  # 输出格式为5时输出
            {"name": "outtable", "type": "outfile", "format": "align.blast.blast_table"},  # 输出格式为6时输出
            # 当输出格式为非5，6时，只产生文件不作为outfile
```

运行逻辑
-----------------------------------

先使用split_fasta将序列文件拆分，再用meta_diamond工具分别比对，产生xml文件集，放入特定文件夹下


可能存在的问题
-----------------------------------
暂无


测试命令
-----------------------------------
```
from mbio.workflows.single import SingleWorkflow
from biocluster.wsheet import Sheet

data = {
       "id": "nr_diamond",
       "type": "module",
       "name": "align.meta_diamond",
       "options": {
           "query": "/mnt/ilustre/users/sanger-dev/sg-users/yuanshaohua/annotation/gao.gene.uniGeneset.faa",
           "query_type":"prot",
           "database":"nr",
           "lines":50000
           }
      }

wsheet = Sheet(data=data)
wf = SingleWorkflow(wsheet)
wf.run()

测试结果路径：/mnt/ilustre/users/sanger-dev/sg-users/yuanshaohua/annotation/nr/MetaDiamond
```


测试结果
-----------------------------------