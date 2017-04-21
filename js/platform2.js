// Les platformes et l'arrière plan
// creation map
var map= {
	decale : 11691,
	width_niveau : 1920,

	preload : function(){
		game.load.image('bg1','img/bg/alpha1.jpg',9448, 2250);

		game.load.image('colision','img/plat/cbois.png', 142,85);
		game.load.image('peinture','img/plat/peinture.png', 120,56);
		game.load.image('invisibleplat','img/plat/plattransparent.png', 1920, 35);
		game.load.image('invisiblecarre','img/plat/carre.png', 147,85);

   		game.load.spritesheet('ventilo','img/ventilo.png', 235, 405);
   		game.load.image('vent','img/plat/vent.png', 400, 1200);

   		game.load.image('eau','img/plat/eau.png', 147,85);

   		game.load.image('etgbois','img/plat/etgorange.png', 911, 107);

   		game.load.image('feuille','img/gif/feuille.gif', 409, 118);
	},

	create : function(){
		
		suivantmap = platformsbas.create(9580, 400, 'invisiblecarre');
		suivantmap.scale.setTo(1,5);
		suivantmap.body.immovable = true;
		
		invisibleplat = trou.create(0, 2500, 'invisibleplat'); 
		invisibleplat.body.setSize(9448,2500);
		invisibleplat.body.immovable = true;

		invisiblecarre = platformsbas.create(19325-this.decale, 2000, 'invisiblecarre'); //escalier avant niv suiv 1er marche
		invisiblecarre.body.setSize(140,90);
		invisiblecarre.body.immovable = true;

		invisiblecarre = platformsbas.create(19500-this.decale, 1900, 'invisiblecarre'); //escalier avant niv suiv 2
		invisiblecarre.body.setSize(140,90);
		invisiblecarre.body.immovable = true;

		invisiblecarre = platformsbas.create(19650-this.decale, 1780, 'invisiblecarre'); //escalier avant niv suiv 3
		invisiblecarre.body.setSize(140,90);
		invisiblecarre.body.immovable = true;

		invisiblecarre = platformsbas.create(19790-this.decale, 1660, 'invisiblecarre'); //escalier avant niv suiv 4 
		invisiblecarre.body.setSize(140,90);
		invisiblecarre.body.immovable = true;

		invisiblecarre = platformsbas.create(19960-this.decale, 1540, 'invisiblecarre'); //escalier avant niv suiv 5 
		invisiblecarre.body.setSize(140,90);
		invisiblecarre.body.immovable = true;

		invisiblecarre = platformsbas.create(20100-this.decale, 1420, 'invisiblecarre'); //escalier avant niv suiv 6
		invisiblecarre.body.setSize(140,90);
		invisiblecarre.body.immovable = true;

		invisiblecarre = platformsbas.create(20240-this.decale, 1320, 'invisiblecarre'); //escalier avant niv suiv 7
		invisiblecarre.body.setSize(140,90);
		invisiblecarre.body.immovable = true;

		invisiblecarre = platformsbas.create(20400-this.decale, 1215, 'invisiblecarre'); //escalier avant niv suiv 8
		invisiblecarre.body.setSize(140,90);	
		invisiblecarre.body.immovable = true;

		invisiblecarre = platformsbas.create(20540-this.decale, 1100, 'invisiblecarre'); //escalier avant niv suiv 9
		invisiblecarre.body.setSize(140,90);
		invisiblecarre.body.immovable = true;

		invisiblecarre = platformsbas.create(20705-this.decale, 980, 'invisiblecarre'); //escalier avant niv suiv 9
		invisiblecarre.body.setSize(500,90);
		invisiblecarre.body.immovable = true;


		//platform ventilo 

			invisibleplat1 = platformsbas.create(10005-this.decale, 2117, 'invisibleplat'); //platform sol apr chaise
			invisibleplat1.body.setSize(1590,20);
			invisibleplat1.body.immovable = true;

			invisibleplat1 = platformsbas.create(11395-this.decale, 1500, 'invisibleplat'); //platform mur 
			invisibleplat1.body.setSize(200,800);
			invisibleplat1.body.immovable = true;

       
			invisibleplat1 = platformsbas.create(11300-this.decale, 2117, 'invisibleplat'); //platform sol apr mur
			invisibleplat1.body.setSize(3590,20);
			invisibleplat1.body.immovable = true;




            // salle glissade jaune en grand ; )
            
            feuille = platformsbas.create(14300-this.decale, 20000, 'etgbois');
            
            
            glissade = platformsbas.create(14300-this.decale, 2117, 'eau');  
			glissade.body.immovable = true;

			invisibleplat1 = platformsbas.create(19000-this.decale, 2117, 'invisibleplat');  
			invisibleplat1.body.immovable = true;



			colision = game.add.image(15500-this.decale, 800, 'etgbois'); 
			colision = game.add.image(16500-this.decale, 800, 'etgbois');
			colision = game.add.image(17500-this.decale, 800, 'etgbois');

			feuille1 = platformsbas.create(15500-this.decale, 500, 'feuille');
			feuille2 = platformsbas.create(15900-this.decale, 500, 'feuille');
			feuille3 = platformsbas.create(16500-this.decale, 500, 'feuille');
			feuille4 = platformsbas.create(16900-this.decale, 500, 'feuille');
			feuille5 = platformsbas.create(17500-this.decale, 500, 'feuille');
			feuille6 = platformsbas.create(17900-this.decale, 500, 'feuille');
	}	
}