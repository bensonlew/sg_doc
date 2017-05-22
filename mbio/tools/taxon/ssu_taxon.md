ssu_taxon
==========================

模块Path
-----------

**tools.taxon.ssu_taxon**

功能描述
-----------------------------------

将序列比对silva库的结果进行ssu物种注释

调用程序
-----------------------------------

无

安装路径
-----------------------------------

无

主要命令及功能模块
-----------------------------------

```
SsuTaxonTool.taxon_ssu()  # 函数根据比对结果查询mongo数据库，获取注释结果
```

参数设计
-----------------------------------

```
{"name": "blastout", "type": "infile", "format": "align.blast.blast_xml_dir, align.blast.blast_table_dir"},  # 输入文件
{"name": "taxon_out", "type": "outfile", "format": "annotation.nr.nr_taxon"},  # 输出结果文件 没有定义内容
{"name": "ssu_db", 'type': 'string', 'default': 'None'}  # 数据库版本有 silva119/silva123/silva128
```

运行逻辑
-----------------------------------
```
1. 检查输入文件，如果是xml文件夹，转换为table文件夹
2. 生成每个样本的hit序列以及其数目
3. 生成hit集合，查询集合中的所有对应的分类注释
4. 综合信息，生成样本在每个物种的丰度表
```

资源配置
-----------------------------------

```
self._cpu = 1
self._memory = '5G'
```
