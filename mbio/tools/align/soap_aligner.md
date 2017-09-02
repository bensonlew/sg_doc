soap_aligner
==========================

ģ��Path
-----------

**tools.align.soap_aligner**

��������
-----------------------------------
ÿ����Ʒ��clean reads mappong�������������


���ó���
-----------------------------------

soap2

��װ·��
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/uniGene/soap2.21release  # soapalign2�����װ·��`



��Ҫ�������ģ��
-----------------------------------

```
soap2 -a 1.fq -b 2.fq -D index -o soap.pair.pe -2 soap.pair.se -r 1 -l 35 -M 4 -S -p 6 -v 20 -c 0.95 -m 315 -x 515 2
soap2 -a s.fq -D index -o single.se -r 1 -l 35 -M 4 -S -p 6 -v 20 -c 0.95 -m 295 -x 495 2
```

�������
-----------------------------------

```
            {"name": "sample","type":"string"},#sample������
            {"name": "insertSize","type":"int"},#����Ƭ�γ���
            {"name": "index","type":"infile","format":"uniGene.build_dir"},##build_gene���ɵ������ļ�,֮��Ҫ����
            {"name": "fq_r","type":"infile","format":"sequence.fastq"},##�Ҷ�fastq�ļ�
            {"name": "fq_l","type":"infile","format":"sequence.fastq"},##���fastq�ļ�
            {"name": "fq_s","type":"infile","format":"sequence.fastq"},##����fastq�ļ�
            {"name": "map_dir","type":"outfile","format":"uniGene.build_dir"},##map���
            {"name": "repeat","type":"int","default":1}, ##how to report repeat hits, 0=none, 1=random one, 2=all
            {"name": "seed","type":"int","default":35}, ##align the initial n bps as a seed means whole lengths of read
            {"name": "mode","type":"int","default":4}, ##match mode for each read or the seed part of read, which shouldn't contain more than 2 mismatches: 0 for exact mathc only; 1 for 1 mismatch; 2 for 2 mismatch; 4 for find the best hits
            {"name": "processors","type":"int","default":6},
            {"name": "mismatch","type":"int","default":20}, ##maximum number of mismatches allowed on a read
            {"name": "identity","type":"float","default":0.95} ##identity

```

�����߼�
-----------------------------------

ͨ��SOAPaligner��clean reads mapping�����������


��Դ����
-----------------------------------

```
self._cpu = 15
self._memory = '20G'