uni_gene
==========================

ģ��Path
-----------

**modules.metaGenomic**

��������
-----------------------------------

����beta�����Է���

��Ҫ�������ģ��
-----------------------------------

```

self.add_tool("anosim")
self.add_tool("distance_box")
self.add_tool('meta.beta_diversity.distance_calc')
add_tool('meta.beta_diversity.anosim_box')
add_tool('meta.beta_diversity.pcoa')
add_tool('meta.beta_diversity.nmds')
self.add_tool('meta.beta_diversity.hcluster')
self.add_tool('meta.beta_diversity.dbrda')
add_tool('meta.beta_diversity.pca')
add_tool('meta.beta_diversity.rda_cca')
add_tool('meta.beta_diversity.anosim')
add_tool('meta.beta_diversity.pco')
add_tool('meta.beta_diversity.PERMANOVA')
self.add_tool('meta.beta_diversity.dbrda')
self.add_tool('meta.beta_diversity.enterotyping')
```

�������
-----------------------------------

```
            {"name": "analysis", "type": "string",
             "default": "distance,anosim,pca,pcoa,nmds,rda_cca,dbrda,hcluster,plsda"},
            {"name": "dis_method", "type": "string", "default": "bray_curtis"},
            {"name": "dbrda_method", "type": "string", "default": ""},
            # ���趨��ֵʱ��dbrda�ļ��㷽ʽ����ı䣬ʹ��R���Դ��ľ����㷨���������ȼ���þ�����󣬴˴��ļ��㷽ʽ��һ��ľ������ĵ�ֵ��һ��
            {"name": "otutable", "type": "infile", "format": "meta.otu.otu_table, meta.otu.tax_summary_dir"},
            {"name": "level", "type": "string", "default": "otu"},
            {"name": "phy_newick", "type": "infile", "format": "meta.beta_diversity.newick_tree"},
            {"name": "permutations", "type": "int", "default": 999},
            {"name": "linkage", "type": "string", "default": "average"},
            {"name": "envtable", "type": "infile", "format": "meta.otu.group_table"},
            {"name": "envlabs", "type": "string", "default": ""},
            {"name": "pca_envlabs", "type": "string", "default": ""},
            {"name": "dbrda_envlabs", "type": "string", "default": ""},
            {"name": "rda_envlabs", "type": "string", "default": ""},
            {"name": "group", "type": "infile", "format": "meta.otu.group_table"},
            {"name": "grouplab", "type": "string", "default": ""},
            {"name": "anosim_grouplab", "type": "string", "default": ""},
            {"name": "plsda_grouplab", "type": "string", "default": ""},
            {"name": "dis_matrix", "type": "outfile", "format": "meta.beta_diversity.distance_matrix"},
            {"name": "dis_newicktree", "type": "outfile", "format": "meta.beta_diversity.newick_tree"}

```

�����߼�
-----------------------------------

��������ѡ�ķ���ʹ�ò�ͬtool���з���