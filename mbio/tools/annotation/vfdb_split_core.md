vfdb_aplit_core
==========================

模块Path
-----------

**tools.sequence.vfdb_aplit_core**

功能描述
-----------------------------------

宏基因vfdb分离核心库未注释序列tool

主要命令及功能模块
-----------------------------------

```
table = xml2table(self.option('blastout').path, self.work_dir + '/temp_blastable.xls')

```

参数设计
-----------------------------------

```
            {"name": "fasta", "type": "infile", "format": "sequence.fasta"},
            {"name": "core_xml", "type": "infile", "format": "align.blast.blast_xml"}
            {"name": "fasta", "type": "outfile", "format": "sequence.fasta"},
```

运行逻辑
-----------------------------------

根据blast结果和原始非冗余基因集或得未比对上的基因集

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = "5G"
```
