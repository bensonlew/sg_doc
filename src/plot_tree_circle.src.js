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

function plotCircleTree(div, contents) {
    var tree = Newick_parse(contents.data);
    var targetDiv = "div#" + div;
    d3.select(targetDiv).selectAll("*").remove();
    var svgContainer = d3.select(targetDiv).append("svg").attr("version", "1.1").attr("xmlns", "http://www.w3.org/2000/svg")
        .attr("width", contents.size.width).attr("height", contents.size.height);
    var leafColor = contents.samples_colors ? contents.samples_colors : {}; // 旧的颜色设置
    var groups = new Array();
    if (contents.tree_color) {
        for (var i in contents.tree_color) {
            var one = contents.tree_color[i];
            groups.push({
                name: one.name,
                color: one.color
            });
            for (var sp in one.species){
                leafColor[one.species[sp]] = one.color;
            }
        }
    }
    var dragListener = d3.behavior.drag()
        .on("dragstart", function() {
            dstartX = d3.mouse(this)[0];
            dstartY = d3.mouse(this)[1];
            d3.event.sourceEvent.stopPropagation();
        })
        .on("drag", function(){
            d3.select(this).attr("transform", "translate("+(d3.event.x-dstartX)+", "+(d3.event.y-dstartY)+")");
        });


    var title_g = svgContainer.append("g").attr("class", "title").call(dragListener);
    title_g.append("text")
        .text(contents.params.title)
        // .text("aaa")
        .attr("font-family", "arial")
        .attr("font-size", "22px")
        .attr("x", function(d) {
            return contents.size.width / 2 - this.getComputedTextLength() / 2;
        })
        .attr("y", 30);
    if (contents.params.sub_title) {
        title_g.append("text")
            .text(contents.params.sub_title)
            .attr("font-family", "arial")
            .attr("font-size", "15px")
            .attr("x", function(d) {
                return contents.size.width / 2 - this.getComputedTextLength() / 2;
            })
            .attr("y", 50);
    }

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
            // subtree.color = leafColor[subtree.name];
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
                min = array[ii];
            }
        }
        return {
            max: max,
            min: min
        };
    }
    getleaf(tree);
    setColors(tree, leafColor);
    // console.log(tree);


    function text_size_test(text, size) {  // 计算特定文字段在特定字体大小下的实际长度
        var this_text_length = 0;
        svgContainer.append("text").attr("id", "text_size_test").text(text)
        .attr("id", "leaf")
        .attr("font-family", "arial")
        .attr("font-size", size)
        .text(function() {
            this_text_length = this.getComputedTextLength();
            d3.select(this).remove();
            return text;});
        return this_text_length;
    }

    var unit_angle = 360 / leaf.length;
    var radian_unit = unit_angle * Math.PI / 180;
    var title_height = 60;
    var scale_height = 40;
    var legend_text_size = 12;
    if (!groups) {
        var legend_width = 0;
    } else {
        var group_name_length = 0;
        var group_name_string = '';
        for (var i in groups) {
            if (groups[i].name.length > group_name_length) {
                group_name_length = groups[i].name.length;
                group_name_string = groups[i].name;
            }
        }
        // 30为色块宽度加上留白。 由于有些字符串，大写或者m等宽字符较多，长度大于字符最多的字符串长度，所以留白较长
        var legend_width = text_size_test(group_name_string, legend_text_size) + 45;
    }
    var center_width = contents.size.width - legend_width;
    var center_height = contents.size.height - title_height - scale_height;
    if (center_height > center_width) {
        center_height = center_width;
        scale_height = contents.size.height - title_height - center_height;
    } else {
        center_width = center_height;
        legend_width = contents.size.width - center_width;
    }
    var center_point = {
        "x": center_width / 2,
        "y": center_width / 2 + title_height
    };

    // 计算树叶文字长度，以及对应的环树半径
    var max_leaf_name = 0;
    for (var i in leaf) {
        if (leaf[i].name.length > max_leaf_name) {
            max_leaf_name = leaf[i].name.length;
            var max_leaf_name_string = leaf[i].name;  // 字符数量最多名称
        }
    }
    // 最大叶名称字体大小是13，如果超过2/3整体，则依次减小字体直到满足需求
    var leaf_length = text_size_test(max_leaf_name_string, 13);
    if (leaf_length > (center_width / 3)){
        leaf_length = center_width / 3;
        for (var i=12; i>1 ; i--){
            if (text_size_test(max_leaf_name_string, i) < leaf_length){
                var text_size = i;
                break;
            }
            var text_size = i;
        }
    } else {
        var text_size = 13;
    }
    var tree_radius = center_width / 2 - leaf_length - 5;
    //当枝叶过多时，需要按照单位叶高度来设定叶文字的大小
    if (radian_unit < Math.PI / 2){ // 当单位叶弧度大于π/2时，Math.sin计算值不对
        var unit_sin = Math.sin(radian_unit) * tree_radius;
        if (unit_sin < text_size) {
            var text_size = parseInt(unit_sin) ? parseInt(unit_sin): 1;
            var leaf_length = text_size_test(max_leaf_name_string, text_size);
            var tree_radius = center_width / 2 - leaf_length - 5;
        }        
    }

    var dragCircleListener = d3.behavior.drag()
        .on("dragstart", function() {
            dstartX = d3.mouse(this)[0];
            dstartY = d3.mouse(this)[1];
            d3.event.sourceEvent.stopPropagation();
        })
        .on("drag", function(){
            var startAngle = Math.atan2((dstartY - center_point.y), (dstartX - center_point.y));
            if ((dstartY - center_point.y) < 0) {startAngle += Math.PI;}
            var endAngle = Math.atan2((d3.event.y - center_point.y), (d3.event.x - center_point.y));
            if ((d3.event.y - center_point.y) < 0) {endAngle += Math.PI;}
            var drag_angle = 180 / Math.PI * (endAngle - startAngle);
            if (Math.abs(drag_angle) < 3) {
                return null;
            }
            d3.select("#tree_group").attr("transform", "rotate("+ drag_angle +", "+center_point.x + ", " + center_point.y +")");
            d3.select("#leafgroup").attr("transform", "rotate("+ drag_angle +", "+center_point.x + ", " + center_point.y +")");
        });


    var tree_g = svgContainer.append("g").attr("id", "tree_group");

    var linear_width = d3.scale.linear()
        .domain([0, max_x])
        .range([center_point.x, center_point.x + tree_radius]);
    var arc_scale = d3.scale.linear()
        .domain([0, max_x])
        .range([0, tree_radius]);

    function plot_one(tree) {
        tree_g.append("line")
            .attr("x1", function(d) {
                return linear_width(tree.start_x);
            })
            .attr("y1", center_point.y)
            .attr("x2", function(d) {
                if (tree.branchset) {
                    return linear_width(tree.end_x);
                } else {
                    return linear_width(tree.end_x);
                }
            })
            .attr("y2", center_point.y)
            .attr("stroke-width", 1.2).attr("stroke", tree.color)
            .attr("transform", function(d) {
                var rotate = unit_angle * tree.y;
                return "rotate(" + rotate + "," + center_point.x + "," + center_point.y + ")";
            });
        if (tree.branchset) {
            var list_y = [];
            for (var i in tree.branchset) {
                list_y.push(tree.branchset[i].y);
            }
            var max_min_y = max_min_array(list_y);
            var arc = d3.svg.arc()
                .innerRadius(arc_scale(tree.end_x))
                .outerRadius(arc_scale(tree.end_x))
                .startAngle(radian_unit * max_min_y.min)
                .endAngle(radian_unit * max_min_y.max);
            tree_g.append("path")
                .attr("d", arc)
                .attr("fill", "none")
                .attr("transform", "translate(" + center_point.x + "," + center_point.y + ") rotate(90)")
                .attr("stroke-width", 1.2).attr("stroke", tree.color);
        } else {
            if (contents.params.dashed_extend) {
                tree_g.append("line")
                    .attr("x1", function(d) {
                        return linear_width(tree.end_x);  //从实线结尾开始
                    })
                    .attr("y1", center_point.y)
                    .attr("x2", function(d) {
                        if (tree.branchset) {
                            return linear_width(tree.end_x);
                        } else {
                            return linear_width(max_x);
                        }
                    })
                    .attr("y2", center_point.y)
                    .attr("stroke-dasharray", "3,3")
                    .attr("stroke-width", 0.6).attr("stroke", tree.color)
                    .attr("transform", function(d) {
                        var rotate = unit_angle * tree.y;
                        return "rotate(" + rotate + "," + center_point.x + "," + center_point.y + ")";
                    });
            }
        }
    }

    function plot_tree(tree) {
        plot_one(tree);
        if (tree.branchset) {
            for (var i in tree.branchset) {
                plot_tree(tree.branchset[i]);
            }
        }
    }
    plot_tree(tree);
    // 图例
    var unit_legend_height = 17;  // 单位图例高度
    var unit_lenend_width = 23; // 单位图例颜色块宽度
    svgContainer.selectAll("rect.legend").data(groups).enter().append("rect").attr("x", center_width).attr("y", function(d, i) {
        return i * unit_legend_height + title_height;
    }).attr("width", unit_lenend_width).attr("height", 4).attr("fill", function(d) {
        return d.color;
    });
    //
    svgContainer.selectAll("text.legend").data(groups).enter().append("text").text(function(d) {
        return d.name;
    }).attr("font-family", "arial").attr("font-size", legend_text_size).attr("x", center_width + unit_lenend_width + 4).attr("y", function(d, i) {
        return i * unit_legend_height + title_height + 6;
    });

    // 叶名称
    var svg_leaves = svgContainer.append("g").attr("id", "leafgroup").call(dragCircleListener).selectAll("text .leaves").data(leaf).enter().append("text").text(function(d) {
        return d.name;
    })
        .attr("id", "leaf")
        .attr("font-family", "arial")
        .attr("font-size", text_size)
        .text(function(d) {
            var text_length = this.getComputedTextLength();
            return d.name;  // 不进行过长字符筛短
            // if (text_length > leaf_length) {
            //     var keep_len = parseInt(leaf_length / text_length * d.name.length);
            //     return d.name.substring(0, keep_len - 4) + '...'
            // } else {
            //     return d.name
            // }
        })
        .attr("x", function(d) {
            var text_length = this.getComputedTextLength();
            if (contents.params.dashed_extend) {
                if (270 > unit_angle * d.y && unit_angle * d.y > 90) {
                    return center_point.x + tree_radius - text_length - 3;
                } else {
                    return center_point.x + tree_radius + 3;
                }

            } else {
                if (270 > unit_angle * d.y && unit_angle * d.y > 90) {
                    return linear_width(d.end_x) - text_length - 3;
                } else {
                    return linear_width(d.end_x) + 3;
                }
            }
        })
        .attr("y", function(d) {
            return center_point.y + text_size / 4;
        })
        .attr("transform", function(d) {
            var rotate = unit_angle * d.y;
            if (contents.params.dashed_extend) {
                var rotate_text = "rotate(180," + (center_point.x + tree_radius) + "," + center_point.y + ") ";
            } else {
                var rotate_text = "rotate(180," + linear_width(d.end_x) + "," + center_point.y + ") ";
            }
            if (rotate < 270 && rotate > 90) {
                return "rotate(" + rotate + "," + center_point.x + "," + center_point.y + ")" + rotate_text;
            } else {
                return "rotate(" + rotate + "," + center_point.x + "," + center_point.y + ")";
            }
        }).append("title").text(function(d) {
            return d.name;
        });
    // svg_leaves;
    // .text(function(d) {
    //     var this_text_length = this.getComputedTextLength();
    //     d.text_length = this_text_length;
    //     if (this_text_length > text_length) {
    //         return d.name.substring(0, 11) + '..';
    //     }
    //     return d.name;
    // });
    // .style("font-size", text_size + 'px')
    // .style("-webkit-transform", function(d){if (text_size < 12){return "scale(" + (text_size/12) + ")"} else {return "scale(1)"}})
    // .style("display", "inline-block");

    // 叶tooltips
    // var tooltip_rects = svgContainer.selectAll("rect.tooltip")
    // .data(leaf)
    // .enter()
    // .append("rect")
    // .attr('id', function(d) {
    //     return d.name
    // })
    // .attr("x", function(d){return text_x + d.text_length + 16})
    // .attr("y", function(d){return (linear_height(d.y) + 13)})
    // .attr('width', function(d) {
    //     return d.name.length * 16 * 0.33 + 30;
    // }).attr('height', 16).attr("stroke", function(d) {
    //     return d.color;
    // }).attr("fill-opacity", 0.0).attr("fill", function(d) {
    //     return d.color;
    // }).attr("stroke-opacity", 0).attr("stroke-width", 0.5);
    //
    // var tooltip_texts = svgContainer.selectAll("text .tooltip").data(leaf).enter().append("text").text(function(d) {
    //     return d.name;
    // }).attr('id', function(d) {
    //     return d.name;
    // }).attr("font-family", "arial")
    // .attr("font-size", 12)
    // .attr("x", function(d){return text_x + d.text_length + 19})
    // .attr("y",  function(d){return (linear_height(d.y) + 25)}).attr("fill-opacity", 0.0);

    // svgContainer.selectAll('text#leaf').on("mouseover", function(d) {
    //     svgContainer.select('text#' + d.name).attr("fill-opacity", 1);
    //     svgContainer.select('rect#' + d.name).attr("stroke-opacity", 1).attr("fill-opacity", 0.3);
    // }).on("mouseout", function(d) {
    //     svgContainer.select('text#' + d.name).attr("fill-opacity", 0);
    //     svgContainer.select('rect#' + d.name).attr("stroke-opacity", 0).attr("fill-opacity", 0.0);
    // });

    // 比例尺
    var axis_length = tree_radius;
    var ticks_num = Math.ceil(axis_length / 50);
    var axis_linear = d3.scale.linear().domain([max_x, 0]).range([0, tree_radius]);
    if (contents.params.scale_direction == "forking"){
        var axis_linear = d3.scale.linear().domain([max_x, 0]).range([0, tree_radius]);
    } else {
        var axis_linear = d3.scale.linear().domain([0, max_x]).range([0, tree_radius]);
    }
    var axis = d3.svg.axis().orient("top").scale(axis_linear).ticks(ticks_num).tickSize(5);
    var svg_axis = svgContainer.append("g").attr("class", "axis")
        .attr("transform", "translate(" + (center_point.x - tree_radius) + "," + (title_height +
            center_height + 30) + ")")
        .attr("font-family", "arial").attr("font-size", "14").call(axis);

    svg_axis.selectAll("line,path").attr("fill", function(d) {
        return "none";
    }).attr("stroke", "black").attr("stroke-width", 1).attr("shape-rendering", "crispEdges");
}
