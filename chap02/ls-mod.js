// Example:
// node ls-mod.js ../chap02

Object.defineProperty(Object.prototype, "each", {
	value: function (fn){
		for (prop in this){
			fn.call(this, prop, this[prop]);
		}
	}
});

var fs = require('fs')
,dir = process.argv[2] || '.'
,files = fs.readdirSync(dir);

files.each(function (prop, val){
	console.log(val);
});