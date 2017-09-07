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
            {"name": "map_dir","type":"outfile","format":"uniGene.build_dir"},##map结果
            {"name": "fafile","type": "infile","format":"sequence.fasta"},#非冗余基因集fasta文件
            {"name":"insertsize","type":"string","default":""},#插入片段文件
            {"name":"rpkm_abundance","type":"outfile","format":"sequence.profile_table"},#RPKM丰度
            {"name":"reads_abundance","type":"outfile","format":"sequence.profile_table"},#reads丰度

```

运行逻辑
-----------------------------------

根据map结果计算各非冗余基因集的丰度


资源配置
-----------------------------------

```
self._cpu = 5
self._memory = '5G'