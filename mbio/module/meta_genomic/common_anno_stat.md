common_anno_stat
==========================

模块Path
-----------

**modules.meta_genomic.common_anno_stat**

功能描述
-----------------------------------

宏基因nr/cog/kegg注释部分的丰度统计表模块

主要命令及功能模块
-----------------------------------

```
		self.cat_nr = self.add_tool('align.cat_hmmscanout')
        self.cat_cog = self.add_tool('align.cat_hmmscanout')
        self.nr_level = self.add_tool('meta_genomic.nr_tax_level')
        self.cog_stat = self.add_tool('meta_genomic.metagen_cog_stat')
        self.kegg_stat = self.add_tool('meta_genomic.metagen_kegg_stat')
		ncbi = self.add_tool("taxon.ncbi_taxon")
		nr_stat = self.add_tool("meta_genomic.metagen_nr")
		string2cog = self.add_tool("meta_genomic.cog_anno")
		kegg_anno = self.add_tool("meta_genomic.metagen_kegg_anno")
		cat_kegg = self.add_tool('align.cat_hmmscanout')

```

参数设计
-----------------------------------

```
			{"name": "nr_xml_dir", "type": "infile", "format": "align.blast.blast_xml_dir"},  # nr比对结果文件夹
            {"name": "reads_profile_table", "type": "infile", "format": "sequence.profile_table"},  # 样本序列丰度表
            {"name": "tax_level_dir", "type": "outfile", "format": "meta_genomic.nr_dir"},  # nr注释输出结果
            {"name": "string_xml_dir", "type": "infile", "format": "align.blast.blast_xml_dir"},  # string比对结果文件夹
            {"name": "cog_result_dir", "type": "outfile", "format": "meta_genomic.cog_dir"},  # cog统计结果文件夹
            {"name": "kegg_xml_dir", "type": "infile", "format": "align.blast.blast_xml_dir"},  # kegg比对结果文件夹
            {"name": "kegg_result_dir", "type": "outfile", "format": "meta_genomic.kegg_dir"}  # kegg统计结果文件夹
``` 

运行逻辑
-----------------------------------

根据输入的xml文件和reads_profile文件，依次调用每种注释的anno的tool，然后调用cat_hmmscan对其进行结果合并，最后调用这种注释的stat的tool完成注释，并将结果存入相应的文件夹

