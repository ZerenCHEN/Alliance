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

	if(joueur.body.x >= 0 && joueur.body.x <= 2200){
		joueur.body.x = 300;
		joueur2.body.x = 300;
		joueur.body.y = 1750;
		joueur2.body.y = 1600;
	}if(joueur.body.x >= 2200 && joueur.body.x <= 7200){
		joueur.body.x = 2220;
		joueur2.body.x = 2220;
		joueur.body.y = 1750;
		joueur2.body.y = 1600;
	}if(joueur.body.x >= 7300 && joueur.body.x <= 9000){
		joueur.body.x = 7350;
		joueur2.body.x = 7350;
		joueur.body.y = 1750;
		joueur2.body.y = 1600;
	}
}