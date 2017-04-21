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

var platforms;
var platformsbas;

var glissade;
var glissade2;

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

   	bgsky = game.add.tileSprite(0, 0, 13080,2250, 'bg');		

    game.world.setBounds(0, 0, 13080, 2250);

    /* création Platform */
    platforms = game.add.group();
    platforms.enableBody = true;

    platformsbas = game.add.group();
    platformsbas.enableBody = true;

    trou = game.add.group();
    trou.enableBody = true;

   /* création Joueur 1, Joueur 2*/
	J1.sprite();
    J2.sprite();

    /* creation */  
    map.create();

    Keyboard();	
    game.camera.follow(joueur);
    soundCreate();	   
}



//////////////////////////////////////////////
// Fonction UPDATE

function update() {
	game.physics.arcade.overlap(joueur2, platformsbas, collisionHandler, null, this);
	game.physics.arcade.overlap(joueur2, trou, collisionHandler, null, this);

	game.physics.arcade.collide(joueur, joueur2);
	game.physics.arcade.collide(joueur, platforms);
	game.physics.arcade.collide(joueur2, platforms);
	game.physics.arcade.collide(joueur, platformsbas);
	game.physics.arcade.collide(joueur2, platformsbas);
	game.physics.arcade.collide(joueur2, trou);
	
	/* Joueur */
	J1.deplacement();
	J2.deplacement(); 	
	
	ventilateur();

    suivantmaps();

	playsound();
	
	perduMec();
}

//////////////////////////////////////////////
// Fonction RENDER

function render() {
	game.debug.spriteCoords(joueur, 32, 500);
  	
    game.debug.body(joueur);
    game.debug.body(joueur2);
    game.debug.body(vent);
    game.debug.body(joueur2);
  		
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

function ventilateur(){
	if(checkOverlap(joueur, vent) || checkOverlap(joueur, vent2)){
		J1.velocity_base_y = 1100;
		J2.velocity_base_y = 1100;
	}else{
		J1.velocity_base_y = 0;
		J2.velocity_base_y = 0;
	}	
}

function suivantmaps(){
	if(checkOverlap(joueur,suivantmap)){
		console.log('transfer');
		document.location.href = "map2.html";
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