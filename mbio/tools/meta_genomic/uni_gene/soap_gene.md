soap_gene
==========================

模块Path
-----------

**tools.metaGenomic.uni_gene.mapGeneSet.all_soap_gene.soap_gene**

功能描述
-----------------------------------
每个样品的clean reads mappong到非冗余基因集上


调用程序
-----------------------------------

soap2

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/uniGene/soap2.21release  # soapalign2软件安装路径`



主要命令及功能模块
-----------------------------------

```
soap2 -a 1.fq -b 2.fq -D index -o soap.pair.pe -2 soap.pair.se -r 1 -l 35 -M 4 -S -p 6 -v 20 -c 0.95 -m 315 -x 515 2
soap2 -a s.fq -D index -o single.se -r 1 -l 35 -M 4 -S -p 6 -v 20 -c 0.95 -m 295 -x 495 2
```

参数设计
-----------------------------------

```
{"name": "sample","type":"string"},#sample的名称
{"name": "insertSize","type":"int"},#插入片段长度
{"name": "index","type":"infile","format":"uniGene.build_dir"},##build_gene生成的索引文件
{"name": "QC_dir","type":"infile","format":""} ##QC后序列的文件夹
{"name": "repeat","type":"int","default":1}, ##how to report repeat hits, 0=none, 1=random one, 2=all
{"name": "seed","type":"int","default":35}, ##align the initial n bps as a seed means whole lengths of read
{"name": "mode","type":"int","default":4}, ##match mode for each read or the seed part of read, which shouldn't contain more than 2 mismatches: 0 for exact mathc only; 1 for 1 mismatch; 2 for 2 mismatch; 4 for find the best hits
{"name": "processors","type":"int","default":6},
{"name": "mismatch","type":"int","default":20}, ##maximum number of mismatches allowed on a read
{"name": "identity","type":"float","default":0.95} ##identity

```

运行逻辑
-----------------------------------

通过SOAPaligner将clean reads mapping到非冗余基因集


资源配置
-----------------------------------

```
self._cpu = 2
self._memory = '3G'