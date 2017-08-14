cdhit_compare_between
==========================

模块Path
-----------

**tools.metaGenomic.uni_gene.cdhit_unigen.cdhit_compare_between**

功能描述
-----------------------------------

两个fasta文件序列比对去冗余

调用程序
-----------------------------------

cd-hit-est-2d

安装路径
-----------------------------------

/mnt/ilustre/users/sanger-dev/app/bioinfo/gene-structure/TransDecoder-3.0.0/util/bin/  # cd-hit软件安装路径`



主要命令及功能模块
-----------------------------------

```
cd-hit-est-2d -i gene.geneset.tmp.fa.div-1 -i2 gene.geneset.tmp.fa.div-2 -o gene.geneset.tmp.fa.div-n/vs.1 -c 0.95 -aS 0.9 -n 8 -G 0 -M 0 -d 0 -r 1 -g 1 -T 8
```

参数设计
-----------------------------------

```
{"name": "db1", "type": "infile", "format": "fasta"},  # 输入序列1文件
{"name": "db2", "type": "infile", "format": "fasta"},  # 输入序列2文件
{"name": "identity","type":"float","default":0.95},##给出cdhit的参数identity
{"name":"coverage","type":"float","default":0.9},##给出cdhit的参数coverage
{"name": "word_length", "type": "int", "default": "8"},  # 碱基长度
{"name": "memory_limit", "type": "int", "default":0},  # 内存大小，0为无限制
{"name": "method", "type": "int", "default": 0},  # 1为全局比对，0为局部比对
{"name": "direction", "type": "int", "default": 1},  # 1为双向比对，0为单向比对
{"name": "num_threads", "type": "int", "default": 8},  # cpu数
{"name": "output", "type": "outfile", "format": "blastxml"}  # 输出结果

```

运行逻辑
-----------------------------------

根据设置的覆盖度、相似性两组序列进行比对，去除冗余


资源配置
-----------------------------------

```
self._cpu = 8
self._memory = '6G'