metagen_kegg_level
==========================

ģ��Path
-----------

**tools.meta_genomic.metagen_kegg_level**

��������
-----------------------------------

�������kegg��pathway level�Ķ�Ӧ��

���ýű�
-----------------------------------

metagen_kegg_level.py

��װ·��
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/taxon/scripts/`

��Ҫ�������ģ��
-----------------------------------

```
cmd2 = self.python_path + ' {} -i {} -p {} -o {}'.format(self.python_script_2,
      self.option('kegg_anno_profile'), self.option('uniq_gene_profile'),self.output_dir)


```

�������
-----------------------------------

```
       {"name": "kegg_table", "type": "infile", "format": "annotation.kegg.kegg_table"}, # �ȶԵ�kegg���ע�ͽ���ļ�
       {"name": "reads_profile_table", "type": "infile", "format": "sequence.profile_table"}
```

�����߼�
-----------------------------------

���ýű�metagen_kegg_level��ͨ��keggע���ļ��ͻ���profile�ļ��Լ��ڲ���level table���ɴ����㼶��Ӧ��ϵ�ķ�ȱ�

��Դ����
-----------------------------------

```
self._cpu = 2
self._memory = "5G"
```
