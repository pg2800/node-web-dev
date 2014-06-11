var events = require('events')
,util = require('util');

function Pulser() {
	events.EventEmitter.call(this);
}
exports.Pulser = Pulser;

// This does the whole work.
util.inherits(Pulser, events.EventEmitter);

Pulser.prototype.start = function() {
	var self = this;
	this.id = setInterval(function () {
		util.log('>>>> pulse');
		// Publish
		self.emit('pulse');
		util.log('<<<< pulse');
	}, 1000);
};

exports.justStartThis = function (){
	var pulser = new Pulser();
	// Subscribe
	pulser.on('pulse', function(){
		util.log('pulse received');
	});
	pulser.start();
};