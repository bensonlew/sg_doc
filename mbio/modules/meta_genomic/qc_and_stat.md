�ʿ�
===========

Moudle ˵��
-----------------------------------

PATH
---------

**meta_genomic.qc_and_stat**

���򼰰�װ·��
------------

/app/bioinfo/seq/SeqPrep

/app/bioinfo/seq/sickle-1.33/sickle

��������
--------
Seqprep������3���˺�5���˽����������У�
Sickleȥ�����к󳤶�С��50bp��ƽ������ֵ����20�Լ���N�����reads��������������pair-end reads�� single-end reads��
ͳ�����������Ϣ

��Ҫ�������ģ��
------------------
```
SeqPrep  -f raw.1.fq  -r raw.2.fq  -1 clip.1.fq.gz  -2 clip.2.fq.gz  -q 20  -L 50  -A adapter1  -B adapter2
sickle pe  -f clip.1.fq.gz  -r clip.2.fq.gz -t sanger -q 20 -l 50 -n -o clip.sickle.1.fq -p clip.sickle.2.fq -s clip.sickle.s.fq
```

��������
--------
```
{"name": "fastq_dir", "type": "infile", "format": "sequence.fastq_dir"},  # �����fastq�ļ������а���list�ļ�
{"name": "insert_size", "type": "infile", "format": "sequence.profile_table"},  # ���ڸ���������insert_size���ļ�
{"name": "stat_dir", "type": "infile", "format": "sequence.baif_dir"},  # ����ļ������ͳ�ƽ���ļ���
{"name": "result_fq_dir", "type": "outfile", "format": "sequence.fastq_dir"},  # ���ý���ļ�����Ҫ��
{"name": "before_qc_stat", "type": "outfile", "format": "sequence.profile_table"},  # ԭʼ����ͳ����Ϣ�ļ�
{"name": "after_qc_stat", "type": "outfile", "format": "sequence.profile_table"}  # �ʿغ�ĸ�����������Ϣ
```

�����߼�
-------
��"fastq_dir"��"insert_size"��"stat_dir"��������������ʱ������sequence.hiseq_qcģ��ȥ����SeqPrep��sickle,��ȡ
sequence.meta_genomicģ�����ɵ�fastq��ԭʼ���ݵ�list�ļ��Ƚ��:
```
1.����fastq��ԭʼ����list����ΪSeqPrep�������ļ������ɵ�fastq����Ӧ��list[sequence.seq_prep]��
2.SeqPrep���ɵ�fastq��SeqPrep ��list����Ϊsickle�������ļ���ͬ������fastq����Ӧ��list[sequence.sickle]��
3.����sickle listȥ������<50bp��reads����Ϊ�ʿغ�Ľ��[sequence.remove_short_reads];
4.�����ʿ�ǰ��������Ϣͳ��[sequence.sickle_stat]��
```