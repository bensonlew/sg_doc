cdhit_split_fasta
==========================

模块Path
-----------

**tools.metaGenomic.uni_gene.cdhit_unigen.cdhit_split_fasta**

功能描述
-----------------------------------

fasta文件切分

调用程序
-----------------------------------

cd-hit-div

安装路径
-----------------------------------

/mnt/ilustre/users/sanger-dev/app/bioinfo/gene-structure/TransDecoder-3.0.0/util/bin/  # cd-hit软件安装路径`



主要命令及功能模块
-----------------------------------

```
cd-hit-div -i gene.geneset.tmp.fa -o gene.geneset.tmp.fa.div -div n
```

参数设计
-----------------------------------

```
{"name":"gene_tmp_fa","type":"infile","format":"sequence.fasta"},#合并序列
{"name": "number","type":"int","default": ""},#切分为几份
{"name":"ou_dir","type":"string","default":""}#输出路径
```

运行逻辑
-----------------------------------

读取预测的基因文件夹，并在序列前加上样品合并输出为一个fasta文件

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = '3G'
```

