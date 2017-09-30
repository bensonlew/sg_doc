vfdb_annotation
==========================

模块Path
-----------

**modules.annotation.vfdb_annotation**

功能描述
-----------------------------------

宏基因vfdb注释模块

主要命令及功能模块
-----------------------------------

```
     self.ardb_align = self.add_module("align.meta_diamond")
     self.anno_stat = self.add_tool("annotation.vfdb_anno_stat")
     self.anno_stat = self.add_module("annotation.vfdb_anno")
     self.anno_stat = self.add_tool("annotation.vfdb_split_core")
```

参数设计
-----------------------------------

```
            {"name": "query", "type": "infile", "format": "sequence.fasta"},  # 输入文件
            {"name": "reads_profile_table", "type": "infile", "format": "sequence.profile_table"},  # gene_profile.reads_number.txt
            {"name": "vfdb_out_dir", "type": "outfile", "format": "meta_genomic.annotation_dir"}
```

运行逻辑
-----------------------------------
```

1、调用diamond模块拆分氨基酸序列并分别于vfdb核心数据库比对；
2、调用vfdb_split_core工具分离没比对上核心库的序列，再调用diamond模块比对预测数据库；
3、调用vfdb_anno工具对核心和预测比对文件分别进行注释；
4、根据reads_profile_table文件以及核心和预测注释表，调用tool(vfdb_anno_stat)进行注释统计；
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
       "id": "vfdb_module",
       "type": "module",
       "name": "annotation.vfdb_annotation",
       "options": {
           "query": "/mnt/ilustre/users/sanger-dev/sg-users/yuanshaohua/gao.gene.uniGeneset.faa",
           "lines":1000000, 
           "reads_profile_table":"/mnt/ilustre/users/sanger-dev/sg-users/yuanshaohua/annotation/gene_profile.reads_number.total.txt"
           }
      }

wsheet = Sheet(data=data)
wf = SingleWorkflow(wsheet)
wf.run()

测试结果路径：/mnt/ilustre/users/sanger-dev/sg-users/yuanshaohua/annotation/vfdb/Single_vfdb_module
```


测试结果
-----------------------------------
