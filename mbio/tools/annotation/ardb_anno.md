ardb_anno
==========================

ģ��Path
-----------

**tools.annotation.ardb_anno**

��������
-----------------------------------

�����ardbע��tool

���ýű�
-----------------------------------

meta_ardb_mongo.py

��װ·��
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/annotation/scripts/`

��Ҫ�������ģ��
-----------------------------------

```
    table = xml2table(self.option('ardb_xml').prop['path'], self.work_dir + '/tmp_ardb_table.xls')
    cmd = '{} {} {} {}'.format(self.python_path, self.python_script, table, self.output)

```

�������
-----------------------------------

```
        {"name": "blastout", "type": "infile", "format": "align.blast.blast_xml"},
        "name": "anno_result", "type": "outfile", "format": "sequence.profile_table"}

```

�����߼�
-----------------------------------

���ýű�meta_ardb_mongo��xml�ļ�����ע�ͣ�ͨ��hit_idȥ���ݿ��������Ϣ������Ϣ��

��Դ����
-----------------------------------

```
self._cpu = 2
self._memory = "5G"
```

