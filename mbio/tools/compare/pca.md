pca
==========================

模块Path
-----------

**tools.meta.beta_diversity.pca**

功能描述
-----------------------------------

进行主成分分析

调用程序
-----------------------------------

clstr_merge.pl
sort_clstr.pl
transeq

安装路径
-----------------------------------


`/mnt/ilustre/users/sanger-dev/app/program/R-3.3.1/bin/R  # R安装路径`


主要命令及功能模块
-----------------------------------

```
perl ordination.pl -type pca -community real_otu_path  -outdir output

```

参数设计
-----------------------------------

```
            {"name": "otutable", "type": "infile",
             "format": "meta.otu.otu_table, meta.otu.tax_summary_dir, toolapps.table"},
            {"name": "level", "type": "string", "default": "otu"},
            {"name": "eigenvalue", "type": "string", "default": "row"},  # column
            {"name": "envtable", "type": "infile", "format": "meta.env_table"},
            {"name": "envlabs", "type": "string", "default": ""},
            {"name": "group_table", "type": "infile", "format": "toolapps.group_table"} 
```

运行逻辑
-----------------------------------

获取丰度表、分组文件以及环境因子文件进行pca分析

资源配置
-----------------------------------

```
self._cpu = 4
self._memory = '5G'

测试命令
-----------------------------------
from mbio.workflows.single import SingleWorkflow
from biocluster.wsheet import Sheet

data = {
       "id": "pca",
       "type": "tool",
       "name": "meta.beta_diversity.pca",
       "options": {
           "otutable": "/mnt/ilustre/users/sanger-dev/sg-users/zouxuan/beta_diversity/tax.xls,
           "envtable":"/mnt/ilustre/users/sanger-dev/sg-users/zouxuan/beta_diversity/env.xls",
           "group_table":"/mnt/ilustre/users/sanger-dev/sg-users/zouxuan/beta_diversity/group"
           }
      }

wsheet = Sheet(data=data)
wf = SingleWorkflow(wsheet)
wf.run()

模块测试的结果路径:
/mnt/ilustre/users/sanger-dev/workspace/20170930/Single_pca/BetaDiversity/Pca

测试结果
-----------------------------------