function arrayToList(items){
	var list = {};
	for(var i = items.length;i>0;i--){
		list = {value: items.pop(), rest: list};
	}
	return list;
};
console.log(arrayToList([10,20]));

function listToArray(list){
	var arr = [];
	for(var node = list;node;node = node.rest){
		arr.push(node.value);
	}
	return arr;
};
console.log(listToArray({value:10,rest:{value:20,rest:null}}));