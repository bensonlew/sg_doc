cdhit_para
==========================

ģ��Path
-----------

**modules.cluster.cdhit_para**

��������
-----------------------------------

���н����໥�Ƚ�ȥ���༰�ڲ�ȥ����

��Ҫ�������ģ��
-----------------------------------

```
self.add_tool('cluster.cdhit_between_single.py")
self.add_tool('cluster.cdhit_compare_single.py")


```

�������
-----------------------------------

```
            {"name": "first", "type": "int", "default": ""},
            {"name": "last", "type": "int", "default": ""},
            {"name": "in_dir", "type": "infile", "format": "uniGene.build_dir"},  # �����ļ���
            {"name": "identity","type":"float","default":0.95},##����cdhit�Ĳ���identity
            {"name":"coverage","type":"float","default":0.9},##����cdhit�Ĳ���coverage
```

�����߼�
-----------------------------------

1������ļ����һ���ļ������Ա�
2���ڶ����ļ��ԱȺ���л���

