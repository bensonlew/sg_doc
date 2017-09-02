mapGeneSet
==========================

ģ��Path
-----------

**modules.align.mapGeneSet**

��������
-----------------------------------

SOAPaligner mapping������reads�������������

��Ҫ�������ģ��
-----------------------------------

```
self.add_tool("align.bwt_builder")
self.add_tool("align.soap_aligner")
self.add_tool(statistical.unigene_profile")

```

�������
-----------------------------------

```
            {"name":"fafile","type":"infile","format":"sequence.fasta"},#���������
            {"name":"insertsize","type":"string","default":""},#����Ƭ���ļ�
            {"name": "QC_dir","type":"infile","format":"sequence.fastq_dir"},##qc��fastq�ļ���
            {"name": "fq_type", "type": "string","default": "PE"},  # PE OR SE
            {"name": "reads_abundance","type":"outfile","format":"sequence.profile_table"},##reads_abundance
            {"name": "rpkm_abundance","type":"outfile","format":"sequence.profile_table"},##rpkm_abundance
            {"name": "seed","type":"int","default":35}, ##align the initial n bps as a seed means whole lengths of read
            {"name": "mode","type":"int","default":4}, ##match mode for each read or the seed part of read, which shouldn't contain more than 2 mismatches: 0 for exact mathc only; 1 for 1 mismatch; 2 for 2 mismatch; 4 for find the best hits
            {"name": "processors","type":"int","default":6},
            {"name": "mismatch","type":"int","default":20}, ##maximum number of mismatches allowed on a read
            {"name": "repeat","type":"int","default":1}, ##how to report repeat hits, 0=none, 1=random one, 2=all
            {"name": "identity","type":"float","default":0.95} ##identity


```

�����߼�
-----------------------------------

1��2bwt-builder��������
2��SOAPaligner����mapping
3�����в�ͬ�ķ�ȱ�