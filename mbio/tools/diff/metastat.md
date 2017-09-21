diff
==========================

模块Path
-----------

**tools.statistical.metastat**

功能描述
-----------------------------------

进行物种差异分析的多组比较、两组样本比较、两样本比较

调用package
-----------------------------------

packages.statistical.metastat
packages.statistical.twogroup_CI
packages.statistical.twosample_CI
packages.statistical.mul_posthoc

安装路径
-----------------------------------

主要命令及功能模块
-----------------------------------

```
two_group_test(inputfile, groupfile, outputfile, boxfile, choose_test, ci=0.95, test_type="two.side", mul_test="none")  # 进行两组样本检验
two_sample_test(inputfile,outputfile,choose_test, sample1, sample2, ci=0.95, test_type="two.side", mul_test="none")  # 进行两样本检验
mul_group_test(inputfile, outputfile, boxfile, groupfile, choose_test, mul_test="none")  # 进行多组检验
est_ttest(inputfile, outputfile, groupfile, choose_test)  # alpha多样性指数检验
```

参数设计
-----------------------------------

```
{"name": "chi_input", "type": "infile", "format": "meta.otu.otu_table"},  # 卡方检验的输入文件
{"name": "chi_sample1", "type": "string"},  # 卡方检验的输入样品名称
{"name": "chi_sample2", "type": "string"},  # 卡方检验的输入样品名称
{"name": "chi_correction", "type": "string", "default": "none"},  # 卡方检验的多重检验校正
{"name": "fisher_input", "type": "infile", "format": "meta.otu.otu_table"},  # 费舍尔检验的输入文件
{"name": "fisher_ci", "type": "float", "default": 0.05},  # 费舍尔检验的显著性水平
{"name": "fisher_sample1", "type": "string"},  # 费舍尔检验的输入样品名称1
{"name": "fisher_sample2", "type": "string"},  # 费舍尔检验的输入样品名称2
{"name": "fisher_correction", "type": "string", "default": "none"},  # 费舍尔检验的多重检验校正
{"name": "fisher_type", "type": "string", "default": "two.side"},  # 费舍尔检验的选择单尾或双尾检验
{"name": "kru_H_input", "type": "infile", "format": "meta.otu.otu_table"},  # kruskal_wallis_H_test的输入文件
{"name": "kru_H_group", "type": "infile", "format": "meta.otu.group_table"},  # kruskal_wallis_H_test输入分组
{"name": "kru_H_correction", "type": "string", "default": "none"},  # kruskal_wallis_H_test的多重检验校正
{"name": "mann_input", "type": "infile", "format": "meta.otu.otu_table"},  # 秩和检验的输入文件
{"name": "mann_ci", "type": "float", "default": 0.05},  # 秩和检验的显著性水平
{"name": "mann_group", "type": "infile", "format": "meta.otu.group_table"},  # 秩和检验的输入分组文件
{"name": "mann_correction", "type": "string", "default": "none"},  # 秩和检验的多重检验校正
{"name": "mann_type", "type": "string", "default": "two.side"},  # 秩和检验的选择单尾或双尾检验
{"name": "student_input", "type": "infile", "format": "meta.otu.otu_table"},  # T检验的输入文件
{"name": "student_ci", "type": "float", "default": 0.05},  # T检验的显著性水平
{"name": "student_group", "type": "infile", "format": "meta.otu.group_table"},  # T检验的输入分组文件
{"name": "student_correction", "type": "string", "default": "none"},  # T检验的多重检验校正
{"name": "student_type", "type": "string", "default": "two.side"},  # T检验的选择单尾或双尾检验
{"name": "welch_input", "type": "infile", "format": "meta.otu.otu_table"},  # welch_T检验的输入文件
{"name": "welch_ci", "type": "float", "default": 0.05},  # welch_T检验的显著性水平
{"name": "welch_group", "type": "infile", "format": "meta.otu.group_table"},  # welch_T检验的输入分组文件
{"name": "welch_correction", "type": "string", "default": "none"},  # welch_T检验的多重检验校正
{"name": "welch_type", "type": "string", "default": "two.side"},  # welch_T检验的选择单尾或双尾检验
{"name": "anova_input", "type": "infile", "format": "meta.otu.otu_table"},  # anova分析的输入文件
{"name": "anova_group", "type": "infile", "format": "meta.otu.group_table"},  # anova分析的输入分组文件
{"name": "anova_correction", "type": "string", "default": "none"},  # anova分析的多重检验校正
{"name": "test", "type": "string"},   # 选择统计学检验分析方法
{"name": "student_gname", "type": "string"},  # student检验分组方案选择
{"name": "welch_gname", "type": "string"},  # welch检验分组方案选择
{"name": "mann_gname", "type": "string"},  # wilcox秩和检验分组方案选择
{"name": "kru_H_gname", "type": "string"},  # kru检验分组方案选择
{"name": "anova_gname", "type": "string"},  # 单因素方差分析分组方案选择
{"name": "kru_H_coverage", "type": "float", "default": 0.95},  # 计算置信区间所选择的置信度
{"name": "anova_coverage", "type": "float", "default": 0.95},
{"name": "student_coverage", "type": "float", "default": 0.95},
{"name": "welch_coverage", "type": "float", "default": 0.95},
{"name": "mann_coverage", "type": "float", "default": 0.95},
{"name": "chi_coverage", "type": "float", "default": 0.95},
{"name": "fisher_coverage", "type": "float", "default": 0.95},
{"name": "kru_H_methor", "type": "string", "default": 'tukeykramer'},  # post-hoc检验的方法
{"name": "anova_methor", "type": "string", "default": 'tukeykramer'},  # post-hoc检验的方法
{"name": "chi_methor", "type": "string", "default": 'DiffBetweenPropAsymptotic'},  # 两样本计算置信区间的方法
{"name": "fisher_methor", "type": "string", "default": 'DiffBetweenPropAsymptotic'},  # 两样本计算置信区间的方法
{"name": "est_group", "type": "infile", "format": "meta.alpha_diversity.group_file_dir"},
{"name": "est_input", "type": "infile", "format": "meta.otu.otu_table"},
{"name": "est_test_method", "type": "string", "default": "student"
```

运行逻辑
-----------------------------------

1.通过metastat包生成相应的假设检验R脚本
2.通过command运行R脚本进行计算
3.通过twogroup_CI计算两组样本比较的CI值，通过twosample_CI计算两样本比较的CI值，通过mul_posthoc计算多组比较的posthoc值。

资源配置
-----------------------------------

```
self._cpu = 2
self._memory = '10G'
```

