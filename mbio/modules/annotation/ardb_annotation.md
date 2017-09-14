ardb_annotation
==========================

模块Path
-----------

**modules.annotation.ardb_annotation**

功能描述
-----------------------------------

宏基因ardb注释模块（包括比对、注释和丰度统计）


主要命令及功能模块
-----------------------------------

```
        self.split_fasta = self.add_tool("sequence.split_fasta")
        self.ardb_align_tools = []
        self.ardb_anno_tool = self.add_tool("annotation.ardb_anno")
        self.ardb_anno_stat_tool = self.add_tool("annotation.ardb_anno_stat")
```

参数设计
-----------------------------------

```
            {"name": "query", "type": "infile", "format": "sequence.fasta"},  # 输入文件
            {"name": "lines", "type": "int", "default": 100000},  # 将fasta序列拆分此行数的多个文件
            {"name": "reads_profile_table", "type": "infile", "format": "sequence.profile_table"},#基因丰度表
            {"name": "evalue", "type": "float", "default": 1e-5},  # evalue值
            {"name": "ardb_result_dir", "type": "outfile", "format": "annotation.mg_anno_dir"}  # 设置结果文件后面要用
```

运行逻辑
-----------------------------------
```
1、拆分序列；
2、调用diamond模块分别对拆分的fasta文件进行ardb数据库比对，得到xml文件；
2、输入比对xml结果的文件夹，调用tool(ardb_anno)对xml文件转化成table并合并为一张表，然后注释结果；
3、最后根据注释结果和reads_profile_table丰度文件，调用tool(ardb_anno_stat)进行注释丰度统计；
```

可能存在的问题
-----------------------------------
暂无


测试命令
-----------------------------------
```
from mbio.workflows.single import SingleWorkflow
from biocluster.wsheet import Sheet

data = {
       "id": "ardb_annotation_module",
       "type": "module",
       "name": "annotation.ardb_annotation",
       "options": {
            "query": "/mnt/ilustre/users/sanger-dev/sg-users/yuanshaohua/gao.gene.uniGeneset.faa",
            "lines":100000,
            "reads_profile_table":"/mnt/ilustre/users/sanger-dev/sg-users/yuanshaohua/annotation/gene_profile.reads_number.total.txt"
           }
      }

wsheet = Sheet(data=data)
wf = SingleWorkflow(wsheet)
wf.run()

测试结果路径：/mnt/ilustre/users/sanger-dev/sg-users/yuanshaohua/annotation/ardb/Single_ardb_annotation_module
```


测试结果
-----------------------------------