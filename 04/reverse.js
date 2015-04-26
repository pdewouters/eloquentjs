function reverseArray(items){
	var reversed = [];
	for(var i=items.length;i>0;i--){
		reversed.push(items.pop());
	}
	return reversed;
};
console.log(reverseArray(["A","B","C"]));

function reverseArrayInPlace(arrayValue){

	var mid = Math.floor(arrayValue.length/2);
	for(var i=0;i<mid;i++){
		var tmp = arrayValue[i];
		arrayValue[i] = arrayValue[arrayValue.length-(i+1)];
		arrayValue[arrayValue.length-(i+1)] = tmp;
	}
};

var arrayValue = [1,2,3,4,5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);