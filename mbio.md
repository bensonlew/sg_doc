生信模块库
==========
生信模块存放目录为：`src\mbio`

## workflow

workflow存放目录为：`src\mbio\workflows`

> 说明文档包含要点：功能描述、调用模块、模块关系图、结果目录。

| 模块名称 | 路径  | 功能说明 | 相关应用|
| ------- |-------|-------------|----|
| [metabase](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/workflows/meta/meta_base.py)|[meta.metabase](/mbio/workflows/metabase)|微生物多样性流程基础分析工作流.| |
|         |       |             | |

## module

modules存放目录为：`src\mbio\modules`

> 说明文档包含要点：功能描述、调用模块、模块关系图、参数设置、运行逻辑。

| 模块名称 | 路径  | 功能说明 |相关应用|
| ------- |-------|-------------|-----|
| [alpha_diversity](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/modules/meta/alpha_diversity/alpha_diversity.py) | [meta.alpha_diversity.alpha_diversity] | 无rst文档 |    |
| [beta_diversity](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/modules/meta/beta_diversity/beta_diversity.py)  | [meta.beta_diversity.beta_diversity] | 无rst文档 |    |
| [corr_network_analysis](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/modules/meta/otu/corr_network_analysis.py) | [meta.otu.corr_network_analysis] | 无rst文档 |    |
| [otu_analysis](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/modules/meta/otu/otu_analysis.py) | [meta.otu.otu_analysis] | 无rst文档 |    |
| [miseq_qc](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/modules/meta/qc/miseq_qc.py)  | [meta.qc.miseq_qc] | 无rst文档 |    |
| [sample_extract] (http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/modules/meta/sample_extract/sample_extract.py) | [meta.sample_extract.sample_extract] | 无rst文档 |    |
|         |       |             |  |

## tool

tools存放目录为：`src\mbio\tools`

> 说明文档包含要点：功能描述、调用软件、调用package、参数设置、环境变量、运行逻辑、资源配置、测试示例。

| 模块名称 | 路径  | 功能说明  |相关应用|
| ------- |-------|-------------|---------|
| [estimators](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/alpha_diversity/estimators.py) | [meta.alpha_diversity.estimators](/mbio/tools/meta/estimators) | 计算样本的多样性指数ace、chao、shannon |             |
| [rarefaction](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/alpha_diversity/rarefaction.py) | [meta.alpha_diversity.rarefaction](/mbio/tools/meta/rarefaction) | 比较测序数据量不同的样本中物种的丰富度 |             |
| [anosim_box](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/anosim_box.py) | [meta.beta_diversity.anosim_box] |             |             |
| [anosim](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/anosim.py) | [meta.beta_diversity.anosim](/mbio/tools/meta/anosim) | 进行AdonisAnosim分析 |             |
| [dbrda](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/dbrda.py) | [meta.beta_diversity.dbrda](/mbio/tools/meta/dbrda) | 进行db-RDA分析 |             |
| [distance_box](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/distance_box.py) | [meta.beta_diversity.distance_box](/mbio/tools/meta/distance_box) |绘制distanbox|             |
| [distance_calc](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/distance_calc.py) | [meta.beta_diversity.distance_calc](/mbio/tools/meta/distance_calc) | 用于计算otu表中样本的距离矩阵 |             |
| [enterotyping](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/enterotyping.py) | [meta.beta_diversity.enterotyping] |             |             |
| [environmental_regression](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/environmental_regression.py) | [meta.beta_diversity.environmental_regression] |             |             |
| [hcluster](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/hcluster.py) | [meta.beta_diversity.hcluster](/mbio/tools/meta/hcluster) |基于距离矩阵获得样本树文件newick tree|             |
| [metagenomeseq](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/metagenomeseq.py) | [meta.beta_diversity.metagenomeseq] |             |             |
| [meta_sourcetracker](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/meta_sourcetracker.py) | [meta.beta_diversity.meta_sourcetracker] |             |             |
| [nmds](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/nmds.py) | [meta.beta_diversity.nmds](/mbio/tools/meta/nmds) |进行NMDS分析|             |
| [n_pca](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/n_pca.py) | [meta.beta_diversity.n_pca] |             |             |
| [pca](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/pca.py) | [meta.beta_diversity.pca](/mbio/tools/meta/pca) | 进行PCA分析 |             |
| [pcoa](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/pcoa.py) | [meta.beta_diversity.pcoa](/mbio/tools/meta/pcoa) | 进行PCOA分析 |             |
| [plot-enterotyping](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/plot-enterotyping.py) | [meta.beta_diversity.plot-enterotyping] |             |             |
| [randomforest](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/randomforest.py) | [meta.beta_diversity.randomforest] |             |             |
| [rda_cca](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/rda_cca.py) | [meta.beta_diversity.rda_cca](/mbio/tools/meta/rda_cca) |进行RDA/CCA分析|             |
| [roc](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/beta_diversity/roc.py) | [meta.beta_diversity.roc] |             |             |
| [fastq_sample_extract](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/fastq_sample_extract.py) | [meta.fastq_sample_extract] |             |             |
| [function_predict](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/function_predict.py) | [meta.function_predict] |             |             |
| [corr_network_calc](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/otu/corr_network_calc.py) | [meta.otu.corr_network_calc] |             |             |
| [filter_otu](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/otu/filter_otu.py) | [meta.otu.filter_otu] |             |             |
| [otu_association](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/otu/otu_association.py) | [meta.otu.otu_association] |             |             |
| [otunetwork](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/otu/otunetwork.py) | [meta.otu.otunetwork] |             |             |
| [otu_taxon_stat](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/otu/otu_taxon_stat.py) | [meta.otu.otu_taxon_stat] |             |             |
| [pan_core_otu](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/otu/pan_core_otu.py) | [meta.otu.pan_core_otu] |             |             |
| [sort_samples](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/otu/sort_samples.py) | [meta.otu.sort_samples] |             |             |
| [sub_sample](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/otu/sub_sample.py) | [meta.otu.sub_sample] |             |             |
| [usearch_otu](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/otu/usearch_otu.py) | [meta.otu.usearch_otu](/mbio/tools/meta/usearch_otu) | 对多样本序列进行OTU聚类分析 |             |
| [pipe_submit_all](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/pipe/pipe_submit_all.py) | [meta.pipe.pipe_submit_all] |             |             |
| [base_info](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/qc/base_info.py) | [meta.qc.base_info](/mbio/tools/meta/base_info) | 用于统计一个fastq_dir文件夹下所有fastq的文件的碱基质量 |             |
| [qc_format](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/qc/qc_format.py) | [meta.qc.qc_format] |             |             |
| [reads_len_info](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/qc/reads_len_info.py) | [meta.qc.reads_len_info](/mbio/tools/meta/reads_len_info) |用于统计一个fasta_dir或fastq_dir下的所有文件的碱基长度分布信息|             |
| [samples_info](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/qc/samples_info.py) | [meta.qc.samples_info](/mbio/tools/meta/samples_info) | 用于统计一个fastq_dir/或者fasta_dir的样本信息|             |
| [sample_check](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/meta/sample_check.py) | [meta.sample_check] |             |             |
| [phylo_tree](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/tools/phylo/phylo_tree.py) | [phylo.phylo_tree] |             |             |
|         |       |             |             |

## file

files存放目录为：`src\mbio\files`

> 说明文档包含要点：格式说明、格式属性（值和说明描述）、方法函数（参数、功能说明、格式示例）

| 模块名称 | 路径  | 功能说明 | 相关应用|
| ------- |-------|-------------|---------|
| [group_file_dir](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/files/meta/alpha_diversity/group_file_dir.py) | [meta.alpha_diversity.group_file_dir] |             |             |
| [distance_matrix](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/files/meta/beta_diversity/distance_matrix.py) | [meta.beta_diversity.distance_matrix] |             |             |
| [newick_tree](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/files/meta/beta_diversity/newick_tree.py) | [meta.beta_diversity.newick_tree] |             |             |
| [env_table](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/files/meta/env_table.py) | [meta.env_table] |             |             |
| [biom](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/files/meta/otu/biom.py) | [meta.otu.biom] |             |             |
| [group_table](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/files/meta/otu/group_table.py) | [meta.otu.group_table] |             |             |
| [otu_seqids](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/files/meta/otu/otu_seqids.py) | [meta.otu.otu_seqids] |             |             |
| [otu_table](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/files/meta/otu/otu_table.py) | [meta.otu.otu_table] |             |             |
| [pan_core_table](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/files/meta/otu/pan_core_table.py) | [meta.otu.pan_core_otu] |             |             |
| [tax_summary_dir](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/files/meta/otu/tax_summary_dir.py) | [meta.otu.tax_summary_dir] |             |             |
| [venn_table](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/files/meta/otu/venn_table.py) | [meta.otu.venn_table] |             |             |
|         |       |             |             |

## package

packages存放目录为：`src\mbio\packages`

> 说明文档包含要点：功能描述、参数说明、函数功能

| 模块名称 | 路径  | 功能说明  |相关应用|
| ------- |-------|-------------|-----|
| [copy_demo](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/packages/meta/copy_demo.py) | [meta.copy_demo] |             |         |
| [export_otu](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/packages/meta/otu/export_otu.py) | [meta.otu.export_otu] |             |       |
| [pan_core_otu](http://git.majorbio.com/sanger_bioinfo/SangerBiocluster/tree/master/src/mbio/packages/meta/otu/pan_core_otu.py) | [meta.otu.pan_core_otu] |             |       |

