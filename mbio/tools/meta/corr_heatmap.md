相关性heatmap
===========


工具PATH
---------
**statistical.corr_heatmap**


功能描述
--------
进行相关性heatmap分析。


调用程序
-------
pearsonsCorrelation.py

安装路径
--------
/mnt/ilustre/users/sanger-dev/app/bioinfo/statistical/scripts


主要命令及功能模块
------------------
```
pearsonsCorrelation.py abundance_table env_table pearsons_correlation pearsons_pvalue method
```

参数设置
--------
```
{"name": "otutable", "type": "infile", "format": "meta.otu.otu_table, meta.otu.tax_summary_dir"},   #物种/功能/基因丰度表格
{"name": "level", "type": "string", "default": "otu"}, # 物种水平，当非多样性流程时，"level"参数采用默认值"otu"
{"name": "envtable", "type": "infile", "format": "meta.otu.group_table"},  # 环境因子表
{"name": "envlabs", "type": "string", "default": ""},  # 环境因子名称
{"name": "method", "type": "string", "default": "pearsonr"}, # 相关性方法，["pearsonr", "spearmanr", "kendalltau"]
{"name": "env_cluster", "type": "string", "default": "average"},  # 环境因子聚类方法
{"name": "species_cluster", "type": "string", "default": "average"}, # 物种聚类方法
{"name": "cor_table", "type": "outfile", "format": "meta.otu.group_table"}, # 计算得到的相关性数值表
{"name": "pvalue_table", "type": "outfile", "format": "meta.otu.group_table"}, # 计算得到的pvalue表
{"name": "top_species", "type": "int", "default": 0},做相关性分析的物种数，一般为50
```

运行逻辑
-------
1.必须提供丰度表格和环境因子表格作为输入文件。

2.选择做相关性的分析方法和是否作聚类分析。

3.最终调用pearsonsCorrelation.py做相关性heatmap分析，得到相关性表和pvalue表。


资源配置
-----------------------------------
```
self._cpu = 5
self._memory = '5G'
```

测试命令
-----------------------------------
```
from mbio.workflows.single import SingleWorkflow
from biocluster.wsheet import Sheet

data = {
       "id": "corr_heatmap_kendalltau",
       "type": "tool",
       "name": "statistical.pearsons_correlation",
       "options": {
           "otutable": "/mnt/ilustre/users/sanger-dev/sg-users/zhujuan/corr_heatmap/species.xls",
           "envtable": "/mnt/ilustre/users/sanger-dev/sg-users/zhujuan/dbRDA/env.xls",
           "top_species": 20,
           "method": "kendalltau"
           }
      }

wsheet = Sheet(data=data)
wf = SingleWorkflow(wsheet)
wf.run()
```

测试结果
-----------------------------------
模块测试的结果路径:
/mnt/ilustre/users/sanger-dev/workspace/20170927/Single_corr_heatmap_kendalltau/PearsonsCorrelation/output
