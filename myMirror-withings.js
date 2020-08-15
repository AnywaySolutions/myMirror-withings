Module.register("myMirror-withings", {

	getDom: function() {
		Log.info("testing this shit");
		var div = document.createElement("div");
		div.innerHTML('Hello World!');
		return div;
	}

});
