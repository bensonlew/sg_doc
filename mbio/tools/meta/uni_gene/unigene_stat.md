unigene_profile
==========================

模块Path
-----------

**tools.metaGenomic.uni_gene.mapGeneSet.unigene_profile**

功能描述
-----------------------------------
生成基因数据统计结果文件


调用程序
-----------------------------------

package:uniGene.uni_geneset

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/biocluster/src/mbio/packages/uniGene `



主要命令及功能模块
-----------------------------------

```
self.load_package('uniGene.uni_geneset')
```

参数设计
-----------------------------------

```
{"name": "gene_predict","type":"infile","format": "uniGene.genepre_dir"},#提供GenePredict结果的文件夹
{"name": "fafile","type":"infile","format":"sequence.fasta"} ##unigene_cdhit tool输出文件


```

运行逻辑
-----------------------------------

统计各样品ORF个数、基因总长度、平均长度、最长的长度与最短长度


资源配置
-----------------------------------

```
self._cpu = 2
self._memory = '3G'