rda_cca
==========================

Tool˵��
-------

PATH
-----------

**tools.meta.beta_diversity.rda_cca**

��������
-----------------------------------

����RDA/CCA����

���ó���
-----------------------------------

ordination.pl

��װ·��
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/statistical/scripts`



��Ҫ�������ģ��
-----------------------------------

```
ordination.pl -type rda -outdir outdir -community otutable -environment envdata
```

�������
-----------------------------------

```
{"name": "abundtable", "type": "infile", "format": "abund_table"},##����/���ܷ�ȱ��
{"name": "envtable", "type": "infile", "format": "group_table"},
{"name": "envlabs", "type": "string", "default": ""}
```

�����߼�
-----------------------------------

1.�����ṩ��ȱ��ͻ������ӱ����Ϊ�����ļ���

2.�ڲ�����RDA[С��3.5]/CCA[���ڵ���3.5]���������У�

3.����ѡ��RDA/CCA�õ����������

