Object.defineProperty(Array.prototype, "merge", {
	value: function (arr){
		var self = this
		,length = self.length;

		for (var index = 0, position = 0; index < length; index++, position++) {
			while(arr[0] <= self[position]){
				self.splice(position, 0, arr.splice(0,1)[0]);
				position++;
			}
		}
		if(arr.length > 0) self = self.concat(arr);
		return self;
	}
});

var mergeSort = exports.mergeSort = function (arr){
	return mergeSort_aux(arr, arr.length, Math.floor(arr.length/2));
};

function mergeSort_aux(arr, totalLength, halfLength){
	if(totalLength <= 1) return arr;
	var newHalfLength = Math.floor(halfLength/2);
	return mergeSort_aux(arr.splice(0, halfLength), halfLength, newHalfLength)
	.merge(mergeSort_aux(arr, totalLength - halfLength, halfLength - newHalfLength));
}

var testArr = [-1,7,8,3,5,4,1,9,6,-2,2,0,7,7,10,7,11];
var result = mergeSort(testArr);
console.log('R:['+result+']');
