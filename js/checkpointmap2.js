// Perdu() et tomber() du joueur2 + restart

// var ressurection
var ecranLose;
var toucheEntree;
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
		J1.velocity_y = 600;
		J2.velocity_x = 400;
		J2.velocity_y = 600;
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
	}if(joueur.body.x >= 2200 && joueur.body.x < 7200){
		joueur.body.x = 2220;
		joueur2.body.x = 2220;
		joueur.body.y = 1750;
		joueur2.body.y = 1600;
	}if(joueur.body.x >= 7200 && joueur.body.x < 10000){
		joueur.body.x = 7350;
		joueur2.body.x = 7350;
		joueur.body.y = 1750;
		joueur2.body.y = 1600;
	}
}