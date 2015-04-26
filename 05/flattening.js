var arrays = [[1,2,3],[4,5],[6]];

var newArr = arrays.reduce(function(prev,curr,idx,arr){
	return prev.concat(curr);
});
console.log(newArr);