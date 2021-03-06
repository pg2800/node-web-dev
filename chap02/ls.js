// Example:
// node ls.js

var fs = require('fs');
var files = fs.readdirSync('.');

Object.defineProperty(Object.prototype, "each", {
	value: function (fn){
		for (prop in this){
			fn.call(this, prop, this[prop]);
		}
	}
});

files.each(function (prop, val){
	console.log(val);
});