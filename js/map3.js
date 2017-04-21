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

var bgsky2;

var platforms;
var platformsbas;

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



//////////////////////////////////////////////
// Fonction PRELOAD

function preload() {
	game.load.image('lose','img/bg/lose.png',1600, 1080);
	
	J1.preload();
	J2.preload();
	
	// la map conmplet
	map2.preload();
	
	// son preload
	soundPreload();
}


//////////////////////////////////////////////
// Fonction CREATE

function create() { 
	/* Demarrage physique*/
    game.physics.startSystem(Phaser.Physics.ARCADE);

    bgsky2 = game.add.tileSprite(0, 0, 10053, 1214, 'sky');	

    game.world.setBounds(0, 0, 10053, 1214);

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
    map2.sprite();

    map2.create();

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
    
    gravitation();
    rebondfesse();
    fini();

	perduMec();
	playsound();
}

//////////////////////////////////////////////
// Fonction RENDER

function render() {
	game.debug.spriteCoords(joueur, 32, 500);
  	
    game.debug.body(joueur);
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

function gravitation(){
	if(checkOverlap(joueur, glissade) || checkOverlap(joueur, glissade2)){
		console.log("oui y a me pousse");
		J1.velocity_base_x = 1000;
		J2.velocity_base_x = 1000;
	}
	else{
		J1.velocity_base_x = 0;
		J2.velocity_base_x = 0;
	}	
}

function rebondfesse(){
	if(checkOverlap(joueur,fesse)){
		fessegauche.animations.play('fesseG');	

		fleches.up.isDown = true;
		fleches.right.isDown = true;
		fleches.left.isDown = false;
		J1.velocity_x = 500;
		J1.velocity_y = 800;
		
		if(checkOverlap(joueur, joueur2)){

			toucheZ.isDown = true;
			toucheD.isDown = true;
			toucheQ.isDown = true;
			J2.velocity_x = 500;
			J2.velocity_y = 800;
		}	
	}
}

function fini(){
	if(checkOverlap(joueur, bras)){
		compteur = 1;
			joueur.body.gravity.y  = 10;
			joueur2.body.gravity.y  =10;
		
	}if(joueur.body.y < 0 && compteur == 1){
		document.location.href = "animdefin.html";
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