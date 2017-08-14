build_gene
==========================

模块Path
-----------

**tools.metaGenomic.uni_gene.mapGeneSet.build_gene**

功能描述
-----------------------------------

生成索引

调用程序
-----------------------------------

2bwt-builder

安装路径
-----------------------------------

/mnt/ilustre/users/sanger-dev/app/bioinfo/uniGene/soap2.21release  # soapalign2软件安装路径`



主要命令及功能模块
-----------------------------------

```
2bwt-builder outDir/index/name
```

参数设计
-----------------------------------

```
{"name": "fafile","type": "infile","format":"sequence.fasta"},#来自unigene_cdhit的输出文件
 {"name": "build_dir","type": "outfile","format":"uniGene.build_dir"} ##build_gene输出的索引文件夹

```

运行逻辑
-----------------------------------

通过2bwt-builder生成索引

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = '3G'