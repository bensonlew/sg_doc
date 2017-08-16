bwa�ȶ�
===========

Tool ˵��
-----------------------------------

PATH
---------

**align.bwa**

���򼰰�װ·��
------------

/app/bioinfo/align/bwa-0.7.9a/bwa

��������
--------
��reads�ȶ�����DNA����

��Ҫ�������ģ��
------------------
```
bwa aln -f bwa_pair.1.sai -t 6 suzhu_genomic.fasta clip.sickle.1.fq ;
bwa aln -f bwa_pair.2.sai -t 6 suzhu_genomic.fasta clip.sickle.2.fq ;
bwa sampe -f bwa_pair.sam suzhu_genomic.fasta bwa_pair.1.sai bwa_pair.2.sai clip.sickle.1.fq clip.sickle.2.fq ;
bwa aln -f bwa_single.sai -t 6 suzhu_genomic.fasta clip.sickle.s.fq ;
bwa samse -f bwa_single.sam suzhu_genomic.fasta bwa_single.sai clip.sickle.s.fq
```

��������
--------
```
{"name": "ref_database", "type": "string", "default": ""},  # �����ο����п��ж�Ӧ����������eg��E.coli ,B.taurus
{"name": "ref_undefined", "type": "infile", "format": "sequence.fasta_dir"},  # δ������������������ļ��ӣ��������cat��һ���ļ�������Ϊtool:align.bwa�������ļ�
{"name": "fq_type", "type": "string", "default": "PSE"},  # fq���ͣ�PE��SE��PSE����PE+SE�����˼�˫�ˣ�
{"name": "fastq_dir", "type": "infile", "format": "sequence.fastq_dir"}, # �����ʿغ��fastq�ļ������а���list�ļ�
{"name": "head", "type": "string", "default": "'@RG\\tID:sample\\tLB:rna-seq\\tSM:sample\\tPL:ILLUMINA'"},  # ���ý��ͷ�ļ�
{"name": "sam", "type": "outfile", "format": "align.bwa.sam_dir"},     # sam��ʽ�ļ�,�ں���Ӧlist�ļ�
{"name": "method", "type": "string", "default": "align"},     # sam��ʽ�ļ�������ģʽΪindex
###����һ���鿴pair-reads�Ƿ������file����
```

�����߼�
-------
1.��������׼����
a������������������������������ƣ�ֱ�Ӵ�����database����ȡ������
b������Ϊδ��������ʱ���ṩ��������λ�ã����������cat��һ��fasta��������index��

2.�����ļ������ṩfastq�ļ��У��Ҹ�Ŀ¼�±�����reads��Ӧlist�ļ�������������"fq_type"��أ���Ϊ��PSE��ʱ�ĸ�ʽ��
 ```
    HB_H1_sickle_r.fq   HB_H1   r
    HB_H1_sickle_l.fq   HB_H1   l
    HB_H1_sickle_s.fq   HB_H1   s
 ```
3.��������sam��ʽ����ļ��к�list�ļ���
