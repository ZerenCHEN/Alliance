// Perdu() et tomber() du joueur2 + restart

// var ressurection
var ecranLose;
var toucheEntree;


function perduMec(){

	/*if (!ecranLose) { 
		ecranLose = game.add.sprite(game.camera.width/2, game.camera.height/2, 'lose'); 
		ecranLose.anchor.setTo(0.5); } 
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

	if(joueur.body.x >= 0 && joueur.body.x <= 1900){
		joueur.body.x = 0;
		joueur2.body.x = 0;
		joueur.body.y = 175;
		joueur2.body.y = 0;
	}if(joueur.body.x >= 2100 && joueur.body.x <= 3800){
		joueur.body.x = 2100;
		joueur2.body.x = 2100;
		joueur.body.y = 350;
		joueur2.body.y = 150;
	}if(joueur.body.x >= 3900 && joueur.body.x <= 5500){
		joueur.body.x = 3900;
		joueur2.body.x = 3900;
		joueur.body.y = 600;
		joueur2.body.y = 400;
	}if(joueur.body.x >= 5550 && joueur.body.x <= 7700){
		joueur.body.x = 5730;
		joueur2.body.x = 5730;
		joueur.body.y = 600;
		joueur2.body.y = 400;
	}if(joueur.body.x >= 7750 && joueur.body.x <= 9900){
		joueur.body.x = 7900;
		joueur2.body.x = 7900;
		joueur.body.y = 400;
		joueur2.body.y = 200;
	}
}