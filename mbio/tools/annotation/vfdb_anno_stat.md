vfdb_anno_stat
==========================

ģ��Path
-----------

**tools.meta_genomic.vfdb_anno_stat**

��������
-----------------------------------

�����vfdbע�Ͳ��ָ������ķ�ȱ�ͳ��tool

���ýű�
-----------------------------------

vfdb_anno_stat.py

��װ·��
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/annotation/scripts/`

��Ҫ�������ģ��
-----------------------------------

```
 cmd = "{} {} -i {} -r {} -o {}".format(self.python_path, self.python_script, self.option('vfdb_table'),self.option('reads_profile_table'), self.output_dir)

```

�������
-----------------------------------

```
       {"name": "reads_profile_table", "type": "infile", "format": "sequence.profile_table"}
       {"name": "card_out_dir", "type": "outfile", "format": "meta_genomic.annotation_dir"}
```

�����߼�
-----------------------------------

���ýű�����reads_profile_table�Լ�vfdb_table(ע�ͻ�õ���Ϣ)��ȡ���յ�������Ϣ��

��Դ����
-----------------------------------

```
self._cpu = 2
self._memory = "5G"
```