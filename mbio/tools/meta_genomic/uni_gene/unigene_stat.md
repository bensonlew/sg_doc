unigene_profile
==========================

ģ��Path
-----------

**tools.metaGenomic.uni_gene.mapGeneSet.unigene_profile**

��������
-----------------------------------
���ɻ�������ͳ�ƽ���ļ�


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
{"name": "gene_predict","type":"infile","format": "uniGene.genepre_dir"},#�ṩGenePredict������ļ���
{"name": "fafile","type":"infile","format":"sequence.fasta"} ##unigene_cdhit tool����ļ�


```

�����߼�
-----------------------------------

ͳ�Ƹ���ƷORF�����������ܳ��ȡ�ƽ�����ȡ���ĳ�������̳���


��Դ����
-----------------------------------

```
self._cpu = 2
self._memory = '3G'