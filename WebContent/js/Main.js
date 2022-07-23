var game = new Phaser.Game(800, 600, Phaser.AUTO, "", this);
function init() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
}
function preload() {
	game.load.spritesheet("cut", "assets/cut.png", 64, 64);
	game.load.spritesheet("rock", "assets/rock.png", 64, 64);
	game.load.spritesheet("paper", "assets/paper.png", 64, 64);
	game.load.image("btn", "assets/btn.png", 64, 64);
}

var chooses = ['cut', 'rock', 'paper'],
	widthGame = 800,
	heightGame = 600,
	gameMessage,
    handPlayer = 0,
    handEnemy,
    idPlayer = 0,
    idEnemy;

function create() {
	gameMessage = game.add.text((widthGame / 2) - (246 / 2), 150, "Click on the square", { fill: "ff00ff" });
	loadScene();
	eventButton();
	handPlayerAsset();
}

function update() {
	
}

function startPlay() {
	idEnemy = Phaser.Math.between(0, 2);
	handEnemy.destroy();
	gameMessage.destroy();
    handEnemy = game.add.sprite(600, (this.heightGame / 2) , chooses[idEnemy]);
    
    switch(true){
    	case idEnemy == idPlayer:
    		gameMessage = game.add.text((widthGame / 2) - (246 / 2), 150, "Tie!", { fill: "ff00ff" });
    		break;
    	case idPlayer == 0 && idEnemy == 2:
    		gameMessage = game.add.text((widthGame / 2) - (246 / 2), 150, "You Winner!", { fill: "ff00ff" });
    		break;
    	case idPlayer == 0 && idEnemy == 1:
    		gameMessage = game.add.text((widthGame / 2) - (246 / 2), 150, "You Lose!", { fill: "ff00ff" });
			break;
    	case idPlayer == 1 && idEnemy == 0:
    		gameMessage = game.add.text((widthGame / 2) - (246 / 2), 150, "You Winner!", { fill: "ff00ff" });
			break;
    	case idPlayer == 1 && idEnemy == 2:
    		gameMessage = game.add.text((widthGame / 2) - (246 / 2), 150, "You Lose!", { fill: "ff00ff" });
			break;
    	case idPlayer == 2 && idEnemy == 0:
    		gameMessage = game.add.text((widthGame / 2) - (246 / 2), 150, "You Lose!", { fill: "ff00ff" });
			break;
    	case idPlayer == 2 && idEnemy == 1:
    		gameMessage = game.add.text((widthGame / 2) - (246 / 2), 150, "You Winner!", { fill: "ff00ff" });
			break;
    }
}

function playerChoose() {
	(idPlayer == 2) ? idPlayer = 0 : idPlayer++;
	handPlayer.destroy();
	handPlayerAsset();
}	

function eventButton() {
	let btn = game.add.sprite((widthGame / 2) - 32, (heightGame - 100), 'btn');
	btn.inputEnabled = true;
	btn.events.onInputDown.add(startPlay, this); 
}

function handPlayerAsset() {
	handPlayer = game.add.sprite(200, (heightGame / 2) ,chooses[idPlayer]);
	handPlayer.inputEnabled = true;
	handPlayer.events.onInputDown.add(playerChoose, this);
}

function loadScene() {
	game.stage.backgroundColor = 0x808080;
    const title = game.add.text((widthGame / 2) - (356 / 2), 0, "Rock Paper Scissors Game!", { fill: "ff00ff" }),
     	  player = game.add.text(200 - 79, (heightGame / 2) - 50, "player", { fill: "ff00ff" }),
          enemy = game.add.text(600 + 40, (heightGame / 2) - 50, "enemy", { fill: "ff00ff" });
	handEnemy = game.add.sprite(600, (heightGame / 2) ,'cut');
}