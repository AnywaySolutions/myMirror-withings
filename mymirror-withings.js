Module.register("mymirror-withings", {

	getDom: function() {
		console.log("testing this shit");
		var div = document.createElement("div");
		div.innerHTML('Hello World!');
		return div;
	}

});
