�����heatmap
===========

Tool ˵��
-----------------------------------

PATH
---------

**statistical.corr_heatmap**

��������
--------
���������heatmap������

���ó���
-------
pearsonsCorrelation.py

��װ·��
--------
/mnt/ilustre/users/sanger-dev/app/bioinfo/statistical/scripts

��Ҫ�������ģ��
------------------
```
pearsonsCorrelation.py abundance_table env_table pearsons_correlation pearsons_pvalue method
```

��������
--------
```
{"name": "abundtable", "type": "infile", "format": "abund_table"},##����/���ܷ�ȱ��
{"name": "level", "type": "string", "default": "��Ӧ���ݿ�"},##ѡ�������ˮƽ
{"name": "envtable", "type": "infile", "format": "group_table"},##�������ӱ�
{"name": "envlabs", "type": "string", "default": ""},##�������ӱ�ǩ
{"name": "method", "type": "string", "default": "pearsonr"},##������Է����ķ���
{"name": "env_cluster", "type": "string", "default": "average"},##�������Ӿ��෽��ѡ��
{"name": "species_cluster", "type": "string", "default": "average"},##����/���ܾ��෽��
{"name": "cor_table", "type": "outfile", "format": "group_table"},##���������Ծ���
{"name": "pvalue_table", "type": "outfile", "format": "group_table"},##R��Ӧ��Pֵ
{"name": "top_species", "type": "int", "default": 0},##��ѡ���ǰ���ٵ�����/����
```

�����߼�
-------
1.�����ṩ��ȱ��ͻ������ӱ����Ϊ�����ļ���

2.ѡ��������Եķ����������Ƿ����������������ó���Ӧ�������Ϊ��ͼ�����룻

3.���յ���Rʵ�������heatmap��ͼ��
