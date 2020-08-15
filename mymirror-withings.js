'use strict';

Module.register("myMirror-withings", {
	
	init: functino() {
		console.log("Starting myMirror-withings");
	},

	getDom: function() {
		var div = document.createElement("div");
		div.innerHTML("Hello World");
		return div;
	}
});