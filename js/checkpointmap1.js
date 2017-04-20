// Perdu() et tomber() du joueur2 + restart

// var ressurection

var ecranLose;
var toucheEntree;
var distance = 2000;

function perduMec(){

	/*if (!ecranLose) { 
		ecranLose = game.add.sprite(joueur.body.y+200, joueur.body.x, 'lose'); 
		 } 
		console.log("Ta perdu Mec ! (Appuyez sur 'Entrer')")*/
	if (toucheEntree.isDown) { 
		//ecranLose.kill(); 
		ecranLose = undefined; ressuciter(); 
	}
} 

function tomber(){
		
		if ( joueur.body.y - joueur2.body.y < 20) { 
			console.log("je suis mort à gauche"); 
			joueur2.animations.play('mortleft'); 
			joueur2.angle = 90;
			perduMec(); 
		}	 
}

function ressuciter(){
	joueur.body.y = 100;
	joueur2.body.y = 50;
	joueur2.angle = 0;

	if(joueur.body.x >= 0 && joueur.body.x <= 2200){
		joueur.body.x = 300;
		joueur2.body.x = 300;
		joueur.body.y = 1750;
		joueur2.body.y = 1600;
	}if(joueur.body.x >= 2440 && joueur.body.x <= 3200){
		joueur.body.x = 2450;
		joueur2.body.x = 2450;
		joueur.body.y = 1450;
		joueur2.body.y = 1200;
	}if(joueur.body.x >= 3300 && joueur.body.x <= 4700){
		joueur.body.x = 3330;
		joueur2.body.x = 3330;
		joueur.body.y = 600;
		joueur2.body.y = 450;
	}if(joueur.body.x >= 4800 && joueur.body.x <= 7100){
		joueur.body.x = 4700;
		joueur2.body.x = 4700;
		joueur.body.y = 600;
		joueur2.body.y = 450;
	}if(joueur.body.x >= 7200 && joueur.body.x <= 9700){
		joueur.body.x = 7700;
		joueur2.body.x = 7700;
		joueur.body.y = 1750;
		joueur2.body.y = 1550;
	}if(joueur.body.x >= 9750 && joueur.body.x <= 11000){
		joueur.body.x = 9750;
		joueur2.body.x = 9750;
		joueur.body.y = 1750;
		joueur2.body.y = 1550;
	}if(joueur.body.x >= 11100 && joueur.body.x <= 13000){
		joueur.body.x = 11300;
		joueur2.body.x = 11300;
		joueur.body.y = 550;
		joueur2.body.y = 350;
	}
}