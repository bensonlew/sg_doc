d3.d3_report = {
   network:function(position,contents)  //传入的参数直接是json格式的数据
   {
var svg = d3.select("body")
		.append("svg")
		.attr("width",contents.width) //?
		.attr("height",contents.height); //?

		svg.append("text")
      .attr("x", (contents.width/2))
      .attr("y", (contents.height-800))
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .text("基因共表达网络图");

var color = d3.scaleOrdinal(d3.schemeCategory20);

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d){return d.id;}))
	.force("charge", d3.forceManyBody())
	.force("center", d3.forceCenter(contents.width / 2, contents.height / 2));

var link = svg.append("g")
	.attr("class", "links")
	.selectAll("line")
	.data(contents.links)//绑定数组 //应该是json文件中的nodes列表信息
	.enter().append("line")
	.attr("stroke-weight", function(d) { return Math.sqrt(d.value); })
	.style("stroke","#999")
	.style("stroke-opacity",0.6);

var node = svg.append("g")
	.attr("class", "nodes")
	.selectAll("circle")
	.data(contents.nodes) //绑定的应该是json文件中的nodes列表信息
	.enter().append("circle")
		.attr("r", 5) //修改点的直径
		.attr("fill", function(d) { return color(d.group); }) //颜色以group分组来区分
		.style("stroke","#fff")
		.style("stroke-opacity",'1.5px')
		.call(d3.drag()
				.on("start", dragstarted)
				.on("drag", dragged)
				.on("end", dragended));

node.append("title")
		.text(function(d) { return d.id+"/"+d.group; });

simulation
		.nodes(contents.nodes)
		.on("tick", ticked);

simulation.force("link")
		.links(contents.links)
		.distance(function(d) { return d.value;});

function ticked() {
	link
			.attr("x1", function(d) { return d.source.x; })
			.attr("y1", function(d) { return d.source.y; })
			.attr("x2", function(d) { return d.target.x; })
			.attr("y2", function(d) { return d.target.y; });

	node
			.attr("cx", function(d) { return d.x; })
			.attr("cy", function(d) { return d.y; });
}

function dragstarted(d) {
if (!d3.event.active) simulation.alphaTarget(0.3).restart();
d.fx = d.x;
d.fy = d.y;
}

function dragged(d) {
d.fx = d3.event.x;
d.fy = d3.event.y;
}

function dragended(d) {
if (!d3.event.active) simulation.alphaTarget(0);
d.fx = null;
d.fy = null;
}
}
}
