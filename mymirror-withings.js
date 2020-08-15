'use strict';

Module.register("myMirror-withings", {
	getDom: function() {
		var div = document.createElement("div");
		div.innerHTML("Hello World");
		return div;
	});