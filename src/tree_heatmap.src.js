var sum = function(array) {
    var sum_v = 0;
    for (var i in array) {
        sum_v += array[i];
    }
    return sum_v;
};
var Newick_parse = function(s) {
    var ancestors = [];
    var tree = {};
    var tokens = s.split(/\s*(;|\(|\)|,|:)\s*/);
    for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        switch (token) {
        case "(":
            var subtree = {};
            tree.branchset = [subtree];
            ancestors.push(tree);
            tree = subtree;
            break;
        case ",":
            var subtree = {};
            ancestors[ancestors.length - 1].branchset.push(subtree);
            tree = subtree;
            break;
        case ")":
            tree = ancestors.pop();
            break;
        case ":":
            break;
        default:
            var x = tokens[i - 1];
            if (x == ")" || x == "(" || x == ",") {
                tree.name = token;
            } else if (x == ":") {
                tree.length = parseFloat(token);
            }
        }
    }
    return tree;
};

function tree_heatmap(container, content) {
    d3.select("div#" + container).selectAll("*").remove();
    var title_height = 70;
    var max_text_size = 12;
    var heatmap_data = content.heatmap_data;
    var row_num = heatmap_data.length;
    var column_num = heatmap_data[0].length;
    var width = content.size.width;
    var height = content.size.height;
    var tree_1_width = content.params.tree_1_width;
    var tree_2_height = content.params.tree_2_height;
    var threshold = content.params.threshold ? content.params.threshold : 0;
    var ifPvalue = content.pvalue_data.length > 0 ? true : false;
    var hc_heatmap = content.params.relative;
    var log = content.params.log;
    var text_size = {
        "title": "18px",
        "sub_title": "17px",
        "legend_title": "15px",
        "legend": "12px",
        "axis": "12px"
    };
    var legend_width = 90;
    if (content.tree_1_group || content.tree_2_group) {
        legend_width = 150;
    }
    var column_text_num = 0;
    var ifCluster = true;
    for (var i in content.columns) {
        if (content.columns[i].length > column_text_num) {
            column_text_num = content.columns[i].length;
        }
    }
    var raw_text_num = 0;
    for (var i in content.rows) {
        if (content.rows[i].length > raw_text_num) {
            raw_text_num = content.rows[i].length;
        }
    }
    var column_text_length = 16 * column_text_num;
    var columns_height = column_text_length * Math.sin(1.22);
    columns_height = columns_height < 30 ? 30 : columns_height;
    var heatmap_height = height - tree_2_height - columns_height - title_height;
    var rect_height = heatmap_height / row_num;
    if (parseInt(rect_height) > max_text_size) {
        var row_text_size = max_text_size;
    } else {
        var row_text_size = parseInt(rect_height);
    }
    if (raw_text_num > 9) {
        var rows_width = raw_text_num * parseInt(row_text_size * 0.6);
    } else {
        var rows_width = raw_text_num * 17;
    }
    if (width - tree_1_width - legend_width - rows_width < 100) {
        rows_width = width - tree_1_width - legend_width - 200;
    }
    var gap = 0.5;
    var if_gap = content.params.if_gap;
    if_gap === "false" ? gap = 0 : gap = gap;
    var start_color = d3.rgb(content.params.start_color);
    var end_color = d3.rgb(content.params.end_color);
    var middle_color = content.params.middle_color ? d3.rgb(content.params.middle_color) : null;
    var heatmap_width = width - tree_1_width - rows_width - legend_width;
    var rect_width = heatmap_width / column_num;
    var show_value = content.params.show_value ? true : false;
    var column_rotate = false;
    if (column_text_length > rect_width) {
        var column_rotate = true;
    }
    var max_value = new Array();
    var min_value = new Array();
    for (var i in heatmap_data) {
        var temp_max = d3.max(heatmap_data[i]);
        var temp_min = d3.min(heatmap_data[i]);
        max_value.push(temp_max);
        min_value.push(temp_min);
    }
    max_value = d3.max(max_value);
    min_value = d3.min(min_value);

    var sample_data = new Array();
    var sample_min_data = new Array();
    for (var j = 0; j < column_num; j++) {
        sample_data[j] = 0;
        var un_zero = new Array();
        for (var i = 0; i < row_num; i++) {
            sample_data[j] = sample_data[j] + heatmap_data[i][j] + 0;
            if (heatmap_data[i][j] != 0) {
                un_zero.push(heatmap_data[i][j]);
            }
        }
        sample_min_data[j] = d3.min(un_zero) / 10;
    }
    var heatmap_data_log = new Array();
    for (var i = 0; i < row_num; i++) {
        heatmap_data_log[i] = new Array();
        for (var j = 0; j < column_num; j++) {
            if (heatmap_data[i][j] == 0) {
                heatmap_data_log[i][j] = Math.log(sample_min_data[j]) / Math.log(10);
            } else {
                heatmap_data_log[i][j] = Math.log(heatmap_data[i][j]) / Math.log(10);
            }
        }
    }
    var max_value_log = new Array();
    var min_value_log = new Array();
    for (var i in heatmap_data_log) {
        var temp_max = d3.max(heatmap_data_log[i]);
        var temp_min = d3.min(heatmap_data_log[i]);
        max_value_log.push(temp_max);
        min_value_log.push(temp_min);
    }
    max_value_log = d3.max(max_value_log);
    min_value_log = d3.min(min_value_log);

    var new_heatmap_data = new Array();
    for (var i = 0; i < row_num; i++) {
        new_heatmap_data[i] = new Array();
        for (var j = 0; j < column_num; j++) {
            // heatmap_data[i][j] = heatmap_data[i][j]>0 ? heatmap_data[i][j] : sample_min_data[j];
            // new_heatmap_data[i][j] = heatmap_data[i][j]/sample_data[j];
            data = heatmap_data[i][j] > 0 ? heatmap_data[i][j] : sample_min_data[j];
            new_heatmap_data[i][j] = data / sample_data[j];
        }
    }
    var hc_max_value = new Array();
    var hc_min_value = new Array();
    for (var i in new_heatmap_data) {
        var hc_temp_max = d3.max(new_heatmap_data[i]);
        var hc_temp_min = d3.min(new_heatmap_data[i]);
        hc_max_value.push(hc_temp_max);
        hc_min_value.push(hc_temp_min);
    }
    hc_max_value = d3.max(hc_max_value);
    hc_min_value = d3.min(hc_min_value);
    var new_heatmap_data_log = new Array();
    for (var i = 0; i < row_num; i++) {
        new_heatmap_data_log[i] = new Array();
        for (var j = 0; j < column_num; j++) {
            if (heatmap_data[i][j] == 0) {
                new_heatmap_data_log[i][j] = Math.log(sample_min_data[j] / sample_data[j]) / Math.log(10);
            } else {
                new_heatmap_data_log[i][j] = Math.log(heatmap_data[i][j] / sample_data[j]) / Math.log(10);
            }
        }
    }
    var hc_max_value_log = new Array();
    var hc_min_value_log = new Array();
    for (var i in new_heatmap_data_log) {
        var hc_temp_max_log = d3.max(new_heatmap_data_log[i]);
        var hc_temp_min_log = d3.min(new_heatmap_data_log[i]);
        hc_max_value_log.push(hc_temp_max_log);
        hc_min_value_log.push(hc_temp_min_log);
    }
    hc_max_value_log = d3.max(hc_max_value_log);
    hc_min_value_log = d3.min(hc_min_value_log);

    max_value = hc_heatmap ? (log ? hc_max_value_log : hc_max_value) : (log ? max_value_log : max_value);
    min_value = hc_heatmap ? (log ? hc_min_value_log : hc_min_value) : (log ? min_value_log : min_value);

    if (parseInt(rect_width) > max_text_size) {
        var column_text_size = max_text_size;
    } else {
        var column_text_size = parseInt(rect_width);
    }
    var rect_text_size = row_text_size;
    if (rect_text_size > column_text_size) {
        rect_text_size = column_text_size;
    }
    row_text_size = row_text_size + "px";
    column_text_size = column_text_size + "px";
    var heatmap_legend_width = 20;
    var heatmap_legend_posion = {
        x: tree_1_width + heatmap_width + rows_width + 20,
        y: tree_2_height + (0.5 * heatmap_height) + title_height
    };
    var heatmap_legend_height = 0.5 * heatmap_height;
    var svg = d3.select("div#" + container).append("svg").attr("width", width).attr("height", height).attr("version", 1.1).attr("xmlns", "http://www.w3.org/2000/svg");
    if (middle_color) {
        var compute_1 = d3.interpolate(start_color, middle_color);
        var compute_2 = d3.interpolate(middle_color, end_color);
        var get_color = function(value) {
            var value = value - 0.5;
            if (value > 0) {
                return compute_2(value * 2);
            } else {
                return compute_1(1 + value * 2);
            }
        };
    } else {
        var get_color = d3.interpolate(start_color, end_color);
    }

    var defs = svg.append("defs");
    var filter = defs.append("filter").attr("id", "f1").attr("x", "0").attr("y", "0");
    filter.append("feOffset").attr("result", "offOut").attr("in", "SourceGraphic").attr("dx", 0).attr("dy", 0);
    filter.append("feColorMatrix").attr("result", "matrixOut").attr("in", "offOut").attr("type", "matrix").attr("values", "0 0 0 0 255 0 0 0 0 255 0 0 0 0 255 0 0 0 4 0");
    filter.append("feGaussianBlur").attr("result", "blurOut").attr("in", "matrixOut").attr("stdDeviation", "3");
    filter.append("feBlend").attr("in", "SourceGraphic").attr("in-2", "blurOut").attr("mode", "normal");
    //add by qindanhua
    var dragListener = d3.behavior.drag()
        .on("dragstart", function() {
            dstartX = d3.mouse(this)[0];
            dstartY = d3.mouse(this)[1];
        })
        .on("drag", function() {
            d3.select(this).attr("transform", "translate(" + (d3.event.x - dstartX) + ", " + (d3.event.y - dstartY) + ")");
        });

    var title_g = svg.append("g").attr("class", "title");
    title_g.append("text").text(content.params.title).attr("font-family", "arial").attr("font-size", text_size.title).attr("x", function(d) {
        return tree_1_width + heatmap_width / 2 - this.getComputedTextLength() / 2;
    }).attr("y", 50).call(dragListener);
    var nonius_scale = 6;
    var nonius_path = "M" + 1 * nonius_scale + " " + " 0 " + "L" + 2 * nonius_scale + " 0 " + "L" + 2 * nonius_scale + " " + 2 * nonius_scale + " L" + nonius_scale + " " + 2 * nonius_scale + " L0 " + nonius_scale + " Z";
    // var legend_nonius = svg.append("path").attr("d", nonius_path).attr("fill", "#33a3dc").attr("fill-opacity", 0);
    // var nonius_y = d3.scale.linear().domain([max_value, min_value]).range([heatmap_legend_posion.y, heatmap_legend_posion.y + heatmap_legend_height]);
    var nonius_y = d3.scale.linear().domain([max_value, min_value]).range([0, heatmap_legend_height]); //modify by qindanhua
    var linear = d3.scale.linear().domain([max_value, min_value]).range([0, 1]);
    var mouseover_color = d3.rgb(get_color(0.55)).brighter(13);
    var lab_color = d3.lab(mouseover_color);
    lab_color.l = lab_color.l - 5;
    lab_color.a = lab_color.a + 20;
    lab_color.b = lab_color.b - 15;
    mouseover_color = d3.rgb(lab_color);

    var heatmap_legend = svg.append("g").attr("class", "heatmap_legend").attr("id", "hhhhhheat")
        .attr("transform", "translate(" + heatmap_legend_posion.x + ", " + heatmap_legend_posion.y + ")")
        // .attr("x", heatmap_legend_posion.x).attr("y", heatmap_legend_posion.y)
        .call(dragListener); //modify by qindanhua
    var linearGradient = heatmap_legend.append("linearGradient").attr("id", "linearColor").attr("x1", "0%").attr("y1", "0%").attr("x2", "0%").attr("y2", "100%");
    var stop_start = linearGradient.append("stop").attr("offset", "0%").style("stop-color", start_color.toString());
    if (middle_color) {
        var stop_middle = linearGradient.append("stop").attr("offset", "50%").style("stop-color", middle_color.toString());
    }
    var stop_end = linearGradient.append("stop").attr("offset", "100%").style("stop-color", end_color.toString());
    var colorRect = heatmap_legend.append("rect")
        // .attr("x", heatmap_legend_posion.x).attr("y", heatmap_legend_posion.y)
        .attr("width", heatmap_legend_width).attr("height", heatmap_legend_height).attr("stroke", "black").attr("stroke-width", 0.2).attr("fill", "url(#" + linearGradient.attr("id") + ")");

    var legend_nonius = heatmap_legend.append("path").attr("d", nonius_path).attr("fill", "#33a3dc").attr("fill-opacity", 0);

    var linear_legend = d3.scale.linear().domain([max_value, min_value]).range([0, heatmap_legend_height]);
    var ticks_num = Math.ceil(heatmap_legend_height / 50);
    var axis = d3.svg.axis().orient("left").scale(linear_legend).ticks(ticks_num).tickSize(3);
    var heatmap_legend_axis = heatmap_legend.append("g").attr("class", "heatmap_legend_axis");
    heatmap_legend_axis
    // .attr("transform", "translate(" + heatmap_legend_posion.x + "," + heatmap_legend_posion.y + ")")
        .attr("font-family", "arial").attr("font-size", text_size.legend).call(axis);
    d3.select("g.heatmap_legend_axis").selectAll("g line").attr("fill", function(d) {
        return "none";
    }).attr("stroke", "#77787b").attr("shape-rendering", "crispEdges");
    d3.select("g.heatmap_legend_axis").selectAll("path").attr("fill", function(d) {
        return "none";
    }).attr("stroke-width", 0).attr("shape-rendering", "crispEdges");
    var heatmap_g = svg.append("g").attr("class", "heatmap")
        .attr("transform", "translate(" + tree_1_width + "," + (tree_2_height + title_height) + ")").call(dragListener);
    // heatmap_g.attr("transform", "translate(100)");
    var rect_array = new Array();
    for (var row in heatmap_data) {
        var dataBuilded = [];
        for (var i = 0; i < heatmap_data[row].length; i++) {
            var dataSingle = {
                "rowName": content.rows[row],
                "colName": content.columns[i],
                "value": hc_heatmap ? (log ? new_heatmap_data_log[row][i] : new_heatmap_data[row][i]) : (log ? heatmap_data_log[row][i] : heatmap_data[row][i]),
                // "show": hc_heatmap ? new_heatmap_data[row][i].toFixed(2): parseInt(heatmap_data[row][i])
                "show": hc_heatmap ? new_heatmap_data[row][i].toFixed(2) : heatmap_data[row][i],
                row: parseInt(row),
                column: i
            };
            if (ifPvalue) {
                dataSingle["pvalue"] = content.pvalue_data[row][i];
            }
            dataBuilded.push(dataSingle);
        }
        var heatmap = heatmap_g.selectAll(".heat").data(dataBuilded);
        var heatmapRectG = heatmap.enter().append("g").attr("transform", function(d, i) {
            return "translate(" + i * rect_width + ", " + row * rect_height + ")";
        });
        heatmapRectG.append("rect").attr("width", rect_width - gap).attr("height", rect_height - gap).style("fill", function(d) {
            // return "black";
            return get_color(linear(d.value));
        }).on("mouseover", function(d) {
            d3.select(this)
            .attr("stroke", "black")
            .attr("stroke-width", "2.0");
            // .style("fill", mouseover_color);
            legend_nonius
            // .attr("transform", "translate(" + (heatmap_legend_posion.x + heatmap_legend_width) + "," + (nonius_y(d.value) - nonius_scale) + ")")
                .attr("transform", "translate(" + heatmap_legend_width + "," + (nonius_y(d.value) - nonius_scale) + ")")
                .attr("fill-opacity", 1);
            var text = {row: d.rowName,
                column: d.colName,
                value: d.show};
            var text_length = text.row.length;
            if (text_length < text.column.length){
                text_length = text.column.length;
            }
            text_length = text_length * 17;
            show_tooltip((d.column + 0.5) * rect_width + tree_1_width, d.row * rect_height + tree_2_height + title_height, text_length, text, get_color(linear(d.value)));
        }).on("mouseout", function(d) {
            d3.select(this)
            .attr("stroke", "none")
            .style("fill", get_color(linear(d.value)));
            legend_nonius.attr("fill-opacity", 0);
            clean_tooltip();
        });
        if (ifPvalue) {
            heatmapRectG.append("text").text(function(d) {
                var starMark = "";
                if (d.value >= threshold || d.value <= -threshold) {
                    if (d.pvalue < 0.05) {
                        starMark = "*";
                    }
                    if (d.pvalue < 0.01) {
                        starMark = "**";
                    }
                    if (d.pvalue < 0.001) {
                        starMark = "***";
                    }
                }
                return starMark;
            }).attr("font-size", rect_text_size + "px").attr("font-family", "arial").attr("text-anchor", "middle").attr("transform", "translate(" + rect_width / 2 + "," + (rect_height / 2 + rect_text_size / 2) + ")");
        }
        if (show_value) {
            heatmap.enter().append("text").attr("x", function(d, i) {
                return i * rect_width + rect_width / 2;
            }).attr("y", function() {
                return ((row * rect_height) + (rect_height / 2));
            }).text(function(d) {
                var p = d.show;
                return p.toString();
            }).attr("transform", function(d) {
                return "translate(-" + (this.getComputedTextLength() / 2) + "," + (parseInt(rect_text_size) / 3) + ")";
            }).attr("font-weight", "bold").attr("font-family", "arial").attr("font-size", rect_text_size + "px").style("fill", "rgb(0, 0, 0)").style("filter", "url(#f1)")
            .on("mouseover", function(d) {
                legend_nonius
                // .attr("transform", "translate(" + (heatmap_legend_posion.x + heatmap_legend_width) + "," + (nonius_y(d.value) - nonius_scale) + ")")
                    .attr("transform", "translate(" + heatmap_legend_width + "," + (nonius_y(d.value) - nonius_scale) + ")")
                    .attr("fill-opacity", 1);
                var text = {row: d.rowName,
                    column: d.colName,
                    value: d.show};
                var text_length = text.row.length;
                if (text_length < text.column.length){
                    text_length = text.column.length;
                }
                text_length = text_length * 17;
                show_tooltip((d.column + 0.5) * rect_width + tree_1_width, d.row * rect_height + tree_2_height + title_height, text_length, text, get_color(linear(d.value)));
            }).on("mouseout", function() {
                legend_nonius.attr("fill-opacity", 0);
                clean_tooltip();
            });
        }
    }

    function show_tooltip(x, y, length, text, color) {
        var tooltip_scale = length / 12;
        var tooltip_high = 80;
        var tooltip_path = "M0 0 L" + 10 + " " + "-10" + " L" + tooltip_scale * 3 + " -10 L" + tooltip_scale * 3 + " -" + tooltip_high + " L-" + tooltip_scale * 3 + " -" + tooltip_high + " L-" + tooltip_scale * 3 + " -10 L-10 -10 z";
        tooltip_g = svg.append("g").attr("class", "tooltip_g").attr("transform", "translate(" + x + "," + y + ")");
        tooltip_g.append("path").attr("d", tooltip_path).attr("fill", "#fffef9").attr("fill-opacity", 0.9).style("filter", "url(#f1)").attr("stroke", color).attr("stroke-width", "3");
        var tooltip_text = tooltip_g.append("text").attr("font-family", "arial").attr("font-size", 12 + "px");
        tooltip_text.append("tspan").text(text.row).attr("x", 0 - length / 4 + 4).attr("y", 0 - 70).attr("dy","1em");
        tooltip_text.append("tspan").text(text.value).attr("x", 0 - length / 4 + 4).attr("y", 15 - 70).attr("dy","1em");
        tooltip_text.append("tspan").text(text.column).attr("x", 0 - length / 4 + 4).attr("y", 30 - 70).attr("dy","1em");

    }
    function clean_tooltip(){
        tooltip_g.remove();
    }
    var columns_g = svg.append("g").attr("class", "columns_names").attr("transform", "translate(" + tree_1_width + "," + (tree_2_height + title_height + heatmap_height) + ")").call(dragListener);
    if (parseInt(rect_width) > 15) {
        var column_text_size = text_size.legend;
    } else {
        var column_text_size = parseInt(rect_width) + "px";
    }
    var columns = columns_g.selectAll(".columns_names").data(content.columns).enter().append("text").text(function(d) {
        return d;
    }).attr("font-family", "arial").attr("font-size", column_text_size).attr("x", function(d, i) {
        if (column_rotate) {
            return (i + 0.5) * rect_width - this.getComputedTextLength();
        } else {
            return (i + 0.5) * rect_width - (this.getComputedTextLength() / 2);
        }
    }).attr("y", 15).attr("transform", function(d, i) {
        if (column_rotate) {
            return "rotate(-70, " + (parseInt(i) + 0.5) * rect_width + ",15)";
        } else {
            return "";
        }
    });

    var rows_g = svg.append("g").attr("class", "row_names").attr("transform", "translate(" + (tree_1_width + heatmap_width) + "," + (tree_2_height + title_height) + ")").call(dragListener);
    var rows = rows_g.selectAll(".rows_names").data(content.rows).enter().append("text").text(function(d) {
        return d;
    }).text(function(d) {
        if (this.getComputedTextLength() > rows_width + 40) {
            return d.substring(0, 25) + "...";
        } else {
            return d;
        }
    }).attr("font-family", "arial").attr("font-size", row_text_size).attr("x", 15).attr("y", function(d, i) {
        return (i + 0.5) * rect_height + 0.33 * parseInt(row_text_size);
    });
    rows.append("title").text(function(d) {
        return d;
    });


    var leaf = [];
    var max_x = 0;
    var getleaf = function(subtree, x) {
        if ("undefined" == typeof x) {
            x = 0;
        }
        var sub_y = [];
        var length = 0;
        if (subtree.length) {
            length = subtree.length;
        }
        subtree.start_x = x;
        x = x + length;
        subtree.end_x = x;
        if (subtree.end_x > max_x) {
            max_x = subtree.end_x;
        }
        if (subtree.branchset) {
            for (var i in subtree.branchset) {
                sub_y.push(getleaf(subtree.branchset[i], x));
            }
        } else {
            subtree.y = leaf.length;
            leaf.push(subtree);
            return subtree.y;
        }
        subtree.y = sum(sub_y) / sub_y.length;
        return subtree.y;
    };

    function setColors(tree, color_obj) {
        if (tree.branchset) {
            var branchset_colors = [];
            for (var i in tree.branchset) {
                branchset_colors.push(setColors(tree.branchset[i], color_obj));
            }
            tree.color = branchset_colors[0];
            for (var i in branchset_colors) {
                if (branchset_colors[i] != tree.color) {
                    tree.color = "black";
                    break;
                }
            }
            return tree.color;
        } else {
            tree.color = color_obj[tree.name] ? color_obj[tree.name] : "black";
            return tree.color;
        }
    }

    function max_min_array(array) {
        var max = array[0];
        var min = array[0];
        for (var i in array) {
            if (max < array[i]) {
                max = array[i];
            }
            if (min > array[i]) {
                min = array[i];
            }
        }
        return {
            max: max,
            min: min
        };
    }

    function plot_tree_legend(groupsColor, w, h, tree_name) {
        var tree_legend_rect_height = 4;
        var tree_legend_rect_width = 23;
        var tree_legend_rect_gap = 23;
        var tree_legend = svg.append("g").attr("class", "tree_legend").attr("transform", "translate(" + w + "," + h + ")");
        if (tree_name) {
            tree_legend.append("text").text(tree_name).attr("x", 0).attr("y", 5).attr("font-family", "arial");
        }
        var groups = new Array();
        for (i in groupsColor) {
            groups.push({
                name: i,
                color: groupsColor[i]
            });
        }
        tree_legend.selectAll("rect .legend").data(groups).enter().append("rect").attr("x", 0).attr("y", function(d, i) {
            return (i + 1) * tree_legend_rect_gap;
        }).attr("width", tree_legend_rect_width).attr("height", tree_legend_rect_height).attr("fill", function(d) {
            return d.color;
        });
        tree_legend.selectAll("text .legend").data(groups).enter().append("text").text(function(d) {
            return d.name;
        }).attr("font-family", "arial").attr("x", tree_legend_rect_width + 3).attr("y", function(d, i) {
            return (i + 1) * tree_legend_rect_gap + 7;
        });
        return (groups.length + 1) * tree_legend_rect_gap;
    }
    var tree_1_legend_height = 0;
    if (content.tree_1) {
        var tree_1 = Newick_parse(content.tree_1);
        getleaf(tree_1);
        var tree_1_colors = content.tree_1_colors ? content.tree_1_colors : {};
        setColors(tree_1, tree_1_colors);
        var linear_height_1 = d3.scale.linear().domain([0, leaf.length - 1]).range([tree_2_height + rect_height / 2 + title_height, title_height + tree_2_height + heatmap_height - rect_height / 2]);
        var linear_width_1 = d3.scale.linear().domain([0, max_x]).range([5, tree_1_width - 5]);
        var tree_g_1 = svg.append("g").attr("class", "tree_1").call(dragListener);
        tree_g_1.append("rect").attr("width", tree_1_width).attr("height", heatmap_height)
            .attr("transform", "translate(0," + title_height + ")").style("opacity", 0);


        function plot_one_1(tree) {
            tree_g_1.append("line").attr("x1", linear_width_1(tree.start_x)).attr("y1", linear_height_1(tree.y)).attr("x2", linear_width_1(tree.end_x)).attr("y2", linear_height_1(tree.y)).attr("stroke-width", 0.8).attr("stroke", tree.color);
            if (tree.branchset) {
                var list_y = [];
                for (var i in tree.branchset) {
                    list_y.push(tree.branchset[i].y);
                }
                var max_min_y = max_min_array(list_y);
                tree_g_1.append("line").attr("x1", linear_width_1(tree.end_x)).attr("y1", linear_height_1(max_min_y.max)).attr("x2", linear_width_1(tree.end_x)).attr("y2", linear_height_1(max_min_y.min)).attr("stroke-width", 0.8).attr("stroke", tree.color);
            }
        }

        function plot_tree_1(tree) {
            plot_one_1(tree);
            if (tree.branchset) {
                for (var i in tree.branchset) {
                    plot_tree_1(tree.branchset[i]);
                }
            }
        }
        plot_tree_1(tree_1);
        if (content.tree_1_group) {
            tree_1_legend_height = plot_tree_legend(content.tree_1_group, tree_1_width + heatmap_width + rows_width, title_height - 30, "left tree:");
        }
    }
    if (content.tree_2) {
        var tree_2 = Newick_parse(content.tree_2);
        max_x = 0;
        leaf = [];
        getleaf(tree_2);
        var tree_2_colors = content.tree_2_colors ? content.tree_2_colors : {};
        setColors(tree_2, tree_2_colors);
        var tree_g_2 = svg.append("g").attr("class", "tree_2").call(dragListener);
        tree_g_2.append("rect").attr("width", heatmap_width).attr("height", tree_2_height)
            .attr("transform", "translate(" + tree_1_width + ", " + title_height + ")").style("opacity", 0);
        var linear_width_2 = d3.scale.linear().domain([0, leaf.length - 1]).range([tree_1_width + rect_width / 2, tree_1_width + heatmap_width - rect_width / 2]);
        var linear_height_2 = d3.scale.linear().domain([0, max_x]).range([title_height + 5, title_height + tree_2_height - 5]);

        function plot_one_2(tree) {
            tree_g_2.append("line").attr("x1", linear_width_2(tree.y)).attr("y1", linear_height_2(tree.start_x)).attr("x2", linear_width_2(tree.y)).attr("y2", linear_height_2(tree.end_x)).attr("stroke-width", 0.8).attr("stroke", tree.color);
            if (tree.branchset) {
                var list_y = [];
                for (var i in tree.branchset) {
                    list_y.push(tree.branchset[i].y);
                }
                var max_min_y = max_min_array(list_y);
                tree_g_2.append("line").attr("x1", linear_width_2(max_min_y.min)).attr("y1", linear_height_2(tree.end_x)).attr("x2", linear_width_2(max_min_y.max)).attr("y2", linear_height_2(tree.end_x)).attr("stroke-width", 0.8).attr("stroke", tree.color);
            }
        }

        function plot_tree_2(tree) {
            plot_one_2(tree);
            if (tree.branchset) {
                for (var i in tree.branchset) {
                    plot_tree_2(tree.branchset[i]);
                }
            }
        }
        plot_tree_2(tree_2);
        if (content.tree_2_group) {
            plot_tree_legend(content.tree_2_group, tree_1_width + heatmap_width + rows_width, title_height - 30 + tree_1_legend_height + 20, "top tree:");
        }
    }
    var return_chart = {
        svg: svg,
        reSize: function(w, h) {
            var scale_w = w / content.size.width;
            var scale_h = h / content.size.height;
            content.size.width = w;
            content.size.height = h;
            content.params.tree_1_width = scale_w * content.params.tree_1_width;
            content.params.tree_2_height = scale_h * content.params.tree_2_height;
            d3.select("div#" + container).selectAll("*").remove();
            tree_heatmap(container, content);
        }
    };
    return return_chart;
}
