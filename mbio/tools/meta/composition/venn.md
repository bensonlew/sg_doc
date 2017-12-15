venn
==========================


工具PATH
-----------
**graph.venn_table**


功能描述
-----------------------------------
流程和小工具共用的生成venn图输入文件


主要命令及功能模块
-----------------------------------
```
packages.graph.venn_table
```


参数设计
-----------------------------------
```
            {"name": "otu_table", "type": "infile", "format": "meta.otu.otu_table,meta.otu.tax_summary_dir,denovo_rna.express.express_matrix,toolapps.table"},
            {"name": "group_table", "type": "infile", "format": " meta.otu.group_table, toolapps.group_table"},  # 输入的group表格,不能大于留住
            {"name": "level", "type": "string", "default": "otu"},  # 物种水平
            {"name": "analysis_model", "type": "string", "default": ""}  # venn结果中物种/功能的连接符，因宏基因组的功能名称中含有逗号与默认连接符冲突，特设mg
```


运行逻辑
-----------------------------------
1. "otu_table"丰度表和"group_table"分组文件必须提供，当是多样性流程时，"level"可选物种水平eg：genus/species。

2. 当流程为宏基因组时，"analysis_model"需设置，不为空即可，建议为“mg”。

3. 根据分组去处理丰度表格，用于R统计生成作图文件。


资源配置
------------------------
```
self._cpu = 1
self._memory = '5G'
```

测试命令
-----------------------------------
```
from mbio.workflows.single import SingleWorkflow
from biocluster.wsheet import Sheet

data = {
       "id": "venn_test",
       "type": "tool",
       "name": "graph.venn_table",
       "options": {
           "otu_table": "/mnt/ilustre/users/sanger-dev/sg-users/zhujuan/otu_table.xls",
           "group_table": "/mnt/ilustre/users/sanger-dev/sg-users/zhujuan/group",
           "analysis_model": "mg"
           }
      }

wsheet = Sheet(data=data)
wf = SingleWorkflow(wsheet)
wf.run()
```


测试结果
-----------------------------------
tool测试的结果路径:
/mnt/ilustre/users/sanger-dev/workspace/20170930/Single_venn_test/VennTable/output