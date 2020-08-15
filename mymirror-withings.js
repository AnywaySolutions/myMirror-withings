'use strict';

Module.register("myMirror-withings", {
	jsonData: null,
	errorData: null,

	defaults: {
		updateInterval: 60000,
	}

	getDom: function() {
		var table = document.createElement("table");

		table.classList.add("mymirror-withings-table");

		table.innerHTML("Hello World");
	},

});