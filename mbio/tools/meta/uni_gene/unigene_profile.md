unigene_profile
==========================

ģ��Path
-----------

**tools.metaGenomic.uni_gene.mapGeneSet.unigene_profile**

��������
-----------------------------------
���ɷ�������򼯷�ȱ�


���ó���
-----------------------------------

package:uniGene.uni_geneset

��װ·��
-----------------------------------

`/mnt/ilustre/users/sanger-dev/biocluster/src/mbio/packages/uniGene `



��Ҫ�������ģ��
-----------------------------------

```
self.load_package('uniGene.uni_geneset')
```

�������
-----------------------------------

```
{"name": "insertSize","type":"infile","format":"uniGene.insert_size"}, ##����Ƭ�γ���
{"name": "SOAPDir","type":"string"}, #soap����ļ���·��
{"name": "ra_dir","type":"string"},##����rawData·�������ԣ�֮���
{"name": "fafile","type":"infile","format":"sequence.fasta"}, ##unigene_cdhit tool����ļ�
{"name": "profile_out","type":"outfile","format":"uniGene.profile_table"}, ##gene_profile.reads_number.txt
 {"name": "profile_read_percent","type":"outfile","format":"uniGene.profile_table"},##gene_profile.reads_percent.txt
{"name": "profile_base_percent","type":"outfile","format":"uniGene.profile_table"}##gene_profile.base_number.txt

```

�����߼�
-----------------------------------

����map����������������򼯵ķ��


��Դ����
-----------------------------------

```
self._cpu = 2
self._memory = '3G'