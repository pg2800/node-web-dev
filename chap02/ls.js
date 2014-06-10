var fs = require('fs');
var files = fs.readdirSync('.');
Object.defineProperty(Object, "each", {
	value: function (fn){
		console.log(this);
		for (prop in this){
			fn.call(this, prop, this[prop], this);
		}
	}
});

files.each(function (a,b,c){
	console.log(arguments);
});