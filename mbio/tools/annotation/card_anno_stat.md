card_anno_stat
==========================

ģ��Path
-----------

**tools.meta_genomic.card_anno_stat**

��������
-----------------------------------

�����cardע�Ͳ��ָ������ķ�ȱ�ͳ��tool

���ýű�
-----------------------------------

card_anno_stat.py

��װ·��
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/annotation/scripts/`

��Ҫ�������ģ��
-----------------------------------

```
 cmd = "{} {} -i {} -r {} -o {}".format(self.python_path, self.python_script, self.option('card_table'),self.option('reads_profile_table'), self.output_dir)

```

�������
-----------------------------------

```
       {"name": "card_table", "type": "infile", "format": "sequence.profile_table"}, # �ȶԵ�card���ע�ͽ���ļ�
       {"name": "reads_profile_table", "infile": "infile", "format": "sequence.profile_table"}
       {"name": "card_result", "type": "outfile", "format": "meta_genomic.annotation_dir"}
```

�����߼�
-----------------------------------

���ýű�����reads_profile_table�Լ�card_table(ע�ͻ�õ���Ϣ)��ȡ���յ�������Ϣ��

��Դ����
-----------------------------------

```
self._cpu = 2
self._memory = "5G"
```
```
