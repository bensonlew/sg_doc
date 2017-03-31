常规曲线图
========
**Author：xyz**
lib：meta-highcharts_report.js
demo: 暂无

# 说明

常规曲线图，应用于碱基分布图，测序饱和度曲线，基因覆盖度分析结果图等

# content参数

* data: 曲线图数据，二维数据
* categories: 对应的横坐标的刻度，一维数组
* params: 图片其他参数
	+ colors：用于设定曲线的颜色
	+ title：设定图片的名称
	+ x_label：设定图片的横坐标名称
	+ y_label：设定图片的纵坐标名称
	+ show_legend：是否显示图例
	+ tooltip_names：所有曲线的名字
	+ merge：是否根据分组画线的标准差
	+ errorbar：与merge同时设置，计算标准差的方法
* size: 图片大小参数
	+ width：设定图片的宽度
	+ height：设定图片的高度


# 参数示例

```
content = {
	"data": [["all",156,23,22,55,20], ["all", 156,23,22,55,25]],//曲线A,B数据,第一个字符为必穿传字符，曲线分组时为分组名，不分组时放all
	"categories": [1,2,3,4,5],//长度一般与曲线的数组长度相同
	"params": {
        "colors": ["#388E3C", "#F44336"],//一条线一个颜色
        "x_label": "Number of Reads Sampled",
        "y_label": "Sobs index of OTU level",
        "show_legend": true,
        "merge": 'mean',
        "errorbar": true,
        "tooltip_names": ["A", "B"],
        "title": "Rarefaction curves"
    },
    "size": {
        "width": 800,
        "height": 600
    }
}
```
