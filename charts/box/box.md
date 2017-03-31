箱线图
========
**Author：xyz**
lib：meta-highcharts_report.js
demo: 暂无

# 说明

常规箱线图，应用于碱基质量分布图，表达量分布箱线图等

# content参数

* data: 箱线图数据，二维数据
* categories: 箱线图的横坐标，即每个箱子的名字，一维数组
* params: 图片其他参数
	+ colors：用于设定箱子的颜色，当传一个字符串时为所有箱子一个颜色，以一维数组方式传时，为每个箱子对应一个颜色
	+ title：设定图片的名称
	+ x_label：设定图片的横坐标名称
	+ y_label：设定图片的纵坐标名称
* size: 图片大小参数
	+ width：设定图片的宽度
	+ height：设定图片的高度


# 参数示例

```
content = {
	"data": [[1,2,3,4,5], [2,2,4,5,7]],//箱子A,B数据
	"categories": [A，B],//长度与箱子个数相同，分别为[min,q1,median,q3,max]
	"params": {
        "colors": ["#388E3C", "#F44336"],//一条线一个颜色
        "x_label": "Number of Reads Sampled",
        "y_label": "Sobs index of OTU level",
        "title": "Rarefaction curves"
    },
    "size": {
        "width": 800,
        "height": 600
    }
}

```
