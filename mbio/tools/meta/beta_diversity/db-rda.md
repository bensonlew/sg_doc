dbrda
==========================

Tool˵��
--------

PATH
-----------

**tools.meta.beta_diversity.dbrda**

��������
-----------------------------------

����db-RDA����

���ó���
-----------------------------------

/bioinfo/statistical/scripts/pearsonsCorrelation.py




��Ҫ�������ģ��
-----------------------------------

```
/bioinfo/statistical/scripts/pearsonsCorrelation.py
```

�������
-----------------------------------

```
{"name": "otutable", "type": "infile", "format": "abund_table"},##����/���ܷ�ȱ��
{"name": "method", "type": "string", "default": "bray_curtis"},
{"name": "level", "type": "string", "default": ""},
{"name": "dis_matrix", "type": "infile", "format": "meta.beta_diversity.distance_matrix"},
{"name": "envtable", "type": "infile", "format": "meta.otu.group_table"},
{"name": "envlabs", "type": "string", "default": ""}  # �ö��ŷָ��Ļ�����������
```

�����߼�
-----------------------------------

��ͨ�������㷨��otutable��þ�����󣬸��ݾ������ͻ������ӱ����pearsonsCorrelation.py���м���db-RDA��

