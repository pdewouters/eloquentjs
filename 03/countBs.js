function countBs( myString ){
	var count = 0;
	for (var i=0;i<myString.length;i++) {
		if(myString[i] === 'B'){
			count++;
		}

	}
	return count;
}