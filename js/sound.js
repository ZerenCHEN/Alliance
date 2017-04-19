// son et music du jeu 
var lancer = true;

///////////////////////////////////////// 
/// preload 
function soundPreload(){
    game.load.audio('saut', 'sound/personnage/petitvoix.mp3')
    game.load.audio('saut2', 'sound/personnage/desequilibre.mp3')
    game.load.audio('bayo', 'sound/bayonetta.mp3')
}


///////////////////////////////////////////// 
/// Les variables 
var saut;
var saut2;
var bayo;


/////////////////////////////////////// 
/// create
function soundCreate(){
	// tous les adds
    saut2 = game.add.audio('saut',0.1,0);
    saut = game.add.audio('saut2', 0.1, 0);
    bayo = game.add.audio('bayo');
}


////////////////////////////////////////// 
/// regroupe tout les functions sons
function playsound(){

	// sons sur les personnages
	
	player1sound();
	player2sound();
    fond();

	
	// sons sur les colisions
	
	// sons sur les endroits précis (ambiances)
	
	// sons fond du niveau
	
}


// Les functions des sons
/////////////////////////////////////////////////////////////////
function fond(){
    if(lancer == true){
        bayo.play();
        lancer = false;
    }  
}
// joueur 1 sons
function player1sound(){
		// Saut
        if(fleches.up.isDown && joueur.body.touching.down) {
           saut2.play();
        }
    
}

//joueur 2 sons
function player2sound(){
	/*quand il touche le haut y a un son de bongbong
	if(joueur2.body.touching.up){
		joueur2.frame = this.frame_down;
	}*/

	// QUAND IL EST TROP A DROITE OU TROP A GAUCHE
	if((joueur2.body.x - joueur.body.x > 60 && joueur2.body.x - joueur.body.x < 120) 
		|| (joueur.body.x - joueur2.body.x > 60 && joueur.body.x - joueur2.body.x < 120)){
	       
            // Si absolument aucune touche n'est pressée, alors on reset les animations
            if (!toucheQ.isDown && !toucheD.isDown && !toucheZ.isDown && !toucheS.isDown) {
                // en désequilibre
                saut.play();
            }   
    }

    // QUAND IL BON 
	else{       
        // Saut
        if(toucheZ.isDown && joueur2.body.touching.down) {	              	
            saut2.play();                      
        }
    }   
}