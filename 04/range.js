function range(start,end, step){
	if (step === undefined) {
		step = 1;
	}
	var result = [];
	if (start<end){
		for(var i=start;i<=end;i+=step){
			result.push(i);
		}
	} else {
		for(var i=start;i>=end;i+=step){
			result.push(i);
		}
	}

	return result;
};

function sum(numbers){
	return numbers.reduce( function(previousValue, currentValue, index, array){
		return previousValue + currentValue;
	});
};

//console.log(sum(range(1,10)));
console.log(range(1,10,2));
console.log(range(5,2,-1));
// https://getfirebug.com/firebug-lite-debug.js