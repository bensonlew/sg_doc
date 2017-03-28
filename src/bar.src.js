jQuery.bar = {
	bar: function(container, content) {
		d3.select("div#" + container).selectAll("*").remove();
		var data = content.data;
		var groups = content.categories;
		var groupColor = content.params ? content.params.legend : {};
		var chartName = content.params ? content.params.text : "student bar";
		var y_label = content.params ? content.params.y_label : "OTU";
		var x_label = content.params ? content.params.x_label : "Group name";
		var markColor = content.params ? content.params.mark_text_color : "blue";
		var maxMean = 0;
		var minMean = 0;
		var pvalues = [];
		var markNum = 0;
		var colors = ["#388E3C", "#F44336", "#0288D1", "#FF9800", "#727272", "#E91E63", "#673AB7", "#8BC34A", "#2196F3", "#D32F2F", "#FFC107", "#BDBDBD", "#F8BBD0", "#3F51B5", "#CDDC39", "#009688", "#C2185B", "#FFEB3B", "#212121", "#FFCCBC", "#BBDEFB", "#0099CC", "#FFcc99", ];
		var colorD3 = d3.scale.category20c();
		function buildData(data) {
				var barData = [];
				for (g in groups) {
					barData.push({
						"groupName": groups[g],
						"compare": [],
						"color": colorD3(groups[g])
					})
				}
				for (var i = 0; i < data.length; i++) {
					data[i][4] < 0.05 ? markNum++ : null;
					var maxS = data[i][1] > data[i][3] ? data[i][1] : data[i][3];
					maxMean = maxS > maxMean ? maxS : maxMean;
					var minM = data[i][1] < data[i][3] ? data[i][1] : data[i][3];
					minMean = minM < minMean ? minM : minMean;
					var pvalue = {
						"groupName": data[i][0],
						"color": colors[i],
						"groupIndex": groups.indexOf(data[i][0]),
						"mean": data[i][1],
						"compareName": data[i][2],
						"compareIndex": groups.indexOf(data[i][2]),
						"compareMean": data[i][3],
						"pvalue": data[i][4]
					};
					pvalues.push(pvalue);
					for (bd in barData) {
						if (barData[bd]["groupName"] === data[i][0]) {
							barData[bd]["mean"] = data[i][1];
							barData[bd]["compare"].push({
								"compareName": data[i][2],
								"meanCom": data[i][3],
								"pvalue": data[i][4]
							})
						}
						if (barData[bd]["groupName"] === data[i][2]) {
							barData[bd]["mean"] = data[i][3];
							barData[bd]["compare"].push({
								"compareName": data[i][0],
								"meanCom": data[i][1],
								"pvalue": data[i][4]
							})
						}
					}
				}
				return barData
			}
		barData = buildData(data);
		var margin = {
			top: markNum > 5 ? 100 + 25 * (groups.length - 5) : 100,
			right: 50,
			bottom: 50,
			left: 150
		};
		var width = content.size.width - margin.left - margin.right,
			height = content.size.height - margin.top - margin.bottom;
		width = width > 1300 ? 1300 : width;
		height = height < 100 ? 100 : height;
		var barWidth = width / barData.length / 2;
		var chartWidth = width;
		var chartHeight = height;
		var maxMeanLenght = parseInt(maxMean).toString().length;
		var yLabelTranslate = -15*maxMeanLenght-2 < -60 ? -15*maxMeanLenght-2 : -60;
		// console.log(parseInt(maxMean));
		// console.log(maxMeanLenght);
		minMean = minMean < 0 ? minMean : 0;
		var x = d3.scale.ordinal().domain(groups).rangeRoundBands([0, chartWidth]);
		var y = d3.scale.linear().domain([11 / 10 * maxMean, 0]).range([0, chartHeight]);
		var xAxis = d3.svg.axis().scale(x).orient("bottom");
		var yAxis = d3.svg.axis().scale(y).orient("left");
		var color = d3.scale.category20c();
		var svg = d3.select("#" + container).append("svg").attr("width", content.size.width).attr("height", content.size.height).attr("id", "chartSvg").attr("version", 1.1).attr("xmlns", "http://www.w3.org/2000/svg");
		var chartG = svg.append("g").attr("id", "chartG").attr("transform", "translate(" + (content.size.width / 2 - chartWidth / 2) + "," + margin.top + ")");
		var legend = chartG.append("g").attr("id", "legend").attr("transform", "translate(" + (chartWidth + 1 / 50 * width) + "," + -1 / 4 * margin.top + ")");
		var legendG = legend.selectAll(".legendR").data(barData).enter().append("g");
		legendG.append("rect").attr("y", function(d, i) {
			return i * 16
		}).attr("width", 16).attr("height", 10).attr("fill", function(d) {
			return groupColor[d.groupName] ? groupColor[d.groupName] : d.color
		});
		legendG.append("text").text(function(d) {
			return d.groupName
		}).attr("y", function(d, i) {
			return i * 16 + 8
		}).attr("transform", "translate(25)").attr("font-size", "12px").attr("font-family", "arial");
		var title = chartG.append("text").attr("id", "title").text(chartName).attr("font-size", "18px")
		.attr("font-family", "arial")
		.attr("text-anchor", "middle")
		.attr("transform", "translate(" + chartWidth / 2 + "," + -4 / 5 * margin.top + ")");
		var y_label = chartG.append("text").attr("id", "title").text(y_label).attr("font-size", "13px").attr("font-family", "arial").attr("text-anchor", "middle").attr("transform", "translate("+ yLabelTranslate+"," + y(11 / 10 * maxMean / 2) + ")rotate(-90)");
		var x_label = chartG.append("text").attr("id", "title").text(x_label).attr("font-size", "13px").attr("font-family", "arial").attr("text-anchor", "middle").attr("transform", "translate(" + chartWidth / 2 + "," + (chartHeight + 42) + ")");
		chartG.append("g").attr("class", "xAxis").attr("transform", "translate(0," + (chartHeight + 5) + ")").call(xAxis);
		chartG.append("g").attr("class", "yAxis").attr("transform", "translate(-10)").call(yAxis);
		var barsG = chartG.selectAll(".bars").data(barData).enter().append("g").attr("class", "bars").attr("transform", function(d, i) {
			return "translate(" + (barWidth * i * 2 + barWidth / 2) + "," + y(d.mean) + ")"
		});
		barsG.append("rect").attr("class", "rect").attr("width", barWidth).attr("height", function(d) {
			return (chartHeight - y(d.mean))
		}).style("fill", function(d) {
			return groupColor[d.groupName] ? groupColor[d.groupName] : d.color
		}).on("mouseover", mouseover).on("mouseleave", mouseleave);
		barsG.append("text").text(function(d) {
			return d.mean
		}).attr("id", function(d) {
			return "a"+d.groupName
		}).attr("font-size", "13px").attr("font-family", "arial").attr("transform", "translate(0,-5)").style("opacity", 0);
		var pvalueG = chartG.selectAll(".pvalueG").data(pvalues).enter().append("g");
		pvalueG.append("line").attr("x1", function(d) {
			return x(d.groupName) + barWidth
		}).attr("x2", function(d) {
			return x(d.groupName) + barWidth
		}).attr("y1", function(d) {
			return y(d.mean)
		}).attr("y2", function(d) {
			return maxy(d.mean, d.compareMean, d.groupIndex, d.compareIndex) - 10
		}).style("stroke", function(d) {
			return colorD3(d.compareName)
		}).style("opacity", function(d) {
			return d.pvalue > 0.05 ? 0 : 1
		});
		pvalueG.append("line").attr("x1", function(d) {
			return x(d.compareName) + barWidth
		}).attr("x2", function(d) {
			return x(d.compareName) + barWidth
		}).attr("y1", function(d) {
			return y(d.compareMean)
		}).attr("y2", function(d) {
			return maxy(d.mean, d.compareMean, d.groupIndex, d.compareIndex) - 10
		}).style("stroke", function(d) {
			return colorD3(d.compareName)
		}).style("opacity", function(d) {
			return d.pvalue > 0.05 ? 0 : 1
		});
		pvalueG.append("line").attr("x1", function(d) {
			return x(d.groupName) + barWidth
		}).attr("x2", function(d) {
			return x(d.compareName) + barWidth
		}).attr("y1", function(d) {
			return maxy(d.mean, d.compareMean, d.groupIndex, d.compareIndex) - 10
		}).attr("y2", function(d) {
			return maxy(d.mean, d.compareMean, d.groupIndex, d.compareIndex) - 10
		}).style("stroke", function(d) {
			return colorD3(d.compareName)
		}).style("opacity", function(d) {
			return d.pvalue > 0.05 ? 0 : 1
		});
		pvalueG.append("text").text(function(d) {
			var star = "";
			if (d.pvalue < 0.05) {
				star = "*"
			}
			if (d.pvalue < 0.01) {
				star = "**"
			}
			if (d.pvalue < 0.001) {
				star = "***"
			}
			return star
		}).attr("font-size", "15px").attr("font-family", "arial").attr("text-anchor", "middle").attr("transform", function(d, i) {
			var xTran = x(d.groupName) + barWidth * (d.compareIndex - d.groupIndex) + barWidth;
			var yTran = maxy(d.mean, d.compareMean, d.groupIndex, d.compareIndex) - 8;
			return "translate(" + xTran + "," + yTran + ")"
		}).style("stroke", markColor).style("opacity", function(d) {
			return d.pvalue > 0.05 ? 0 : 1
		});
		d3.selectAll(".xAxis path").style("fill", "none").style("stroke", "grey").style("shape-rendering", "crispEdges");
		d3.selectAll(".xAxis line").style("fill", "none").style("stroke", "#000").style("shape-rendering", "crispEdges");
		d3.selectAll(".yAxis line").style("fill", "none").style("stroke", "#000").style("shape-rendering", "crispEdges");
		d3.selectAll(".yAxis path").style("fill", "none").style("stroke", "grey").style("shape-rendering", "crispEdges");
		d3.selectAll(".xAxis text").attr("font-size", "11px").attr("font-family", "arial");
		d3.selectAll(".yAxis text").attr("font-size", "11px").attr("font-family", "arial");

		function maxy(mean, compareMean, groupIndex, compareIndex) {
			var maxMean = 0;
			var max = groupIndex > compareIndex ? groupIndex : compareIndex;
			var min = groupIndex > compareIndex ? compareIndex : groupIndex;
			if (max - min == 1) {
				maxMean = mean > compareMean ? mean : compareMean;
				return y(maxMean)
			} else {
				for (var s = min; s < max + 1; s++) {
					mean = barData[s]["mean"];
					maxMean = mean > maxMean ? mean : maxMean
				}
				var barGapNum = max - min - 1;
				var returnY = y(maxMean) - 16 * barGapNum;
				return returnY
			}
		}
		function mouseover(d) {
			idName = "#a" + d.groupName;
			d3.select(idName).transition().duration(100).style("opacity", 1)
		}
		function mouseleave(d) {
			idName = "#a" + d.groupName;
			d3.select(idName).transition().duration(100).style("opacity", 0)
		}
	}
}
