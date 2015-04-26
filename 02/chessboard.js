var gridsize = 12;
for (var i=0; i< gridsize; i++) {
	var line = '';
	for (var j=0;j<gridsize;j++) {
		if (((i+j)%2)===0) {
			line+= ' ';
		} else {
			line+= '#';
		}
	}
	console.log(line);
}