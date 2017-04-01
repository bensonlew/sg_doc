柱状图
========
**Author：xyz**
lib：meta-highcharts_report.js
demo: 暂无

# 说明

常规柱状图，应用于alpha多样性指数，SNP统计等

# content参数

* data: 柱状图数据，三维数据
* categories: 柱状图的横坐标，即每个柱子的名字，一维数组
* error_data: 柱子的标准差，三维数组
* scatter_data：标准差工字的中点
* params: 图片其他参数
	+ text：设定图片的名称
	+ x_label：设定图片的横坐标名称
	+ y_label：设定图片的纵坐标名称
	+ show_legend：是否显示图例
	+ legend：图例对象。键为图例名，值为相应颜色。
	+ orient：柱子的方向，1为纵向，0为横向。
* size: 图片大小参数
	+ width：设定图片的宽度
	+ height：设定图片的高度


# 参数示例

```
content = {
	"data": [[{"y":1.639169,"color":"#388E3C"},{"y":1.814534,"color":"#388E3C"}]],//柱子A,B的数据
	"categories": [A，B],//柱子AB的名称，长度与柱子个数相同
	"error_data": [[[1.626042,1.652297],[1.801115,1.827953]]],//柱子AB的标准差
	"scatter_data": [[1.63, 1.81]],//标准差的中点，不传时不画
	"params": {
        "x_label": "Number of Reads Sampled",
        "y_label": "Sobs index of OTU level",
        "text": "Rarefaction curves"，
        "legend":{"A":"#388E3C","B":"#F44336"}，//图例名称与颜色
        "show_legend": false,
        "orient":1
    },
    "size": {
        "width": 800,
        "height": 600
    }
}
```
