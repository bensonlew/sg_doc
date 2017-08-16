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
{"name": "ref_fasta", "type": "infile", "format": "sequence.fasta"},  # �ο�����
{"name": "fq_type", "type": "string", "default": ""},  # fq���ͣ��ش�
{"name": "fastq_r", "type": "infile", "format": "sequence.fastq"},  # �Ҷ������ļ�
{"name": "fastq_l", "type": "infile", "format": "sequence.fastq"},  # ��������ļ�
{"name": "fastq_s", "type": "infile", "format": "sequence.fastq"},  # SE�����ļ�
{"name": "fastq_dir", "type": "infile", "format": "sequence.fastq_dir"},  # fastq�ļ���
{"name": "head", "type": "string", "default": "'@RG\\tID:sample\\tLB:rna-seq\\tSM:sample\\tPL:ILLUMINA'"},  # ���ý��ͷ�ļ�
{"name": "sam", "type": "outfile", "format": "align.bwa.sam"},     # sam��ʽ�ļ�
{"name": "method", "type": "string", "default": "align"},     # sam��ʽ�ļ�
{"name": "pipe_type", "type": "string", "default": "AB"} # add "pipe_type" for meta_g's single read by zhujuan
```

�����߼�
-------
1.������Ĳο��������жϣ�����ӵĲο��������ȹ���index��

2.�����ļ��ĵ��뷽ʽ�����֣�
a.ֻ��һ����Ʒʱ������ֱ���ṩreads��Ӧ��fastq�ļ���
b.��һ��������Ʒʱ�������ṩfastq�ļ��У��Ҹ�Ŀ¼�±�����reads��Ӧlist�ļ���
 ```
    HB_H1_sickle_r.fq   HB_H1   r
    HB_H1_sickle_l.fq   HB_H1   l
    HB_H1_sickle_s.fq   HB_H1
 ```

2.��"fq_type"��PEģʽ��list��R1��R2��[S����ѡ����"pipe_type"Ϊ" meta_g"�����е�]��fastq��Ϊ��Ҫ�����ļ�����SEģʽ��list��S��fastq��Ϊ��Ҫ�����ļ���

3.���ݲ�ͬ��ģʽ����������Ʒ��Ӧ��sam��ʽ�����ע�⵱����[" meta_g"]ʱ��single reads��bamΪsamplename_sRead.bam,����SE�Ľ�������ں�������
