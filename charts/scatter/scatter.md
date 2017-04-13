散点图
========
**Author_one：qiuping**
**Author_two: zhangpeng**
lib：meta-highcharts_report.js::showScatterForBig
demo: 暂无

# 说明

根据数据分类，进行不同颜色分配绘制散点图，比如数据根据p值大小，分为五种颜色，每种颜色表示一种范围内的p值图；

# content参数

* data: 散点图数据，三维数据，第一个维度是数据需要的染色层数，比如五个颜色，[1:[],2:[],..5:[]]
        第二、三个维度为数据的x,y轴的数据；
* categories: 散点图的颜色数据，每个数据一个颜色，一维数组
* params: 图片其他参数
	+ colors：用于设定散点的颜色，与categories匹配的
	+ title：设定图片的名称
    + sub_title: 设定图片的二级名字
    + marker_symbol: 散点图的样子
    + marker_size: 散点图的大小
	+ x_label：设定图片的横坐标名称
	+ y_label：设定图片的纵坐标名称
    + x_log: 设定x轴是否取log
    + y_log: 设定y轴是否取log
    + y_reversed： 设定y轴是否取翻转
* size: 图片大小参数
	+ width：设定图片的宽度
	+ height：设定图片的高度


# 参数示例

样例1.对角线散点图

```

content={
    "params": {
        "colors": [
            "#3674a9",
            "#3674a8",
            "#3674a1",
            "#3674af",
            "#3674a9"
        ],
        "marker_symbol": [
            "triangle-down",
            "triangle-down",
            "diamond",
            "triangle",
            "triangle"
        ],
        "marker_size": [
            1,
            2,
            3,
            4,
            5
        ],
        "title": "a2_vs_b2.scatter",
        "sub_title": "",
        "x_label": "a2_fpkm",
        "y_label": "b2_fpkm",
        "x_log": true,
        "y_log": true,
        "y_reversed": false
    },
    "categories": [
        "down-fdr-0.01",
        "down-fdr-0.05",
        "nosig",
        "up-fdr-0.05",
        "up-fdr-0.01"
    ],
    "size": {
        "width": 750,
        "height": 650
    },
    "data": {
        "2": [
            [
                73.763,
                0
            ],
            [
                70.869,
                0
            ],
            [
                20.588,
                32.274
            ]
        ],
        "1":[
            [
                73.763,
                0
            ],
            [
                70.869,
                0
            ],
            [
                20.588,
                32.274
            ]
        ]
    }
}
```


```
样例2.火山图的散点图

content={
    "params": {
        "colors": [
            "#3674a9",
            "#3674a8",
            "#3674a1",
            "#3674af",
            "#3674a9"
        ],
        "marker_symbol": [
            "triangle-down",
            "triangle-down",
            "diamond",
            "triangle",
            "triangle"
        ],
        "marker_size": [
            1,
            2,
            3,
            4,
            5
        ],
        "title": "a2_vs_b2.scatter",
        "sub_title": "",
        "x_label": "log2fc(b2/a2)",
        "y_label": "FDR",
        "x_log": false,
        "y_log": true,
        "y_reversed": false
    },
    "categories": [
        "down-fdr-0.01",
        "down-fdr-0.05",
        "nosig",
        "up-fdr-0.05",
        "up-fdr-0.01"
    ],
    "size": {
        "width": 750,
        "height": 650
    },
    "data": {
        "2": [
            [
                73.763,
                0
            ],
            [
                70.869,
                0
            ],
            [
                20.588,
                32.274
            ]
        ],
        "1":[
            [
                73.763,
                0
            ],
            [
                70.869,
                0
            ],
            [
                20.588,
                32.274
            ]
        ]
    }
}

```
