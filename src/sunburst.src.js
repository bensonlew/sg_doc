jQuery.sunburst = {
    sunburst: function(container, content) {
        var width = content.size.width;
        var height = content.size.height;
        var domain = content.domain ? content.domain : 'bacteria';
        var witPer = 150;
        var hiPer = 150;
        var radius = 250;
        var radiusPer = Math.min(witPer, hiPer) / 2;
        var maxNum = 0;
        var maxOtu;
        var speciesName = [domain];
        var speciesColor = {};
        var colors = ["#FFF5EE", "#1f77b4", "#3182bd", "#388E3C", "#e6550d", "#756bb1", "#FFC107", "#636363", "#1f77b4 ", "#7b4173", "#3F51B5", "#009688", "#31a354", "#F44336", "#BBDEFB", "#FFCCBC", "#8BC34A", "#E91E63", , "#2196F3", "#BDBDBD", "#F8BBD0", "#D32F2F", "#FFEB3B", "#673AB7", "#FF9800", "#C2185B", "#0288D1", "#CDDC39", "#727272", "#212121"];
        var b = {
            w: 250,
            h: 40,
            s: 2,
            t: 10
        };
        var totalSize = 0;
        var color = d3.scale.category20c();
        var colorB = d3.scale.category10();
        var x = d3.scale.linear().range([0, 2 * Math.PI]);
        var y = d3.scale.sqrt().range([0, radius]);
        var yPer = d3.scale.sqrt().range([0, radiusPer]);

        function range(valueP, valueRan, light, satur) {
            var light = d3.scale.sqrt().domain([0, valueP]).range([85, light]);
            var satur = d3.scale.linear().domain([0, valueP]).range([-10, 10]);
            return [light(valueRan), satur(valueRan)];
        }

        function fill(d) {
            var p = d;
            if (p.depth < 3) {
                d["color"] = speciesColor[p.name];
                return speciesColor[p.name];
                // return colorB(p.name)
            } else {
                while (p.depth > 2) p = p.parent;
                var c = d3.lab(speciesColor[p.name]);
                var li = c.l;
                var ca = c.b;
                c.l = range(p.value, d.value, li, ca)[0];
                return c;
            }
        }
        var vis = d3.select('#' + container).append("svg:svg").attr("class", "sunburst-svg").attr("version", 1.1).attr("xmlns", "http://www.w3.org/2000/svg").attr("width", width).attr("height", height).append("svg:g").attr("id", "sunburst").attr("transform", "translate(" + (width - 300) / 2 + "," + height / 2 + ")");
        var trail = d3.select(".sunburst-svg").append("g").attr("id", "trail").attr("transform", "translate(530)");
        var visPer = d3.select(".sunburst-svg").append("svg:g").attr("id", "visPer").attr("transform", "translate(650,450)");
        var arcPer = d3.svg.arc().startAngle(function(d) {
            return Math.max(0, Math.min(2 * Math.PI, x(d.x)))
        }).endAngle(function(d) {
            return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx)))
        }).innerRadius(function(d) {
            return Math.max(0, yPer(d.y))
        }).outerRadius(function(d) {
            return Math.max(0, yPer(d.y + d.dy))
        });
        var partition = d3.layout.partition().sort(function(a, b) {
            return d3.ascending(a.name, b.name)
        }).value(function(d) {
            return d.size;
        });
        var arc = d3.svg.arc().startAngle(function(d) {
            return Math.max(0, Math.min(2 * Math.PI, x(d.x)))
        }).endAngle(function(d) {
            return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx)))
        }).innerRadius(function(d) {
            return Math.max(0, y(d.y))
        }).outerRadius(function(d) {
            return Math.max(0, y(d.y + d.dy))
        });
        var currentRoot;
        var json = buildHierarchy(content.data);
        currentRoot = json;
        var sn = 0;
        for (s in speciesName) {
            if (speciesName[s] in speciesColor) {
                continue
            } else {
                speciesColor[speciesName[s]] = colors[sn];
                sn == colors.length - 1 ? sn = 0 : sn++
            }
        };
        initializeBreadcrumbTrail();
        vis.append("svg:circle").attr("r", radius).style("opacity", 0);
        var nodes = partition.nodes(json);
        var pathG = vis.data([json]).selectAll("g").data(nodes).enter().append("svg:g");
        var path = pathG.append("svg:path").attr("id", "path").style("z-index", -1).style("stroke", "#FFFFFF").attr("d", arc).attr("fill-rule", "evenodd").style("fill", function(d) {
            // return d.depth === 0 ? "white" : color((d.children ? d : d.parent).name);
            return d.depth === 0 ? "white" : fill(d);
        }).style("opacity", 1).on("mouseover", mouseover).style("cursor", "pointer").on("click", sunburst_click);
        d3.select("#sunburst").on("mouseleave", mouseleave);
        totalSize = path.node().__data__.value;
        var text = vis.data([json]).selectAll(".gText").data(nodes).enter().append("svg:g").append("text").attr("class", "gText").attr("id", "pname").style("opacity", 1).attr("transform", function(d) {
            return textRotate(d)
        }).text(function(d) {
            return d.depth == 2 && d.dx > 0.03 ? d.name : null
        }).attr("font-size", "15px").attr("strock", "black").attr("font-family", "arial");

        function textRotate(d) {
            var r = 0;
            if (x(d.x + d.dx / 2) / Math.PI * 180 < 180) {
                r = ((x(d.x + d.dx / 2) - Math.PI / 2) / Math.PI * 180);
                return "translate(" + arc.centroid(d) + ")" + "rotate(" + r + ")"
            } else {
                var len = d.name.length;
                var tran = len * (-6);
                r = ((x(d.x + d.dx / 2) + Math.PI / 2) / Math.PI * 180);
                return "translate(" + arc.centroid(d) + ")" + "rotate(" + r + ")" + "translate(" + tran + ")";
            }
        }

        function showMax(maxOtu) {
            var maxPath = getAncestors(maxOtu);
            var percent;
            d3.selectAll("#path").each(function(d, i) {
                if (maxPath.indexOf(d) !== -1) {
                    d3.select(this).style("opacity", 1)
                } else {
                    d3.select(this).style("opacity", 0.7)
                }
            });
            updateBreadcrumbs(maxPath, percent)
        };
        visPer.data([json]).selectAll("path").data(nodes).enter().append("svg:path").attr("d", arcPer).attr("id", "perspective-path").attr("fill-rule", "evenodd").style("fill", function(d) {
            return d.depth === 0 ? "white" : fill(d);
        }).style("opacity", 0.8);

        function sunburst_click(d) {
            currentRoot = d;
            var currChildren = getChildren(d);
            var dep = d.depth + 1;
            currentRoot.name === domain ? text.style("opacity", 1) : text.style("opacity", 0);
            var ancestors = getAncestors(currentRoot);
            d3.selectAll("#path").style("opacity", 0.6);
            path.transition().duration(500).attrTween("d", arcTween(d))
        }

        function drawPerspective(ancestors, children) {
            var nodes = _.union(ancestors, children);
            d3.selectAll('#perspective-path').each(function(d, i) {
                if (nodes.indexOf(d) !== -1) {
                    d3.select(this).style("opacity", 1)
                } else {
                    d3.select(this).style("opacity", 0.1)
                }
            })
        }

        function arcTween(d) {
            drawPerspective(getAncestors(d), getChildren(d));
            var xd = d3.interpolate(x.domain(), [d.x, d.x + d.dx]),
                yd = d3.interpolate(y.domain(), [d.y, 1]),
                yr = d3.interpolate(y.range(), [d.y ? 20 : 0, radius]);
            return function(d, i) {
                return i ?
                    function(t) {
                        return arc(d)
                    } : function(t) {
                        x.domain(xd(t));
                        y.domain(yd(t)).range(yr(t));
                        return arc(d)
                    }
            }
        }

        function mouseover(d) {
            var percentage = (100 * d.value / totalSize).toPrecision(3);
            var percentageString = percentage + "%";
            if (percentage < 0.1) {
                percentageString = "< 0.1%"
            }
            var sequenceArray = getAncestors(d);
            updateBreadcrumbs(sequenceArray, percentageString);
            d3.selectAll("#path").style("opacity", 0.3);
            vis.selectAll("#path").filter(function(node) {
                return (sequenceArray.indexOf(node) >= 0)
            }).style("opacity", 1)
        }

        function mouseleave(d) {
            d3.selectAll("#path").on("mouseover", null);
            d3.selectAll("#path").transition().duration(1000).style("opacity", 1).each("end", function() {
                d3.select(this).on("mouseover", mouseover)
            });
            d3.select("#explanation").style("visibility", "hidden")
        };

        function getAncestors(node) {
            var path = [];
            var current = node;
            while (current) {
                path.push(current);
                current = current.parent
            }
            return path.reverse()
        }

        function getChildren(node) {
            var children = [];

            function addChild(root) {
                children.push(root);
                _.each(root.children, function(c) {
                    addChild(c)
                })
            };
            addChild(node);
            return children
        };

        function updateBreadcrumbs(nodeArray, percentageString) {
            var g = d3.select("#trail").selectAll("g").data(nodeArray, function(d) {
                return d.name + d.depth
            });
            var entering = g.enter().append("svg:g");
            entering.append("svg:polygon").attr("points", breadcrumbPoints).style("fill", function(d) {
                return d.depth === 0 ? "white" : fill(d);
            });
            entering.append("svg:text").attr("x", (b.w + b.t) / 2).attr("y", b.h / 2).attr("dy", "0.35em").attr("text-anchor", "middle").text(function(d) {
                if (d.name.length > 37) {
                    var split_name = d.name.split("__");
                    return split_name[0] + '__' + split_name[1].split('_')[0]
                } else {
                    return d.name
                }
            }).attr("font-size", "13px").attr("font-family", "arial");
            g.attr("transform", function(d, i) {
                return "translate(0, " + i * 30 + ")"
            });
            g.exit().remove();
            d3.select("#trail").select("#endlabel").attr("x", b.w / 2).attr("y", (nodeArray.length + 1) * 30).attr("dy", "0.35em").attr("text-anchor", "middle").text(percentageString).attr("font-size", "20px").attr("font-family", "arial");
            d3.select("#trail").style("visibility", "")
        }

        function breadcrumbPoints(d, i) {
            var points = [];
            points.push("0,0");
            if (i > 0) {
                points.push((b.w / 2) + "," + (b.h / 3))
            }
            points.push(b.w + ",0");
            points.push(b.w + "," + (b.h * 2 / 3));
            points.push((b.w / 2) + "," + b.h);
            points.push("0," + (b.h * 2 / 3));
            return points.join(" ");
        }

        function initializeBreadcrumbTrail() {
            trail.append("svg:text").attr("id", "endlabel").style("fill", "#000")
        }

        function buildHierarchy(csv) {
            var speciesAbb = ["k", "p"];
            var root = {
                "name": domain,
                "children": [],
                "color": colors[0]
            };
            for (var i = 0; i < csv.length; i++) {
                var sequence = csv[i][0];
                var size = +csv[i][1];
                if (isNaN(size)) {
                    continue
                }
                var parts = sequence.split(";");
                var currentNode = root;
                for (var j = 0; j < parts.length; j++) {
                    var children = currentNode["children"];
                    var nodeName = parts[j];
                    var childNode;
                    speciesAbb.indexOf(nodeName.split("__")[0]) > -1 ? speciesName.push(nodeName) : null;
                    if (j + 1 < parts.length) {
                        var foundChild = false;
                        for (var k = 0; k < children.length; k++) {
                            if (children[k]["name"] == nodeName) {
                                childNode = children[k];
                                foundChild = true;
                                break
                            }
                        }
                        if (!foundChild) {
                            childNode = {
                                "name": nodeName,
                                "children": []
                            };
                            children.push(childNode);
                        }
                        currentNode = childNode;
                    } else {
                        childNode = {
                            "name": nodeName,
                            "size": size
                        };
                        if (maxNum < size) {
                            maxNum = size;
                            maxOtu = currentNode;
                        }
                        children.push(childNode);
                    }
                }
            }
            return root;
        }
    }
};
