uni_gene
==========================

ģ��Path
-----------

**modules.clusterc.uni_gene**

��������
-----------------------------------

��������򼯹�������ȱ�����

��Ҫ�������ģ��
-----------------------------------

```
self.add_module("cluster��cdhit_unigene")
self.add_module("align.mapGeneSet")

```

�������
-----------------------------------

```
            {"name":"gene_tmp_fa","type":"infile","format":"sequence.fasta"},#����������ϲ�������
            {"name": "number","type":"int","default":0},#�з�Ϊ���ݣ�Ĭ��0��ʾ���ļ���С�Զ����㣬ָ��ĳ������ʱ��ָ�������ָ�
            {"name":"uni_fasta","type":"outfile","format":"sequence.fasta"},#��������򼯺�������
            {"name":"uni_fastaa","type":"outfile","format":"sequence.fasta"},#��������򼯵�������
            {"name": "cdhit_identity","type":"float","default":0.95},##����cdhit�Ĳ���identity
            {"name":"cdhit_coverage","type":"float","default":0.9},##����cdhit�Ĳ���coverage
            {"name":"insertsize","type":"string","default":""},#����Ƭ���ļ�
            {"name": "QC_dir","type":"infile","format":"sequence.fastq_dir"},##qc��reads�ļ���
            {"name": "reads_abundance","type":"outfile","format":"sequence.profile_table"},##reads_abundance
            {"name": "rpkm_abundance","type":"outfile","format":"sequence.profile_table"},##rpkm_abundance
            {"name": "seed","type":"int","default":35}, ##align the initial n bps as a seed means whole lengths of read
            {"name": "mode","type":"int","default":4}, ##match mode for each read or the seed part of read, which shouldn't contain more than 2 mismatches: 0 for exact mathc only; 1 for 1 mismatch; 2 for 2 mismatch; 4 for find the best hits
            {"name": "processors","type":"int","default":6},
            {"name": "mismatch","type":"int","default":20}, ##maximum number of mismatches allowed on a read
            {"name": "repeat","type":"int","default":1}, ##how to report repeat hits, 0=none, 1=random one, 2=all
            {"name": "soap_identity","type":"float","default":0.95} ## soap aligner identity

```

�����߼�
-----------------------------------

1��cd-hit���ɷ��������
2��ͳ��ȥ����ǰ����������
3��SOAPaligner mapping������reads�������������
4�����ɷ���������