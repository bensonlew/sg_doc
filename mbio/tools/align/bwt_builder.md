bwt_build
==========================

ģ��Path
-----------

**tools.align.bwt_build**

��������
-----------------------------------
2bwt-builder��������


���ó���
-----------------------------------
2bwt-builder

��װ·��
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/uniGene/soap2.21release  # soapalign2�����װ·��`



��Ҫ�������ģ��
-----------------------------------

```
2bwt-builder fasta_file
```

�������
-----------------------------------

```
                   {"name": "fafile","type": "infile","format":"sequence.fasta"},#���������fasta�ļ�
                   {"name": "build_dir","type": "outfile","format":"uniGene.build_dir"} ##����������ļ���


```

�����߼�
-----------------------------------

�����������򼯹�������


��Դ����
-----------------------------------

```
self._cpu = 10
self._memory = '5G'