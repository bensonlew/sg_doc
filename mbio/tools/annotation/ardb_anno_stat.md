ardb_anno_stat
==========================

ģ��Path
-----------

**tools.meta_genomic.ardb_anno_stat**

��������
-----------------------------------

�����ardbע�Ͳ��ָ������ķ�ȱ�ͳ��tool

���ýű�
-----------------------------------

ardb_anno_stat.py

��װ·��
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/annotation/scripts/`

��Ҫ�������ģ��
-----------------------------------

```
 cmd = "{} {} -i {} -r {} -o {}".format(self.python_path, self.python_script, self.option('ardb_table'),self.option('reads_profile_table'), self.output_dir)

```

�������
-----------------------------------

```
       {"name": "ardb_table", "type": "infile", "format": "sequence.profile_table"}, # �ȶԵ�ardb���ע�ͽ���ļ�
       {"name": "reads_profile_table", "infile": "infile", "format": "sequence.profile_table"}
       {"name": "ardb_result", "type": "outfile", "format": "meta_genomic.annotation_dir"}
```

�����߼�
-----------------------------------

���ýű�����reads_profile_table�Լ�ardb_table(ע�ͻ�õ���Ϣ)��ȡ���յ�������Ϣ��

��Դ����
-----------------------------------

```
self._cpu = 2
self._memory = "5G"
```
