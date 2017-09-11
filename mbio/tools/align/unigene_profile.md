unigene_profile
==========================

模块Path
-----------

**tools.metaGenomic.uni_gene.mapGeneSet.unigene_profile**

功能描述
-----------------------------------
生成非冗余基因集丰度表


调用程序
-----------------------------------

prepare_profile.pl,
gene_profile.pl

安装路径
-----------------------------------

`bioinfo/statistical/scripts/prepare_profile.pl `
`bioinfo/statistical/scripts/gene_profile.pl`



主要命令及功能模块
-----------------------------------

```
perl prepare_profile.pl
perl gene_profile.pl
```

参数设计
-----------------------------------

```
            {"name": "map_dir", "type": "outfile", "format": "align.map_dir"},  # map结果
            {"name": "fafile", "type": "infile", "format": "sequence.fasta"},  # 非冗余基因集fasta文件
            {"name": "insertsize", "type": "infile", "format": "sample.insertsize_table"},  # 插入片段文件
            {"name": "rpkm_abundance", "type": "outfile", "format": "sequence.profile_table"},  # RPKM丰度
            {"name": "reads_abundance", "type": "outfile", "format": "sequence.profile_table"},  # reads丰度

```

运行逻辑
-----------------------------------

根据map结果计算各样品非冗余基因集的丰度，生成7个文件（基因长度文件、reads丰度文件、reads相对丰度文件、RPKM丰度文件、TPM丰度文件、reads/length丰度文件、reads/length相对丰度文件）


资源配置
-----------------------------------

```
self._cpu = 1
self._memory = '7G'

测试命令
-----------------------------------
from mbio.workflows.single import SingleWorkflow
from biocluster.wsheet import Sheet

data = {
      "id": "profile",
       "type": "tool",
       "name": "statistical.unigene_profile",
       "options": {
           "fafile": "/mnt/ilustre/users/sanger-dev/sg-users/shenyiru/meta/non_redundent/uniGeneSet/gene.uniGeneset.fa",
           "insertsize":"/mnt/ilustre/users/sanger-dev/sg-users/zouxuan/insertSize",
           "map_dir" :"/mnt/ilustre/users/sanger-dev/workspace/20170829/Single_map/MapGeneset/output",
           }
      }

wsheet = Sheet(data=data)
wf = SingleWorkflow(wsheet)
wf.run()

模块测试的结果路径:
/mnt/ilustre/users/sanger-dev/workspace/20170911/Single_profile

测试结果
-----------------------------------
