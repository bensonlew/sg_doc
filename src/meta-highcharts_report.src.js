Highcharts.SVGRenderer.prototype.symbols.cross = function(x, y, w, h) {
    return ["M", x, y, "L", x + w, y + h, "M", x + w, y, "L", x, y + h, "z"];
};
// Highcharts.SVGRenderer.prototype.symbols.sandglass = function(x, y, w, h) {
//     return ["M", x, y + h / 2, "L", x + w, y + h / 2, "L", x + w / 2, y, "L", x + w / 2, y + h, "L", x, y + h / 2, "z"];
// };
Highcharts.SVGRenderer.prototype.symbols.sandglass = function(x, y, w, h) {
    return ["M", x, y, "L", x + w, y, "L", x, y + h, "L", x + w, y + h, "z"];
};
Highcharts.SVGRenderer.prototype.symbols.del = function(x, y, w, h) {
    return ["M", x, y + h / 4, "L", x + w, y + h / 4, "L", x + w, y + (3 * h) / 4, "L", x, y + (3 * h) / 4, "z"];
};
Highcharts.SVGRenderer.prototype.symbols.up_point = function(x, y, w, h) {
    return ["M", x, y, "L", x + w / 2, y + h, "L", x + w, y, "L", x + w / 2, y + h / 2, "L", x, y, "z"];
};
Highcharts.SVGRenderer.prototype.symbols.down_point = function(x, y, w, h) {
    return ["M", x, y + h, "L", x + w / 2, y, "L", x + w, y + h, "L", x + w / 2, y + h / 2, "L", x, y + h, "z"];
};
Highcharts.SVGRenderer.prototype.symbols.plus = function(x, y, w, h) {
    return [
        "M", x, y + (5 * h) / 8,
        "L", x, y + (3 * h) / 8,
        "L", x + (3 * w) / 8, y + (3 * h) / 8,
        "L", x + (3 * w) / 8, y,
        "L", x + (5 * w) / 8, y,
        "L", x + (5 * w) / 8, y + (3 * h) / 8,
        "L", x + w, y + (3 * h) / 8,
        "L", x + w, y + (5 * h) / 8,
        "L", x + (5 * w) / 8, y + (5 * h) / 8,
        "L", x + (5 * w) / 8, y + h,
        "L", x + (3 * w) / 8, y + h,
        "L", x + (3 * w) / 8, y + (5 * h) / 8,
        "L", x, y + (5 * h) / 8,
        "z"
    ];
};

function extendColors(colorLength) {
    /*
    拓展颜色设置中的颜色，通过循环将原颜色组不断变暗。
    params colorLength: 实际所需颜色数量
    */
    var count = parseInt(colorLength / Highcharts.getOptions().colors.length);
    var tempColorLength = Highcharts.getOptions().colors.length;
    while (count--) {
        var i = Highcharts.getOptions().colors.length;
        var temp = tempColorLength;
        while (temp--) {
            Highcharts.getOptions().colors.push(Highcharts.Color(Highcharts.getOptions().colors[i - temp - 1]).brighten(0.05).get("rgb"));
        }
    }
}

Highcharts.setOptions({
    colors: ["#388E3C", "#F44336", "#0288D1", "#FF9800", "#727272", "#E91E63", "#673AB7", "#8BC34A", "#2196F3", "#D32F2F", "#FFC107", "#BDBDBD", "#F8BBD0", "#3F51B5", "#CDDC39", "#009688", "#C2185B", "#FFEB3B", "#212121", "#FFCCBC", "#BBDEFB"],
    yAxis: {
        tickWidth: 1,
        lineWidth: 1,
        lineColor: "#5d5d60",
        tickColor: "#5d5d60",
        gridLineDashStyle: "Dash",
        labels: {
            style: {
                "color": "#2a2a2c"
            }
        },
        title: {
            style: {
                "color": "#2a2a2c",
                "fontSize": "15px"
            }
        },
        tickLength: 7
    },
    xAxis: {
        tickWidth: 1,
        lineWidth: 1,
        lineColor: "#5d5d60",
        tickColor: "#5d5d60",
        labels: {
            style: {
                "color": "#2a2a2c",
                "fontSize": "11px"
            }
        },
        title: {
            style: {
                "color": "#2a2a2c",
                fontSize: "15px"
            }
        },
        tickLength: 7
    },
    credits: {
        enabled: false
    },
    exporting: {
        buttons: {
            contextButton: {
                symbol: "url(/style/images/report/icon-down.png)",
                y: -10,
                x: 9
            }
        },
        scale: 6
    },
    plotOptions: {
        series: {
            marker: {
                lineColor: undefined,
            },
            turboThreshold: 100000
        },
    },
    chart: {
        resetZoomButton: {
            position: {
                x: -20,
                y: -50
            }
        },
        style: {
            // fontFamily: "times new roman",
            fontFamily: "arial"
        }
    },
    lang: {
        contextButtonTitle: "图表导出菜单",
        decimalPoint: ".",
        downloadJPEG: "下载JPEG图片",
        downloadPDF: "下载PDF文件",
        downloadPNG: "下载PNG文件",
        downloadSVG: "下载SVG文件",
        drillUpText: "返回 {series.name}",
        loading: "加载中",
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        noData: "没有数据",
        numericSymbols: [null, null, null, "T", "P", "E"],
        printChart: "打印图表",
        resetZoom: "恢复缩放",
        resetZoomTitle: "恢复图表",
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        thousandsSep: ",",
        weekdays: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期天"]
    }
});
jQuery.highcharts_report = {
    showCurveErrorbar: function(curve, content) {
        var data_group = {};
        for (var i in content.data) {
            if (content.data[i][0] in data_group) {
                data_group[content.data[i][0]].data.push(content.data[i]);
                if (content.data[i].length - 1 > data_group[content.data[i][0]].length) {
                    data_group[content.data[i][0]].length = content.data[i].length - 1;
                }
            } else {
                data_group[content.data[i][0]] = {
                    data: [content.data[i]],
                    color: content.params.colors[i],
                    new_data: [],
                    std: [],
                    averge: [],
                    length: content.data[i].length - 1
                };
            }
        }
        for (var i in data_group) {
            for (var num = 0; num < data_group[i].length; num++) {
                data_group[i].new_data.push([]);
            }
        }
        for (var i in data_group) {
            for (var n in data_group[i].data) {
                for (var m = 1; m < data_group[i].data[n].length; m++) {
                    data_group[i].new_data[m - 1].push(data_group[i].data[n][m]);
                }
            }
        }
        var averge_std = function(this_array) {
            var sum = 0;
            for (var i = 0; i < this_array.length; i++) {
                sum += this_array[i];
            }
            var averge = sum / this_array.length;
            var std_all = 0;
            for (var i = 0; i < this_array.length; i++) {
                std_all += (this_array[i] - averge) * (this_array[i] - averge);
            }
            var std = Math.sqrt(std_all / this_array.length);
            return [parseFloat(averge.toFixed(4)), parseFloat(std.toFixed(4))];
        };
        var median_maxmin = function(this_array) {
            var temp_m = (this_array.length + 1) / 2;
            var this_array = this_array.sort();
            var tem_median = (this_array[Math.ceil(temp_m) - 1] + this_array[Math.floor(temp_m) - 1]) / 2;
            var max = this_array[this_array.length - 1];
            var min = this_array[0];
            return [parseFloat(tem_median.toFixed(4)), [min, max]];
        };
        var flag = 0;
        for (var i in data_group) {
            for (var one in data_group[i].new_data) {
                if (content.params.merge == "mean") {
                    var averge_std_value = averge_std(data_group[i].new_data[one]);
                    data_group[i].std.push([averge_std_value[0] - averge_std_value[1], averge_std_value[0] + averge_std_value[1]]);
                    data_group[i].averge.push(averge_std_value[0]);
                } else if (content.params.merge == "median") {
                    var median_maxmin_value = median_maxmin(data_group[i].new_data[one]);
                    // console.log(median_maxmin_value);
                    data_group[i].std.push(median_maxmin_value[1]);
                    data_group[i].averge.push(median_maxmin_value[0]);
                } else {
                    var flag = 1;
                    alert("错误的组内合并方式:" + content.params.merge);
                    break;
                }
            }
            if (flag) {
                break;
            }
        }
        var series = [];
        var temp_min = new Array();
        for (var i in data_group) {
            series.push({
                name: i,
                type: "spline",
                data: data_group[i].averge,
                color: data_group[i].color
            });
            temp_min.push(Highcharts.arrayMin(data_group[i].averge));
            if (content.params.errorbar && (content.params.merge == "mean" || content.params.merge == "median")) {
                series.push({
                    name: i,
                    type: "errorbar",
                    data: data_group[i].std,
                    color: data_group[i].color
                });
            }
        }
        $("#" + curve).highcharts({
            plotOptions: {
                spline: {
                    marker: {
                        enabled: false
                    },
                },
                line: {
                    marker: {
                        enabled: false
                    },
                },
                series: {
                    events: {
                        legendItemClick: function(event) {
                            return false;
                        }
                    }
                }
            },
            xAxis: {
                title: {
                    text: content.params.x_label
                },
                categories: content.categories
            },
            yAxis: {
                lineWidth: 1,
                title: {
                    text: content.params.y_label
                },
                min: Highcharts.arrayMin(temp_min)
            },
            legend: {
                align: "right",
                layout: "vertical",
                verticalAlign: "top",
                y: 25,
                enabled: content.params.show_legend
            },
            series: series,
            title: { text: content.params.title }
            // subtitle: {text: content.params.title},
        });
    },
    showPie: function(pie, contents) {
        extendColors(contents.data.length);
        var data = new Array();
        for (i in contents.data) {
            one = {
                name: contents.data[i].name,
                y: contents.data[i].value
            };
            data.push(one);
        }
        var title = {};
        var subtitle = {};
        title = {
            text: contents.title.text,
        };
        if (contents.title.subtext) {
            subtitle = {
                text: contents.title.subtext,
                style: {
                    fontSize: "17px"
                }
            };
        }
        $("#" + pie).highcharts({
            chart: {
                type: "pie",
            },
            plotOptions: {
                pie: {
                    borderWidth: 0
                }
            },
            series: [{
                allowPointSelect: true,
                name: "Value",
                data: data,
                dataLabels: {
                    enabled: true,
                    format: "<b>{point.name}</b>:{point.percentage:.2f}%",
                }
            }],
            title: title,
            subtitle: subtitle
        });
    },
    showBar: function(bar, contents) {
        extendColors(contents.data.length);
        if (!contents.params.colors) {
            contents.params.colors = [];
        }
        var charts_options = {};
        if (contents.params.horizontal) {
            charts_options.chart = {
                type: "bar"
            };
        } else {
            charts_options.chart = {
                type: "column"
            };
        }
        if (contents.params.stack) {
            if (contents.params.show_legend) {
                charts_options.plotOptions = {
                    series: {
                        stacking: "normal"
                    }
                };
            } else {
                charts_options.plotOptions = {
                    series: {
                        stacking: "normal",
                        showInLegend: false
                    }
                };
            }
        } else {
            if (contents.params.show_legend) {
                charts_options.plotOptions = {
                    series: {
                        showInLegend: true
                    }
                };
            } else {
                charts_options.plotOptions = {
                    series: {
                        showInLegend: false
                    }
                };
            }
        }
        charts_options.plotOptions.bar = {
            borderWidth: 0
        };
        charts_options.plotOptions.column = {
            borderWidth: 0
        };
        var data_series = new Array();
        var first = "";
        for (var i in contents.data) {
            var onedata = new Array();
            for (var o in contents.data[i]) {
                if (o == 0) {
                    first = contents.data[i][o];
                } else {
                    onedata.push(contents.data[i][o]);
                }
            }
            data_series.push({
                name: first,
                data: onedata,
                color: contents.params.colors[i]
            });
        }
        if (contents.error_data != null) {
            var series_error = {
                showInLegend: false,
                name: "error range",
                type: "errorbar",
                data: contents.error_data[0],
            };
            data_series.push(series_error);
        }
        if (contents.scatter_data != null) {
            var series_scatter = {
                showInLegend: false,
                name: "",
                type: "scatter",
                color: "black",
                marker: { symbol: "circle", radius: 2},
                tooltip: {
                    pointFormatter: function() {
                        return this.point.y;
                    }
                },
                data: contents.scatter_data[0],
            };
            data_series.push(series_scatter);
        }
        if (contents.params.legend) {
            for (var i in data_series) {
                data_series[i].showInLegend = false;
            }
            for (var i in contents.params.legend) {
                data_series.push({
                    type: "scatter",
                    marker: {
                        symbol: "square",
                        radius: 5,
                    },
                    name: i,
                    color: contents.params.legend[i]
                });
            }
        }
        charts_options.yAxis = {
            max: contents.params.max_value,
            min: contents.params.min_value,
            title: {
                text: contents.params.y_label
            },
            tickWidth: 1,
            lineWidth: 1
        };
        charts_options.xAxis = {
            categories: contents.categories,
            title: {
                text: contents.params.x_label
            },
            labels: {
                autoRotation: [-75, -80, -90]
            }
        };
        charts_options.series = data_series;
        // if (charts_options.series[0].data.length > 1) {
        //     charts_options.chart.zoomType = "xy"
        // }
        charts_options.chart.zoomType = "xy";
        if (contents.params.sub_title) {
            charts_options.subtitle = {
                text: contents.params.sub_title,
                style: {
                    fontSize: "17"
                }
            };
            charts_options.title = {
                text: contents.params.title
            };
        } else {
            charts_options.title = {
                text: contents.params.title
            };
        }
        if (contents.params.legend_direction != "bottom") {
            charts_options.legend = {
                align: "right",
                verticalAlign: "top",
                layout: "vertical",
                y: 25,
            };
        }
        $("#" + bar).highcharts(charts_options);
    },
    showCurve: function(curve, contents) {
        if (contents.params.merge == "mean" || contents.params.merge == "median") {
            return jQuery.highcharts_report.showCurveErrorbar(curve, contents);
        }
        charts_options = {
            chart: {
                renderTo: curve,
                zoomType: "xy"
            },
            plotOptions: {
                spline: {
                    marker: {
                        enabled: false
                    },
                },
                line: {
                    marker: {
                        enabled: false
                    },
                },
                series: {
                    events: {
                        legendItemClick: function(event) {
                            return false;
                        }
                    }
                }
            },
            xAxis: {
                title: {
                    text: contents.params.x_label
                },
                min: contents.show_x_categories ? null : Math.min.apply(Math, contents.categories),
                categories: contents.show_x_categories ? contents.categories : null
            },
            legend: {
                align: "right",
                layout: "vertical",
                verticalAlign: "top",
                y: 25,
                enabled: contents.params.show_legend
            },
            tooltip: {
                useHTML: true,
                formatter: function() {
                    if (contents.params.calculate_type != undefined && contents.params.calculate_type == "log") {
                        return "<b>" + this.x + "</b><br/>" + this.series.name + ":" + this.y.toFixed(5);
                    } else {
                        return "<b>" + this.x + "</b><br/>" + this.series.name + ":" + this.y;
                    }
                }
            }
        };

        if (contents.params.sub_title) {
            charts_options.subtitle = {
                text: contents.params.sub_title
            };
            charts_options.title = {
                text: contents.params.title
            };
        } else {
            charts_options.title = {
                text: contents.params.title
            };
        }
        if (contents.params.calculate_type != undefined && contents.params.calculate_type == "log") {
            charts_options.yAxis = {
                title: {
                    text: contents.params.y_label
                },
                labels: {
                    formatter: function() {
                        return parseFloat((this.value * 100).toFixed(5)).toString() + "%";
                    }
                },
                type: "logarithmic",
                tickWidth: 1,
                lineWidth: 1,
            };
        } else {
            charts_options.yAxis = {
                title: {
                    text: contents.params.y_label
                },
                tickWidth: 1,
                lineWidth: 1
            };
        }
        var count = 0;
        var categories = new Array();
        var series_array = new Array();
        for (i in contents.data) {
            var na = "";
            var datas = [];
            var data_count = 0;
            for (var one in contents.data[i]) {
                if (one == 0) {
                    na = contents.data[i][one];
                    categories.push(na);
                } else {
                    var data_opt = {};
                    data_opt.x = contents.show_x_categories ? contents.categories[data_count - 1] : Number(contents.categories[data_count - 1]);
                    data_opt.y = contents.data[i][one];
                    data_opt.name = one;
                    datas.push(data_opt);
                }
                data_count = data_count + 1;
            }
            var series = {
                name: contents.params.tooltip_names[count],
                data: datas,
            };
            if (contents.params.line_type) {
                series.type = contents.params.line_type;
            } else {
                if (contents.params.calculate_type != undefined && contents.params.calculate_type == "log") {
                    series.type = "line";
                } else {
                    series.type = "spline";
                }
            }
            if (contents.params.colors) {
                series.color = contents.params.colors[count];
                series.showInLegend = false;
            }
            series_array.push(series);
            count += 1;
        }
        charts_options.series = series_array;
        var categories_color = {};
        if (contents.params.colors) {
            for (i in contents.params.colors) {
                categories_color[categories[i]] = contents.params.colors[i];
            }
            for (i in categories_color) {
                var series = {
                    name: i,
                    data: null,
                    type: "spline",
                    color: categories_color[i],
                };
                series_array.push(series);
            }
        }
        var chart = new Highcharts.Chart(charts_options);
        //2016.11.24 hongdong.xuan 网络中心系数表，在样本与物种之间添加标示线
        if (contents.params.plot_lines != undefined && contents.params.plot_lines.x && contents.params.plot_lines.x.length != 0) {
            for (var i = 0; i < contents.params.plot_lines.x.length; i++) {
                var x_data = contents.params.plot_lines.x[i];
                chart.xAxis[0].addPlotLine({ //在x轴上增加
                    value: x_data, //在值为2的地方
                    width: 1.5, //标示线的宽度为2px
                    color: "black", //标示线的颜色
                    dashStyle: "longdashdot",
                });
            }
            if (contents.params.plot_lines.y && contents.params.plot_lines.y.length != 0) {
                for (var i = 0; i < contents.params.plot_lines.y.length; i++) {
                    var y_data = contents.params.plot_lines.y[i];
                    chart.yAxis[0].addPlotLine({ //y轴上增加
                        value: y_data,
                        width: 1,
                        color: "blue",
                        dashStyle: "longdashdot",
                    });
                }
            }
        }
    },
    showTaxonobar: function(taxonobar, contents) {
        $("#container").highcharts({
            title: {
                text: contents.title
            },
            xAxis: {
                type: "category",
                tickPixelInterval: 40,
                tickLength: 5,
                title: {
                    text: contents.x_label
                }
            },
            yAxis: [{
                tickPixelInterval: 40,
                lineWidth: 1,
                gridLineWidth: 1,
                gridLineColor: "#f6f5ec",
                gridLineDashStyle: "Dash",
                title: {
                    text: contents.x_label
                },
                tickLength: 5,
                tickWidth: 1
            }, {
                opposite: true,
                floor: 0,
                tickPixelInterval: 40,
                lineWidth: 1,
                gridLineWidth: 1,
                gridLineColor: "#f6f5ec",
                gridLineDashStyle: "Dash",
                title: {
                    text: ""
                },
                tickLength: 5,
                tickWidth: 1
            }],
            tooltip: {
                formatter: function() {
                    if (this.point.notip) {
                        return false;
                    } else {
                        return this.point.name + "<br/>数量: <b>" + this.point.num + "</b>" + "<br/>百分比: <b>" + this.point.y + "</b>";
                    }
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
                        formatter: function() {
                            if (this.point.num) {
                                return this.point.num + "";
                            } else {
                                return this.y;
                            }
                        }
                    }
                },
                line: {
                    states: {
                        hover: {
                            enabled: false
                        }
                    }
                }
            },
            series: [{
                type: "bar",
                showInLegend: false,
                data: [{
                    name: "binding",
                    color: "#7fb80e",
                    num: 16151,
                    y: 58.5
                }, {
                    name: "catalytic activity",
                    color: "#7fb80e",
                    y: 19.6,
                    num: 11392
                }, {
                    name: "transporter activity",
                    color: "#7fb80e",
                    y: 41.3,
                    num: 1640
                }, {
                    name: "cell",
                    color: "#f47920",
                    y: 46.5,
                    num: 12846
                }, {
                    name: "cell part",
                    color: "#f47920",
                    y: 46.5,
                    num: 12846
                }, {
                    name: "membrane",
                    color: "#f47920",
                    y: 28.5,
                    num: 7877
                }, {
                    name: "organelle",
                    color: "#f47920",
                    y: 33.1,
                    num: 9142
                }, {
                    name: "cellular process",
                    color: "#426ab3",
                    y: 63.2,
                    num: 17451
                }, {
                    name: "metabolic process",
                    color: "#426ab3",
                    y: 59,
                    num: 16287
                }, {
                    name: "single-organism process",
                    color: "#426ab3",
                    y: 53.3,
                    num: 14718
                }, {
                    name: "biological regulation",
                    color: "#426ab3",
                    y: 34.7,
                    num: 9577
                }]
            }, {
                type: "line",
                showInLegend: true,
                color: "#7fb80e",
                lineWidth: 10,
                marker: {
                    enabled: false
                },
                name: "molecular_function",
                tooltip: {
                    followTouchMove: false
                },
                data: [{
                    x: 0,
                    y: 75,
                    notip: true
                }, {
                    x: 1,
                    y: 75,
                    notip: true
                }, {
                    x: 2,
                    y: 75,
                    notip: true
                }, ]
            }, {
                type: "line",
                showInLegend: true,
                color: "#f47920",
                lineWidth: 10,
                marker: {
                    enabled: false
                },
                name: "cellular_component",
                data: [{
                    x: 3,
                    y: 75,
                    notip: true
                }, {
                    x: 4,
                    y: 75,
                    notip: true
                }, {
                    x: 5,
                    y: 75,
                    notip: true
                }, {
                    x: 6,
                    y: 75,
                    notip: true
                }, ]
            }, {
                type: "line",
                showInLegend: true,
                color: "#426ab3",
                lineWidth: 10,
                marker: {
                    enabled: false
                },
                name: "biological_process",
                data: [{
                    x: 7,
                    y: 75,
                    notip: true
                }, {
                    x: 8,
                    y: 75,
                    notip: true
                }, {
                    x: 9,
                    y: 75,
                    notip: true
                }, {
                    x: 10,
                    y: 75,
                    notip: true
                }, ]
            }, ]
        });
    },
    showScatterMark: function(ScatterVector, contents) {
        Highcharts.Renderer.prototype.symbols.arrow = function(x, y, w, h, options) {
            var angle = Math.PI / 2;
            if (options) {
                if (options.angle !== undefined && !isNaN(options.angle)) {
                    angle = options.angle;
                } else {
                    return [];
                }
            }
            w = w / 1.2;
            x = x + h / 2 - 2 * w * Math.sin(angle);
            y = y + h / 2 - 2 * w * Math.cos(angle);
            h = w * 2;
            return ["M", x, y, "L", x + w * Math.cos(angle), y - w * Math.sin(angle), x + h * Math.sin(angle), y + h * Math.cos(angle), x - w * Math.cos(angle), y + w * Math.sin(angle), "Z"];
        };
        Highcharts.Series.prototype.drawPoints = function() {
            var NORMAL_STATE = "",
                HOVER_STATE = "hover",
                SELECT_STATE = "select";
            var series = this,
                pointAttr, points = series.points,
                chart = series.chart,
                plotX, plotY, i, point, radius, symbol, isImage, graphic, options = series.options,
                seriesMarkerOptions = options.marker,
                seriesPointAttr = series.pointAttr[""],
                pointMarkerOptions, hasPointMarker, enabled, isInside, markerGroup = series.markerGroup,
                xAxis = series.xAxis;
            globallyEnabled = Highcharts.pick(seriesMarkerOptions.enabled, xAxis.isRadial, series.closestPointRangePx > 2 * seriesMarkerOptions.radius);
            if (seriesMarkerOptions.enabled !== false || series._hasPointMarkers) {
                i = points.length;
                var l = i;
                while (i--) {
                    point = points[i];
                    plotX = Math.floor(point.plotX);
                    plotY = point.plotY;
                    graphic = point.graphic;
                    pointMarkerOptions = point.marker || {};
                    hasPointMarker = !!point.marker;
                    enabled = (globallyEnabled && pointMarkerOptions.enabled === undefined) || pointMarkerOptions.enabled;
                    isInside = point.isInside;
                    if (enabled && plotY !== undefined && !isNaN(plotY) && point.y !== null) {
                        if (i > 0) {
                            lastPoint = points[i - 1];
                            thisPoint = points[i];
                            theta = Math.atan((plotX - lastPoint.plotX) / (plotY - lastPoint.plotY));
                            if (theta <= 0 && thisPoint.plotY < lastPoint.plotY) {
                                theta = theta - Math.PI;
                            }
                            if (theta >= 0 && thisPoint.plotY < lastPoint.plotY) {
                                theta = Math.PI + theta;
                            }
                        } else {
                            if (l > 1) {
                                lastPoint = points[i];
                                thisPoint = points[i + 1];
                                theta = Math.atan((thisPoint.plotX - lastPoint.plotX) / (thisPoint.plotY - lastPoint.plotY));
                                if (theta <= 0 && thisPoint.plotY < lastPoint.plotY) {
                                    theta = theta - Math.PI;
                                }
                                if (theta >= 0 && thisPoint.plotY < lastPoint.plotY) {
                                    theta = Math.PI + theta;
                                }
                            } else {
                                lastPoint = points[i];
                                thisPoint = points[i];
                                theta = 0;
                            }
                        }
                        pointAttr = point.pointAttr[point.selected ? SELECT_STATE : NORMAL_STATE] || seriesPointAttr;
                        radius = pointAttr.r;
                        symbol = Highcharts.pick(pointMarkerOptions.symbol, series.symbol);
                        isImage = symbol.indexOf("url") === 0;
                        if (graphic) {
                            graphic[isInside ? "show" : "hide"](true).attr(pointAttr).animate(Highcharts.extend({
                                x: plotX - radius,
                                y: plotY - radius
                            }, graphic.symbolName ? {
                                width: 2 * radius,
                                height: 2 * radius
                            } : {}));
                        } else {
                            if (isInside && (radius > 0 || isImage)) {
                                if (symbol === "arrow") {
                                    graphic = chart.renderer.symbol(symbol, plotX - radius, plotY - radius, 2 * radius, 2 * radius, {
                                        angle: theta
                                    }).attr(pointAttr).add(markerGroup);
                                } else {
                                    graphic = chart.renderer.symbol(symbol, plotX - radius, plotY - radius, 2 * radius, 2 * radius, hasPointMarker ? pointMarkerOptions : seriesMarkerOptions).attr(pointAttr).add(markerGroup);
                                }
                                point.graphic = graphic;
                            }
                        }
                    } else {
                        if (graphic) {
                            point.graphic = graphic.destroy();
                        }
                    }
                }
            }
        };
        var samples_datas = {};
        var default_color = "#d3d7d4";
        var default_symbol = "cross";
        for (var i in contents.data) {
            samples_datas[contents.params.categories[i]] = {
                name: contents.params.categories[i],
                x: contents.data[i][0],
                y: contents.data[i][1],
                color: default_color,
                marker: {
                    symbol: default_symbol,
                    lineWidth: 2,
                    radius: 3
                }
            };
        }
        if (!contents.params.factor_style) {
            contents.params.factor_style = {};
        }
        if (!contents.params.vector_style) {
            contents.params.vector_style = {};
        }
        if (!contents.params.species_style) {
            contents.params.species_style = {};
        }
        var flag = false;
        if (contents.params.symbols && contents.params.colors) {
            flag = true;
            var colors_count = 0;
            var symbols_count = 0;
            for (var i in contents.params.colors) {
                colors_count++;
                if (contents.params.symbols[i] === undefined) {
                    flag = false;
                    break;
                } else {
                    if (contents.params.symbols[i].samples.length != contents.params.colors[i].samples.length) {
                        flag = false;
                        break;
                    }
                    if (flag) {
                        for (var s in contents.params.symbols[i].samples) {
                            if (contents.params.symbols[i].samples[s] != contents.params.colors[i].samples[s]) {
                                flag = false;
                                break;
                            }
                        }
                    }
                }
                if (!flag) {
                    break;
                }
            }
            if (flag) {
                for (var i in contents.params.symbols) {
                    symbols_count++;
                }
                if (symbols_count != colors_count) {
                    flag = false;
                }
            }
        } else {
            var flag = false;
        }
        var series = [];
        if (contents.params.colors) {
            for (var i in contents.params.colors) {
                if (!contents.params.colors[i].color) {
                    contents.params.colors[i].color = default_color;
                }
            }
            if (flag) {
                legend_name = contents.params.color_category ? contents.params.color_category : "";
            } else {
                legend_name = contents.params.color_category ? "Color: " + contents.params.color_category : "Color:";
            }
            var legend_series = {
                type: "scatter",
                data: [null],
                name: legend_name,
                color: "white"
            };
            // series.push(legend_series);
            for (var i in contents.params.colors) {
                var colors_legend_series = {
                    type: "scatter",
                    name: i,
                    data: [null],
                    color: contents.params.colors[i].color,
                    marker: {
                        radius: 5,
                        symbol: "circle"
                    }
                };
                var lineWidth = 0;
                if (flag) {
                    for (var sym in contents.params.symbols) {
                        if (!contents.params.symbols[sym].symbol) {
                            contents.params.symbols[sym].symbol = default_symbol;
                        }
                    }
                    if (contents.params.symbols[i].symbol == "cross" || contents.params.symbols[i].symbol == "plus") {
                        lineWidth = 2;
                    }
                    colors_legend_series.marker = {
                        symbol: contents.params.symbols[i].symbol,
                        lineWidth: lineWidth
                    };
                }
                series.push(colors_legend_series);
                for (var s in contents.params.colors[i].samples) {
                    samples_datas[contents.params.colors[i].samples[s]].color = contents.params.colors[i].color;
                    if (flag) {
                        samples_datas[contents.params.symbols[i].samples[s]].marker = {
                            symbol: contents.params.symbols[i].symbol,
                            lineWidth: lineWidth,
                            radius: lineWidth ? 3 : 4
                        };
                    }
                }
            }
        }
        if (!flag) {
            if (contents.params.symbols) {
                for (var i in contents.params.symbols) {
                    if (!contents.params.symbols[i].symbol) {
                        contents.params.symbols[i].symbol = default_symbol;
                    }
                }
                var legend_series = {
                    type: "scatter",
                    data: [null],
                    name: "------",
                    color: "white",
                };
                series.push(legend_series);
                var legend_series = {
                    type: "scatter",
                    data: [null],
                    name: contents.params.symbol_category ? "Symbol:" + contents.params.symbol_category : "Symbol",
                    color: "white",
                };
                // series.push(legend_series);
                for (var i in contents.params.symbols) {
                    var lineWidth = 0;
                    if (contents.params.symbols[i].symbol == "cross" || contents.params.symbols[i].symbol == "plus") {
                        lineWidth = 2;
                    }
                    var symbols_legend_series = {
                        type: "scatter",
                        data: [null],
                        name: i,
                        color: "#000000",
                        marker: {
                            radius: lineWidth ? 4 : 5,
                            symbol: contents.params.symbols[i].symbol,
                            lineColor: "#000000",
                            lineWidth: lineWidth
                        }
                    };
                    series.push(symbols_legend_series);
                    for (var s in contents.params.symbols[i].samples) {
                        samples_datas[contents.params.symbols[i].samples[s]].marker = {
                            symbol: contents.params.symbols[i].symbol,
                            lineWidth: lineWidth,
                            radius: lineWidth ? 3 : 4
                        };
                    }
                }
            }
        }
        var new_data = [];
        for (var i in samples_datas) {
            new_data.push(samples_datas[i]);
        }
        var sample_series = {
            type: "scatter",
            showInLegend: false,
            data: new_data
        };
        if (contents.params.show_scatter_label) {
            sample_series.dataLabels = {
                enabled: true,
                format: "{point.name}"
            };
        }
        series.push(sample_series);
        if (contents.factor && contents.vector) {
            var legend_series = {
                type: "scatter",
                data: [null],
                name: "------",
                color: "white"
            };
            // series.push(legend_series);
            var legend_series = {
                type: "scatter",
                data: [null],
                name: "环境因子",
                color: "white"
            };
            // series.push(legend_series);
        }
        if (contents.factor) {
            contents.factor.forEach(function(item, index, array) {
                array[index] = {
                    x: item[1],
                    y: item[2],
                    name: item[0]
                };
            });
            factor_series = {
                type: "scatter",
                name: "NominalEnvironment",
                color: contents.params.factor_style.color ? contents.params.factor_style.color : "#cc0000",
                marker: {
                    symbol: contents.params.factor_style.symbol ? contents.params.factor_style.symbol : "diamond",
                    radius: contents.params.factor_style.size ? contents.params.factor_style.size : 7,
                },
                dataLabels: {
                    enabled: (contents.params.factor_style.showlabel != undefined) ? contents.params.factor_style.showlabel : true,
                    format: "{point.name}",
                    color: contents.params.factor_style.color ? contents.params.factor_style.color : "#cc0000",
                },
                data: contents.factor,
                showInLegend: false
            };
            series.push(factor_series);
        }
        if (contents.species) {
            contents.species.forEach(function(item, index, array) {
                array[index] = {
                    x: item[1],
                    y: item[2],
                    name: item[0]
                };
            });
            species_series = {
                type: "scatter",
                name: "Species",
                color: "species_color" in contents.params ? contents.params.species_color : "#0000CD",
                marker: {
                    symbol: "species_symbol" in contents.params ? contents.params.species_symbol : "triangle-down",
                    radius: contents.params.species_style.size ? contents.params.species_style.size : 4,
                },
                dataLabels: {
                    // enabled: (contents.params.species_style.showlabel != undefined) ? contents.params.species_style.showlabel : false,
                    enabled: contents.params.show_species_label,
                    format: "{point.name}",
                    // color: contents.params.species_style.color ? contents.params.species_style.color : "#0000CD",
                },
                data: contents.species,
                showInLegend: false
            };
            series.push(species_series);
        }
        if (contents.vector) {
            legend_vector_series = {
                type: "spline",
                color: contents.params.vector_style.color ? contents.params.vector_style.color : "#cc0000",
                data: [null],
                name: "QuantitativeEnvironment",
                marker: {
                    enabled: true,
                    symbol: "arrow"
                },
                showInLegend: false
            };
            series.push(legend_vector_series);
            for (var i = 0; i < contents.vector.length; i++) {
                var vector_series = {};
                vector_series.type = legend_vector_series.type;
                vector_series.color = legend_vector_series.color;
                vector_series.name = legend_vector_series.name;
                vector_series.marker = legend_vector_series.marker;
                vector_series.data = [{
                    x: 0,
                    y: 0,
                    marker: {
                        enabled: false
                    },
                    notip: true
                }, {
                    y: contents.vector[i][2],
                    x: contents.vector[i][1],
                    marker: {
                        symbol: "arrow",
                        radius: contents.params.vector_style.size ? contents.params.vector_style.size : 4
                    },
                    dataLabels: {
                        enabled: (contents.params.vector_style.showlabel != undefined) ? contents.params.vector_style.showlabel : true,
                        format: "{point.name}",
                        color: legend_vector_series.color
                    },
                    name: contents.vector[i][0]
                }];
                vector_series.showInLegend = false;
                series.push(vector_series);
            }
        }
        var chart = new Highcharts.Chart({
            chart: {
                renderTo: ScatterVector,
                zoomType: "xy"
            },
            title: {
                text: contents.params.title
            },
            subtitle: {
                x: 0,
                text: contents.params.sub_title
            },
            credits: {
                enabled: false
            },
            tooltip: {
                formatter: function() {
                    if (this.point.notip) {
                        return false;
                    } else {
                        if (this.series.name == "NominalEnvironment") {
                            return "NominalEnvironment: " + this.point.name + "<br/>x: <b>" + this.point.x + "</b><br/>y: <b>" + this.point.y + "</b>";
                        } else {
                            if (this.series.name == "QuantitativeEnvironment") {
                                return "QuantitativeEnvironment: " + this.point.name + "<br/>x: <b>" + this.point.x + "</b><br/>y: <b>" + this.point.y + "</b>";
                            } else {
                                if (this.series.name != "Species") {
                                    return "Sample：" + this.point.name + "<br/>x: <b>" + this.point.x + "</b><br/>y: <b>" + this.point.y + "</b>";
                                } else {
                                    return "Species：" + this.point.name + "<br/>x: <b>" + this.point.x + "</b><br/>y: <b>" + this.point.y + "</b>";
                                }
                            }
                            // if (this.series.name != "QuantitativeEnvironment") {
                            //     return "Sample：" + this.point.name + "<br/>x: <b>" + this.point.x + "</b><br/>y: <b>" + this.point.y + "</b>";
                            // } else {
                            //     return "QuantitativeEnvironment: " + this.point.name + "<br/>x: <b>" + this.point.x + "</b><br/>y: <b>" + this.point.y + "</b>";
                            // }
                        }
                    }
                }
            },
            plotOptions: {
                series: {
                    events: {
                        legendItemClick: function(event) {
                            if (this.name === "NominalEnvironment") {
                                for (var i = this.index; i < this.chart.series.length; i++) {
                                    this.chart.series[i].visible ? this.chart.series[i].hide() : this.chart.series[i].show();
                                }
                                return false;
                            } else {
                                if (this.name === "QuantitativeEnvironment") {
                                    this.visible ? this.hide() : this.show();
                                    return false;
                                } else {
                                    return false;
                                }
                            }
                        }
                    }
                }
            },
            legend: {
                layout: "vertical",
                align: "right",
                x: 1,
                y: 10,
                verticalAlign: "top",
                itemStyle: {
                    "color": "#333333",
                    "cursor": "pointer",
                    "fontSize": "11px",
                    "fontWeight": "normal"
                }
            },
            yAxis: {
                title: {
                    text: contents.params.y_label
                },
                lineWidth: 1,
                // plotLines: [{
                //     color: "black",
                //     dashStyle: "Solid",
                //     width: 1,
                //     value: 0,
                //     zIndex: 2
                // }]
            },
            xAxis: {
                labels: {
                    autoRotation: 60,
                },
                title: {
                    text: contents.params.x_label
                },
                // plotLines: [{
                //     color: "black",
                //     dashStyle: "Solid",
                //     width: 1,
                //     value: 0,
                //     zIndex: 2
                // }]
            },
            series: series
        });
    },
    showScatter3d: function(scatter, contents) {
        var my_color = function(color) {
            return {
                radialGradient: {
                    cx: 0.4,
                    cy: 0.3,
                    r: 0.5
                },
                stops: [
                    [0, color],
                    [1, Highcharts.Color(color).brighten(-0.2).get("rgb")]
                ]
            };
        };
        var show_label = "show_label" in contents.params ? contents.params.show_label : true;
        var show_legend = "show_legend" in contents.params ? contents.params.show_legend : true;
        var samples_datas = {};
        var default_color = my_color("#d3d7d4");
        var default_symbol = "cross";
        for (var i in contents.data) {
            samples_datas[contents.params.categories[i]] = {
                name: contents.params.categories[i],
                x: contents.data[i][0],
                y: contents.data[i][1],
                z: contents.data[i][2],
                color: default_color,
                marker: {
                    symbol: default_symbol,
                    lineWidth: 2,
                    radius: 3
                }
            };
        }
        var flag = false;
        if (contents.params.symbols && contents.params.colors) {
            flag = true;
            var colors_count = 0;
            var symbols_count = 0;
            for (var i in contents.params.colors) {
                colors_count++;
                if (contents.params.symbols[i] === undefined) {
                    flag = false;
                    break;
                } else {
                    if (contents.params.symbols[i].samples.length != contents.params.colors[i].samples.length) {
                        flag = false;
                        break;
                    }
                    if (flag) {
                        for (var s in contents.params.symbols[i].samples) {
                            if (contents.params.symbols[i].samples[s] != contents.params.colors[i].samples[s]) {
                                flag = false;
                                break;
                            }
                        }
                    }
                }
                if (!flag) {
                    break;
                }
            }
            if (flag) {
                for (var i in contents.params.symbols) {
                    symbols_count++;
                }
                if (symbols_count != colors_count) {
                    flag = false;
                }
            }
        } else {
            flag = false;
        }
        var series = [];
        if (contents.params.colors) {
            for (var i in contents.params.colors) {
                if (!contents.params.colors[i].color) {
                    contents.params.colors[i].color = default_color;
                }
            }
            if (flag) {
                var legend_name = contents.params.color_category ? contents.params.color_category : "";
            } else {
                var legend_name = contents.params.color_category ? "Color: " + contents.params.color_category : "Color:";
            }
            var legend_series = {
                type: "scatter",
                data: [null],
                name: legend_name,
                color: "white"
            };
            // series.push(legend_series);
            for (var i in contents.params.colors) {
                var colors_legend_series = {
                    type: "scatter",
                    name: i,
                    data: [null],
                    color: contents.params.colors[i].color,
                    marker: {
                        radius: 5,
                        symbol: "circle"
                    }
                };
                var lineWidth = 0;
                if (flag) {
                    for (var sym in contents.params.symbols) {
                        if (!contents.params.symbols[sym].symbol) {
                            contents.params.symbols[sym].symbol = default_symbol;
                        }
                    }
                    if (contents.params.symbols[i].symbol == "cross" || contents.params.symbols[i].symbol == "plus") {
                        lineWidth = 2;
                    }
                    colors_legend_series.marker = {
                        symbol: contents.params.symbols[i].symbol,
                        lineWidth: lineWidth
                    };
                }
                series.push(colors_legend_series);
                for (var s in contents.params.colors[i].samples) {
                    samples_datas[contents.params.colors[i].samples[s]].color = my_color(contents.params.colors[i].color);
                    if (flag) {
                        samples_datas[contents.params.symbols[i].samples[s]].marker = {
                            symbol: contents.params.symbols[i].symbol,
                            lineWidth: lineWidth,
                            radius: lineWidth ? 3 : 4
                        };
                    }
                }
            }
        }
        if (!flag) {
            if (contents.params.symbols) {
                for (var i in contents.params.symbols) {
                    if (!contents.params.symbols[i].symbol) {
                        contents.params.symbols[i].symbol = default_symbol;
                    }
                }
                var legend_series = {
                    type: "scatter",
                    data: [null],
                    name: "------",
                    color: "white",
                };
                series.push(legend_series);
                var legend_series = {
                    type: "scatter",
                    data: [null],
                    name: contents.params.symbol_category ? "Symbol:" + contents.params.symbol_category : "Symbol",
                    color: "white",
                };
                // series.push(legend_series);
                for (var i in contents.params.symbols) {
                    var lineWidth = 0;
                    if (contents.params.symbols[i].symbol == "cross" || contents.params.symbols[i].symbol == "plus") {
                        lineWidth = 2;
                    }
                    var symbols_legend_series = {
                        type: "scatter",
                        data: [null],
                        name: i,
                        color: "#000000",
                        marker: {
                            radius: lineWidth ? 4 : 5,
                            symbol: contents.params.symbols[i].symbol,
                            lineColor: "#000000",
                            lineWidth: lineWidth
                        }
                    };
                    series.push(symbols_legend_series);
                    for (var s in contents.params.symbols[i].samples) {
                        samples_datas[contents.params.symbols[i].samples[s]].marker = {
                            symbol: contents.params.symbols[i].symbol,
                            lineWidth: lineWidth,
                            radius: lineWidth ? 3 : 4
                        };
                    }
                }
            }
        }
        var new_data = [];
        for (var i in samples_datas) {
            new_data.push(samples_datas[i]);
        }
        var sample_series = {
            type: "scatter",
            showInLegend: false,
            data: new_data
        };
        if (contents.params.show_scatter_label) {
            sample_series.dataLabels = {
                enabled: true,
                format: "{point.name}"
            };
        }
        series.push(sample_series);
        var chart_opts = {
            chart: {
                renderTo: scatter,
                margin: 150,
                type: "scatter",
                options3d: {
                    enabled: true,
                    alpha: 10,
                    beta: 20,
                    depth: 300,
                    viewDistance: 5,
                    frame: {
                        bottom: { size: 1, color: "rgba(0,0,0,0.06)" },
                        back: { size: 1, color: "rgba(0,0,0,0.04)" },
                        side: { size: 1, color: "rgba(0,0,0,0.04)" }
                    }
                }
            },
            tooltip: {
                formatter: function() {
                    if (this.point.notip) {
                        return false;
                    } else {
                        return "Sample: " + this.point.name + "<br/>x: <b>" + this.point.x + "</b><br/>y: <b>" + this.point.y + "</b><br/>z: <b>" + this.point.z;
                    }
                }
            },
            title: { text: contents.params.title },
            subtitle: { text: contents.params.subtitle },
            legend: {
                align: "right",
                layout: "vertical",
                verticalAlign: "top",
                enabled: show_legend,
                y: 12
            },
            yAxis: {
                title: { text: show_label ? contents.params.y_label : null }
            },
            xAxis: {
                gridLineWidth: 1,
                title: { text: show_label ? contents.params.x_label : null }
            },
            zAxis: {
                title: { text: show_label ? contents.params.z_label : null }
            },
        };
        var x_data = [];
        var y_data = [];
        var z_data = [];
        for (var i in contents.data) {
            var tmp = {};
            // tmp.name = contents.params.categories[i];
            tmp.x = contents.data[i][0];
            tmp.y = contents.data[i][1];
            tmp.z = contents.data[i][2];
            x_data.push(contents.data[i][0]);
            y_data.push(contents.data[i][1]);
            z_data.push(contents.data[i][2]);
        }
        chart_opts.xAxis.min = Highcharts.arrayMin(x_data);
        chart_opts.xAxis.max = Highcharts.arrayMax(x_data);
        var distance = chart_opts.xAxis.max - chart_opts.xAxis.min;
        chart_opts.xAxis.min = chart_opts.xAxis.min - distance * 0.1;
        chart_opts.xAxis.max = chart_opts.xAxis.max + distance * 0.1;
        chart_opts.yAxis.min = Highcharts.arrayMin(x_data);
        chart_opts.yAxis.max = Highcharts.arrayMax(x_data);
        distance = chart_opts.yAxis.max - chart_opts.yAxis.min;
        chart_opts.yAxis.min = chart_opts.yAxis.min - distance * 0.1;
        chart_opts.yAxis.max = chart_opts.yAxis.max + distance * 0.1;
        chart_opts.zAxis.min = Highcharts.arrayMin(x_data);
        chart_opts.zAxis.max = Highcharts.arrayMax(x_data);
        distance = chart_opts.zAxis.max - chart_opts.zAxis.min;
        chart_opts.zAxis.min = chart_opts.zAxis.min - distance * 0.1;
        chart_opts.zAxis.max = chart_opts.zAxis.max + distance * 0.1;
        chart_opts.series = series;
        var chart = new Highcharts.Chart(chart_opts);
        // Add mouse events for rotation
        $("#" + scatter).bind("mousedown.hc touchstart.hc", function(e) {
            e = chart.pointer.normalize(e);
            var posX = e.clientX,
                posY = e.clientY,
                alpha = chart.options.chart.options3d.alpha,
                beta = chart.options.chart.options3d.beta,
                newAlpha,
                newBeta,
                sensitivity = 5; // lower is more sensitive
            $(document).bind({
                "mousemove.hc touchdrag.hc": function(e) {
                    // Run beta
                    newBeta = beta + (posX - e.clientX) / sensitivity;
                    newBeta = Math.min(100, Math.max(-100, newBeta));
                    chart.options.chart.options3d.beta = newBeta;
                    // Run alpha
                    newAlpha = alpha + (e.clientY - posY) / sensitivity;
                    newAlpha = Math.min(100, Math.max(-100, newAlpha));
                    chart.options.chart.options3d.alpha = newAlpha;
                    chart.redraw(false);
                },
                "mouseup touchend": function() {
                    $(document).unbind(".hc");
                }
            });
        });
    },
    showHeatMap: function(heat, contents) {
        var datas1 = new Array();
        if (contents.params.log) {
            for (var i in contents.data) {
                if (contents.data[i][2] == 0) {
                    contents.data[i][2] = 1e-7;
                }
                var log_data = Math.log(contents.data[i][2]);
                datas1.push([contents.data[i][0], contents.data[i][1], log_data]);
            }
        } else {
            for (var i in contents.data) {
                datas1.push([contents.data[i][0], contents.data[i][1], contents.data[i][2]]);
            }
        }
        var stops = new Array();
        if (contents.params.center_color == "" || typeof(contents.params.center_color) == "undefined") {
            stops.push([0, contents.params.min_color]);
            stops.push([0.9, contents.params.max_color]);
        } else {
            stops.push([0, contents.params.min_color]);
            stops.push([0.5, contents.params.center_color]);
            stops.push([0.9, contents.params.max_color]);
        }

        function color_min() {
            if (contents.params.log) {
                return -10;
            } else {
                return 0;
            }
        }
        var y_label_size = "12px";
        var num_data = contents.categories_y.length;
        if (num_data > 50) {
            y_label_size = "7px";
        } else {
            if (num_data > 30) {
                y_label_size = "9px";
            } else {
                if (num_data > 20) {
                    y_label_size = "11px";
                }
            }
        }
        var legend_height = contents.size.height / 2;
        $("#" + heat).highcharts({
            chart: {
                type: "heatmap",
            },
            credits: {
                enabled: false
            },
            title: {
                text: contents.params.text
            },
            xAxis: {
                categories: contents.categories_x,
                title: {
                    text: contents.params.x_label,
                },
            },
            yAxis: {
                labels: {
                    style: {
                        "fontSize": y_label_size
                    }
                },
                categories: contents.categories_y,
                title: {
                    text: contents.params.y_label,
                },
            },
            colorAxis: {
                min: color_min(),
                stops: stops,
                labels: {
                    formatter: function() {
                        if (contents.params.log) {
                            return Math.pow(Math.E, this.value).toFixed(4);
                        } else {
                            return this.value;
                        }
                    }
                },
            },
            legend: {
                align: "right",
                layout: "vertical",
                verticalAlign: "top",
                margin: 20,
                y: 30,
                symbolHeight: legend_height
            },
            tooltip: {
                formatter: function() {
                    if (contents.params.log) {
                        return "<b>" + this.series.xAxis.categories[this.point.x] + "</b> <br><b>" + parseFloat(Math.pow(Math.E, this.point.value).toFixed(5)) + "</b> <br><b>" + this.series.yAxis.categories[this.point.y] + "</b>";
                    } else {
                        return "<b>" + this.series.xAxis.categories[this.point.x] + "</b> <br><b>" + this.point.value + "</b> <br><b>" + this.series.yAxis.categories[this.point.y] + "</b>";
                    }
                }
            },
            plotOptions: {
                series: {
                    states: {
                        hover: {
                            enabled: false,
                        }

                    }
                }
            },
            series: [{
                name: "",
                borderWidth: 0.2,
                borderColor: "#727272",
                data: datas1,
                dataLabels: {
                    enabled: contents.params.data_label_enable,
                    color: contents.params.data_label_color,
                    style: {
                        textShadow: "none",
                        HcTextStroke: null
                    }
                },
                turboThreshold: 1000000,
            }]
        });
    },
    showBoxPlot: function(box, contents) {
        var color_light_fill = contents.params.light_fill_color ? contents.params.light_fill_color : 50; // 填充颜色变浅程度，即RGB的加减
        light_color = function(color, light) {
            var t_color = color.toLowerCase();
            if (t_color[0] != "#") {
                alert("ERROR:错误的颜色设置,必须提供HEX格式颜色");
            }
            if (light == undefined || typeof light != "number") {
                light = 50;
            }
            if (t_color.length === 4) {
                var t_color_new = "#";
                for (var i = 1; i < 4; i += 1) {
                    t_color_new += t_color.slice(i, i + 1).concat(t_color.slice(i, i + 1));
                }
                t_color = t_color_new;
            }
            var rgb_color = [];
            for (var i = 1; i < 7; i += 2) {
                var value = parseInt("0x" + t_color.slice(i, i + 2)) + light;
                if (value > 255) {
                    value = 255;
                }
                rgb_color.push(value);
            }
            var new_hex = "#";
            for (var i in rgb_color) {
                var hex = rgb_color[i].toString(16);
                if (hex.length == 1) {
                    hex += "0";
                }
                new_hex += hex;
            }
            return new_hex;
        };
        var data_series = new Array();
        var box_data = new Array();
        var color_type = null;
        if (contents.params.colors) {
            if (typeof contents.params.colors == "object" && contents.params.colors.length > 0) {
                color_type = "object";
            } else {
                // contents.params.colors = Highcharts.getOptions().colors[0];
                color_type = "string";
            }
        }
        if (color_type == "object") {
            for (var i in contents.data) {
                // alert(contents.params.colors[i])
                box_data.push({
                    x: contents.categories[i],
                    low: contents.data[i][0],
                    q1: contents.data[i][1],
                    median: contents.data[i][2],
                    q3: contents.data[i][3],
                    high: contents.data[i][4],
                    name: contents.categories[i],
                    color: contents.params.colors[i],
                    marker: {
                        enabled: true,
                        fillColor: "white",
                        lineWidth: 1,
                        fillColor: light_color(contents.params.colors[i], color_light_fill)
                    },
                });
            }
        } else {
            box_data = contents.data;
        }
        // alert(contents.params.colors);
        data_series.push({
            name: "Box",
            data: box_data,
            color: (color_type == "string") ? contents.params.colors : Highcharts.getOptions().colors[0],
            fillColor: color_type == "object" ? light_color(contents.params.colors[0], color_light_fill) : light_color(contents.params.colors, color_light_fill),
            tooltip: {
                headerFormat: "<em style=\"fill:{point.color}\">{point.key}</em><br/>"
            },
        });
        if (contents.scatter_data != null) {
            var scatter_data = new Array();
            if (color_type == "object") {
                for (var i in contents.scatter_data) {
                    scatter_data.push({
                        x: contents.scatter_data[i][0],
                        y: contents.scatter_data[i][1],
                        color: contents.params.colors[contents.scatter_data[i][0]],
                        marker: {
                            enabled: true,
                            fillColor: "white",
                            lineWidth: 1,
                            lineColor: contents.params.colors[contents.scatter_data[i][0]],
                        },
                    });
                }
            } else {
                scatter_data = contents.scatter_data;
            }
            data_series.push({
                name: "Outlier",
                color: (color_type == "string") ? contents.params.colors : Highcharts.getOptions().colors[0],
                type: "scatter",
                data: scatter_data,
                marker: {
                    enabled: true,
                    fillColor: "white",
                    lineWidth: 1,
                    lineColor: (color_type == "string") ? contents.params.colors : Highcharts.getOptions().colors[0],
                },
                tooltip: {
                    pointFormatter: function() {
                        return this.y;
                    }
                }
            });
        }
        var max_length = 0;
        for (var i in contents.categories) {
            if (contents.categories[i].length > max_length) {
                max_length = contents.categories[i].length;
            }
        }
        var rotation = null;
        if (max_length > 12) {
            rotation = -60;
        }
        if (max_length > 22) {
            rotation = -80;
        }
        if (contents.params.inverted) {
            var inverted = true;
            rotation = 0;
        } else {
            var inverted = false;
        }
        $("#" + box).highcharts({
            chart: {
                type: "boxplot",
                zoomType: "xy",
                inverted: inverted
            },
            credits: {
                enabled: false
            },
            legend: {
                align: "right",
                layout: "vertical",
                enabled: false,
            },
            title: {
                text: contents.params.title
            },
            subtitle: {
                text: contents.params.sub_title ? contents.params.sub_title : "",
                style: {
                    fontSize: "17"
                }
            },
            xAxis: {
                labels: {
                    autoRotation: [-55, -60, -80],
                    rotation: rotation
                },
                categories: contents.categories,
                title: {
                    text: contents.params.x_label,
                },
            },
            yAxis: {
                tickWidth: 1,
                title: {
                    text: contents.params.y_label,
                },
            },
            tooltip: {
                pointFormatter: function() {
                    return "Maximum: " + this.high + "<br>Upper quartile: " + this.q3 + "<br>Median: " + this.median + "<br>Lower quartile: " + this.q1 + "<br>Minimum" + this.low;
                }
            },
            series: data_series
        });
    },
    showBarError: function(bar, contents) {
        var content = new Array();
        var series = {};
        var series_error = {};
        var series_scatter = {};
        var y_labels = {};
        var type = contents.params.orient == 1 ? "column" : "bar";
        var j = 0;
        var legend_length = 0;
        for (var i in contents.params.legend) {
            legend_length++;
        }
        if (legend_length != contents["data"].length && contents["data"].length == 1) {
            series = {
                showInLegend: false,
                type: type,
                data: contents.data[j],
                color: contents["params"]["legend"][i],
                marker: {
                    symbol: "square",
                    width: 12,
                    height: 12,
                },
                events: {
                    legendItemClick: function(event) {
                        return false;
                    }
                }
            };
            content.push(series);
            for (var i in contents.params.legend) {
                series = {
                    showInLegend: true,
                    type: "scatter",
                    name: i,
                    color: contents["params"]["legend"][i],
                    marker: {
                        symbol: "square",
                        width: 12,
                        height: 12,
                    },
                    events: {
                        legendItemClick: function(event) {
                            return false;
                        }
                    }
                };
                content.push(series);
            }
        } else {
            if (legend_length != contents["data"].length) {
                for (var i in contents.data) {
                    series = {
                        showInLegend: false,
                        type: type,
                        data: contents.data[i]
                    };
                    content.push(series);
                }
                for (var i in contents.params.legend) {
                    series = {
                        showInLegend: true,
                        type: "scatter",
                        name: i,
                        color: contents["params"]["legend"][i],
                        marker: {
                            symbol: "square",
                            width: 12,
                            height: 12,
                        },
                        events: {
                            legendItemClick: function(event) {
                                return false;
                            }
                        }
                    };
                    content.push(series);
                }
            } else {
                for (var i in contents.params.legend) {
                    series = {
                        showInLegend: true,
                        name: i,
                        type: type,
                        data: contents.data[j],
                        color: contents["params"]["legend"][i],
                        marker: {
                            symbol: "square",
                            width: 12,
                            height: 12,
                        },
                        events: {
                            legendItemClick: function(event) {
                                return false;
                            }
                        }
                    };
                    j++;
                    content.push(series);
                }
            }
        }
        if (contents.error_data != null) {
            series_error = {
                showInLegend: false,
                name: "error range",
                type: "errorbar",
                data: contents.error_data[0],
            };
            content.push(series_error);
        }
        if (contents.scatter_data != null) {
            for (var i in contents.scatter_data) {
                series_scatter = {
                    showInLegend: false,
                    color: "#212121",
                    name: "error range",
                    type: "scatter",
                    data: contents.scatter_data[i],
                    tooltip: {
                        pointFormat: "{point.y}"
                    },
                    marker: {
                        symbol: "circle",
                        radius: 2
                    }
                };
                content.push(series_scatter);
            }
        }
        y_labels = {
            format: "{value}",
            style: {}
        };
        var tooltip = {};
        if ("no_error_tooltip" in contents.params) {
            if (contents.params.no_error_tooltip) {
                tooltip = {
                    formatter: function() {
                        if (this.series.name == "error range") {
                            return false;
                        } else {
                            return "<b>" + this.x + "</b><br>" + this.y + "";
                        }
                    }
                };
            }
        }
        $("#" + bar).highcharts({
            chart: {
                zoomType: "xy"
            },
            credits: {
                enabled: false
            },
            title: {
                text: contents.params.text
            },
            sub_title: {
                text: contents.params.sub_title ? contents.params.sub_title : "",
                style: {
                    fontSize: "17"
                }
            },
            legend: {
                enabled: contents.params.sourcetracker ? false : true,
                align: "right",
                layout: "vertical",
                margin: 10,
                verticalAlign: "top",
                y: 10,
            },
            plotOptions: {
                errorbar: {
                    linkedTo: null
                }
            },
            xAxis: [{
                categories: contents.categories,
                title: {
                    text: contents.params.x_label
                },
            }],
            yAxis: [{
                title: {
                    text: contents.params.y_label,
                },
                labels: {
                    formatter: function() {
                        return this.value;
                    },
                },
            }],
            tooltip: tooltip,
            series: content
        });
    },
    showScatterForBig: function(bigscatter, contents) {
        var series_opts = new Array();
        for (var i in contents.data) {
            var tmp = {};
            tmp = {
                name: contents.categories[i],
                data: contents.data[i],
                marker: {
                    radius: contents.params.marker_size ? contents.params.marker_size[i] : 1,
                    symbol: contents.params.marker_symbol ? contents.params.marker_symbol[i] : "diamond"
                },
                color: contents.params.colors ? contents.params.colors[i] : Highcharts.getOptions().colors[i],
            };
            series_opts.push(tmp);
        }
        $("#" + bigscatter).highcharts({
            chart: {
                type: "scatter",
                alignTicks: false
            },
            title: {
                text: contents.params.title,
            },
            sub_title: {
                text: contents.params.sub_title ? contents.params.sub_title : "",
                style: {
                    fontSize: "17"
                }
            },
            xAxis: {
                type: contents.params.x_log ? "logarithmic" : "linear",
                title: {
                    text: contents.params.x_label,
                }
            },
            yAxis: {
                gridLineWidth: 0,
                lineWidth: 1,
                reversed: contents.params.y_reversed,
                type: contents.params.y_log ? "logarithmic" : "linear",
                title: {
                    text: contents.params.y_label,
                }
            },
            series: series_opts,
            legend: {
                align: "right",
                verticalAlign: "top",
                layout: "vertical",
                y: 10
            },
        });
    },
    showAreaLine: function(arealine, contents) {
        var series_opts = new Array();
        for (var i in contents.data) {
            var tmp = {};
            tmp = {
                //categories: contents.data[i],
                name: contents.params.names[i],
                data: contents.data[i],
                color: contents.params.colors ? contents.params.colors[i] : Highcharts.getOptions().colors[i],
            };
            series_opts.push(tmp);
        }
        $("#" + arealine).highcharts({
            chart: {
                type: "area",
                alignTicks: false
            },
            title: {
                text: contents.params.title,
            },
            sub_title: {
                text: contents.params.sub_title ? contents.params.sub_title : "",
                style: {
                    fontSize: "17"
                }
            },
            xAxis: {
                title: {
                    text: contents.params.x_lable,
                }
            },
            yAxis: {
                title: {
                    text: contents.params.y_lable,
                }
            },
            tooltip: {
                pointFormat: "{series.name}</b><br/> y value <b>{point.y}</b><br/> x value {point.x}"
            },
            series: series_opts
        });
    },
    showScatterEnterotyping: function(d, e) {
        var f = {};
        var g = "#d3d7d4";
        var j = "cross";
        for (var i in e.data) { //点的数据
            f[e.params.categories[i]] = {
                name: e.params.categories[i],
                x: e.data[i][0],
                y: e.data[i][1],
                color: g,
                marker: {
                    symbol: j,
                    lineWidth: 2,
                    radius: 3
                }
            };
        }
        if (!e.params.factor_style) {
            e.params.factor_style = {};
        }
        if (!e.params.vector_style) {
            e.params.vector_style = {};
        }
        var k = false;
        if (e.params.symbols && e.params.colors) {
            var k = true;
            var m = 0;
            var n = 0;
            for (var i in e.params.colors) {
                m++;
                if (e.params.symbols[i] === undefined) {
                    var k = false;
                    break;
                } else {
                    if (e.params.symbols[i].samples.length != e.params.colors[i].samples.length) {
                        var k = false;
                        break;
                    }
                    if (k) {
                        for (var s in e.params.symbols[i].samples) {
                            if (e.params.symbols[i].samples[s] != e.params.colors[i].samples[s]) {
                                var k = false;
                                break;
                            }
                        }
                    }
                }
                if (!k) {
                    break;
                }
            }
            if (k) {
                for (var i in e.params.symbols) {
                    n++;
                }
                if (n != m) {
                    var k = false;
                }
            }
        } else {
            var k = false;
        }
        var o = [];
        if (e.params.colors) {
            for (var i in e.params.colors) {
                if (!e.params.colors[i].color) {
                    e.params.colors[i].color = g;
                }
            }
            if (k) {
                var legend_name = e.params.color_category ? e.params.color_category : "";
            } else {
                var legend_name = e.params.color_category ? "Sample Color: " + e.params.color_category : "Color:";
            }
            var p = {
                type: "scatter",
                data: [null],
                name: legend_name,
                color: "white"
            };
            o.push(p);
            for (var i in e.params.colors) {
                var q = {
                    type: "scatter",
                    name: i,
                    data: [null],
                    color: e.params.colors[i].color,
                    marker: {
                        radius: 5,
                        symbol: "circle"
                    }
                };
                var r = 0;
                if (k) {
                    for (var t in e.params.symbols) {
                        if (!e.params.symbols[t].symbol) {
                            e.params.symbols[t].symbol = j;
                        }
                    }
                    if (e.params.symbols[i].symbol == "cross" || e.params.symbols[i].symbol == "plus") {
                        r = 2;
                    }
                    q.marker = {
                        symbol: e.params.symbols[i].symbol,
                        lineWidth: r
                    };
                }
                o.push(q);
                for (var s in e.params.colors[i].samples) {
                    f[e.params.colors[i].samples[s]].color = e.params.colors[i].color;
                    if (k) {
                        f[e.params.symbols[i].samples[s]].marker = {
                            symbol: e.params.symbols[i].symbol,
                            lineWidth: r,
                            radius: r ? 3 : 4
                        };
                    }
                }
            }
        }
        if (!k) {
            if (e.params.symbols) {
                for (var i in e.params.symbols) {
                    if (!e.params.symbols[i].symbol) {
                        e.params.symbols[i].symbol = j;
                    }
                }
                var p = {
                    type: "scatter",
                    data: [null],
                    name: "------",
                    color: "white",
                };
                o.push(p);
                var p = {
                    type: "scatter",
                    data: [null],
                    name: e.params.symbol_category ? "Sample Symbol:" + e.params.symbol_category : "Symbol",
                    color: "white",
                };
                o.push(p);
                for (var i in e.params.symbols) {
                    var r = 0;
                    if (e.params.symbols[i].symbol == "cross" || e.params.symbols[i].symbol == "plus") {
                        var r = 2;
                    }
                    var u = {
                        type: "scatter",
                        data: [null],
                        name: i,
                        color: "#000000",
                        marker: {
                            radius: r ? 4 : 5,
                            symbol: e.params.symbols[i].symbol,
                            lineColor: "#000000",
                            lineWidth: r
                        }
                    };
                    o.push(u);
                    for (var s in e.params.symbols[i].samples) {
                        f[e.params.symbols[i].samples[s]].marker = {
                            symbol: e.params.symbols[i].symbol,
                            lineWidth: r,
                            radius: r ? 3 : 4
                        };
                    }
                }
            }
        }
        var v = [];
        for (var i in f) {
            v.push(f[i]);
        }
        var z = {
            type: "scatter",
            showInLegend: false,
            data: v
        };
        if (e.params.show_scatter_label) {
            z.dataLabels = {
                enabled: true,
                format: "{point.name}"
            };
        }
        o.push(z);
        if (e.factor) {
            var p = {
                type: "scatter",
                data: [null],
                name: "------",
                color: "white"
            };
            o.push(p);
            var p = {
                type: "scatter",
                data: [null],
                name: "分型颜色",
                color: "white"
            };
            o.push(p);
        }

        for (i in e.number) {
            if (e.factor[i]) {
                e.factor[i].forEach(function(a, b, c) {
                    c[b] = {
                        x: a[1],
                        y: a[2],
                        name: a[0]
                    };
                });
                var factor_series = {
                    type: "polygon",
                    name: e.params.species_name[i],
                    color: Highcharts.Color(e.params.species_color[i]).setOpacity(0.5).get(),
                    marker: {
                        symbol: e.params.factor_style.symbol ? e.params.factor_style.symbol : "circle",
                        radius: e.params.factor_style.size ? e.params.factor_style.size : 7,
                    },
                    dataLabels: {
                        enabled: false,
                        format: "{point.name}",
                        color: e.params.factor_style.color ? e.params.factor_style.color : "#cc0000",
                    },
                    data: e.factor[i]
                };
                o.push(factor_series);
            }
        }
        var B = new Highcharts.Chart({
            chart: {
                renderTo: d,
                zoomType: "xy"
            },
            title: {
                text: e.params.title
            },
            subtitle: {
                x: 80,
                text: e.params.sub_title
            },
            credits: {
                enabled: false
            },
            tooltip: {
                formatter: function() {
                    if (this.point.notip) {
                        return false;
                    } else {
                        if (this.series.type == "polygon") {
                            return false;
                        } else {
                            return "样本:" + this.point.name + "<br/>x: <b>" + this.point.x + "</b><br/>y: <b>" + this.point.y + "</b>";
                        }
                    }
                }
            },
            legend: {
                layout: "vertical",
                align: "right",
                x: 1,
                y: 10,
                verticalAlign: "top",
                itemStyle: {
                    "color": "#333333",
                    "cursor": "pointer",
                    "fontSize": "11px",
                    "fontWeight": "normal"
                }
            },
            yAxis: {
                title: {
                    text: "Y" //e.params.y_label
                },
                lineWidth: 1,
            },
            xAxis: {
                labels: {
                    autoRotation: 60,
                },
                title: {
                    text: "X" //e.params.x_label
                },
            },
            series: o
        });
    },
    showBarDiff: function(main_scatter, contents) {
        function value() {
            var new_value = [];
            step = 1.0 / 10000.0;
            for (var s = 0; s < 10000; s++) {
                var number = step * s + 0;
                new_value.push(number);
            }
            return new_value;
        }

        function gradientColor(startColor, endColor) {
            startRGB = this.colorRgb(startColor); //转换为rgb数组模式
            startR = startRGB[0];
            startG = startRGB[1];
            startB = startRGB[2];
            endRGB = this.colorRgb(endColor);
            endR = endRGB[0];
            endG = endRGB[1];
            endB = endRGB[2];
            sR = (endR - startR) / 10000; //总差值
            sG = (endG - startG) / 10000;
            sB = (endB - startB) / 10000;
            var colorArr = [];
            for (var i = 0; i < 10000; i++) {
                //计算每一步的hex值
                var hex = this.colorHex("rgb(" + parseInt((sR * i + startR)) + "," + parseInt((sG * i + startG)) + "," + parseInt((sB * i + startB)) + ")");
                colorArr.push(hex);
            }
            return colorArr;
        } // 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
        gradientColor.prototype.colorRgb = function(sColor) {
            var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
            var sColor = sColor.toLowerCase();
            if (sColor && reg.test(sColor)) {
                if (sColor.length === 4) {
                    var sColorNew = "#";
                    for (var i = 1; i < 4; i += 1) {
                        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
                    }
                    sColor = sColorNew;
                } //处理六位的颜色值
                var sColorChange = [];
                for (var i = 1; i < 7; i += 2) {
                    sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
                }
                return sColorChange;
            } else {
                return sColor;
            }
        }; // 将rgb表示方式转换为hex表示方式
        gradientColor.prototype.colorHex = function(rgb) {
            var _this = rgb;
            var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
            if (/^(rgb|RGB)/.test(_this)) {
                var aColor = _this.replace(/(?:(|)|rgb|RGB)*/g, "").split(",");
                var strHex = "#";
                for (var i = 0; i < aColor.length; i++) {
                    var hex = Number(aColor[i]).toString(16);
                    hex = hex < 10 ? 0 + "" + hex : hex; // 保证每个rgb的值为2位
                    if (hex === "0") {
                        hex += hex;
                    }
                    strHex += hex;
                }
                if (strHex.length !== 7) {
                    strHex = _this;
                }
                return strHex;
            } else if (reg.test(_this)) {
                var aNum = _this.replace(/#/, "").split("");
                if (aNum.length === 6) {
                    return _this;
                } else if (aNum.length === 3) {
                    var numHex = "#";
                    for (var i = 0; i < aNum.length; i += 1) {
                        numHex += (aNum[i] + aNum[i]);
                    }
                    return numHex;
                }
            } else {
                return _this;
            }
        };
        var gradient = new gradientColor(contents.params.startcolor, contents.params.endcolor);
        var P_value = new value();
        var data = contents.data;
        var finalcount = new duiying(contents.params.data_count);

        function duiying() {
            for (var i = 0; i < contents.params.data_count; i++) {
                data[i].p = Math.round(data[i].p * 10000) / 10000; //P值四舍五入；
                for (var m = 0; m < 10000; m++) {
                    if (data[i].p == P_value[m]) { data[i].color = gradient[m]; } else continue;
                }
            }
        }
        // alert(data[0].p);
        $("#" + main_scatter).highcharts({
            chart: {
                type: "column", //柱状图
                marginRight: 120 //图右边留白
            },
            title: {
                text: contents.params.title
            },
            xAxis: {
                type: "category",
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: "18px",
                        fontFamily: "Verdana, sans-serif"
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: contents.params.y_label
                }
            },
            legend: {
                title: {
                    text: contents.params.legend_title
                },
                align: "right",
                verticalAlign: "center", //垂直对齐方式
                layout: "vertical",
                // rtl:true,
                x: -10,
                y: 70,

            },
            tooltip: {
                pointFormat: "<b>富集率：{point.y:.1f};富集显著性:{point.p:.4f}</b>"
            },
            colorAxis: {
                stops: [
                    [0, contents.params.startcolor],
                    [1, contents.params.endcolor]
                ],

            },
            series: [{
                type: "heatmap",
                data: [
                    [null, null, 0],
                    [null, null, 1]
                ],

            }, {
                showInLegend: false,
                data: data,
                dataLabels: {
                    enabled: true,
                    formatter: function() {
                        if (this.point.p < 0.05 && this.point.p > 0.01) {
                            return "*"; }
                        if (this.point.p < 0.01 && this.point.p > 0.001) {
                            return "**"; }
                        if (this.point.p < 0.001) {
                            return "***"; }
                    },
                    rotation: 0,
                    color: contents.params.startcolor,
                    align: "center",
                    y: 10, // 10 pixels down from the top
                    style: {
                        fontSize: "13px",
                        fontFamily: "Verdana, sans-serif"
                    }
                }
            }]
        });
    },
    showThreeplot: function(threeplot, contents) {
        function plotOption1() {
            if (contents.params.plotOptions == 1) {
                return "normal";
            } else {
                return false;
            }
        } //SSR类型统计分析图柱子叠加
        function showInLegend() {
            if (contents.params.showInLegend == "true") {
                return true;
            } else {
                return false;
            }
        } //柱子图例是否显示
        function doublecoordinate() {
            if (contents.params.dcoordinate) {
                var upmax = 0,
                    downmax = 0,
                    upsum = 0,
                    downsum = 0;
                for (var i = 0; i < contents.params.count; i++) {
                    var num1 = contents.data1[0][i].y;
                    var num2 = contents.data1[1][i].y;
                    upsum += num1;
                    downsum += num2;
                    if (num1 > upmax) {
                        upmax = num1;
                    } else {
                        continue;
                    }
                    if (num2 > downmax) {
                        downmax = num2;
                    } else {
                        continue;
                    }
                }
                var sum = upsum + downsum;
                var max;
                if (upmax > downmax) {
                    max = (upmax / sum) * 100;
                } else {
                    max = (downmax / sum) * 100;
                }
                return max;
            }
        } //上下调基因GO注释柱状图双坐标
        $("#" + threeplot).highcharts({
            title: {
                text: contents.params.title,
            },
            xAxis: {
                type: "category",
                tickPixelInterval: 40,
                tickLength: 5,
                title: { text: contents.params.x_label }
            },
            yAxis: [{
                tickPixelInterval: 40,
                lineWidth: 1,
                gridLineWidth: 1,
                gridLineColor: "#f6f5ec",
                gridLineDashStyle: "Dash",
                title: { text: contents.params.y_label },
                tickLength: 5,
                tickWidth: 1
            }, {
                opposite: true,
                min: 0,
                max: doublecoordinate(),
                tickPixelInterval: 40,
                lineWidth: 1,
                gridLineWidth: 1,
                gridLineColor: "#f6f5ec",
                gridLineDashStyle: "Dash",
                tickLength: 5,
                tickWidth: 1,
                title: { text: contents.params.up_label },
                labels: {
                    format: "{value} %"
                },
            }],
            labels: {
                style: { color: "#000" },
                items: [{ html: contents.names[0], style: { left: "50", top: "10" } },
                    { html: contents.names[1], style: { left: "300", top: "10" } },
                    { html: contents.names[2], style: { left: "550", top: "10" } },
                ]
            },
            tooltip: {
                formatter: function() {
                    if (this.point.notip) {
                        return false;
                    } else {
                        return this.point.name + "<br/>数量: <b>" + this.point.y + "</b>";
                    }
                }
            },
            plotOptions: {
                series: {
                    stacking: plotOption1(),
                },
                bar: {
                    pointWidth: contents.params.pointWidth,
                    dataLabels: {
                        enabled: true,
                        formatter: function() {
                            if (this.point.num) {
                                return this.point.num + "%";
                            } else {
                                return this.y;
                            }
                        },
                    }
                },
            },
            series: [
                { name: contents.name[3], type: contents.params.types, color: contents.params.color1, showInLegend: showInLegend(), data: contents.data1[0] },
                { name: contents.name[4], type: contents.params.types, color: contents.params.color2, showInLegend: showInLegend(), data: contents.data1[1] }, {
                    type: "line",
                    showInLegend: contents.params.showInLegend2,
                    color: "#7fb80e",
                    lineWidth: 10,
                    marker: { enabled: false },
                    name: contents.name[0],
                    animation: false,
                    tooltip: { followTouchMove: false },
                    data: contents.data2[0]
                }, {
                    type: "line",
                    showInLegend: contents.params.showInLegend2,
                    color: "#f47920",
                    lineWidth: 10,
                    marker: { enabled: false },
                    name: contents.name[1],
                    animation: false,
                    tooltip: { followTouchMove: false },
                    data: contents.data2[1]
                }, {
                    type: "line",
                    showInLegend: contents.params.showInLegend2,
                    color: "#426ab3",
                    lineWidth: 10,
                    marker: { enabled: false },
                    name: contents.name[2],
                    animation: false,
                    tooltip: { followTouchMove: false },
                    data: contents.data2[2]
                }
            ]
        });
    },
    showPieWithcolor: function(pie, contents) {
        var data = new Array();
        for (i in contents.data) {
            one = {
                name: contents.data[i].name,
                y: contents.data[i].value
            };
            data.push(one);
        }
        var title = {};
        var subtitle = {};
        title = {
            text: contents.title.text,
        };
        if (contents.title.subtext) {
            subtitle = {
                text: contents.title.subtext,
                style: {
                    fontSize: "17px"
                }
            };
        }
        $("#" + pie).highcharts({
            chart: {
                type: "pie",
            },
            colors: contents.color,
            plotOptions: {
                pie: {
                    borderWidth: 0
                }
            },
            series: [{
                allowPointSelect: true,
                name: "Value",
                data: data,
                dataLabels: {
                    enabled: true,
                    format: "<b>{point.name}</b>:{point.percentage:.2f}%",
                }
            }],
            title: title,
            subtitle: subtitle
        });
    },
    showScatterAndLine: function(d, e) {
        var f = {};
        var g = "#d3d7d4";
        var j = "cross";
        for (var i in e.data) {
            f[e.params.categories[i]] = {
                name: e.params.categories[i],
                x: e.data[i][0],
                y: e.data[i][1],
                color: g,
                marker: {
                    symbol: j,
                    lineWidth: 2,
                    radius: 3
                }
            };
        }
        if (!e.params.factor_style) {
            e.params.factor_style = {};
        }
        if (!e.params.vector_style) {
            e.params.vector_style = {};
        }
        var k = false;
        if (e.params.symbols && e.params.colors) {
            var k = true;
            var m = 0;
            var n = 0;
            for (var i in e.params.colors) {
                m++;
                if (e.params.symbols[i] === undefined) {
                    var k = false;
                    break;
                } else {
                    if (e.params.symbols[i].samples.length != e.params.colors[i].samples.length) {
                        var k = false;
                        break;
                    }
                    if (k) {
                        for (var s in e.params.symbols[i].samples) {
                            if (e.params.symbols[i].samples[s] != e.params.colors[i].samples[s]) {
                                var k = false;
                                break;
                            }
                        }
                    }
                }
                if (!k) {
                    break;
                }
            }
            if (k) {
                for (var i in e.params.symbols) {
                    n++;
                }
                if (n != m) {
                    var k = false;
                }
            }
        } else {
            var k = false;
        }
        var o = [];
        if (e.params.colors) {
            for (var i in e.params.colors) {
                if (!e.params.colors[i].color) {
                    e.params.colors[i].color = g;
                }
            }
            if (k) {
                var legend_name = e.params.color_category ? e.params.color_category : "";
            } else {
                var legend_name = e.params.color_category ? "Sample Color: " + e.params.color_category : "Color:";
            }
            var p = {
                type: "scatter",
                data: [null],
                name: legend_name,
                color: "white"
            };
            o.push(p);
            for (var i in e.params.colors) {
                var q = {
                    type: "scatter",
                    name: i,
                    data: [null],
                    color: e.params.colors[i].color,
                    marker: {
                        radius: 5,
                        symbol: "circle"
                    }
                };
                var r = 0;
                if (k) {
                    for (var t in e.params.symbols) {
                        if (!e.params.symbols[t].symbol) {
                            e.params.symbols[t].symbol = j;
                        }
                    }
                    if (e.params.symbols[i].symbol == "cross" || e.params.symbols[i].symbol == "plus") {
                        r = 2;
                    }
                    q.marker = {
                        symbol: e.params.symbols[i].symbol,
                        lineWidth: r
                    };
                }
                o.push(q);
                for (var s in e.params.colors[i].samples) {
                    f[e.params.colors[i].samples[s]].color = e.params.colors[i].color;
                    if (k) {
                        f[e.params.symbols[i].samples[s]].marker = {
                            symbol: e.params.symbols[i].symbol,
                            lineWidth: r,
                            radius: r ? 3 : 4
                        };
                    }
                }
            }
        }
        if (!k) {
            if (e.params.symbols) {
                for (var i in e.params.symbols) {
                    if (!e.params.symbols[i].symbol) {
                        e.params.symbols[i].symbol = j;
                    }
                }
                var p = {
                    type: "scatter",
                    data: [null],
                    name: "------",
                    color: "white",
                };
                o.push(p);
                var p = {
                    type: "scatter",
                    data: [null],
                    name: e.params.symbol_category ? "Sample Symbol:" + e.params.symbol_category : "Symbol",
                    color: "white",
                };
                o.push(p);
                for (var i in e.params.symbols) {
                    var r = 0;
                    if (e.params.symbols[i].symbol == "cross" || e.params.symbols[i].symbol == "plus") {
                        var r = 2;
                    }
                    var u = {
                        type: "scatter",
                        data: [null],
                        name: i,
                        color: "#000000",
                        marker: {
                            radius: r ? 4 : 5,
                            symbol: e.params.symbols[i].symbol,
                            lineColor: "#000000",
                            lineWidth: r
                        }
                    };
                    o.push(u);
                    for (var s in e.params.symbols[i].samples) {
                        f[e.params.symbols[i].samples[s]].marker = {
                            symbol: e.params.symbols[i].symbol,
                            lineWidth: r,
                            radius: r ? 3 : 4
                        };
                    }
                }
            }
        }
        var v = [];
        for (var i in f) {
            v.push(f[i]);
        }
        var z = {
            type: "scatter",
            showInLegend: false,
            data: v
        };
        if (e.params.show_scatter_label) {
            z.dataLabels = {
                enabled: true,
                format: "{point.name}"
            };
        }
        o.push(z);
        for (var i = 0; i < e.number; i++) {
            if (e.factor[i]) {
                e.factor[i].forEach(function(a, b, c) {
                    c[b] = {
                        x: a[1],
                        y: a[2],
                        name: a[0]
                    };
                });
                var factor_series = {
                    type: "line",
                    name: e.params.species_name[i],
                    lineWidth: 0.5,
                    color: Highcharts.Color(e.params.species_color[0]).setOpacity(1).get(),
                    marker: {
                        enabled: false,
                        symbol: e.params.species_symbols[0],
                    },
                    showInLegend: false,
                    dataLabels: {
                        enabled: false,
                    },
                    states: {
                        hover: {
                            lineWidth: 0
                        }
                    },
                    enableMouseTracking: false,
                    data: e.factor[i]
                };
                o.push(factor_series);
            }
        }
        var B = new Highcharts.Chart({
            chart: {
                renderTo: d,
                zoomType: "xy"
            },
            title: {
                text: e.params.title
            },
            subtitle: {
                x: 80,
                text: e.params.sub_title
            },
            credits: {
                enabled: false
            },
            tooltip: {
                formatter: function() {
                    if (this.point.notip) {
                        return false;
                    } else {
                        if (this.series.type == "polygon") {
                            return false;
                        } else {
                            return "样本:" + this.point.name + "<br/>x: <b>" + this.point.x + "</b><br/>y: <b>" + this.point.y + "</b>";
                        }
                    }
                }
            },
            legend: {
                layout: "vertical",
                align: "right",
                x: 1,
                y: 10,
                verticalAlign: "top",
                itemStyle: {
                    "color": "#333333",
                    "cursor": "pointer",
                    "fontSize": "11px",
                    "fontWeight": "normal"
                }
            },
            yAxis: {
                title: {
                    text: e.params.y_label
                },
                lineWidth: 1,
            },
            xAxis: {
                labels: {
                    autoRotation: 60,
                },
                title: {
                    text: e.params.x_label
                },
            },
            series: o
        });
    },

    showConfidenceLine: function(a, b) {
        $("#" + a).highcharts({
            title: {
                text: b.params.title,
            },
            sub_title: {
                text: b.params.sub_title ? b.params.sub_title : "",
                style: {
                    fontSize: "17"
                }
            },
            xAxis: {
                title: {
                    text: b.params.x_lable,
                },
                xmin: b.params.x_min,
                xmax: b.params.x_max
            },
            yAxis: {
                title: {
                    text: b.params.y_lable,
                },
                ymin: b.params.y_min,
                ymax: b.params.y_max
            },
            tooltip: {
                crosshairs: true,
                shared: true,
                valueSuffix: "",
                pointFormat: "{series.name}</b><br/> y value <b>{point.y}</b><br/> x value {point.x}"

            },
            series: [{
                name: b.line.name,
                data: b.line.data,
                zIndex: 1,
                marker: {
                    fillColor: "white",
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[0]
                }
            }, {
                name: b.confidence.name,
                data: b.confidence.data,
                type: "arearange",
                lineWidth: 0,
                linkedTo: ":previous",
                color: Highcharts.getOptions().colors[0],
                fillOpacity: 0.3,
                zIndex: 0
            }]
        });
    }
};
