(Partial) Mantel Test����
===========

Moudle ˵��
-----------------------------------

PATH
---------

**statistical.mantel_test**

��������
--------
����������֮�������ԣ�Partial��Ҫ�ṩ���ƾ���ͨ��ѡ�񻷾�������ȷ������

��Ҫ�������ģ��
------------------
```
self.otudistance = self.add_tool('meta.beta_diversity.distance_calc')
self.facdistance = self.add_tool('statistical.factor_distance')
self.discomparison = self.add_tool('statistical.discomparison')
self.partial = self.add_tool('statistical.factor_distance')
```

��������
--------
```
{"name": "level", "type": "string", "default": ""},  # ����/���ܷ���ˮƽ
{"name": "abundtable", "type": "infile", "format": "abund_table"},##����/���ܷ�ȱ��
{"name": "otumatrixtype", "type": "string", "default": "bray_curtis"},  # ��������/���ܾ������ķ���
{"name": "envtable", "type": "infile", "format": "group_table"},##�������ӱ�
{"name": "partial_factor", "type": "string"},  # ���Ƶ�λ
{"name": "factormatrixtype", "type": "string", "default": "bray_curtis"},  # �������Ӿ������ķ���
{"name": "factorselected", "type": "string", "default": ""},
{"name": "partialmatrix", "type": "infile", "format": "meta.beta_diversity.distance_matrix"},
{"name": "dis_matrix", "type": "outfile", "format": "meta.beta_diversity.distance_matrix"},
{"name": "fac_matrix", "type": "outfile", "format": "meta.beta_diversity.distance_matrix"}
```

�����߼�
-------
1.�ṩ����/���ܷ�ȱ�񡢻������ӱ����Ӧ�ľ��뷽�����ֱ𹹽�����/���ܾ��롢�������Ӿ��룻

2.������������ȥ������Է�������ѡ����Partial������ѡ����������Ϊ���Ƶ�λ��

3.ͳ�ƽ�������
