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
{"name": "insertSize","type":"infile","format":"uniGene.insert_size"}, ##插入片段长度
{"name": "SOAPDir","type":"string"}, #soap结果文件夹路径
{"name": "ra_dir","type":"string"},##先用rawData路径做测试，之后改
{"name": "fafile","type":"infile","format":"sequence.fasta"}, ##unigene_cdhit tool输出文件
{"name": "profile_out","type":"outfile","format":"uniGene.profile_table"}, ##gene_profile.reads_number.txt
 {"name": "profile_read_percent","type":"outfile","format":"uniGene.profile_table"},##gene_profile.reads_percent.txt
{"name": "profile_base_percent","type":"outfile","format":"uniGene.profile_table"}##gene_profile.base_number.txt

```

运行逻辑
-----------------------------------

根据map结果计算各非冗余基因集的丰度


资源配置
-----------------------------------

```
self._cpu = 2
self._memory = '3G'