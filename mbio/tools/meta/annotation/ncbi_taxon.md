ncbi_taxon
==========================

模块Path
-----------

**tools.taxon.ncbi_taxon**

功能描述
-----------------------------------
nr库taxonomy注释

调用脚本
-----------------------------------

xml2table.py
gi2taxon.py

安装路径
-----------------------------------
`/mnt/ilustre/users/sanger-dev/biocluster/src/mbio/packages/align/blast/`
`/mnt/ilustre/users/sanger-dev/biocluster/src/mbio/packages/taxon/`

主要命令及功能模块
-----------------------------------

```
      table = xml2table(self.option('blastout').path, self.work_dir + '/temp_blastable.xls')
      from mbio.packages.taxon.gi2taxon import gi_taxon
      gi_taxons = gi_taxon(set(query_gi.values()), db)

```

参数设计
-----------------------------------

```
            {"name": "blastout", "type": "infile", "format": "align.blast.blast_xml, align.blast.blast_table"},  # 输入文件
            {"name": "taxon_out", "type": "outfile", "format": "annotation.nr.nr_taxon"},  # 输出结果文件
            {"name": "blastdb", 'type': 'string', 'default': 'None'}  # 输入文件的blast比对类型，必须为nr或者nt
```

运行逻辑
-----------------------------------

1、xml文件转换table文件；
2、根据table文件中的gi号从mongo数据库中获取完整taxonomy信息

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = "12G"