// Perdu() et tomber() du joueur2 + restart

// var ressurection

var ecranLose;
var toucheEntree;
var distance = 2000;
var mort = false;

function collisionHandler (player, plat) {
	mort = true;
}

function  perduMec(){
	if(mort == true){
		console.log('oui je tombe par terre');
   	 	joueur2.frame = 119; 
		joueur2.angle = 90;

		J1.velocity_x = 0;
		J1.velocity_y = 0;
		J2.velocity_x = 0;
		J2.velocity_y = 0;
		if (!ecranLose) { 
			if(joueur.body.y > 2300){
				ecranLose = game.add.sprite(joueur.body.x - 350, joueur.body.y -900, 'lose'); 
				ecranLose.scale.setTo(0.5,0.5);
			}else{
				ecranLose = game.add.sprite(joueur.body.x - 350, joueur.body.y -400, 'lose'); 
				ecranLose.scale.setTo(0.5,0.5);
			}	
		} 
		if (toucheEntree.isDown) { 
			mort = false;
			compteur = 0;
			ecranLose.kill(); 
			ecranLose = undefined; 
			ressuciter(); 
		}
	}else{
		J1.velocity_x = 400;
		J1.velocity_y = 500;
		J2.velocity_x = 400;
		J2.velocity_y = 500;
	}	
} 

function ressuciter(){
	joueur.body.y = 100;
	joueur2.body.y = 50;
	joueur2.angle = 0;

	if(joueur.body.x >= 0 && joueur.body.x < 2200){
		joueur.body.x = 300;
		joueur2.body.x = 300;
		joueur.body.y = 1750;
		joueur2.body.y = 1600;
	}if(joueur.body.x >= 2200 && joueur.body.x < 3200){
		joueur.body.x = 2450;
		joueur2.body.x = 2450;
		joueur.body.y = 1450;
		joueur2.body.y = 1200;
	}if(joueur.body.x >= 3200 && joueur.body.x < 4700){
		joueur.body.x = 3330;
		joueur2.body.x = 3330;
		joueur.body.y = 600;
		joueur2.body.y = 450;
	}if(joueur.body.x >= 4700 && joueur.body.x < 7100){
		joueur.body.x = 4700;
		joueur2.body.x = 4700;
		joueur.body.y = 600;
		joueur2.body.y = 450;
	}if(joueur.body.x >= 7100 && joueur.body.x < 9700){
		joueur.body.x = 7700;
		joueur2.body.x = 7700;
		joueur.body.y = 1750;
		joueur2.body.y = 1550;
	}if(joueur.body.x >= 9700 && joueur.body.x < 11000){
		joueur.body.x = 9750;
		joueur2.body.x = 9750;
		joueur.body.y = 1750;
		joueur2.body.y = 1550;
	}if(joueur.body.x >= 11000 && joueur.body.x < 13000){
		joueur.body.x = 11300;
		joueur2.body.x = 11300;
		joueur.body.y = 550;
		joueur2.body.y = 350;
	}
}