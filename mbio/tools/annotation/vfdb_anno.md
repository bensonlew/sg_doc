vfdb_anno
==========================

ģ��Path
-----------

**tools.annotation.vfdb_anno**

��������
-----------------------------------

�����vfdbע��tool

���ýű�
-----------------------------------

meta_vfdb_mongo.py

��װ·��
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/annotation/scripts/`

��Ҫ�������ģ��
-----------------------------------

```
    table = xml2table(self.option('ardb_xml').prop['path'], self.work_dir + '/tmp_ardb_table.xls')
    cmd = '{} {} {} {}'.format(self.python_path, self.python_script, table, self.output_dir)

```

�������
-----------------------------------

```
        {"name": "vfdb_xml", "type": "infile", "format": "align.blast.blast_xml"},  # ����ıȶԽ��xml�ļ�
        {"name": "anno_result", "type": "outfile", "format": "sequence.profile_table"}
```

�����߼�
-----------------------------------

���ýű�meta_vfdb_mongo��xml�ļ�����ע�ͣ�ͨ��hit_idȥ���ݿ��������Ϣ������Ϣ��

��Դ����
-----------------------------------

```
self._cpu = 2
self._memory = "5G"
```