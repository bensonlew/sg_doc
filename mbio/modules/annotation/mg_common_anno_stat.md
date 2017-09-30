
mg_common_anno_stat
==========================

模块Path
-----------------------------------

**modules.annotation.mg_common_anno_stat**

功能描述
-----------------------------------

宏基因nr/cog/kegg注释部分的丰度统计表模块

主要命令及功能模块
-----------------------------------
```
        ncbi = self.add_tool("taxon.ncbi_taxon")
        nr_stat = self.add_tool("annotation.mg_nr_stat")
        self.nr_level = self.add_tool('annotation.mg_nr_tax_level')
        string2cog = self.add_tool("annotation.cog_anno")
        self.cog_stat = self.add_tool('annotation.mg_cog_stat')
        kegg_anno = self.add_tool("annotation.mg_kegg_anno")
        self.kegg_stat = self.add_tool('annotation.mg_kegg_stat')
```

参数设计
-----------------------------------
```

            {"name": "nr_xml_dir", "type": "infile", "format": "align.blast.blast_xml_dir"},  # nr比对结果文件夹
            {"name": "reads_profile_table", "type": "infile", "format": "sequence.profile_table"},  # 样本序列丰度表
            {"name": "tax_level_dir", "type": "outfile", "format": "annotation.nr_dir"},  # nr注释输出结果
            {"name": "cog_xml_dir", "type": "infile", "format": "align.blast.blast_xml_dir"},  
            # string比对结果文件夹
            {"name": "cog_result_dir", "type": "outfile", "format": "annotation.cog_dir"},  # cog统计结果文件夹
            {"name": "kegg_xml_dir", "type": "infile", "format": "align.blast.blast_xml_dir"},  # kegg比对结果文件夹
            {"name": "kegg_result_dir", "type": "outfile", "format": "annotation.kegg_dir"}  # kegg统计结果文件夹
```

运行逻辑
-----------------------------------
```

1、根据输入的参数对相应的数据库分别用ncbi_taxon、cog_anno、mg_kegg_anno注释xml结果文件夹中各xml文件，
2、根据注释文件和reads_profile文件，nr调用mg_nr_stat进行丰度计算，再调用mg_nr_tax_level进行合并丰度表和进行层级划分；
    cog调用mg_cog_stat进行注释表合并和丰度统计；kegg调用mg_kegg_stat进行注释表合并和丰度统计
    

```


测试命令
-----------------------------------
```
from mbio.workflows.single import SingleWorkflow
from biocluster.wsheet import Sheet

data = {
       "id": "common_anno",
       "type": "module",
       "name": "meta_genomic.common_anno_stat",
       "options": {
            "nr_xml_dir":"/mnt/ilustre/users/sanger-dev/sg-users/yuanshaohua/annotation/nr/MetaDiamond/blast_tmp",
            "reads_profile_table":"/mnt/ilustre/users/sanger-dev/sg-users/yuanshaohua/annotation/gene_profile.reads_number.total.txt",
            "cog_xml_dir":"/mnt/ilustre/users/sanger-dev/sg-users/yuanshaohua/annotation/cog/Single_mg_cog_diamond/MetaDiamond/blast_tmp",
            "kegg_xml_dir":"/mnt/ilustre/users/sanger-dev/sg-users/yuanshaohua/annotation/kegg/Single_kegg_diamond/MetaDiamond/blast_tmp"
           }
      }

wsheet = Sheet(data=data)
wf = SingleWorkflow(wsheet)
wf.run()

测试结果路径：/mnt/ilustre/users/sanger-dev/sg-users/yuanshaohua/annotation/common/Single_common_anno
```


测试结果
-----------------------------------