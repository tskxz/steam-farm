

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

client.on("friendMessage", function(steamID, message){
	console.log("\x1b[35m", "Mensagem recebida pelo " + steamID + ": " + message);
	if(message){
		client.chatMessage(steamID, choice);
	}
})