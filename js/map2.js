// main.js

var game = new Phaser.Game(
	window.innerWidth,
	window.innerHeight,
	Phaser.AUTO,
	''
);

var gameState = {
	preload: preload,
	create: create,
	update: update
	
};

game.state.add('game', gameState);
game.state.start('game');


//////////////////////////////////////////////
// VARIABLE DU JEU

var bgsky;
var bgsky1;
var bgsky2;

var platforms;
var platformsbas;
var ledge;
var ground;

var bout1;
var bout2;
var colision;
var colision2;
var glissade;
var glissade2;

// fesse overlap
var fesse;
var fesse2;
var bras;
var lumiere;
// fesse anime
var fessegauche;
var fessedroite;


var ventilo;
var ventilo2;

var vent;
var vent2;

//invisible colade
var invisibleplat1;

/* variable joueurs + controles */
var joueur;
var joueur2;

var fleches;
var toucheQ;
var toucheD;
var toucheS; 
var toucheZ;


// la mort et tomber
var compteur = 0;

var suivantmap;

var feuille;
var feuille1;
var feuille2;
var feuille3;
var feuille4;
var feuille5;
var feuille6;	


//////////////////////////////////////////////
// Fonction PRELOAD

function preload() {
	game.load.image('lose','img/bg/lose.png',1600, 1080);
	
	J1.preload();
	J2.preload();
	
	// la map conmplet
	map.preload();
	
	// son preload
	soundPreload();
}


//////////////////////////////////////////////
// Fonction CREATE

function create() { 
	/* Demarrage physique*/
    game.physics.startSystem(Phaser.Physics.ARCADE);
    //game.world.scale.setTo(0.5, 0.5);

    bgsky1 = game.add.tileSprite(0, 0, 9448,2250, 'bg1');		

    game.world.setBounds(0, 0, 9448, 2250);

    /* création Platform */
    platforms = game.add.group();
    platforms.enableBody = true;

    platformsbas = game.add.group();
    platformsbas.enableBody = true;


   /* création Joueur 1, Joueur 2*/
	
	J1.sprite();
    J2.sprite();

    /* creation */  
    map.create();

    Keyboard();	
    game.camera.follow(joueur);
    soundCreate();	   
   
    tombeplui();
}



//////////////////////////////////////////////
// Fonction UPDATE

function update() {

	game.physics.arcade.collide(joueur, joueur2);
	game.physics.arcade.collide(joueur, platforms);
	game.physics.arcade.collide(joueur2, platforms);
	game.physics.arcade.collide(joueur, platformsbas);
	game.physics.arcade.collide(joueur2, platformsbas);
/*	
	J1.width = 20;
	J1.height = 55;
	J1.height_dep = 45;
	J1.offset_y_dep = 10;
	J1.offset_x = 11;
	J1.velocity_y = 600;
	
	J1.width_transf = 20;
	J1.height_transf = 35;
	J1.offset_x_transf = 10;
	J1.offset_y_transf = 20;

	J2.width = 30;
	J2.height = 55;
	J2.height_dep = 45;
	J2.offset_y_dep = 10;
	J2.offset_x = 11;
	J2.velocity_y = 600;
	J2.width_transf = 30;
	J2.height_transf = 35;
	J2.offset_x_transf = 10;
	J2.offset_y_transf = 20;

	/* Joueur */	
	J1.deplacement();
	J2.deplacement(); 	
	
	
	gravitation();
    suivantmaps();
    
    //tomber();
	perduMec();	
	playsound();
	tombeplui();
	mortecraser();
}

//////////////////////////////////////////////
// Fonction RENDER

function render() {
	game.debug.spriteCoords(joueur, 32, 500);
  	
    game.debug.body(joueur);
    game.debug.body(joueur2);
  	
  	//game.debug.body(colision);
  	//game.debug.body(glissade2);
    platformsbas.forEach(function(platform) {
    	game.debug.body(platform)
    })

    platforms.forEach(function(platform) {
    	game.debug.body(platform)
    })

}


function checkOverlap(spriteA, spriteB) {
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();
    return Phaser.Rectangle.intersects(boundsA, boundsB);
}


// systeme gravitation du jeu

function gravitation(){
	if(checkOverlap(joueur, glissade)){
		J1.velocity_base_x = 1500;
		J2.velocity_base_x = 1500;
	}
	else{
		J1.velocity_base_x = 0;
		J2.velocity_base_x = 0;
	}	
}

function tombeplui(){
	if(joueur.body.x >= 1600+2200 && joueur.body.x <= 1700+2200){
		feuille1.body.velocity.y = 1200;
	}if(joueur.body.x >= 1700+2300 && joueur.body.x <= 1800+2300){
		feuille2.body.velocity.y = 1200;
	}if(joueur.body.x >= 2000+2400 && joueur.body.x <= 2100+2400){
		feuille3.body.velocity.y = 1200;
	}if(joueur.body.x >= 2200+2500 && joueur.body.x <= 2300+2500){
		feuille4.body.velocity.y = 1200;
	}if(joueur.body.x >= 2500+2800 && joueur.body.x <= 2600+2800){
		feuille5.body.velocity.y = 1200;
	}if(joueur.body.x >= 2700+3000 && joueur.body.x <= 2800+3000){
		feuille6.body.velocity.y = 1200;
	}	
}
function mortecraser(){
	if(checkOverlap(joueur2, feuille1) || checkOverlap(joueur2, feuille2) || checkOverlap(joueur2, feuille3)
		|| checkOverlap(joueur2, feuille4) || checkOverlap(joueur2, feuille5) || checkOverlap(joueur2, feuille6
	) ){
		perduMec();
	}
}

function suivantmaps(){
	if(checkOverlap(joueur,suivantmap)){
		console.log('transfer');
		document.location.href = "map3.html";
 	}
}
//////////////////////////////////////////////
// LES TOUCHES DE CONTROLES
 
function Keyboard(){
	fleches = game.input.keyboard.createCursorKeys();
    toucheQ = game.input.keyboard.addKey(Phaser.Keyboard.Q);
    toucheD = game.input.keyboard.addKey(Phaser.Keyboard.D);
    toucheS = game.input.keyboard.addKey(Phaser.Keyboard.S);
    toucheZ = game.input.keyboard.addKey(Phaser.Keyboard.Z);
    toucheEntree = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    toucheP = game.input.keyboard.addKey(Phaser.Keyboard.P);
}	