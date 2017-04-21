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
		J1.velocity_y = 500;
		J2.velocity_x = 400;
		J2.velocity_y = 500;
	}	
} 

function ressuciter(){
	joueur.body.y = 100;
	joueur2.body.y = 50;
	joueur2.angle = 0;

	if(joueur.body.x >= 0 && joueur.body.x < 1900){
		joueur.body.x = 0;
		joueur2.body.x = 0;
		joueur.body.y = 175;
		joueur2.body.y = 0;
	}if(joueur.body.x >= 1900 && joueur.body.x < 3800){
		joueur.body.x = 2100;
		joueur2.body.x = 2100;
		joueur.body.y = 350;
		joueur2.body.y = 150;
	}if(joueur.body.x >= 3800 && joueur.body.x < 5500){
		joueur.body.x = 3900;
		joueur2.body.x = 3900;
		joueur.body.y = 600;
		joueur2.body.y = 400;
	}if(joueur.body.x >= 5500 && joueur.body.x < 7700){
		joueur.body.x = 5730;
		joueur2.body.x = 5730;
		joueur.body.y = 600;
		joueur2.body.y = 400;
	}if(joueur.body.x >= 7700 && joueur.body.x < 9900){
		joueur.body.x = 7900;
		joueur2.body.x = 7900;
		joueur.body.y = 400;
		joueur2.body.y = 200;
	}
}