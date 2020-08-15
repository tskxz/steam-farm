

games = [];

var str = "730,120,120";
var array = str.split(',');
for(i = 0; i < array.length; i++){
	console.log(array[i]);
	var str = array[i]*1;
	console.log("Appending");
	games.push(str);
}
// console.log(array.length);
console.log(games);