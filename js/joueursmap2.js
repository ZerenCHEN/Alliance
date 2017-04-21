// joueur 1 et joueur 2

var jumpTimer = 0;

//////////////////////////////////////////////
// LES DEPLACEMENTS
	
	/* Joueur 1 */	
var J1 = {
    x : 300,
    y : 1750,
    //
    width : 45,
    height : 110,
    width_transf :45, // ex: taille accroupi
    height_transf :62, // ex: taille accroupi
    height_dep : 90,
    //
    offset_x : 22, 
    offset_y : 0, 
    offset_x_transf : 22, // décalage hitbox
    offset_y_transf : 48, // décalage hitbox
    offset_y_dep : 20, 
    //
    velocity_x : 400,
    velocity_y : 600, 
    //
    frame_0 : 0, // frame no action
    frame_up : 69,
    frame_down : 79, // frame acroupi
    //
    velocity_base_x : 0, // ex: vent, ou glissade 
    velocity_base_y : 0, // ex: vent souffle par le bas
    preload : function(){
    game.load.spritesheet('sprite1','img/player1.png', 88, 110);
    },
    sprite : function(){
        joueur = game.add.sprite(this.x, this.y, 'sprite1');

        joueur.scale.setTo(2,2);
	 
        joueur.animations.add('right',[15,16,17,18,19], 20, true);
        joueur.animations.add('left',[30,31,32,33,34],20, true);
        joueur.animations.add('panic',[45,46,47,48,49,50,51,52,53,54,55], 10,true);
        joueur.animations.add('jump',[60,61,62,63,64,65,66,67,68,69], 5, true);
        joueur.animations.add('down',[75,76,77,78,79,80,81,82], 5, true);

        game.physics.arcade.enable(joueur, Phaser.Physics.ARCADE);
        joueur.body.gravity.y = 1000;
    },
	deplacement : function() {
		
        // velocité de base (changeable)
        joueur.body.velocity.x = this.velocity_base_x;
     
		
		// Déplacement bas + gauche et bas + droite
        if (fleches.left.isDown && fleches.down.isDown) {
            joueur.body.setSize(this.width_transf, this.height_transf, this.offset_x_transf, this.offset_y_transf);
            joueur.frame = this.frame_down;
            joueur.body.velocity.x = -this.velocity_x + this.velocity_base_x;
            joueur.animations.play('down');
        }else if (fleches.right.isDown && fleches.down.isDown) {
            joueur.body.setSize(this.width_transf, this.height_transf, this.offset_x_transf, this.offset_y_transf);
            joueur.frame = this.frame_down;
            joueur.body.velocity.x = this.velocity_x + this.velocity_base_x;
            joueur.animations.play('down');
        }else if (fleches.left.isDown && fleches.up.isDown && joueur.body.touching.down) {
        	joueur.body.setSize(this.width_transf, this.height_transf, this.offset_x_transf, this.offset_y_transf);
            joueur.frame = this.frame_up;
            joueur.body.velocity.x = -this.velocity_x + this.velocity_base_x;
            joueur.body.velocity.y = -this.velocity_y - this.velocity_base_y;
        	
        		
            	jumpTimer = game.time.now + 2520;
        	    
        }else if (fleches.right.isDown && fleches.up.isDown && joueur.body.touching.down) {
            joueur.body.setSize(this.width_transf, this.height_transf, this.offset_x_transf, this.offset_y_transf);
            joueur.frame = this.frame_up;
            joueur.body.velocity.x = this.velocity_x + this.velocity_base_x;
           		joueur.body.velocity.y = -this.velocity_y - this.velocity_base_y;
           
        }else {
            // Déplacement gauche
            
            if (fleches.left.isDown) {
              	joueur.body.setSize(this.width, this.height_dep, this.offset_x, this.offset_y_dep);
               	joueur.body.velocity.x = -this.velocity_x + this.velocity_base_x;
               	joueur.animations.play('left');
           	}
            // Déplacement droite
            if (fleches.right.isDown) {
                joueur.body.setSize(this.width, this.height_dep, this.offset_x, this.offset_y_dep);
               	joueur.body.velocity.x = this.velocity_x + this.velocity_base_x;
               	joueur.animations.play('right');
            }
			// Saut
            if(fleches.up.isDown && joueur.body.touching.down) {
                joueur.body.setSize(this.width, this.height, this.offset_x, this.offset_y);
                joueur.body.velocity.y = -this.velocity_y - this.velocity_base_y;
                joueur.frame = this.frame_up;
            }
            // Bas
            if (fleches.down.isDown) {
                joueur.body.setSize(this.width_transf, this.height_transf, this.offset_x_transf, this.offset_y_transf);
                joueur.frame = this.frame_down ;
                joueur.animations.play('down');    
            }
            // Si absolument aucune touche n'est pressée, alors on reset les animations
            if (!fleches.left.isDown && !fleches.right.isDown && !fleches.up.isDown && !fleches.down.isDown) {
                joueur.body.setSize(this.width, this.height, this.offset_x, this.offset_y);
                joueur.frame = this.frame_0;
                //joueur.animations.play('panic');
                // si ils se overlap entre eux
                if (game.physics.arcade.overlap(joueur, joueur2)) {
        			joueur2.y = joueur.body.y - joueur2.height;
        			if (game.physics.arcade.overlap(joueur, joueur2)) {
            		joueur2.body.velocity.y = -3;
            		}
        		}
            }
        }
	}
}


	/* Joueur 2 */	
var J2 = {
	x : 300,
	y : 1600,
	//
	width : 60,
	height : 110,
	width_transf :60, // ex: taille accroupi
	height_transf : 75, // ex: taille accroupi
	//
	offset_x : 25, 
	offset_y : 0, 
	offset_x_transf : 25, // décalage hitbox  
	offset_y_transf : 35, // décalage hitbox
	
	//
	velocity_x : 400,
	velocity_y : 600, 
	//
	frame_0 : 0, // frame no action
	frame_down : 23, // frame acroupi
	frame_up : 165,
	//
	velocity_base_x : 0, // ex: vent, ou glissade 
	velocity_base_y : 0, // ex: vent souffle par le bas
	preload : function(){
	game.load.spritesheet('spritehaut','img/spritehaut.png', 103, 110 );
	},
	sprite :function() {
		joueur2 = game.add.sprite(this.x, this.y, 'spritehaut');
		joueur2.scale.setTo(2,2);
	  
		// animations
	  	joueur2.animations.add('rebond2',[0,2,4,6,8,10,12,14,16], 7, true);
	    joueur2.animations.add('left2',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 25, true);
	    joueur2.animations.add('right2',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 25, true);
	    joueur2.animations.add('down2',[17,18,19,20,21,22,23], 15, true);
	    joueur2.animations.add('jump2',[154,155,156,157,158,159,160,161,162,163,164,165], 15, true);
		
		joueur2.animations.add('desequiliright',[72,73,74], 10, true);
		joueur2.animations.add('desequilileft',[55,56,57], 10, true);

		joueur2.animations.add('tomberright',[85,86,87,88,89,90,91,92,93,94], 20, true);
		joueur2.animations.add('tomberleft',[102,103,104,105,106,107,108,109,110,111], 20, true);
		joueur2.animations.add('mortleft',[119,120], 5, true);
		joueur2.animations.add('mortright',[136,137], 5, true);
		
		// gavity
	 	game.physics.arcade.enable(joueur2, Phaser.Physics.ARCADE);
	    joueur2.body.gravity.y = 1000;
	    joueur2.body.bounce.y = 0.6;
	},
	deplacement : function(){

        // velocité de base (changeable)
        joueur2.body.velocity.x = this.velocity_base_x;
       
        if(joueur2.body.touching.up){
    		joueur2.frame = this.frame_down;
    	}

    	// QUAND IL EST TROP A DROITE
    	if(joueur2.body.x - joueur.body.x > 40 && joueur2.body.x - joueur.body.x < 100){
    		console.log("Aie je suis trop à DROITE");
    		
	        // Déplacement bas + gauche et bas + droite
	        if (toucheQ.isDown && toucheS.isDown) {
	            joueur2.body.setSize(this.width_transf, this.height_transf, this.offset_x_transf, this.offset_y_transf);
	            joueur2.frame = this.frame_down;
	            joueur2.body.velocity.x = -this.velocity_x + this.velocity_base_x;
	        }else if (toucheD.isDown && toucheS.isDown) {
	            joueur2.body.setSize(this.width_transf, this.height_transf, this.offset_x_transf, this.offset_y_transf);
	            joueur2.frame = this.frame_down;
	            joueur2.body.velocity.x = this.velocity_x + this.velocity_base_x;
	        }
	        // Déplacement saut + gauche et saut + droite
	        else if (toucheQ.isDown && toucheZ.isDown && game.time.now > jumpTimer) {
	            joueur2.body.setSize(this.width_transf, this.height_transf, this.offset_x_transf, this.offset_y_transf);
	            joueur2.frame = this.frame_up;
	            joueur2.body.velocity.x = -this.velocity_x + this.velocity_base_x;
	   			joueur2.body.velocity.y = -this.velocity_y - this.velocity_base_y;
	   			jumpTimer = game.time.now + 3520;
	        }else if (toucheD.isDown && toucheZ.isDown && game.time.now > jumpTimer) {
	            joueur2.body.setSize(this.width_transf, this.height_transf, this.offset_x_transf, this.offset_y_transf);
	            joueur2.frame = this.frame_up;
	            joueur2.body.velocity.x = this.velocity_x + this.velocity_base_x;
	            joueur2.body.velocity.y = -this.velocity_y - this.velocity_base_y;
	            jumpTimer = game.time.now + 3520;
	        }else {
	            // Déplacement gauche
	            if (toucheQ.isDown) {
	                joueur2.body.setSize(this.width, this.height, this.offset_x, this.offset_y);
	                joueur2.body.velocity.x = -this.velocity_x + this.velocity_base_x;
	                joueur2.animations.play('desequiliright');
	            }
				// Déplacement droite
	            if (toucheD.isDown) {
	                joueur2.body.setSize(this.width, this.height, this.offset_x, this.offset_y);
	                joueur2.body.velocity.x = this.velocity_x + this.velocity_base_x;
	                joueur2.animations.play('desequiliright');	         
	            }
	            // Saut
	            if(toucheZ.isDown && joueur2.body.touching.down) {
	                joueur2.body.setSize(this.width, this.height, this.offset_x, this.offset_y);
	                joueur2.body.velocity.y = -this.velocity_y - this.velocity_base_y;
	                joueur2.frame = this.frame_up;
	            }
	            // Bas
	            if (toucheS.isDown) {
	                joueur2.body.setSize(this.width_transf, this.height_transf, this.offset_x_transf, this.offset_y_transf);
	                joueur2.frame = this.frame_down ;
	                joueur2.animations.play('down2');
	            }
	            // Si absolument aucune touche n'est pressée, alors on reset les animations
	            if (!toucheQ.isDown && !toucheD.isDown && !toucheZ.isDown && !toucheS.isDown) {
	                joueur2.body.setSize(this.width, this.height, this.offset_x, this.offset_y);
	                joueur2.animations.play('desequiliright');
	            }
	        }
	    }
	    
	    // QUAND IL EST TROP A GAUCHE
    	else if(joueur.body.x - joueur2.body.x > 60 && joueur.body.x - joueur2.body.x < 120){
    		console.log("Aie je suis trop à GAUCHE");

	        // Déplacement bas + gauche et bas + droite
	        if (toucheQ.isDown && toucheS.isDown) {
	            joueur2.body.setSize(this.width_transf, this.height_transf, this.offset_x_transf, this.offset_y_transf);
	            joueur2.frame = this.frame_down;
	            joueur2.body.velocity.x = -this.velocity_x + this.velocity_base_x;
	        }else if (toucheD.isDown && toucheS.isDown) {
	            joueur2.body.setSize(this.width_transf, this.height_transf, this.offset_x_transf, this.offset_y_transf);
	            joueur2.frame = this.frame_down;
	            joueur2.body.velocity.x = this.velocity_x + this.velocity_base_x;
	        }
	        // Déplacement saut + gauche et saut + droite
	        else if (toucheQ.isDown && toucheZ.isDown && game.time.now > jumpTimer) {
	            joueur2.body.setSize(this.width_transf, this.height_transf, this.offset_x_transf, this.offset_y_transf);
	            joueur2.frame = this.frame_up;
	            joueur2.body.velocity.x = -this.velocity_x + this.velocity_base_x;
	   			joueur2.body.velocity.y = -this.velocity_y - this.velocity_base_y;
	   			jumpTimer = game.time.now + 3520;
	        }else if (toucheD.isDown && toucheZ.isDown && game.time.now > jumpTimer) {
	            joueur2.body.setSize(this.width_transf, this.height_transf, this.offset_x_transf, this.offset_y_transf);
	            joueur2.frame = this.frame_up;
	            joueur2.body.velocity.x = this.velocity_x + this.velocity_base_x;
	            joueur2.body.velocity.y = -this.velocity_y - this.velocity_base_y;
	            jumpTimer = game.time.now + 3520;
	        }else {
	            // Déplacement gauche
	            if (toucheQ.isDown) {
	                joueur2.body.setSize(this.width, this.height, this.offset_x, this.offset_y);
	                joueur2.body.velocity.x = -this.velocity_x + this.velocity_base_x;
	                joueur2.animations.play('desequilileft');
	            }
				// Déplacement droite
	            if (toucheD.isDown) {
	                joueur2.body.setSize(this.width, this.height, this.offset_x, this.offset_y);
	                joueur2.body.velocity.x = this.velocity_x + this.velocity_base_x;
	                joueur2.animations.play('desequilileft');
	            }
	            // Saut
	            if(toucheZ.isDown && joueur2.body.touching.down) {
	                joueur2.body.setSize(this.width, this.height, this.offset_x, this.offset_y);
	                joueur2.body.velocity.y = -this.velocity_y - this.velocity_base_y;
	                joueur2.frame = this.frame_up;
	            }
	            // Bas
	            if (toucheS.isDown) {
	                joueur2.body.setSize(this.width_transf, this.height_transf, this.offset_x_transf, this.offset_y_transf);
	                joueur2.frame = this.frame_down ;
	                joueur2.animations.play('down2');
	            }
	            // Si absolument aucune touche n'est pressée, alors on reset les animations
	            if (!toucheQ.isDown && !toucheD.isDown && !toucheZ.isDown && !toucheS.isDown) {
	                joueur2.body.setSize(this.width, this.height, this.offset_x, this.offset_y);
	                joueur2.animations.play('desequilileft');
	            }
	        }
	    }  

	    // QUAND IL BON 
    	else{
	        // Déplacement bas + gauche et bas + droite
	        if (toucheQ.isDown && toucheS.isDown) {
	            joueur2.body.setSize(this.width_transf, this.height_transf, this.offset_x_transf, this.offset_y_transf);
	            joueur2.frame = this.frame_down;
	            joueur2.body.velocity.x = -this.velocity_x + this.velocity_base_x;
	        }else if (toucheD.isDown && toucheS.isDown) {
	            joueur2.body.setSize(this.width_transf, this.height_transf, this.offset_x_transf, this.offset_y_transf);
	            joueur2.frame = this.frame_down;
	            joueur2.body.velocity.x = this.velocity_x + this.velocity_base_x;
	        }
	        // Déplacement saut + gauche et saut + droite
	        else if (toucheQ.isDown && toucheZ.isDown && game.time.now > jumpTimer) {
	            joueur2.body.setSize(this.width_transf, this.height_transf, this.offset_x_transf, this.offset_y_transf);
	            joueur2.frame = this.frame_up;
	            joueur2.body.velocity.x = -this.velocity_x + this.velocity_base_x;
	   			joueur2.body.velocity.y = -this.velocity_y - this.velocity_base_y;
	   			jumpTimer = game.time.now + 3520;
	        }else if (toucheD.isDown && toucheZ.isDown && game.time.now > jumpTimer) {
	            joueur2.body.setSize(this.width_transf, this.height_transf, this.offset_x_transf, this.offset_y_transf);
	            joueur2.frame = this.frame_up;
	            joueur2.body.velocity.x = this.velocity_x + this.velocity_base_x;
	            joueur2.body.velocity.y = -this.velocity_y - this.velocity_base_y;
	            jumpTimer = game.time.now + 3520;
	        }else {
	            // Déplacement gauche
	            if (toucheQ.isDown) {
	                joueur2.body.setSize(this.width, this.height, this.offset_x, this.offset_y);
	                joueur2.body.velocity.x = -this.velocity_x + this.velocity_base_x;
	                joueur2.animations.play('left2');
	            }
				// Déplacement droite
	            if (toucheD.isDown) {
	                joueur2.body.setSize(this.width, this.height, this.offset_x, this.offset_y);
	                joueur2.body.velocity.x = this.velocity_x + this.velocity_base_x;
	                joueur2.animations.play('right2');
	            }
	            // Saut
	            if(toucheZ.isDown && joueur2.body.touching.down) {	              	
	                joueur2.body.setSize(this.width, this.height, this.offset_x, this.offset_y);	
	                joueur2.body.velocity.y = -this.velocity_y - this.velocity_base_y;
	                joueur2.frame = this.frame_up;	                       
	            }
	            // Bas
	            if (toucheS.isDown) {
	                joueur2.body.setSize(this.width_transf, this.height_transf, this.offset_x_transf, this.offset_y_transf);
	                joueur2.animations.play('down2');
	                joueur2.frame = this.frame_down;
	            }
	            // Si absolument aucune touche n'est pressée, alors on reset les animations
	            if (!toucheQ.isDown && !toucheD.isDown && !toucheZ.isDown && !toucheS.isDown) {
	                joueur2.body.setSize(this.width, this.height, this.offset_x, this.offset_y);
	                joueur2.animations.play('rebond2');
	            }
	        }
	   	}  
    }
    
}