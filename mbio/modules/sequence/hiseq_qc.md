�ʿ�hiseq_qc
===========

Moudle ˵��
-----------------------------------

PATH
---------

**sequence.hiseq_qc**

���򼰰�װ·��
------------

/app/bioinfo/seq/SeqPrep

/app/bioinfo/seq/sickle-1.33/sickle

��������
--------
hiseq����ָ��ģ�飬��Ҫ����seqprep��sickle���������������ȥ��ͷ

��Ҫ�������ģ��
------------------
```
add_tool('sequence.fastx_clipper')
add_tool('sequence.seq_prep')
add_tool('sequence.sickle')
```

��������
--------
```
{"name": "fastq_dir", "type": "infile", "format": "sequence.fastq_dir"},  # fastq�ļ���
{"name": "fq_type", "type": "string"},  # PE OR SE
{"name": "clip_dir", "type": "outfile", "format": "sequence.fastq_dir"},  # SEȥ��ͷ�������ļ���
{"name": "sickle_dir", "type": "outfile", "format": "sequence.fastq_dir"},  # ���������������ļ���(�������Ҷ�)
{"name": "sickle_r_dir", "type": "outfile", "format": "sequence.fastq_dir"},  # ���������Ҷ��������ļ���
{"name": "sickle_l_dir", "type": "outfile", "format": "sequence.fastq_dir"},  # ������������������ļ���
{"name": "seqprep_dir", "type": "outfile", "format": "sequence.fastq_dir"},  # PE��ȥ��ͷ�������ļ�
{"name": "fq_s", "type": "outfile", "format": "sequence.fastq"},  # SE��������cat����
{"name": "fq_r", "type": "outfile", "format": "sequence.fastq"},  # PE�����Ҷ���������cat����
{"name": "fq_l", "type": "outfile", "format": "sequence.fastq"},  # PE���������������cat����
{"name": "quality_q", "type": "int", "default": 30},  # �������м������ sickle
{"name": "length_q", "type": "int", "default": 50},  # �������м������ sickle
{"name": "pipe_type", "type": "string", "default": ""},  # add by zhouxuan 20170527
{"name": "quality_s", "type": "int", "default": 30},  # ���� seq_prep # add by zhouxuan 20170606
{"name": "length_s", "type": "int", "default": 30},  # ���� seq_prep # add by zhouxuan 20170606
```

�����߼�
-------
��ԭʼ������Ҫ����seqprep��sickle��������ʿ�
