Module.register("mymirror-withings",{
	
	start: function() {
		console.log("Starting myMirror-withings");
	},

	getDom: function() {
		var div = document.createElement("div");
		div.innerHTML("Hello World");
		return div;
	}

});
