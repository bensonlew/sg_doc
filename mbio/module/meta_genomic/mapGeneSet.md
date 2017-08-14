mapGeneSet
==========================

ģ��Path
-----------

**modules.metaGenomic.uni_gene.mapGeneSet**

��������
-----------------------------------

SOAPaligner mapping������reads�������������

��Ҫ�������ģ��
-----------------------------------

```
self.add_tool("build_gene")
self.add_module("all_soap_gene")

```

�������
-----------------------------------

```
{"name": "fafile","type": "infile","format":"sequence.fasta"},#����unigene_cdhit������ļ�
 {"name": "build_dir","type": "outfile","format":"uniGene.build_dir"} ##build_gene���������
{"name": "QC_dir","type":"infile","format":""} ##QC�����е��ļ���
{"name": "insertSize","type": "infile","format": "uniGene.insert_size"},#����Ƭ��
{"name": "repeat","type":"int","default":1}, ##how to report repeat hits, 0=none, 1=random one, 2=all
{"name": "seed","type":"int","default":35}, ##align the initial n bps as a seed means whole lengths of read
{"name": "mode","type":"int","default":4}, ##match mode for each read or the seed part of read, which shouldn't contain more than 2 mismatches: 0 for exact mathc only; 1 for 1 mismatch; 2 for 2 mismatch; 4 for find the best hits
{"name": "processors","type":"int","default":6},
{"name": "mismatch","type":"int","default":20}, ##maximum number of mismatches allowed on a read
{"name": "identity","type":"float","default":0.95} ##identity


```

�����߼�
-----------------------------------

1��2bwt-builder��������
2��SOAPaligner����mapping