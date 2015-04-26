function countChar( myString, myChar ){
	var count = 0;
	for (var i=0;i<myString.length;i++) {
		if(myString[i] === myChar){
			count++;
		}

	}
	return count;
}