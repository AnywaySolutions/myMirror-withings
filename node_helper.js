var NodeHelper = require('node_helper');
var request = required('request');
var xml2js = require('xml2js');

module.export = NodeHelper.create({
	start: function() {
		console.log('myMirror-withings starting...');
	}
});