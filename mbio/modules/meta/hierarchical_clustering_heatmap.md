heatmap
===========

Module ˵��
-----------------------------------

PATH
---------

**meta_genomic.report.hierarchical_clustering_heatmap**

��������
--------
����heatmap������

��Ҫ�������ģ��
------------------
```
sort_samples#��ѡ��Ʒ������������
distance_calc#�������
hcluster#��Ʒ������/���ܾ���
```

��������
--------
```
{"name": "in_otu_table", "type": "infile", "format": "meta_genomic.anno.abuand_table"},  # ���������/���ܷ�ȱ�
{"name": "input_otu_id", "type": "string"},  # ���������/���� id��ӦҪ��������/������
{"name": "level", "type": "string", "default": "�������ݿ��Ӧ"},  # ��������/���ܷ���ˮƽ
{"name": "group_detail", "type": "string"},  # ����ķ�����Ϣ����add_Algorithm�й�
{"name": "species_number", "type": "string", "default": "50"},  # ����/������Ŀ��Ĭ��top50
{"name": "method", "type": "string", "default": ""},  # ����/���ܲ�ξ��෽ʽ��Ĭ�ϲ�����
{"name": "sample_method", "type": "string", "default": ""},  # ������ξ��෽ʽ��Ĭ�ϲ�����
{"name": "add_Algorithm", "type": "string", "default": ""},  # ������������㷨��Ĭ�ϲ����
```

�����߼�
-------
1.���ݷ���Ҫ�����ʾ��Ŀ����ԭʼ�ķ�ȱ�����ȡ������Ϊ�µķ��������ļ���

2.�������ѡ�����Ҫ������Ӧ���ݵľ���������õ���Ӧ�����ļ���

3.�÷�ȱ������ļ�������heatmap��ͼ��
