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

function plotTree(title, margin_left, margin_right, margin_top, margin_bottom, svg_w, svg_h, div, newickTree, leafColor, groupsColor, direction, vis_name) {
    var tree = Newick_parse(newickTree);
    var targetDiv = "div#" + div;
    d3.select(targetDiv).selectAll("*").remove();
    var svgContainer = d3.select(targetDiv).append("svg").attr("version", "1.1").attr("xmlns", "http://www.w3.org/2000/svg").attr("width", svg_w).attr("height", svg_h);

    var title_g = svgContainer.append("g").attr("class", "title");
    title_g.append("text")
        .text(title)
        // .text("aaa")
        .attr("font-family", "arial")
        .attr("font-size", "22px")
        .attr("x", function(d) {
            return svg_w / 2 - this.getComputedTextLength() / 2;
        })
        .attr("y", 50);

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
    var tree_g = svgContainer.append("g").attr("class", "tree_group");
    var max_name = 0;
    for (var i in leaf) {
        if (leaf[i].name.length > max_name) {
            max_name = leaf[i].name.length;
        }
    }
    var text_length = 130;
    var scaleplate = 80;
    if (max_name < 7) {
        text_length = 80;
    }
    var text_size = 13;
    var one_leaf_height = parseInt((svg_h - scaleplate - margin_top) / (leaf.length - 1));
    if (one_leaf_height < text_size) {
        text_size = one_leaf_height;
    }
    text_length = (text_size / 13) * text_length;
    // alert(one_leaf_height);
    var text_x = svg_w - text_length - margin_right;
    var linear_height = d3.scale.linear()
        .domain([0, leaf.length - 1])
        .range([margin_top, svg_h - scaleplate]);
    var linear_width = d3.scale.linear()
        .domain([0, max_x])
        .range([5 + margin_left, svg_w - text_length - margin_right]);

    function plot_one(tree) {
        tree_g.append("line")
            .attr("x1", linear_width(tree.start_x))
            .attr("y1", linear_height(tree.y))
            .attr("x2", linear_width(tree.end_x))
            .attr("y2", linear_height(tree.y))
            .attr("stroke-width", 1.5).attr("stroke", tree.color);
        if (tree.branchset) {
            var list_y = [];
            for (var i in tree.branchset) {
                list_y.push(tree.branchset[i].y);
            }
            var max_min_y = max_min_array(list_y);
            tree_g.append("line")
                .attr("x1", linear_width(tree.end_x))
                .attr("y1", linear_height(max_min_y.max))
                .attr("x2", linear_width(tree.end_x))
                .attr("y2", linear_height(max_min_y.min))
                .attr("stroke-width", 1.5).attr("stroke", tree.color);
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
    var groups = new Array();
    for (i in groupsColor) {
        groups.push({
            name: i,
            color: groupsColor[i]
        });
    }
    svgContainer.selectAll("rect.legend").data(groups).enter().append("rect").attr("x", svg_w - margin_right).attr("y", function(d, i) {
        return i * 23 + margin_top;
    }).attr("width", 23).attr("height", 4).attr("fill", function(d) {
        return d.color;
    });

    svgContainer.selectAll("text.legend").data(groups).enter().append("text").text(function(d) {
        return d.name;
    }).attr("font-family", "arial").attr("font-size", 14).attr("x", svg_w - margin_right + 28).attr("y", function(d, i) {
        return i * 23 + margin_top + 7;
    });

    // 叶名称
    var svg_leaves = svgContainer.selectAll("text .leaves").data(leaf).enter().append("text").text(function(d) {
        return d.name;
    })
        .attr("id", "leaf")
        .attr("font-family", "arial")
        .attr("font-size", text_size)
        .attr("x", text_x + 4)
        .attr("y", function(d) {
            return linear_height(d.y) + 0.3 * text_size;
        })
        .text(function(d) {
            var this_text_length = this.getComputedTextLength();
            d.text_length = this_text_length;
            if (this_text_length > text_length) {
                return d.name.substring(0, 11) + "..";
            }
            return d.name;
        });
    // .style("font-size", text_size + 'px')
    // .style("-webkit-transform", function(d){if (text_size < 12){return "scale(" + (text_size/12) + ")"} else {return "scale(1)"}})
    // .style("display", "inline-block");

    // 叶tooltips
    var tooltip_rects = svgContainer.selectAll("rect.tooltip")
        .data(leaf)
        .enter()
        .append("rect")
        .attr("id", function(d) {
            return d.name;
        })
        .attr("x", function(d) {
            return text_x + d.text_length + 16;
        })
        .attr("y", function(d) {
            return (linear_height(d.y) + 13);
        })
        .attr("width", function(d) {
            return d.name.length * 16 * 0.33 + 30;
        }).attr("height", 16).attr("stroke", function(d) {
            return d.color;
        }).attr("fill-opacity", 0.0).attr("fill", function(d) {
            return d.color;
        }).attr("stroke-opacity", 0).attr("stroke-width", 0.5);

    var tooltip_texts = svgContainer.selectAll("text .tooltip").data(leaf).enter().append("text").text(function(d) {
        return d.name;
    }).attr("id", function(d) {
        return d.name;
    }).attr("font-family", "arial")
        .attr("font-size", 12)
        .attr("x", function(d) {
            return text_x + d.text_length + 19;
        })
        .attr("y", function(d) {
            return (linear_height(d.y) + 25);
        }).attr("fill-opacity", 0.0);

    svgContainer.selectAll("text#leaf").on("mouseover", function(d) {
        svgContainer.select("text#" + d.name).attr("fill-opacity", 1);
        svgContainer.select("rect#" + d.name).attr("stroke-opacity", 1).attr("fill-opacity", 0.3);
    }).on("mouseout", function(d) {
        svgContainer.select("text#" + d.name).attr("fill-opacity", 0);
        svgContainer.select("rect#" + d.name).attr("stroke-opacity", 0).attr("fill-opacity", 0.0);
    });

    // 比例尺
    var axis_length = svg_w - text_length - margin_right - margin_left - 5;
    var ticks_num = Math.ceil(axis_length / 50);
    // alert(ticks_num)
    if (contents.params.scale_direction != "forking") {
        var axis_linear = linear_width.domain([max_x, 0]);
    }
    var axis = d3.svg.axis().orient("top").scale(linear_width).ticks(ticks_num).tickSize(5);

    var translate = "translate(" + 0 + "," + (svg_h - scaleplate + 40) + ")";
    svgContainer.append("g").attr("class", "axis")
        .attr("transform", translate)
        .attr("font-family", "arial").call(axis);

    svgContainer.selectAll("g.axis line,path").attr("fill", function(d) {
        return "none";
    }).attr("stroke", "black").attr("stroke-width", 1).attr("shape-rendering", "crispEdges");
    svgContainer.selectAll("g.axis text").attr("font-size", "10px").attr("font-family", "arial")
        .attr("opacity", function(d, i) {
            // console.log(d.toString().length)
            return d.toString().length > 5 && i % 2 === 0 ? 0 : 1;
        });
}

function showClusterTree(cluster_tree, contents) {
    if ("GROUPS" in contents) {
        var max_group_name = 0;
        for (var i in contents.GROUPS) {
            if (i.length > max_group_name) {
                max_group_name = i.length;
            } else {}
        }
        contents.params.margin_right = 9 * max_group_name + 40;
    } else {
        contents.GROUPS = {};
    }
    if (contents.samples_colors) {} else {
        contents.samples_colors = {};
    }
    plotTree(contents.params.title, contents.params.margin_left, contents.params.margin_right, contents.params.margin_top, contents.params.margin_bottom, contents.size.width, contents.size.height, cluster_tree, contents.data, contents.samples_colors, contents.GROUPS, contents.params.direction);
}
