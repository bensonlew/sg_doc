lefse
==========================

ģ��Path
-----------

**tools.statistical.lefse**

��������
-----------------------------------

����LEfSe����

���ó���
-----------------------------------

biom
summary_taxa.py
lefse������

��װ·��
-----------------------------------
/program/Python/bin/  # biom·��
/program/Python/bin/  # summarize_taxa·��
/bioinfo/statistical/lefse/  # lefse ������·��

��Ҫ�������ģ��
-----------------------------------

```
biom convert -i [otu_taxa_table] -o [otu_taxa_table.biom] --table-type "OTU table" --process-obs-metadata taxonomy --to-hdf5
summarize_taxa.py -i [otu_taxa_table.biom] -o [tax_summary_a] -L [level] -a
lefse-input.py -i [tax_summary_a] -g [lefse_group] -o [lefse_input.txt]
format_input.py [lefse_input.txt] [lefse_format.txt] -f r -c 1 [-u 2 | -s 2 -u 3] -o [1000000]
run_lefse.py [lefse_format.txt] [lefse_LDA.xls] -l [lda_filter] -y [strict]
plot_res.py [lefse_LDA.xls] [lefse_LDA.xls] [lefse_LDA.png]
plot_cladogram.py [lefse_LDA.xls] [lefse_LDA.cladogram.png] --format [png]
```

�������
-----------------------------------

```
{"name": "lefse_input", "type": "infile", "format": "meta.otu.otu_table"},  # �����ļ���biom��ʽ��otu��
{"name": "lefse_group", "type": "infile", "format": "meta.otu.group_table"},  # ��������ļ�
{"name": "lda_filter", "type": "float", "default": 2.0},
{"name": "strict", "type": "int", "default": 0},
{"name": "lefse_gname", "type": "string"},
{"name": "start_level", "type": "int", "default": 3},
{"name": "end_level", "type": "int", "default": 7},
```

�����߼�
-----------------------------------

1.��biom����ȱ�ת��Ϊ�����Ƹ�ʽ
2.summarize_taxa.py��һ�������ȱ�����ļ�·����ΪLEfSe����
3.����LEfSe����
4.�Է��������ͼ

��Դ����
-----------------------------------

```
self._cpu = 10
self._memory = '10G'
```

