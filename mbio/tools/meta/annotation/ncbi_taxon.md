ncbi_taxon
==========================

ģ��Path
-----------

**tools.taxon.ncbi_taxon**

��������
-----------------------------------
nr��taxonomyע��

���ýű�
-----------------------------------

xml2table.py
gi2taxon.py

��װ·��
-----------------------------------
`/mnt/ilustre/users/sanger-dev/biocluster/src/mbio/packages/align/blast/`
`/mnt/ilustre/users/sanger-dev/biocluster/src/mbio/packages/taxon/`

��Ҫ�������ģ��
-----------------------------------

```
      table = xml2table(self.option('blastout').path, self.work_dir + '/temp_blastable.xls')
      from mbio.packages.taxon.gi2taxon import gi_taxon
      gi_taxons = gi_taxon(set(query_gi.values()), db)

```

�������
-----------------------------------

```
            {"name": "blastout", "type": "infile", "format": "align.blast.blast_xml, align.blast.blast_table"},  # �����ļ�
            {"name": "taxon_out", "type": "outfile", "format": "annotation.nr.nr_taxon"},  # �������ļ�
            {"name": "blastdb", 'type': 'string', 'default': 'None'}  # �����ļ���blast�ȶ����ͣ�����Ϊnr����nt
```

�����߼�
-----------------------------------

1��xml�ļ�ת��table�ļ���
2������table�ļ��е�gi�Ŵ�mongo���ݿ��л�ȡ����taxonomy��Ϣ

��Դ����
-----------------------------------

```
self._cpu = 2
self._memory = "12G"