enterotype
==========================

模块Path
-----------

**tools.meta.beta_diversity.enterotype**

功能描述
-----------------------------------

进行主成分分析

调用程序
-----------------------------------

Enterotyping.pl

安装路径
-----------------------------------


`/mnt/ilustre/users/sanger-dev/app/program/R-3.3.1/bin/R  # R安装路径`


主要命令及功能模块
-----------------------------------

```
Enterotyping.pl -i otu_table -method bray_curties -o output 
```

参数设计
-----------------------------------

```
            {"name": "otu_table", "type": "infile", "format": "meta.otu.otu_table"}  
            {"name":"method","type":"string","default":"bray"}

```

运行逻辑
-----------------------------------

计算enterotype

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = '3G'

测试命令
-----------------------------------
from mbio.workflows.single import SingleWorkflow
from biocluster.wsheet import Sheet

data = {
       "id": "enterotype",
       "type": "tool",
       "name": "meta.beta_diversity.enterotype",
       "options": {
           "otutable": "/mnt/ilustre/users/sanger-dev/sg-users/zouxuan/beta_diversity/tax.xls,
           }
      }

wsheet = Sheet(data=data)
wf = SingleWorkflow(wsheet)
wf.run()

模块测试的结果路径:


测试结果
-----------------------------------