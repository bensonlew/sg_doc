物种与功能注释总览（宏基因组）
==========================

API接口设计
-----------

PATH
-----------------------------------
/web_api/annotation/anno_overview.md



## 物种与功能注释总览

### 1) 基本信息

```
接口地址：controllor/meta/[instant,submit]/name
功能描述：根据参数查询注释总表以及创建基因集
身份验证(验证规则根据远程服务器规则进行)
查询方式： HTTP POST
```

### 2)  参数：

|     参数名      |     页面参数名称     |            示例值            |  类型  |   来源   |
|-----------------|----------------------|------------------------------|--------|----------|
| task_id         |                      | "58d3887da4e1af2ceacf48cf"   | String | 固定值   |
| mongo_para      | 多条件查询           |                              | String | 页面     |
| gene_len        | 筛选代表基因序列长度 | 200                          | String | 页面     |
| creat_set       | 创建基因集           | y  (当点击创建基因集时即为y) | String | 页面     |
| geneset         | 基因集名称(弹框中)   | genesetA                     | String | 页面     |
| geneset_list    | 基因集列表(弹框中)   | "geneset1,geneset2"          | String | 页面     |
| creat_table     | 下载表格             | y  (当点击下载表格时即为y)   | String | 页面     |
| submit_location |                      |                              | string | Conf配置 |
| task_type       | 提交类型             | 2                            | Int    | Conf配置 |

> 注：mongo_para ：在页面查询时使用的mongo组合条件，为了保持后台运行筛选时和前台直接查询时相同。
<br>
  当geneset为空时，选择基因列表中的某一个基因集时，传入geneset名称为选中的基因集列表中的名字，将筛选出的基因集加入原名称基因集中。

### 3) 响应结果（非实时）：
	    提交错误 :  {"success": False, "info": "错误提示"}
        提交成功 :  {"success": True, "info": "正在运行请稍后!"}

### 4) 相关collection：

```
geneset (基因集主表)
geneset_detail_bar 
geneset_detail_readsnum
geneset_detail_readsnum_relative 
anno_overview(主表)
anno_overview_detail 
```

