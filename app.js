// @author tanjilk

const prompt = require("prompt");
const SteamUser = require("steam-user");
const readlineSync = require("readline-sync");

const client = new SteamUser();





console.log("\x1b[33m", "Por favor, faça login ao digitar os seus credenciais: ");
console.log("\x1b[37m", " ");
prompt.start();

prompt.get(['username', 'password'], function(err, result){
	if(err){
		return onErr(err);
	}
	const logOnOptions = {
	accountName: result.username,
	password: result.password
	
	};
	client.logOn(logOnOptions);
	// console.log("Palavra passe: " + result.password);

})

function onErr(err){
	console.log(err);
	return 1;
}

client.on('loggedOn', () => {
	console.log("\x1b[32m","Login feito com sucesso. ✔️");
	console.log("\x1b[37m", "Define o status");
	console.log('\x1b[36m%s\x1b[0m', "1. Online\n2. Offline");
	/*
	prompt.get(['status'], function(err, outpt){
		if(err){
			return onErr(err);
		}
		if(outpt.status == "1"){
			client.setPersona(SteamUser.EPersonaState.Online);
			console.log("\x1b[32m", "As pessoas irão ver que está no modo ONLINE")

		} else if(outpt.status == "2"){
			client.setPersona(SteamUser.EPersonaState.Offline);
			console.log("\x1b[32m", "As pessoas irão ver que está no modo OFFLINE")
		} else {
			console.log("\x1b[31m", "Infelizmente occoreu um erro.");
		}
	

	})
	*/

	/*
	const r1 = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	r1.question("Introduza as steam app ids: ", function(ans){
		
	})
	*/
	var status = readlineSync.question("Escolha o status: ");
	if(status == "1"){
		client.setPersona(SteamUser.EPersonaState.Online);
		console.log("O seu perfil foi definido como ONLINE")
	} else if(status == "2"){
		client.setPersona(SteamUser.EPersonaState.Offline);
		console.log("O seu perfil foi definido como OFFLINE")
	} else {
		console.log("\x1b[31m", "Um erro inesperado aconteceu. Tente outra vez. ❗")
	}
	// client.setPersona(SteamUser.EPersonaState.Offline);
	console.log("\x1b[37m", "Introduza os App ID dos jogos que gostaria de farmar");
	console.log("\x1b[37m", "Exemplo: 730, 440, 240")
	console.log("\x1b[33m", "Máximo: 25 jogos ⚠️")
	var games = readlineSync.question("Digite os IDs: ");
	var array = games.split(',');
	games = [];
	for(i = 0; i < array.length; i++){
		var game = array[i]*1;
		games.push(game);
	}
	client.gamesPlayed(games);
	console.log("Jogos que foram adicionados: " + games);
	console.log("\x1b[32m", "Jogos recebidos com sucesso. ✔️")
	console.log("\x1b[32m", "Configurações básicas efetuada com sucesso. ✔️")
	/*
	console.log("\x1b[37m", "Gostaria de querer uma resposta automática? [y/n]")
	var auto = readlineSync.question(": ");
	if(auto == "y"){
		console.log("Exemplo: Olá. sou um bot do steam noodles! :D")
		console.log("Exemplo: Olá. estou ocupado! Não fale comigo agora :D")
		var choice = readlineSync.question("Escreva uma frase que responde automáticamente se alguém mandar mensagem para ti: ")
		console.log("O bot irá responder " + choice)
		function replySuc(){
			console.log("\x1b[32m", "Configurado com sucesso ✔️")
		}
		setTimeout(replySuc, 3000);
	} else if(auto == "n"){
		console.log("O bot vai ficar em silencio.")
	} else{
		console.log("O bot vai ficar em silencio.")
	}*/
	console.log("\x1b[37m", "Gostaria de querer uma resposta automática? [y/n]")
	var auto = readlineSync.question(": ");
	if(auto == "y"){
		console.log("Exemplo: Olá. sou um bot do steam noodles! :D")
		console.log("Exemplo: Olá. estou ocupado! Não fale comigo agora :D")
		var choice = readlineSync.question("Escreva uma frase que responde automáticamente se alguém mandar mensagem para ti: ")
		console.log("O bot irá responder " + choice)
		function replySuc(){
			console.log("\x1b[32m", "Configurado com sucesso ✔️")
			}
		setTimeout(replySuc, 3000);
	} else if(auto == "n"){
		console.log("O bot vai ficar em silencio.")
	} else{
		console.log("O bot vai ficar em silencio.")
	}

	client.on("friendMessage", function(steamID, message){
	console.log("\x1b[35m", "Mensagem recebida pelo " + steamID + ": " + message);
	if(message=="hi"){
		client.chatMessage(steamID, "Hello! I am a bot, beta version.");
	} else if (message == "hello"){
		client.chatMessage(steamID, "Hello! I am a bot, beta version.");
	} else {
		client.chatMessage(steamID, choice);
		}
	})
		
})





/*
client.on("friendMessage", function(steamID, message){
	console.log("\x1b[35m", "Mensagem recebida pelo " + steamID + ": " + message);
	if(message=="hi"){
		client.chatMessage(steamID, "Hello! I am a bot, beta version.");
	} else if (message == "hello"){
		client.chatMessage(steamID, "Hello! I am a bot, beta version.");
	} else {
		client.chatMessage(steamID, choice);
	}
})

*/
