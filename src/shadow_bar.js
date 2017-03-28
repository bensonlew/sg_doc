jQuery.shadow_bar = {
    shadow_bar: function(container, content){
        d3.select("div#" + container).selectAll("*").remove();
        var data = content.data;
        var margin = {
            top: 100,
            right: 200,
            bottom: 60,
            left: 120
        },
            width = content.size.width - margin.left - margin.right,
            height = content.size.height - margin.top - margin.bottom;
        var colors = ["#388E3C", "#F44336", "#0288D1", "#FF9800", "#727272", "#E91E63", "#673AB7", "#8BC34A", "#2196F3", "#D32F2F", "#FFC107", "#BDBDBD", "#F8BBD0", "#3F51B5", "#CDDC39", "#009688", "#C2185B", "#FFEB3B", "#212121", "#FFCCBC", "#BBDEFB", "#0099CC", "#FFcc99", ];
        var chartName = content.params.text ? content.params.text : "bar plot";
        var group_names = content.categories;
        var maxValue = 0;
        var maxTextLen = 0;
        var start_color = content.params.start_color? content.params.start_color: "#388E3C";
        var end_color = content.params.end_color? content.params.end_color: "#FFFFFF";
        var a = d3.rgb(start_color);
        var b = d3.rgb(end_color);   
        var compute = d3.interpolate(a,b);
        function dealData(data){
            var bar_data = [];
            for(var g in group_names){
                bar_data.push({
                    "name": group_names[g],
                    "datas": []
                })
            };
            for (var i = 0; i < data.length; i++) {
                maxValue = maxValue > data[i][2] ? maxValue : data[i][2];
                maxTextLen = maxTextLen > data[i][1].length ? maxTextLen : data[i][1].length;
                var single = {
                    "name": data[i][1],
                    "value": data[i][2],
                    "pvalue": data[i][3]
                };
                for (var d = 0; d < bar_data.length; d++){
                    if (data[i][0] == bar_data[d]["name"]){
                        bar_data[d]["datas"].push(single)
                    }
                }
            };
            var datas = [];
            for (var d = 0; d < bar_data.length; d++){
                datas = datas.concat(bar_data[d]["datas"])
            };
            return datas
        };
        // 拖拽工具dragListener
        //var dstartX = 5;
        //var dstartY = 5;
        var dragListener = d3.behavior.drag()
        .on("dragstart", function() {
          dstartX = d3.mouse(this)[0];
          dstartY = d3.mouse(this)[1];
        })
        .on("drag", function(){
          d3.select(this).attr("transform", "translate("+(d3.event.x-dstartX)+", "+(d3.event.y-dstartY)+")")
        });
        var bar_data = dealData(data);        
        var text_height = maxTextLen * 5.5 > height * 0.75 ? height * 0.75 : maxTextLen * 5.5;
        var bar_height = height - text_height;
        var bar_width = width / data.length;
        var textAngle = 30;
        var textAngleP = textAngle / 180 * Math.PI;
        var y = d3.scale.linear().domain([maxValue, 0]).range([0, bar_height]);
        var yAxis = d3.svg.axis().scale(y).orient("left");
        var svg = d3.select("#" + container)
                    .append("svg")
                    .attr("width", content.size.width)
                    .attr("height", content.size.height)
                    .attr("id", "chart")
                    .attr("version", 1.1)
                    .attr("xmlns", "http://www.w3.org/2000/svg");
        var chartG = svg.append("g")
                        .attr("id", "chartG")
                        .attr("transform", "translate(" + margin.left + ", " + margin.top + ")")
                        .call(dragListener);
        chartG.append("rect")
             .attr("width", width)
             .attr("height", height)
             .attr("fill", "#FFFFFF");
        var title = svg.append("text")
                          .attr("id", "title")
                          .text(chartName)
                          .attr("font-size", "20px")
                          .attr("font-family", "arial")
                          .attr("text-anchor", "middle")
                          .attr("transform", "translate(" + (content.size.width / 2) + "," + (margin.top / 2) + ")")
                          .call(dragListener);
        var leftAxis = chartG.append("g")
                              .attr("class", "yAxis")
                              .attr("transform", "translate(-10)")
                              .call(yAxis);
        leftAxis.append("text")
                .text(content.params.y_label)
                .attr("font-size", "12px")
                .attr("font-family", "arial")
                .attr("text-anchor", "middle")
                .attr("transform", "translate(-60, " + bar_height / 2 + ")rotate(-90)");
        var bars = chartG.selectAll(".bar")
                        .data(bar_data).enter().append("g")
                        .attr("class", "bar")
                        .attr("transform", function(d, i) {
                        return "translate(" + bar_width * i + ")"});
        bars.append("rect")
            .attr("width", bar_width / 2)
            .attr("height", function(d){return y(d.value)})
            .attr("transform", function(d) {
            return "translate(0," + (bar_height - y(d.value)) + ")"})
            .style("fill", function(d) {
            return compute(d.pvalue)});
        bars.append("text")
            .attr("class", "name")
            .text(function(d){return d.name})
            .attr("transform", "translate(" + bar_width / 2 + "," + (bar_height + 5) + ")rotate(-" + (90 - textAngle) + ")")
            .attr("font-size", "10px")
            .attr("text-anchor", "end")
            .attr("font-family", "arial")
            .attr("fill", "#000");
        bars.append("text")
            .attr("class", "star")
            .text(function(d){
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
            })
            .attr("font-size", "15px")
            .attr("font-family", "arial")
            .attr("text-anchor", "middle")
            .attr("transform", function(d){
                return "translate(" + bar_width/4 + "," + (bar_height - y(d.value) + 3) + ")"
            })
        // 增加渐变柱子
        var heatmap_legend_width = 20;
        var heatmap_legend_height = height / 3;
        var heatmap_legend = svg.append("g").attr("class", "heatmap_legend").attr("transform", "translate(" + (width + margin.left + 50) + "," + (margin.top + 70) + ")").call(dragListener);
        var linearGradient = heatmap_legend.append("linearGradient").attr("id", "linearColor").attr("x1", "0%").attr("y1", "0%").attr("x2", "0%").attr("y2", "100%");
        var stop_start = linearGradient.append("stop").attr("offset", "0%").style("stop-color", start_color.toString());
        var stop_end = linearGradient.append("stop").attr("offset", "100%").style("stop-color", end_color.toString());
        var colorRect = heatmap_legend.append("rect").attr("width", heatmap_legend_width).attr("height", heatmap_legend_height).attr("stroke", "black").attr("stroke-width", 0.2).attr("fill", "url(#" + linearGradient.attr("id") + ")");
        var pvalue_type = content.params.pvalue_type? content.params.pvalue_type: "FDR";
        heatmap_legend.append("text")
                      .attr("class", "fdr")
                      .text(pvalue_type)
                      .attr("transform", "translate(10,-5)")                 
                      .attr("font-size", "10px")
                      .attr("text-anchor", "middle")
                      .attr("font-family", "arial")
                      .attr("fill", "#000");
        var heatmap_y = d3.scale.linear().domain([1.0, 0]).range([0, heatmap_legend_height]);
        var heatmap_yAxis = d3.svg.axis()
                                  .scale(heatmap_y)
                                  .orient("right")
                                  .tickValues([1, 0.8, 0.6, 0.4, 0.2, 0]);
        var right_yAxis = heatmap_legend.append("g")
                                        .attr("class", "right_yAxis")
                                        .attr("transform", "translate(20)")
                                        .call(heatmap_yAxis);
        d3.select("g.right_yAxis").selectAll("line")
                                  .attr("fill", function(d) {return "none"})
                                  .attr("stroke", "#FFFFFF")
                                  .attr("shape-rendering", "crispEdges");
        d3.select("g.right_yAxis").selectAll("path")
                                  .style("fill", function(d) {return "none"})
                                  .style("stroke", "#FFFFFF")
                                  .style("shape-rendering", "crispEdges");
        d3.select("g.right_yAxis").selectAll("text")
                                  .attr("font-size", "10px")
                                  .attr("font-family", "arial");
        
        var show_legend = "show_legend" in content.params ? content.params.show_legend: true;
        if(show_legend){
            // 增添legend
            var legend = svg.append("g")
                            .attr("class", "legend")
                            .attr("transform", "translate(" + (width + margin.left + 50) + "," + margin.top + ")")
                            .call(dragListener);
            var legend_text = content.categories;
            legend.selectAll(".legend_text").data(legend_text).enter()
              .append("text")
              .attr("class", "legend_text")
              .text(function(d){return d})
              .attr("font-size", "12px")
              .attr("font-family", "arial")
              .attr("transform", function(d,i){return "translate(0,"+15*i+")"})  
        }        
        d3.selectAll(".yAxis path").style("fill", "none").style("stroke", "grey").style("shape-rendering", "crispEdges");
        d3.selectAll(".yAxis line").style("fill", "none").style("stroke", "#000").style("shape-rendering", "crispEdges");
        d3.selectAll(".yAxis text").attr("font-size", "10px").attr("font-family", "arial")
    }
}