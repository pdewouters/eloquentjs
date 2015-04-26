function isEven(number){
	if (number<0 ||number===1 ){
		return false;
	} else if (number === 0 || isEven(number -2)) {
		return true;
	} else {
		return false;
	}
}