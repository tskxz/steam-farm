Steam Farm
=============
[![Codefresh build status]( https://g.codefresh.io/api/badges/pipeline/noneidonthv/steam-noodles?type=cf-1&key=eyJhbGciOiJIUzI1NiJ9.NWYzNWE0MjA4NDI2NmFlZDdjNzkxZTdh.URHgXcUNZvaKN5ikD9PzODmOE3aUgmFZOQ6_9rJnomc)]( https://g.codefresh.io/pipelines/edit/new/builds?id=5f47dbc86db0ba7abd3c93de&pipeline=steam-noodles)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://steamcommunity.com/id/tanjil)


![](https://i.imgur.com/XGAFDvb.png)  
##### (english version on hold)
### Versão em lingua portuguesa
#### Interface em linhas de comando, rode o Steam Farm no seu terminal

## Introducão
Este programa é focado para as pessoas que queiram farmar cartas. Com essas cartas, podes vender, ou subir de nivel com elas, porém, se farmar os jogos, podes receber 3 cartas em aproximadamente 1 hora ou 2 horas (pode demorar mais) **sem ter que precisar instalar os jogos no teu computador!**  Cada jogo pode possuir mais de 5 cartas. Se quiseres podes até fazer trocas das tuas cartas neste [grupo](https://steamcommunity.com/groups/tradingcards)  
## Executa o programa  
`node app.js <username`
## Instala no teu PC


<img src="https://i.imgur.com/Lw72tt5.png" width="100" height="100">  
  
 ## Windows 7/8/10
#### Certifique se tem o git
Verifica se tens o **git** instalado. Abre o comando de linhas e escreve  
`git --version`  
O resultado que se espera é algo do tipo `git version 1.9.5` mas se aparecer *'git' is not recognized as an internal or external command, operable program or batch file.* significa que o git não está instalado.
Instale o [git](https://git-scm.com/download/win) e rode o instalador .exe  e conclua a instalação. Depois da instalação. de certeza que o git irá funcionar desta vez.

#### Certifique se tem node js
Verifica se tens o node js instalado. Abre o comando de linhas e escreve  
`node -v` ou `npm –v`  
  
Se aparecer a versão, ótimo, se dizer que não é reconhecivel, é porque significa que tem que instalar.
Vá para o site oficial da [*node.js*](https://nodejs.org/en/download/), escolha o windows installer, rode o .exe e conclua a instalação.  
Agora sim já instalou e de certeza que já pode rodar o programa. Mas primeiro precisa de fazer um *clone* deste repositório

#### *Cloning*
Depois de instalar o git, recomendo que esteja no *Desktop* faça `dir` no comando de linhas para confirmar, se não estiver, faça:  
`cd C:\Users\MyName\Desktop`  
  
Depois disso faça um *clone* com este comando:  
`git clone https://github.com/tanjilk/steam-farm.git`  
  
Vá para o repositório com:  
`cd steam-farm   `
  
Já que está no repositório, precisa se de instalar algumas dependências para que rode o programa, instale 3 *modules* com esses comandos:  
`npm install steam-user`
`npm install prompt`
`npm install readline-sync`  
  
Depois de instalar essas 3 *modules* já consegue rodar, execute o programa com: 
`node app.js`  
  
  
<img src="https://i.imgur.com/hCq1yOG.png" width="150" height="150">  


## Linux (Ubuntu)  
#### Git
Estou a usar o ubuntu neste caso, para instalar o git use `apt`:  
`sudo apt update`  
   
Agora instale o git:  
`sudo apt install git`
  
  
#### Node js
Para obter o node js e npm use o `apt`, faça:   
`sudo apt update`   
  
Instale o node js  
`sudo apt install nodejs`  
  
Instale o gerenciador de pacotes Node.js, com:  
`sudo apt install npm`  

#### Cloning
Faça um *clone* com este comando:  
`git clone https://github.com/tanjilk/steam-farm.git`  
  
Vá para o repositório com:  
`cd steam-farm`  
  
Já que está no repositório, precisa se de instalar algumas dependências para que rode o programa, instale 3 *modules* com esses comandos:  
`npm install steam-user`
`npm install prompt`
`npm install readline-sync`  
  
Depois de instalar essas 3 *modules* já consegue rodar, execute o programa com: 
`node app.js`

## Steam App IDS
Para encontrar os app ids podes procurar neste [site](https://steamdb.info/apps/)

## Código
### Requirements
```js
    const prompt = require("prompt");
    const SteamUser = require("steam-user");
    const readlineSync = require("readline-sync");
    //const readline = require('readline');
    
    const client = new SteamUser();
    
    console.log("\x1b[33m", "Por favor, faça login ao digitar os seus credenciais: ");
    console.log("\x1b[37m", " ");
   ```
   ### Message Event   
   ```js
   client.on("friendMessage", function(steamID, message){
	console.log("\x1b[35m", "Mensagem recebida pelo " + steamID + ": " + message);
	if(message=="hi"){
		client.chatMessage(steamID, choice);
	} else if (message == "hello"){
		client.chatMessage(steamID, choice);
	} else {
		client.chatMessage(steamID, choice);
		}
	})
```

## License
MIT License

Copyright (c) 2020 Tanjil

## Images  

<img src="https://i.imgur.com/o0pukoK.png">  



