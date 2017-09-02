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

prepare_profile.pl,
gene_profile.pl

��װ·��
-----------------------------------

`bioinfo/statistical/scripts/prepare_profile.pl `
`bioinfo/statistical/scripts/gene_profile.pl`



��Ҫ�������ģ��
-----------------------------------

```
perl prepare_profile.pl
perl gene_profile.pl
```

�������
-----------------------------------

```
            {"name": "map_dir","type":"outfile","format":"uniGene.build_dir"},##map���
            {"name": "fafile","type": "infile","format":"sequence.fasta"},#���������fasta�ļ�
            {"name":"insertsize","type":"string","default":""},#����Ƭ���ļ�
            {"name":"rpkm_abundance","type":"outfile","format":"sequence.profile_table"},#RPKM���
            {"name":"reads_abundance","type":"outfile","format":"sequence.profile_table"},#reads���

```

�����߼�
-----------------------------------

����map����������������򼯵ķ��


��Դ����
-----------------------------------

```
self._cpu = 5
self._memory = '5G'