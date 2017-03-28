var sum = function(array) {
        var sum_v = 0;
        for (var i in array) {
            sum_v += array[i]
        }
        return sum_v
    };
var Newick_parse = function(s) {
        var ancestors = [];
        var tree = {};
        var tokens = s.split(/\s*(;|\(|\)|,|:)\s*/);
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            switch (token) {
            case '(':
                var subtree = {};
                tree.branchset = [subtree];
                ancestors.push(tree);
                tree = subtree;
                break;
            case ',':
                var subtree = {};
                ancestors[ancestors.length - 1].branchset.push(subtree);
                tree = subtree;
                break;
            case ')':
                tree = ancestors.pop();
                break;
            case ':':
                break;
            default:
                var x = tokens[i - 1];
                if (x == ')' || x == '(' || x == ',') {
                    tree.name = token
                } else if (x == ':') {
                    tree.length = parseFloat(token)
                }
            }
        }
        return tree
    };

function plotTree(div, content) {
    var bar = content.params.plot_bar;
    var title = content.params ? content.params.title : "treeBar",
        margin_left = 10,
        margin_right = bar ? 200 : 100,
        margin_top = 80,
        margin_bottom = 30,
        svg_w = content.size.width,
        svg_h = content.size.height,
        newickTree = content.data,
        leafColor = {},
        tree_color = content.tree_color ? content.tree_color : [],
        groupsTree = content.tree_color ? content.tree_color : [],
        direction = "",
        vis_name = "";
    var maxtext = 0;
    var groupBar = content.legend_bar ? content.legend_bar : {};
    var barWidth = 0;
    var tree = Newick_parse(newickTree);
    var ifChartText = content.params.chart_text ? content.params.chart_text : "true";
    var ifLegendText = content.params.legend_text ? content.params.legend_text : "false";
    var showLegend = content.params.show_legend ? content.params.show_legend : "all";
    var legendBarData = [];
    for (g in groupBar) {
        legendBarData.push({
            "name": g,
            "color": groupBar[g]
        })
    }
    for (var n = 0; n < tree_color.length; n++) {
        for (var c = 0; c < tree_color[n].species.length; c++) {
            maxtext = tree_color[n].species[c].length > maxtext ? tree_color[n].species[c].length : maxtext;
            leafColor[tree_color[n].species[c]] = tree_color[n].color
        }
    }
    var targetDiv = "div#" + div;
    d3.select(targetDiv).selectAll("*").remove();
    var svgContainer = d3.select(targetDiv).append("svg").attr("version", "1.1").attr("xmlns", "http://www.w3.org/2000/svg").attr("width", svg_w).attr("height", svg_h);
    var title_g = svgContainer.append("g").attr("class", "title").attr("transform", "translate(" + svg_w / 2 * 4 / 5 + ", " + margin_top / 3 + ")");
    title_g.append("text").text(title).attr("font-family", "arial").attr("font-size", "20px");
    if (bar) {
        margin_right = maxtext * 6 > 600 ? 600 : maxtext * 6;
        margin_right = maxtext * 6 < 150 ? 150 : maxtext * 6;
        barWidth = 1 / 5 * svg_w;
        svg_w = 4 / 5 * svg_w
    }
    var leaf = [];
    var max_x = 0;
    var getleaf = function(subtree, x) {
            if ("undefined" == typeof x) {
                x = 0
            };
            var sub_y = [];
            var length = 0;
            if (subtree.length) {
                length = subtree.length
            };
            subtree.start_x = x;
            x = x + length;
            subtree.end_x = x;
            if (subtree.end_x > max_x) {
                max_x = subtree.end_x
            };
            if (subtree.branchset) {
                for (var i in subtree.branchset) {
                    sub_y.push(getleaf(subtree.branchset[i], x))
                }
            } else {
                subtree.y = leaf.length;
                leaf.push(subtree);
                return subtree.y
            };
            subtree.y = sum(sub_y) / sub_y.length;
            return subtree.y
        };

    function setColors(tree, color_obj) {
        if (tree.branchset) {
            var branchset_colors = [];
            for (var i in tree.branchset) {
                branchset_colors.push(setColors(tree.branchset[i], color_obj))
            }
            tree.color = branchset_colors[0];
            for (var i in branchset_colors) {
                if (branchset_colors[i] != tree.color) {
                    tree.color = "black";
                    break
                }
            }
            return tree.color
        } else {
            tree.color = color_obj[tree.name] ? color_obj[tree.name] : "black";
            return tree.color
        }
    }
    function max_min_array(array) {
        var max = array[0];
        var min = array[0];
        for (var i in array) {
            if (max < array[i]) {
                max = array[i]
            }
            if (min > array[i]) {
                min = array[ii]
            }
        }
        return {
            max: max,
            min: min
        }
    }
    getleaf(tree);
    setColors(tree, leafColor);
    var old_barData = content.bar_data;
    var bar_header = content.bar_data[0];
    var temp_bar = {};
    var barData = new Array();
    for (var i in old_barData) {
        temp_bar[old_barData[i][0]] = old_barData[i]
    }
    for (var i in leaf) {
        barData.push(temp_bar[leaf[i].name])
    }
    barData.splice(0, 0, bar_header);
    var tree_g = svgContainer.append('g').attr("class", "tree_group");
    var max_name = 0;
    var maxLength = 0;
    for (var i in leaf) {
        if (leaf[i].name.length > max_name) {
            max_name = leaf[i].name.length
        }
    }
    var text_length = max_name * 6;
    var treeRangeWidth = svg_w - text_length - margin_right;
    treeRangeWidth = treeRangeWidth < 100 ? 100 : treeRangeWidth;
    treeRangeWidth = treeRangeWidth > 600 ? 600 : treeRangeWidth;
    var linear_width = d3.scale.linear().domain([0, max_x]).range([5 + margin_left, treeRangeWidth]);
    for (var i in leaf) {
        maxLength = linear_width(max_x) + leaf[i].name.length * 6 > maxLength ? linear_width(max_x) + leaf[i].name.length * 6 : maxLength
    }
    var scaleplate = 80;
    if (max_name < 7) {
        text_length = 80
    }
    var text_size = 13;
    var one_leaf_height = parseInt((svg_h - scaleplate - margin_top) / (leaf.length - 1));
    if (one_leaf_height < text_size) {
        text_size = one_leaf_height
    }
    text_length = (text_size / 13) * text_length;
    var text_x = svg_w - text_length - margin_right;
    var linear_height = d3.scale.linear().domain([0, leaf.length - 1]).range([margin_top, svg_h - scaleplate]);
    if(ifChartText==="true"){
        tree_g.append("text").text("Phylogenetic tree").attr("font-family", "arial").attr("font-size", "12px").attr("transform", "translate(" + maxLength / 2 + ", " + (margin_top - 20) + ")");
    }
    function plot_one(tree) {
        tree_g.append("line").attr("x1", linear_width(tree.start_x)).attr("y1", linear_height(tree.y)).attr("x2", linear_width(tree.end_x)).attr("y2", linear_height(tree.y)).attr("stroke-width", 0.8).attr("stroke", tree.color);
        if (tree.branchset) {
            var list_y = [];
            for (var i in tree.branchset) {
                list_y.push(tree.branchset[i].y)
            };
            var max_min_y = max_min_array(list_y);
            tree_g.append("line").attr("x1", linear_width(tree.end_x)).attr("y1", linear_height(max_min_y.max)).attr("x2", linear_width(tree.end_x)).attr("y2", linear_height(max_min_y.min)).attr("stroke-width", 0.8).attr("stroke", tree.color)
        } else {
            tree_g.append("line").attr("x1", linear_width(tree.end_x)).attr("y1", linear_height(tree.y)).attr("x2", maxLength - tree.name.length * 6).attr("y2", linear_height(tree.y)).attr("stroke-width", 0.3).attr("stroke", tree.color).attr("stroke-dasharray", 2)
        }
    }
    function plot_tree(tree) {
        plot_one(tree);
        if (tree.branchset) {
            for (var i in tree.branchset) {
                plot_tree(tree.branchset[i])
            }
        }
    }
    plot_tree(tree);
    treeRangeWidth === 100 ? barWidth = 100 : barWidth = barWidth;
    if (bar) {
        var legendBar = svgContainer.append("g").attr("id", "legendBar").attr("transform", "translate(" + (maxLength + 10 + barWidth + 10) + ", " + margin_top + ")");
        if(ifLegendText==="true"){
        legendBar.append("text").text("Bar Groups").attr("font-family", "arial").attr("font-size", "13px").attr("transform", "translate(0,-12)");
        };
        var legendBarG = legendBar.selectAll(".legendBarG").data(legendBarData).enter().append("g").attr("transform", function(d, i) {
            return "translate(10," + 20 * i + ")"
        });
        legendBarG.append('rect').attr('width', 15).attr('height', 5).attr("fill", function(d) {
            return d.color
        });
        legendBarG.append('text').text(function(d) {
            return d.name
        }).attr("transform", "translate(25, 5)").attr("font-family", "arial").attr("font-size", "12px");
        var groupColor = content.legend_bar ? content.legend_bar : {};
        var barChartG = svgContainer.append("g").attr("transform", "translate(" + (maxLength + 10) + ", " + margin_top + ")");
        addBar(barData, groupColor, barChartG, barWidth, svg_h, svg_w, scaleplate, margin_top, one_leaf_height, ifChartText)
    }
    var groups = new Array();
    for (i in groupsTree) {
        groups.push({
            name: i,
            color: groupsTree[i]
        })
    };
    var legendTree = svgContainer.append("g").attr("id", "legendTree").attr("transform", "translate(" + (maxLength + 10 + barWidth + 10) + ", " + (bar ? margin_top + legendBarData.length * 22 + 20 : margin_top) + ")");
    if(ifLegendText==="true"){
        legendTree.append("text").text(groupsTree.length < 1 ? null : "Taxa").attr("font-family", "arial").attr("font-size", "13px").attr("transform", "translate(0,-12)");
    };
    var legendTreeG = legendTree.selectAll(".legendTreeG").data(groupsTree).enter().append("g").attr("transform", function(d, i) {
        return "translate(10," + 20 * i + ")"
    });
    legendTreeG.append('rect').attr('width', 15).attr('height', 5).attr("fill", function(d) {
        return d.color
    });
    legendTreeG.append("text").text(function(d) {
        return d.name
    }).attr("font-family", "arial").attr("font-size", 12).attr("transform", "translate(30, 5)");
    tree_g.append("line").attr("id", "hhhhh").attr("x1", linear_width(max_x)).attr("x2", linear_width(max_x)).attr("y1", margin_top).attr("y2", svg_h).attr("stroke", "#ccc").attr("stroke-dasharray", 2).attr("opacity", 0);
    var svg_leaves = svgContainer.selectAll("text .leaves").data(leaf).enter().append("text").text(function(d) {
        return d.name
    }).attr('id', 'leaf').attr("font-family", "arial").attr("text-anchor", "end").attr("font-size", text_size).attr("x", maxLength).attr("y", function(d) {
        return linear_height(d.y) + 0.3 * text_size
    }).style("font-size", '10px');
    var axis_length = svg_w - text_length - margin_right - margin_left - 5;
    var ticks_num = Math.ceil(axis_length / 50);
    if (content.params.scale_direction == "forking"){
        var axis_linear = linear_width.domain([0, max_x]);
    } else {
        var axis_linear = linear_width.domain([max_x, 0]);
    }
    var axis = d3.svg.axis().orient("top").scale(linear_width).ticks(ticks_num).tickSize(5);
    var translate = "translate(" + 0 + "," + (svg_h - scaleplate + 40) + ")";
    var xAxisG = svgContainer.append("g").attr("class", "xAxis").attr("transform", translate).attr("font-family", "arial").call(axis);
    d3.selectAll('.xAxis line').attr("fill", 'none').attr("stroke", 'black').attr("shape-rendering", "crispEdges");
    d3.selectAll('.xAxis path').attr("stroke", 'black')
    .style("fill", 'none')
    .attr("shape-rendering", "crispEdges");
    d3.selectAll(".xAxis text").attr("transform", "translate(0,23)").attr("font-size", "10px").attr("font-family", "arial")
    .attr("opacity", function(d, i) {
        // console.log(d.toString().length)
        return d.toString().length > 5 && i % 2 === 0 ? 0 : 1
    });
};

function buildBarData(barData, groupColor) {
    var maxAbun = 0;
    var color = d3.scale.category20c();
    var barDataBuilded = [];
    var groupNames = barData[0];
    for (var i = 1; i < barData.length; i++) {
        var barSingle = {
            "name": barData[i][0]
        };
        var groups = [];
        var abundance = 0;
        for (var d = 0; d < groupNames.length; d++) {
            abundance += barData[i][d + 1];
            var groupSingle = {
                "name": groupNames[d],
                "value": barData[i][d + 1],
                "translate": abundance - barData[i][d + 1],
                "color": groupNames[d] in groupColor ? groupColor[groupNames[d]] : groupColor["All"]
            };
            groups.push(groupSingle)
        }
        barSingle["groups"] = groups;
        barSingle["abundance"] = abundance;
        maxAbun = maxAbun > abundance ? maxAbun : abundance;
        barDataBuilded.push(barSingle)
    }
    return [barDataBuilded, maxAbun]
}
function addBar(barData, groupColor, barChartG, width, height, treeWidth, bottomH, margin_top, barHeightO, ifChartText) {
    var returnData = buildBarData(barData, groupColor);
    var barDataBuilded = returnData[0];
    var maxAbun = returnData[1];
    var barWidth = width;
    var barHeight = (height - margin_top - bottomH + barHeightO) / (barDataBuilded.length);
    var x = d3.scale.linear().domain([0, maxAbun]).range([0, barWidth]);
    var xAxis = d3.svg.axis().scale(x).orient("top");
    if(ifChartText==="true"){
        var barTitle = barChartG.append("text").text("Number of reads").attr("font-family", "arial").attr("font-size", "12px").attr("text-anchor", "middle").attr("transform", "translate(" + barWidth / 2 + ", -20)");
    };
    var barAxisG = barChartG.append("g").attr("class", "barAxis").attr("transform", "translate(0, " + ((height - margin_top - bottomH + barHeightO) + 20) + ")").call(xAxis);
    var barGs = barChartG.selectAll(".barGs").data(barDataBuilded).enter().append("g").attr("transform", function(d, i) {
        return "translate(0," + (barHeight * i) + ")"
    });
    barGs.selectAll(".rectBar").data(function(d) {
        return d.groups
    }).enter().append("rect").attr("class", "rectBar").attr("width", function(d) {
        return x(d.value)
    }).attr("height", barHeight / 2).attr("stroke", function(d) {
        return "All" in groupColor ? d.color : "white"
    }).attr("stroke-width", "All" in groupColor ? 1 : 0.1).style("fill", function(d) {
        return d.color
    }).attr("transform", function(d, i) {
        return "translate(" + x(d.translate) + ", " + (-barHeight / 4) + ")"
    });
    var ticksN = 0;
    d3.selectAll(".barAxis path").style("fill", "none").style("stroke", "grey").style("shape-rendering", "crispEdges");
    d3.selectAll(".barAxis line").style("fill", function(d, i) {
        ticksN = i;
        // console.log(i)
        return "none"
    }).style("stroke", "#000").style("shape-rendering", "crispEdges");
    // console.log(barWidth)
    d3.selectAll(".barAxis text").attr("transform", "translate(0,23)").attr("font-size", "10px").attr("font-family", "arial")
    .attr("opacity", function(d, i) {
        if (barWidth > 150){
            return i % 2 === 0 ? 1 : 0
        }
        else{
            return i === ticksN ? 1 : 0
        }
        
    }).text(function(d){ return d/1000 + "k"})
}
function showClusterTreeBar(cluster_tree, contents) {
    if ('GROUPS' in contents) {
        var max_group_name = 0;
        for (var i in contents.GROUPS) {
            if (i.length > max_group_name) {
                max_group_name = i.length
            } else {}
        }; if (max_group_name > 10) {
            contents.params.margin_right = 150
        } else {
            contents.params.margin_right = 80
        }
    } else {
        contents.GROUPS = {}
    };
    if (contents.samples_colors) {} else {
        contents.samples_colors = {}
    };
    plotTree(cluster_tree, contents)
};