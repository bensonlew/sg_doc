jQuery.chord = {
	chord: function(container, content) {
		d3.select("div#" + container).selectAll("*").remove();
		var width = content.size.width;
		var height = content.size.height;
		var data = content.data;
		var sample = content.data[0];
		var chartName = content.params ? content.params.title : "样本与物种共线性弦图";
		var sampleColor = content.sampleColor ? content.sampleColor : {};
		var species = [];
		var colorDict = sampleColor;
		var colors = ["#F44336", "#FF9800", "#E91E63", "#FFCCBC", "#FFC107", "#D32F2F", "#F8BBD0", "#8B668B", "#8B1C62", "#8B008B", "#CDDC39", "#C2185B", "#FFEB3B"];
		
		var colorC = ["#00868B", "#27408B", "#473C8B", "#515151","#228B22","#8DB6CD", "#0000CD","#8B2252", "#0288D1", "#8E388E", "#2196F3", "#3A5FCD", "#2E8B57", "#673AB7", "#912CEE", "#8B6914", "#8E388E", "#009688", "#3F51B5"];
		var colorB = ["#FFD700", "#FFC0CB", "#FF83FA", "#FF6A6A", "#F0E68C", "#DDA0DD", "#C6E2FF", "#E6E6FA", "#FFB90F", "#63B8FF", "#EEE685"];
		var colorA = ["lightsteelblue", "linen", "cornflowerblue", "indianred", "mediumorchid", "mediumseagreen", "mediumslateblue", "mediumturquoise", "teal", "sandybrown", "olivedrab"];
		var colorD = ["red", "purple", "green", "blue", "magenta", "#7b4173", " #bcbd22", "#8c564b", "#ff7f0e", "#843c39"];
		var colorE = ["powderblue", "plum","pink","peru","peachpuff","palevioletred","paleturquoise","palegreen","orchid","	orange"];
		var colorF = ["lightslategray", "lightsteelblue", "#53868B", "#8B7B8B", "steelblue", "#778899", "#00688B", "#607B8B", "#6CA6CD", "#636363", "cornflowerblue", "#668B8B"];
        var colorG = ["#CCFF99", "#FF6600", "#009900", "#FFD333", "#3DB8FF", "#3491CF", "#F8F8AB", "#A4C1F4", "#98F1EF", "#F8CFBF", "#F8CFBF", "#C8C7CC", "#2196F3", "#31a354", "#F44336", "#8BC34A", "#E91E63", "#D32F2F", "#F8BBD0", "darkseagreen", "#FFEB3B", "#673AB7", "#C2185B", "#0288D1", "#CDDC39", "#3F51B5", "#393b79"];

		var maxSampleName = 0;
		var maxSpeciesName = 0;
		var maxSeqNum = 0;

		var colorlists = {
			"colorsA": colorA,
			"colorsB": colorB,
			"colorsC": colorC,
			"colorsD": colorD,
			"colorsE": colorE,
			"colorsF": colorF,
			"colorsG": colorG,
		};
		var colorS = content.params.colors ? colorlists[content.params.colors] : colorlists["colorsA"];

		var compare = function(prop) {
				return function(obj1, obj2) {
					var val1 = obj1[prop];
					var val2 = obj2[prop];
					if (val1 > val2) {
						return -1
					} else if (val1 < val2) {
						return 1
					} else {
						return 0
					}
				}
			};
		function buildData(data) {
			var pieData = [];
			var sampleData = [];
			var speciesOfSample = [];
			for (s in sample) {
				speciesOfSample.push([]);
				sampleData.push(0)
			};
			for (var i = 1; i < data.length; i++) {
				var total = 0;
				var tem = {};
				tem["name"] = data[i][0];
				species.push(data[i][0]);
				tem["children"] = [];
				for (s in sample) {
					var sn = parseInt(s) + 1;
					var snn = sn.toString();
					speciesOfSample[s].push({
						"name": data[i][0],
						"value": data[i][snn]
					});
					sampleData[s] += data[i][snn];
					total += data[i][snn];
					tem["children"].push({
						"name": sample[s],
						"value": data[i][snn]
					})
				}
				tem["value"] = total;
				pieData.push(tem)
			}
			pieData.sort(compare("value"));
			maxSeqNum = pieData[0].value;
			// console.log(maxSeqNum);
			for (s in sample) {
				pieData.push({
					"name": sample[s],
					"value": sampleData[s],
					"children": speciesOfSample[s]
				});
				sample[s] in colorDict ? null : colorDict[sample[s]] = colors[s]
			}
			return pieData
		};
		var pieData = buildData(data);
		// console.log(pieData);
		var tickGap = maxSeqNum > 100000 ? 10000 : 1000;
		// console.log(tickGap);
		// console.log(maxSeqNum);
		var t = -1;
		for (var s = 0; s < species.length; s++) {
			var speNameLength = species[s].length;
			maxSpeciesName = speNameLength > maxSpeciesName ? speNameLength : maxSpeciesName;
			s % colorS.length == 0 ? t++ : null;
			s < colorS.length ? n = s : n = s - colorS.length * t;
			colorDict[species[s]] = colorS[n]
		}
		var pie = d3.layout.pie().sort(null).padAngle(0.05).value(function(d) {
			return d.value
		});
		var layoutPie = pie(pieData);
		// console.log(species)
		// console.log(species.length)
		// console.log(colorDict)

		function subPie(data, startAngle, endAngle) {
			var subpie = d3.layout.pie().sort(function(a, b) {
				return b.value - a.value
			}).startAngle(startAngle).endAngle(endAngle).value(function(d) {
				return d.value
			});
			var layoutData = subpie(data);
			return layoutData
		};
		var zoom = d3.behavior.zoom().scaleExtent([0.5, 3]).on("zoom", zoomed);

		// function zoomed() {
		// 	wrapper.attr("transform", "translate(" + (width / 2 - 130) + "," + (height / 2 - 200 + maxSpeciesName * 2) + ")translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")")
		// }
		function zoomed() {
			wrapper.attr("transform", "translate(" + (width / 2 ) + "," + (height / 2 - 50) + ")translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")")
		}

		// 拖拽工具dragListener
		var dstartX = 0;
		var dstartY = 0;
		var dragListener = d3.behavior.drag()
		.on("dragstart", function() {
			dstartX = d3.mouse(this)[0];
			dstartY = d3.mouse(this)[1];
  			d3.event.sourceEvent.stopPropagation(); // silence other listeners
		})
		.on("drag", function(){
			d3.select(this).attr("transform", "translate("+(d3.event.x-dstartX)+", "+(d3.event.y-dstartY)+")")
		});
		var outerRadius_1 = 1/6*width;
		var outerRadius_s1 = outerRadius_1 * 0.93;
		var innerRadius_s1 = outerRadius_1 * 0.91;
		var outerRadius_2 = outerRadius_1 * 1.43;
		var innerRadius_2 = outerRadius_1 * 1.38;
		var outerRadius_3 = outerRadius_1 * 1.50;
		var innerRadius_3 = outerRadius_1 * 1.45;
		var innerRadius_1 = outerRadius_1 * 0.95;
		var innerRadius_s3 = outerRadius_1 * 1.42;
		var outerRadius_s3 = outerRadius_1 * 1.46;
		var outerRadius_s2 = outerRadius_1 * 1.37;
		var innerRadius_s2 = outerRadius_1 * 1.34;
		var opacityDefault = 0.8;
		var svg = d3.select('#' + container).append("svg").attr("version", 1.1).attr("xmlns", "http://www.w3.org/2000/svg").attr("width", width).attr("height", height);
		// var wrapper = svg.append("g").attr("class", "chordWrapper").attr("transform", "translate(" + (width / 2 - 130) + "," + (height / 2 - 200 + maxSpeciesName * 2) + ")").call(zoom);
		var wrapper = svg.append("g").attr("class", "chordWrapper").attr("transform", "translate(" + (width / 2 ) + "," + (height / 2-50) + ")");

		var arc = d3.svg.arc().innerRadius(innerRadius_1).outerRadius(outerRadius_1);
		var arc_s1 = d3.svg.arc().innerRadius(innerRadius_s1).outerRadius(outerRadius_s1);
		var arc2 = d3.svg.arc().innerRadius(innerRadius_2).outerRadius(outerRadius_2);
		var arc3 = d3.svg.arc().innerRadius(innerRadius_3).outerRadius(outerRadius_3);
		var arc_s3 = d3.svg.arc().innerRadius(innerRadius_s3).outerRadius(outerRadius_s3);
		var arc_s2 = d3.svg.arc().innerRadius(innerRadius_s2).outerRadius(outerRadius_s2);
		var path = d3.svg.chord().radius(innerRadius_1);
		var g = wrapper.selectAll("g.group").data(layoutPie).enter().append("g").attr("class", "group").on("mouseover", mouseover).on("mouseleave", mouseleave);
		var textChartName = wrapper.append("text").text(chartName).attr("font-family", "arial").attr("text-anchor", "middle")
		.attr("font-size", "20px").attr("transform", "translate(0,"+(-innerRadius_1*2-50)+")")
		.call(dragListener);
		
		var chordData = [];
		var source = [];
		var target = [];
		for (l in layoutPie) {
			var definePie = subPie(layoutPie[l]["data"]["children"], layoutPie[l]["startAngle"] + 0.035, layoutPie[l]["endAngle"] - 0.035);
			for (d in definePie) {
				var cd = {
					"source": {},
					"target": {}
				};
				if (sample.indexOf(definePie[d]["data"]["name"]) < 0) {
					definePie[d]["papa"] = layoutPie[l]["data"]["name"];
					cd["source"] = definePie[d];
					source.push(definePie[d])
				} else {
					definePie[d]["papa"] = layoutPie[l]["data"]["name"];
					target.push(definePie[d])
				}
			}
			var subG = wrapper.selectAll("g.subgroup").data(definePie).enter().append("g").attr("class", "g.subgroup");
			subG.append("path").style("fill", function(d, i) {
				return colorDict[d.data.name]
			}).style("opacity", 0.8).attr("d", function(d) {
				if (sample.indexOf(d.data.name) < 0) {
					return arc_s2(d)
				} else {
					return arc2(d)
				}
			});
			subG.append("path").style("fill", function(d, i) {
				return colorDict[d.data.name]
			}).style("opacity", 0.8).attr("d", arc_s1)
		}
		for (s in source) {
			for (t in target) {
				if (target[t]["data"]["name"] === source[s]["papa"] && target[t]["papa"] === source[s]["data"]["name"]) {
					var cd = {
						"source": source[s],
						"target": target[t]
					};
					chordData.push(cd)
				}
			}
		}
		var chord = wrapper.selectAll("g.chord").data(chordData).enter().append("g").attr("class", "g.chord");
		chord.append("path").attr("class", "chordPath").attr("id", function(d) {
			return d.source.data.name + d.target.data.name
		}).style("stroke", function(d) {
			return colorDict[d.target.papa]
		}).style("fill", function(d) {
			return colorDict[d.target.papa]
		}).style("opacity", 0.3).attr("d", path);
		g.append("path").style("fill", function(d, i) {
			return colorDict[d.data.name]
		}).style("opacity", 0.8).attr("d", arc);
		g.append("path").style("fill", function(d, i) {
			return colorDict[d.data.name]
		}).style("opacity", 0).attr("d", arc2);
		g.append("path").style("fill", function(d, i) {
			return colorDict[d.data.name]
		}).style("opacity", 0.8).attr("d", function(d) {
			if (sample.indexOf(d.data.name) > -1) {
				return arc_s3(d)
			} else {
				return arc3(d)
			}
		});
		g.append("text").text(function(d) {
			return d.data.name
		}).attr("transform", function(d) {
			var textPos = ((d.endAngle - d.startAngle) / 2 + d.startAngle) / (Math.PI * 2) * 360;
			var this_text_length = this.getComputedTextLength();
			var translate = -this_text_length - 33;
			var r = sample.indexOf(d.data.name) > -1 ? textPos - 270 : textPos - 90;
			var t = sample.indexOf(d.data.name) > -1 ? translate : 33;
			return "translate(" + arc3.centroid(d) + ")" + "rotate(" + r + ")" + "translate(" + t + ")"
		}).attr("class", "textK").attr("font-size", "13px").attr("font-family", "arial").attr("id", function(d) {
			return "text" + d.data.name
		});
		var valueTicks = wrapper.selectAll("g.ticks").data(layoutPie).enter().append("g").attr("class", "ticks").selectAll("g.tickst").data(valueTicks).enter().append("g").attr("class", "tickst").attr("transform", function(d) {
			return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")" + "translate(" + outerRadius_1 + ",0)"
		});
		valueTicks.append("line").attr("x1", 1).attr("y1", 0).attr("x2", 5).attr("y2", 0).style("stroke", "#000");
		valueTicks.append("text").attr("class", "ticksText").attr("x", 8).attr("dy", ".35em").attr("transform", function(d) {
			return d.angle > Math.PI ? "rotate(180)translate(-16)" : null
		}).style("text-anchor", function(d) {
			return d.angle > Math.PI ? "end" : null
		}).text(function(d) {
			if (d.angleSize > 10) {
				return d.label
			}
		}).attr("font-size", "9px").attr("font-family", "arial");
		var percentTicks = wrapper.selectAll("g.ticksP").data(layoutPie).enter().append("g").attr("class", "ticksP").selectAll("g.tickstP").data(percentTicks).enter().append("g").attr("class", "tickstP").attr("transform", function(d) {
			if (d.angle > Math.PI) {
				return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")" + "translate(" + (outerRadius_2 - 20) + ",0)"
			} else {
				return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")" + "translate(" + (outerRadius_2 - 15) + ",0)"
			}
		});
		percentTicks.append("text").attr("class", "ticksText").attr("x", 8).attr("dy", ".35em").attr("transform", function(d) {
			return d.angle > Math.PI ? "rotate(180)translate(18)" : "translate(-30)"
		}).style("text-anchor", function(d) {
			return d.angle > Math.PI ? "end" : null
		}).text(function(d) {
			return d.angleSize > 25 ? d.label : null
		}).attr("font-size", "9px").attr("font-family", "arial");
		percentTicks.append("line").attr("x1", 1).attr("y1", 0).attr("x2", 5).attr("y2", 0).style("stroke", "#000");

		function valueTicks(d) {
			var k = (d.endAngle - d.startAngle - 0.05) / d.value;
			var angleSize = (d.endAngle - d.startAngle) / (Math.PI * 2) * 360;
			return d3.range(0, d.value, tickGap).map(function(v, i) {
				return {
					name: d.data.name,
					value: d.value,
					angleSize: angleSize,
					angle: v * k + d.startAngle + 0.035,
					label: i % 5 ? null : v / 1000 + "k"
				}
			})
		}
		function percentTicks(d) {
			var k = (d.endAngle - d.startAngle - 0.05) / 100;
			var angleSize = (d.endAngle - d.startAngle) / (Math.PI * 2) * 360;
			return d3.range(0, 100, 10).map(function(v, i) {
				return {
					name: d.data.name,
					value: d.value,
					angleSize: angleSize,
					angle: v * k + d.startAngle + 0.035,
					label: v + "%"
				}
			})
		}
		function mouseover(d, i) {
			d3.selectAll(".chordPath").style("opacity", 0.05);
			for (var c in d.data.children) {
				var idName = species.indexOf(d.data.name) > -1 ? "#" + d.data.name + d.data.children[c].name : "#" + d.data.children[c].name + d.data.name;
				d3.select(idName).transition().duration(200).style("opacity", 0.8);
				var textId = "text" + d.data.children[c].name;
				var percent = (100 * d.data.children[c].value / d.data.value).toPrecision(2);
				var textNow = species.indexOf(d.data.name) > -1 ? percent + "%:" + d.data.children[c].name : d.data.children[c].name + ":" + percent + "%";
				d3.select("#" + textId).transition().duration(200).text(textNow).attr("font-size", "13.2px");
			}
		}
		function mouseleave(d, i) {
			d3.selectAll(".chordPath").transition().duration(200).style("opacity", 0.3);
			for (var c in d.data.children) {
				var textId = "text" + d.data.children[c].name;
				d3.select("#" + textId).transition().duration(200).text(d.data.children[c].name).attr("font-size", "13px");
			}
		}
	}
}
