nr_tax_level
==========================

ģ��Path
-----------

**tools.meta_genomic.nr_tax_level**

��������
-----------------------------------

�������nr�ĸ���������Ϣ��ȱ�

���ýű�
-----------------------------------

metagen_nr_taxlevel.py

��װ·��
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/taxon/scripts/`

��Ҫ�������ģ��
-----------------------------------

```
cmd2 = self.python_path + ' {} -i {} -l 1,2,3,4,5,6,7,8 -o {}'.format(self.python_script_2, self.option('nr_taxon_profile').prop['path'], self.output_dir)

```

�������
-----------------------------------

```
       {"name": "nr_taxon_profile", "type": "infile", "format": "paternity_test.tab"}, # nr_taxon_profile�ļ�
```

�����߼�
-----------------------------------

ͨ���ű�metagen_nr_taxlevel����nr_tax_profile���ɸ����ķ�����Ϣ��ȱ�

��Դ����
-----------------------------------

```
self._cpu = 2
self._memory = "5G"
```
