jQuery.go_bar = {
	go_bar: function(container, content) {
		d3.select("div#" + container).selectAll("*").remove();
		var data = content.data;
		var margin = {
			top: 100,
			right: 100,
			bottom: 60,
			left: 120
		},
			width = content.size.width - margin.left - margin.right,
			height = content.size.height - margin.top - margin.bottom;
		var groupNames = content.categories;
		var colors = ["#388E3C", "#F44336", "#0288D1", "#FF9800", "#727272", "#E91E63", "#673AB7", "#8BC34A", "#2196F3", "#D32F2F", "#FFC107", "#BDBDBD", "#F8BBD0", "#3F51B5", "#CDDC39", "#009688", "#C2185B", "#FFEB3B", "#212121", "#FFCCBC", "#BBDEFB", "#0099CC", "#FFcc99", ];
		if(content.colors){
			var groupColor = content.colors
		}else{
			var groupColor = {};
			for(var i in groupNames){
				groupColor[groupNames[i]] = colors[i]
			}
		};
		// var groupColor = content.colors ? content.colors : {
		// 	"biological_process": "red",
		// 	"cellular_component": "blue",
		// 	"molecular_function": "green"
		// };
		var chartName = content.params.text ? content.params.text : "student bar";
		var maxValue = 0;
		var maxPercent = 0;
		var maxNameLength = 0;
		// var colors = ["#388E3C", "#F44336", "#0288D1", "#FF9800", "#727272", "#E91E63", "#673AB7", "#8BC34A", "#2196F3", "#D32F2F", "#FFC107", "#BDBDBD", "#F8BBD0", "#3F51B5", "#CDDC39", "#009688", "#C2185B", "#FFEB3B", "#212121", "#FFCCBC", "#BBDEFB", "#0099CC", "#FFcc99", ];
		var maxTextLen = 0;

		function buildData(data) {
			var barData = [];
			for (var g in groupColor) {
				barData.push({
					"name": g,
					"color": groupColor[g],
					"terms": []
				})
			}
			for (var i = 0; i < data.length; i++) {
				maxValue = maxValue > data[i][2] ? maxValue : data[i][2];
				maxNameLength = maxNameLength > data[i][1].length ? maxNameLength : data[i][1].length;
				maxTextLen = maxTextLen > data[i][1].length ? maxTextLen : data[i][1].length;
				maxPercent = maxPercent > data[i][3] ? maxPercent : data[i][3];
				var dataSingle = {
					"name": data[i][1],
					"value": data[i][2],
					"percent": data[i][3]
				};
				for (var b = 0; b < barData.length; b++) {
					if (data[i][0] === barData[b]["name"]) {
						dataSingle["color"] = barData[b]["color"];
						barData[b]["terms"].push(dataSingle)
					}
				}
			}
			return barData
		}
		var barData = buildData(data);
		var translateN = 0;
		barData[0]["tran"] = 0;
		for (var b = 1; b < barData.length; b++) {
			var tran = barData[b - 1]["terms"].length;
			translateN = translateN + tran;
			barData[b]["tran"] = translateN
		};
		var textHeight = maxTextLen * 5.5 > height * 0.75 ? height * 0.75 : maxTextLen * 5.5;
		var barHeight = height - textHeight;
		var barWidth = width / data.length;
		var textAngle = 20;
		var textAngleP = textAngle / 180 * Math.PI;
		var y = d3.scale.linear().domain([maxValue, 0]).range([0, barHeight]);
		var y2 = d3.scale.linear().domain([maxPercent, 0]).range([0, barHeight]);
		// var y = d3.scale.log().domain([maxValue, 1]).range([0, barHeight]);
		// var y2 = d3.scale.log().domain([maxPercent, 1]).range([0, barHeight]);
		var barGap = 10;
		var yAxis = d3.svg.axis().scale(y).orient("right");
		var yAxis2 = d3.svg.axis().scale(y2).orient("left");
		var svg = d3.select("#" + container).append("svg").attr("width", content.size.width).attr("height", content.size.height).attr("id", "chart").attr("version", 1.1).attr("xmlns", "http://www.w3.org/2000/svg");
		var chartG = svg.append("g").attr("id", "chartG").attr("transform", "translate(" + margin.left + ", " + margin.top + ")");
		var title = chartG.append("text").attr("id", "title").text(chartName).attr("font-size", "20px").attr("font-family", "arial").attr("text-anchor", "middle").attr("transform", "translate(" + (content.size.width / 2) + "," + (-margin.top / 2) + ")");
		var leftAxis = chartG.append("g").attr("class", "yAxis").attr("transform", "translate(-10)").call(yAxis2);
		var rightAxis = chartG.append("g").attr("class", "yAxis")
		.attr("transform", "translate(" + width + ")").call(yAxis);
		leftAxis.append("text").text("Percent of genes").attr("font-size", "12px").attr("font-family", "arial").attr("text-anchor", "middle").attr("transform", "translate(-50, " + barHeight / 2 + ")rotate(-90)");
		rightAxis.append("text").text("Number of genes").attr("font-size", "12px").attr("font-family", "arial").attr("text-anchor", "middle").attr("transform", "translate(80, " + barHeight / 2 + ")rotate(-90)");
		var bars = chartG.selectAll(".bar").data(barData).enter().append("g").attr("class", "bar").attr("transform", function(d, i) {
			return "translate(" + d.tran * barWidth + ")"
		});
		bars.append("rect").attr("width", function(d) {
			return d.terms.length * barWidth
		}).attr("height", barHeight).attr("stroke", "#ccc").style("fill", function(d, i) {
			return i % 2 === 0 ? "white" : "white"
		});
		bars.append("text").text(function(d) {
			return d.name
		}).attr("font-size", "12px").attr("font-family", "arial").attr("fill", function(d) {
			return d.color
		}).attr("transform", function(d) {
			return "translate(" + (d.terms.length * barWidth / 2 - textHeight * Math.tan(textAngleP)) + ", " + (height + 20) + ")"
		}).attr("text-anchor", "middle");
		bars.append("line").attr("y2", barHeight + textHeight / Math.cos(textAngleP)).attr("y1", barHeight).attr("stroke", "grey").attr("transform", function(d) {
			return "rotate(" + textAngle + ", 0, " + barHeight + ")"
		});
		bars.append("line").attr("y2", barHeight + textHeight / Math.cos(textAngleP)).attr("y1", barHeight).attr("x1", function(d) {
			return d.terms.length * barWidth
		}).attr("x2", function(d) {
			return d.terms.length * barWidth
		}).attr("stroke", "grey").attr("transform", function(d) {
			return "rotate(" + textAngle + ", " + d.terms.length * barWidth + ", " + barHeight + ")"
		});
		bars.append("line").attr("y2", barHeight + textHeight).attr("y1", barHeight + textHeight).attr("x2", function(d) {
			return d.terms.length * barWidth
		}).attr("stroke", "grey").attr("transform", "translate(" + (-textHeight * Math.tan(textAngleP)) + ")");
		var subBars = bars.selectAll(".subBars").data(function(d) {
			return d.terms
		}).enter().append("g").attr("class", ".subBars").attr("transform", function(d, i) {
			return "translate(" + barWidth * i + ")"
		});
		subBars.append("rect").attr("width", barWidth / 2).attr("height", function(d) {
			return y(d.value)
		}).style("fill", function(d) {
			return d.color
		}).attr("transform", function(d) {
			return "translate(0," + (barHeight - y(d.value)) + ")"
		});
		subBars.append("text").attr("class", "speciesName").text(function(d) {
			return d.name
		}).attr("transform", "translate(" + barWidth / 2 + "," + (barHeight + 5) + ")rotate(-" + (90 - textAngle) + ")").attr("font-size", "10px").attr("text-anchor", "end").attr("font-family", "arial").attr("fill", function(d) {
			return d.color
		});
		d3.selectAll(".yAxis path").style("fill", "none").style("stroke", "grey").style("shape-rendering", "crispEdges");
		d3.selectAll(".yAxis line").style("fill", "none").style("stroke", "#000").style("shape-rendering", "crispEdges");
		d3.selectAll(".yAxis text").attr("font-size", "10px").attr("font-family", "arial")
	}
}