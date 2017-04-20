// Les platformes test


var map2 = {

	width_niveau : 2000,
	niveau_prec : 0,
	hauteur : 0,

	preload : function(){
		game.load.image('sky','img/bg/decor2off.png', 10053, 1214);

		game.load.image('colision','img/plat/cbois.png', 142,85);
		game.load.image('peinture','img/plat/peinture.png', 120,56);
		game.load.image('invisibleplat','img/plat/plattransparent.png', 1920, 35);

		game.load.image('invisiblecarre','img/plat/carre.png', 147,85);
		game.load.image('invisiblerectangle','img/plat/rectangle.png', 1122,39);
		game.load.image('invisiblerectangle2','img/plat/rectangle2.png', 612,12);
		game.load.image('rectfesse','img/plat/rectfesse.png', 300,100);

		game.load.image('lumiere','img/lumiere.png', 1870,1080);
		game.load.spritesheet('fessegauche','img/fessegauche.png', 840,538);
		game.load.spritesheet('fessedroite','img/fessedroite.png', 840,538);

		game.load.image('vent','img/plat/vent.png', 400, 1200);
	},
	sprite : function(){
		fessegauche = game.add.sprite(8300, 330, 'fessegauche');
		fessegauche.animations.add('fesseG',[0,1,2], 8, true);
		
		fessedroite = game.add.sprite(9191, 330, 'fessedroite');
		fessedroite.animations.add('fesseD',[0,1,2], 8, true);

	},
	create : function(){	
		
		//salle1	
			invisibleplat1 = platformsbas.create(-445+this.niveau_prec, this.hauteur+460, 'invisiblerectangle');
			invisibleplat1.body.setSize(910,50);
			invisibleplat1.body.immovable = true;
			
			invisibleplat1 = platformsbas.create(-220+this.niveau_prec, this.hauteur+755, 'invisiblerectangle');
			invisibleplat1.body.immovable = true;
			invisibleplat1 = platformsbas.create(800+this.niveau_prec, this.hauteur+835, 'invisiblerectangle2');
			invisibleplat1.body.immovable = true;
			invisibleplat1 = platformsbas.create(1290+this.niveau_prec, this.hauteur+745, 'invisiblerectangle');
			invisibleplat1.body.setSize(710,20);
			invisibleplat1.body.immovable = true;
				
			
		//salle2 glissade
			invisibleplat1 = platformsbas.create(this.width_niveau+130+this.niveau_prec, this.hauteur+735, 'invisiblerectangle');
			invisibleplat1.body.setSize(460,50);
			invisibleplat1.body.immovable = true;

			invisibleplat1 = platformsbas.create(this.width_niveau+394+this.niveau_prec, this.hauteur+860, 'invisiblerectangle');
			invisibleplat1.body.immovable = true;
			

			glissade = platforms.create(this.width_niveau+864+this.niveau_prec, this.hauteur+860, 'invisiblerectangle2');
			glissade.body.immovable = true;
			glissade2 = platforms.create(this.width_niveau+1100+this.niveau_prec, this.hauteur+860, 'invisiblerectangle2');
			glissade2.body.immovable = true;
			
		//salle3		

			colision = platformsbas	.create(this.width_niveau+122*2-22+1640+this.niveau_prec, this.hauteur+960, 'invisiblecarre');
			colision.body.immovable = true;

			invisibleplat1 = platformsbas.create(this.width_niveau*2+this.niveau_prec, this.hauteur+1040, 'invisiblerectangle');
			invisibleplat1.body.setSize(350,50);
			invisibleplat1.body.immovable = true;

			invisibleplat1 = platformsbas.create(this.width_niveau*2+230+this.niveau_prec, this.hauteur+960, 'invisiblerectangle');
			invisibleplat1.body.immovable = true;

			invisibleplat1 = platformsbas.create(this.width_niveau*2+1360+this.niveau_prec, this.hauteur+960, 'invisiblerectangle');
			invisibleplat1.body.setSize(350,50);
			invisibleplat1.body.immovable = true;
		
			invisibleplat1 = platformsbas.create(1122*2+800+1655+this.niveau_prec, this.hauteur+852, 'invisiblerectangle2');
			invisibleplat1.body.immovable = true;
			invisibleplat1 = platforms.create(1122*2+800+1655+this.niveau_prec, this.hauteur+400, 'invisiblerectangle2');
			invisibleplat1.body.immovable = true;

		//salon
			
			invisibleplat1 = platformsbas.create(this.width_niveau*3-255+this.niveau_prec, this.hauteur+960, 'invisiblecarre');
			invisibleplat1.body.immovable = true;
			invisibleplat1 = platformsbas.create(this.width_niveau*3-80+this.niveau_prec, this.hauteur+860, 'invisiblecarre');
			invisibleplat1.body.setSize(220,50);
			invisibleplat1.body.immovable = true;
			invisibleplat1 = platformsbas.create(this.width_niveau*3+150+this.niveau_prec, this.hauteur+765, 'invisiblerectangle2');
			invisibleplat1.body.setSize(500, 20);
			invisibleplat1.body.immovable = true;
			

			invisibleplat1 = platformsbas.create(1122*5-450+1615+this.niveau_prec, this.hauteur+735, 'invisiblerectangle2');
			invisibleplat1.body.immovable = true;
			invisibleplat1 = platformsbas.create(1122*6+780+this.niveau_prec,  this.hauteur+850,'invisiblecarre');
			invisibleplat1.body.setSize(220, 20);
			invisibleplat1.body.immovable = true;

			invisibleplat1 = platformsbas.create(1122*5+500+1665+this.niveau_prec, this.hauteur+765, 'invisiblerectangle2');
			invisibleplat1.body.setSize(420, 20);
			invisibleplat1.body.immovable = true;

		// statue fesse
			fesse = platformsbas.create(1122*7+450+this.niveau_prec, this.hauteur+680, 'rectfesse');
			fesse.body.setSize(320, 100);
			fesse.body.immovable = true;

			bras = platformsbas.create(1122*8+this.niveau_prec, this.hauteur+630, 'rectfesse');
			bras.body.setSize(300, 100);
			bras.body.immovable = true;

			fesse2 = platformsbas.create(1122*7+1830+this.niveau_prec, this.hauteur+680, 'rectfesse');
			fesse2.body.setSize(320, 100);
			fesse2.body.immovable = true;
			
			vent = game.add.image(1122*8 , 5, 'vent');

			//game.add.image(1122*8+this.niveau_prec, 5, 'vent');
			

			lumiere = game.add.image(8184, -15, 'lumiere');
	}	
}