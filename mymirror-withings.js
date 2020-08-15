'use strict';

Module.register("myMirror-withings", {
	getDom: function() {
		var table = document.createElement("table");
		table.classList.add("mymirror-withings-table");
		table.innerHTML("Hello World");
		return table;
	});