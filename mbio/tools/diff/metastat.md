diff
==========================

ģ��Path
-----------

**tools.statistical.metastat**

��������
-----------------------------------

�������ֲ�������Ķ���Ƚϡ����������Ƚϡ��������Ƚ�

����package
-----------------------------------

packages.statistical.metastat
packages.statistical.twogroup_CI
packages.statistical.twosample_CI
packages.statistical.mul_posthoc

��װ·��
-----------------------------------

��Ҫ�������ģ��
-----------------------------------

```
two_group_test(inputfile, groupfile, outputfile, boxfile, choose_test, ci=0.95, test_type="two.side", mul_test="none")  # ����������������
two_sample_test(inputfile,outputfile,choose_test, sample1, sample2, ci=0.95, test_type="two.side", mul_test="none")  # ��������������
mul_group_test(inputfile, outputfile, boxfile, groupfile, choose_test, mul_test="none")  # ���ж������
est_ttest(inputfile, outputfile, groupfile, choose_test)  # alpha������ָ������
```

�������
-----------------------------------

```
{"name": "chi_input", "type": "infile", "format": "meta.otu.otu_table"},  # ��������������ļ�
{"name": "chi_sample1", "type": "string"},  # ���������������Ʒ����
{"name": "chi_sample2", "type": "string"},  # ���������������Ʒ����
{"name": "chi_correction", "type": "string", "default": "none"},  # ��������Ķ��ؼ���У��
{"name": "fisher_input", "type": "infile", "format": "meta.otu.otu_table"},  # ���������������ļ�
{"name": "fisher_ci", "type": "float", "default": 0.05},  # ����������������ˮƽ
{"name": "fisher_sample1", "type": "string"},  # ����������������Ʒ����1
{"name": "fisher_sample2", "type": "string"},  # ����������������Ʒ����2
{"name": "fisher_correction", "type": "string", "default": "none"},  # ���������Ķ��ؼ���У��
{"name": "fisher_type", "type": "string", "default": "two.side"},  # ����������ѡ��β��˫β����
{"name": "kru_H_input", "type": "infile", "format": "meta.otu.otu_table"},  # kruskal_wallis_H_test�������ļ�
{"name": "kru_H_group", "type": "infile", "format": "meta.otu.group_table"},  # kruskal_wallis_H_test�������
{"name": "kru_H_correction", "type": "string", "default": "none"},  # kruskal_wallis_H_test�Ķ��ؼ���У��
{"name": "mann_input", "type": "infile", "format": "meta.otu.otu_table"},  # �Ⱥͼ���������ļ�
{"name": "mann_ci", "type": "float", "default": 0.05},  # �Ⱥͼ����������ˮƽ
{"name": "mann_group", "type": "infile", "format": "meta.otu.group_table"},  # �Ⱥͼ������������ļ�
{"name": "mann_correction", "type": "string", "default": "none"},  # �Ⱥͼ���Ķ��ؼ���У��
{"name": "mann_type", "type": "string", "default": "two.side"},  # �Ⱥͼ����ѡ��β��˫β����
{"name": "student_input", "type": "infile", "format": "meta.otu.otu_table"},  # T����������ļ�
{"name": "student_ci", "type": "float", "default": 0.05},  # T�����������ˮƽ
{"name": "student_group", "type": "infile", "format": "meta.otu.group_table"},  # T�������������ļ�
{"name": "student_correction", "type": "string", "default": "none"},  # T����Ķ��ؼ���У��
{"name": "student_type", "type": "string", "default": "two.side"},  # T�����ѡ��β��˫β����
{"name": "welch_input", "type": "infile", "format": "meta.otu.otu_table"},  # welch_T����������ļ�
{"name": "welch_ci", "type": "float", "default": 0.05},  # welch_T�����������ˮƽ
{"name": "welch_group", "type": "infile", "format": "meta.otu.group_table"},  # welch_T�������������ļ�
{"name": "welch_correction", "type": "string", "default": "none"},  # welch_T����Ķ��ؼ���У��
{"name": "welch_type", "type": "string", "default": "two.side"},  # welch_T�����ѡ��β��˫β����
{"name": "anova_input", "type": "infile", "format": "meta.otu.otu_table"},  # anova�����������ļ�
{"name": "anova_group", "type": "infile", "format": "meta.otu.group_table"},  # anova��������������ļ�
{"name": "anova_correction", "type": "string", "default": "none"},  # anova�����Ķ��ؼ���У��
{"name": "test", "type": "string"},   # ѡ��ͳ��ѧ�����������
{"name": "student_gname", "type": "string"},  # student������鷽��ѡ��
{"name": "welch_gname", "type": "string"},  # welch������鷽��ѡ��
{"name": "mann_gname", "type": "string"},  # wilcox�Ⱥͼ�����鷽��ѡ��
{"name": "kru_H_gname", "type": "string"},  # kru������鷽��ѡ��
{"name": "anova_gname", "type": "string"},  # �����ط���������鷽��ѡ��
{"name": "kru_H_coverage", "type": "float", "default": 0.95},  # ��������������ѡ������Ŷ�
{"name": "anova_coverage", "type": "float", "default": 0.95},
{"name": "student_coverage", "type": "float", "default": 0.95},
{"name": "welch_coverage", "type": "float", "default": 0.95},
{"name": "mann_coverage", "type": "float", "default": 0.95},
{"name": "chi_coverage", "type": "float", "default": 0.95},
{"name": "fisher_coverage", "type": "float", "default": 0.95},
{"name": "kru_H_methor", "type": "string", "default": 'tukeykramer'},  # post-hoc����ķ���
{"name": "anova_methor", "type": "string", "default": 'tukeykramer'},  # post-hoc����ķ���
{"name": "chi_methor", "type": "string", "default": 'DiffBetweenPropAsymptotic'},  # ������������������ķ���
{"name": "fisher_methor", "type": "string", "default": 'DiffBetweenPropAsymptotic'},  # ������������������ķ���
{"name": "est_group", "type": "infile", "format": "meta.alpha_diversity.group_file_dir"},
{"name": "est_input", "type": "infile", "format": "meta.otu.otu_table"},
{"name": "est_test_method", "type": "string", "default": "student"
```

�����߼�
-----------------------------------

1.ͨ��metastat��������Ӧ�ļ������R�ű�
2.ͨ��command����R�ű����м���
3.ͨ��twogroup_CI�������������Ƚϵ�CIֵ��ͨ��twosample_CI�����������Ƚϵ�CIֵ��ͨ��mul_posthoc�������Ƚϵ�posthocֵ��

��Դ����
-----------------------------------

```
self._cpu = 2
self._memory = '10G'
```

