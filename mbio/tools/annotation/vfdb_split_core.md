vfdb_aplit_core
==========================

ģ��Path
-----------

**tools.sequence.vfdb_aplit_core**

��������
-----------------------------------

�����vfdb������Ŀ�δע������tool

��Ҫ�������ģ��
-----------------------------------

```
table = xml2table(self.option('blastout').path, self.work_dir + '/temp_blastable.xls')

```

�������
-----------------------------------

```
            {"name": "fasta", "type": "infile", "format": "sequence.fasta"},
            {"name": "core_xml", "type": "infile", "format": "align.blast.blast_xml"}
            {"name": "fasta", "type": "outfile", "format": "sequence.fasta"},
```

�����߼�
-----------------------------------

����blast�����ԭʼ��������򼯻��δ�ȶ��ϵĻ���

��Դ����
-----------------------------------

```
self._cpu = 2
self._memory = "5G"
```
