venn图
=========
**Author:wzy**
lib：jvenn.js
demo:jvenn.html

#说明

venn图，可以进行6组及6组以内的分析画图


#content参数

* data: 数据
* params: 图片其他参数
	+ color：颜色，一维数组
	+ div_id_names：取值id
	+ div_search_field：根据输入的内容查找
	+ div_search_status：搜索的状态
	+ fontSize：字号大小
	+ fontFamily：字体
	+ displayStat1：布尔值，是否显示柱形图
	+ displayStat2：布尔值，是否显示条形图
* size: 图片大小参数
	+ width：设定图片的宽度
	+ height：设定图片的高度

# 参数示例

```
content = {
    "data": [
        {
            "name": "test1",
            "data": [
                "c__Deltaproteobacteria",
                "c__Erysipelotrichia",
                "c__Verrucomicrobiae",
                "c__Clostridia",
                "c__Actinobacteria",
                "c__Betaproteobacteria",
                "c__Gammaproteobacteria",
                "c__Bacilli",
                "c__Negativicutes",
                "c__Bacteroidia",
                "c__Cyanobacteria",
                "c__Epsilonproteobacteria"
            ]
        },
        {
            "name": "test2",
            "data": [
                "c__Deltaproteobacteria",
                "c__Erysipelotrichia",
                "c__Verrucomicrobiae",
                "c__Mollicutes",
                "c__Clostridia",
                "c__Actinobacteria",
                "c__Betaproteobacteria",
                "c__Gammaproteobacteria",
                "c__Bacilli",
                "c__Negativicutes",
                "c__Bacteroidia",
                "c__Epsilonproteobacteria"
            ]
        },
        {
            "name": "Con",
            "data": [
                "c__Deltaproteobacteria",
                "c__Erysipelotrichia",
                "c__Verrucomicrobiae",
                "c__Clostridia",
                "c__Actinobacteria",
                "c__Betaproteobacteria",
                "c__Gammaproteobacteria",
                "c__Bacilli",
                "c__Negativicutes",
                "c__Bacteroidia",
                "c__Cyanobacteria",
                "c__Epsilonproteobacteria"
            ]
        }
    ],
    "params": {
        "color": [
            "#F44336",
            "#388E3C",
            "#0288D1"
        ],
        "div_id_names": "venn_div_names",
        "div_search_field": "search-field",
        "div_search_status": "search-status",
        "displayStat1": false,
        "displayStat2": true
    },
    "size": {
        "width": "500",
        "height": "730"
    }
}
```