bwt_build
==========================

模块Path
-----------

**tools.align.bwt_build**

功能描述
-----------------------------------
2bwt-builder生成索引


调用程序
-----------------------------------
2bwt-builder

安装路径
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/uniGene/soap2.21release  # soapalign2软件安装路径`



主要命令及功能模块
-----------------------------------

```
2bwt-builder fasta_file
```

参数设计
-----------------------------------

```
                   {"name": "fafile","type": "infile","format":"sequence.fasta"},#非冗余基因集fasta文件
                   {"name": "build_dir","type": "outfile","format":"uniGene.build_dir"} ##输出的索引文件夹


```

运行逻辑
-----------------------------------

输入非冗余基因集构建索引


资源配置
-----------------------------------

```
self._cpu = 10
self._memory = '5G'