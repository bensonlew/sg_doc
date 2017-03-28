d3_report = {
    network:function(position, contents)
    {
	 d3.select('div#'+position).selectAll("svg").remove();
    var svg = d3.select("#"+position)
        .append("svg")
        .attr("width",contents.size.width) 
        .attr("height",contents.size.height)
        .attr("version", "1.1")
		.attr("style", "font-family:arial;font-size:12px;")
        .attr("xmlns", "http://www.w3.org/2000/svg");
          
        //放大与缩小网络图 
    var g = svg.append("g");
        svg.append("rect")
          .attr("width", contents.size.width-1)
          .attr("height", contents.size.height-1)
          .style("fill", "none")
          .style("pointer-events", "all")
          .call(d3.zoom()
              .scaleExtent([0.1, 1]) //只能拖拽不能放大缩小
              .on("zoom", zoomed));    
    
    //将节点与边按照等比例进行放大与缩小
    function zoomed() {
         node.attr("transform", d3.event.transform);
         link.attr("transform", d3.event.transform);
         if (contents.params.show_node_label != false){  
            svg_texts.attr("transform", d3.event.transform);}
     }
      
    if (contents.params.title != false) {  
        svg.append("text")
           .attr("x", (contents.size.width/2))
           .attr("y", 20)
           .attr("text-anchor", "middle")
           .style("font-size", "16px")
           .text(contents.params.title);
    }
       
     var simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function(d) { return d.id; })
            .distance(contents.params.link_distance)
            .strength(contents.params.strength)
            )
        .force("charge", d3.forceManyBody()
             //.theta(0.1)
             .strength(-contents.params.charge)  //设定是吸引还是排斥+为吸引-为排斥
             .distanceMax(contents.params.distancemax) //设定引力消失距离
             )
             
        .force("center", d3.forceCenter(contents.size.width / 2, contents.size.height / 2));
          
        //console.log(contents.nodes.length);
       /*  for (var i = 0; i < contents.nodes.length; i++){
            console.log(contents.nodes[i].id);
        } */
        var link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(contents.links)
            .enter().append("line")
            .attr("stroke-width", function(d){return d.value + 0.2;})
            .style("stroke", "#666"); 
         //添加网络的节点信息
        var node = svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(contents.nodes)
            .enter().append("circle")
              .attr("r", contents.params.node_size)
              .attr("fill",function(d) { return d.color;})
              .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));   

    //设定节点的标签名字
     if (contents.params.show_node_label != false) {  
            var node1 = new Array();
            node1.push(1);
            node1 = node1.concat(contents.nodes)
            console.log(node1);
            var svg_texts = svg.selectAll("text")
             .data(node1)
             .enter()
             .append("text")
             .style("fill", "blink")
             .style("text-anchor", "middle")
             .attr("font-size", contents.params.node_label_size)        
             .attr("dx", 1)
             .attr("dy", 1)
             .text(function(d){return d.id;}); 
    }  
    
    node.append("title")
        .text(function(d) { return d.id; });//鼠标停显示节点信息    
    link.append("title")
        .text(function(d) { return "eweight is " + d.value; }); //鼠标停显示边信息,,这里要修改
    simulation
        .nodes(contents.nodes)          
        .on("tick", ticked);
    
         
    simulation.force("link")
        .links(contents.links);
        
    //simulation.alpha(0.2);
    //simulation.stop;
    
    function ticked() {
        //限制节点边界
        /* nodes.forEach(function (d,i){
            d.x = d.x > contents.size.width ? contents.size.width : d.x;
            d.y = d.y > contents.size.height ? contents.size.height : d.y;
        }) */
        link
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
            
        if (contents.params.show_node_label != false){    
        svg_texts.attr("x", function(d){ return d.x; })//更新文字坐标
            .attr("y", function(d){ return d.y; });            
        }
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
