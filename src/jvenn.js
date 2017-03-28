jQuery.jvenn_report = {
showVenn:function(main_scatter, contents)
{

  $("#jvenn-container").jvenn({

  	series: contents.data,
  	colors:contents.params.color,
  	fontSize: "12px",
  	fontFamily: "Arial",
  	searchInput:  $("#"+ contents.params.div_search_field),
  	searchStatus: $("#"+contents.params.div_search_status),
  	displayMode: 'classic',
  	shortNumber: false,
  	displayStat: true,

  	fnClickCallback: function() {
  		var value = "";
  		if (this.listnames.length == 1) {
  			value += "Elements only in ";
  		} else {
  			value += "Common elements in ";
  		}
  		for (name in this.listnames) {
  			value += this.listnames[name] + " ";
  		}
  		value += ":\n";
  		for (val in this.list) {
  			value += this.list[val] + "\n";
  		}
  		$("#" + contents.params.div_id_names).val(value);
  	}
  });
}
}
