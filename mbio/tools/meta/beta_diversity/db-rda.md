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

qiime/compare_categories.py: http://www.qiime.org/

��װ·��
-----------------------------------

`/mnt/ilustre/users/sanger/app/qiime  # qiime�����װ·��`



��Ҫ�������ģ��
-----------------------------------

```
compare_categories.py [options] {--method METHOD -i/--input_dm INPUT_DM -m/--mapping_file MAPPING_FILE -c/--categories CATEGORIES -o/--output_dir OUTPUT_DIR}  # �˴�û�л������ӵĵ��룬����ļ�Ҳû�б��
```

�������
-----------------------------------

```
{"name": "abundtable", "type": "infile", "format": "abund_table"},##����/���ܷ�ȱ��
{"name": "method", "type": "string", "default": "bray_curtis"},
{"name": "level", "type": "string", "default": ""},
{"name": "dis_matrix", "type": "infile", "format": "meta.beta_diversity.distance_matrix"},
{"name": "envtable", "type": "infile", "format": "meta.otu.group_table"},
{"name": "envlabs", "type": "string", "default": ""}  # �ö��ŷָ��Ļ�����������
```

�����߼�
-----------------------------------

��ͨ�������㷨��abundtable��þ�����󣬸��ݾ������ͻ������ӱ����compare_categories.py���м���db-RDA��

