生信模块库
==========
生信模块存放目录为：`src\mbio`

## workflow

workflow存放目录为：`src\mbio\workflows`

> 说明文档包含要点：功能描述、调用模块、模块关系图、结果目录。

| 模块名称 | 路径  | 功能说明 | 相关应用|
| ------- |-------|-------------|----|
| metabase|[meta.metabase](/mbio/workflows/metabase)|微生物多样性流程基础分析工作流.| |
|         |       |             | |

## module

modules存放目录为：`src\mbio\modules`

> 说明文档包含要点：功能描述、调用模块、模块关系图、参数设置、运行逻辑。

| 模块名称 | 路径  | 功能说明 |相关应用|
| ------- |-------|-------------|-----|
| alpha_diversity | [meta.alpha_diversity.alpha_diversity] | 无rst文档 |    |
| beta_diversity | [meta.beta_diversity.beta_diversity] | 无rst文档 |    |
| corr_network_analysis | [meta.otu.corr_network_analysis] | 无rst文档 |    |
| otu_analysis | [meta.otu.otu_analysis] | 无rst文档 |    |
| miseq_qc | [meta.qc.miseq_qc] | 无rst文档 |    |
| sample_extract | [meta.sample_extract.sample_extract] | 无rst文档 |    |
|         |       |             |  |
|         |       |             |  |

## tool

tools存放目录为：`src\mbio\tools`

> 说明文档包含要点：功能描述、调用软件、调用package、参数设置、环境变量、运行逻辑、资源配置、测试示例。

| 模块名称 | 路径  | 功能说明  |相关应用|
| ------- |-------|-------------|---------|
| estimators | [meta.alpha_diversity.estimators](/mbio/tools/meta/estimators) | 计算样本的多样性指数ace、chao、shannon |             |
| rarefaction | [meta.alpha_diversity.rarefaction](/mbio/tools/meta/rarefaction) | 比较测序数据量不同的样本中物种的丰富度 |             |
| anosim_box | [meta.beta_diversity.anosim_box] |             |             |
| anosim | [meta.beta_diversity.anosim] |             |             |
| dbrda | [meta.beta_diversity.dbrda] |             |             |
| distance_box | [meta.beta_diversity.distance_box] |             |             |
| distance_calc | [meta.beta_diversity.distance_calc] |             |             |
| enterotyping | [meta.beta_diversity.enterotyping] |             |             |
| environmental_regression | [meta.beta_diversity.environmental_regression] |             |             |
| hcluster | [meta.beta_diversity.hcluster] |             |             |
| metagenomeseq | [meta.beta_diversity.metagenomeseq] |             |             |
| meta_sourcetracker | [meta.beta_diversity.meta_sourcetracker] |             |             |
| nmds | [meta.beta_diversity.nmds] |             |             |
| n_pca | [meta.beta_diversity.n_pca] |             |             |
| pca | [meta.beta_diversity.pca] |             |             |
| pcoa | [meta.beta_diversity.pcoa] |             |             |
| plot-enterotyping | [meta.beta_diversity.plot-enterotyping] |             |             |
| randomforest | [meta.beta_diversity.randomforest] |             |             |
| rda_cca | [meta.beta_diversity.rda_cca] |             |             |
| roc | [meta.beta_diversity.roc] |             |             |
| fastq_sample_extract | [meta.fastq_sample_extract] |             |             |
| function_gene | [meta.function_gene.function_gene] |             |             |
| function_predict | [meta.function_predict] |             |             |
| corr_network_calc | [meta.otu.corr_network_calc] |             |             |
| filter_otu | [meta.otu.filter_otu] |             |             |
| otu_association | [meta.otu.otu_association] |             |             |
| otunetwork | [meta.otu.otunetwork] |             |             |
| otu_taxon_stat | [meta.otu.otu_taxon_stat] |             |             |
| pan_core_otu | [meta.otu.pan_core_otu] |             |             |
| sort_samples | [meta.otu.sort_samples] |             |             |
| sub_sample | [meta.otu.sub_sample] |             |             |
| usearch_otu | [meta.otu.usearch_otu] |             |             |
| pipe_submit_all | [meta.pipe.pipe_submit_all] |             |             |
| base_info | [meta.qc.base_info] |             |             |
| qc_format | [meta.qc.qc_format] |             |             |
| reads_len_info | [meta.qc.reads_len_info] |             |             |
| samples_info | [meta.qc.samples_info] |             |             |
| sample_check | [meta.sample_check] |             |             |
| phylo_tree | [phylo.phylo_tree] |             |             |
|         |       |             |             |
|         |       |             |         |

## file

files存放目录为：`src\mbio\files`

> 说明文档包含要点：格式说明、格式属性（值和说明描述）、方法函数（参数、功能说明、格式示例）

| 模块名称 | 路径  | 功能说明 | 相关应用|
| ------- |-------|-------------|---------|
| group_file_dir | [meta.alpha_diversity.group_file_dir] |             |             |
| distance_matrix | [meta.beta_diversity.distance_matrix] |             |             |
| newick_tree | [meta.beta_diversity.newick_tree] |             |             |
| env_table | [meta.env_table] |             |             |
| biom | [meta.otu.biom] |             |             |
| group_table | [meta.otu.group_table] |             |             |
| otu_seqids | [meta.otu.otu_seqids] |             |             |
| otu_table | [meta.otu.otu_table] |             |             |
| pan_core_table | [meta.otu.pan_core_otu] |             |             |
| tax_summary_dir | [meta.otu.tax_summary_dir] |             |             |
| venn_table | [meta.otu.venn_table] |             |             |
|         |       |             |             |
|         |       |             |             |

## package

packages存放目录为：`src\mbio\packages`

> 说明文档包含要点：功能描述、参数说明、函数功能

| 模块名称 | 路径  | 功能说明  |相关应用|
| ------- |-------|-------------|-----|
| copy_demo | [meta.copy_demo] |             |         |
| export_otu | [meta.otu.export_otu] |             |       |
| pan_core_otu | [meta.otu.pan_core_otu] |             |       |
| stat_fasta_info | [meta.otu.stat_fasta_info] |             |       |

