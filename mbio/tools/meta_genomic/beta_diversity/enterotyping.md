enterotyping
==========================

ģ��Path
-----------

**tools.metaGenomic.beta_diversity.enterotyping**

��������
-----------------------------------

΢����������Ⱥ���ͷ��������������з��;���

���ó���
-----------------------------------

Enterotyping.pl

��װ·��
-----------------------------------

`/mnt/ilustre/users/sanger-dev/app/bioinfo/meta/scripts`



��Ҫ�������ģ��
-----------------------------------

```
perl Enterotyping.pl -i otu_table -o output_dir
```

�������
-----------------------------------

```
    {"name": "otu_table", "type": "infile", "format": "meta.otu.otu_table"},  # ���ڷ����ı��
```

�����߼�
-----------------------------------

�����������Perl�ű�����÷��͵���ѷ�����Ŀ��

��Դ����
-----------------------------------

```
self._cpu = 1
self._memory = "5G"
```

��������
-----------------------------------

```
self.gcc = self.config.SOFTWARE_DIR + '/gcc/5.1.0/bin'
self.gcc_lib = self.config.SOFTWARE_DIR + '/gcc/5.1.0/lib64'
self.set_environ(PATH=self.gcc, LD_LIBRARY_PATH=self.gcc_lib)
```