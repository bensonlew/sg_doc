build_gene
==========================

ģ��Path
-----------

**tools.metaGenomic.uni_gene.mapGeneSet.build_gene**

��������
-----------------------------------

��������

���ó���
-----------------------------------

2bwt-builder

��װ·��
-----------------------------------

/mnt/ilustre/users/sanger-dev/app/bioinfo/uniGene/soap2.21release  # soapalign2�����װ·��`



��Ҫ�������ģ��
-----------------------------------

```
2bwt-builder outDir/index/name
```

�������
-----------------------------------

```
{"name": "fafile","type": "infile","format":"sequence.fasta"},#����unigene_cdhit������ļ�
 {"name": "build_dir","type": "outfile","format":"uniGene.build_dir"} ##build_gene����������ļ���

```

�����߼�
-----------------------------------

ͨ��2bwt-builder��������

��Դ����
-----------------------------------

```
self._cpu = 2
self._memory = '3G'