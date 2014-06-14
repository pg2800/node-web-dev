Object.defineProperty(Array.prototype, "merge", {
	value: function (arr){
		var self = this;
		// arr = arr || [];
		(function(s, l){
			s.forEach(function (val, index){
				if(l <= 0 || val <= arr[0]) return;
				self.splice(index,0,arr.splice(0,1)[0]);
				l--;
			});
			if(l>0) self = self.concat(arr);
		})(self, arr.length);
		return self;
	}
});

var mergeSort = exports.mergeSort = function (arr){
	var length = arr.length;
	return mergeSort_aux(arr, length, Math.floor(length/2));
};

var restLength;
function mergeSort_aux(arr, totalLength, halfLength){
	if(totalLength<=1) return arr;
	restLength = totalLength - halfLength;
	(function(arr){
		arr.splice(0,halfLength)
		console.log(arr);
	})(arr);
	return mergeSort_aux(arr.splice(0,halfLength), halfLength, Math.floor(halfLength/2))
	.merge(mergeSort_aux(arr, restLength, Math.floor(restLength/2)));
}

var testArr = [7,8,3,5,4,1,9,6,2,0];
console.log(mergeSort(testArr));
