// Les platformes et l'arrière plan
// creation map
var map = {

	width_niveau : 1920,

	preload : function(){
		game.load.image('bg','img/bg/alpha.jpg',10570, 2250);

		game.load.image('colision','img/plat/cbois.png', 142,85);
		game.load.image('peinture','img/plat/peinture.png', 120,56);
		game.load.image('invisibleplat','img/plat/plattransparent.png', 1920, 35);
		game.load.image('invisiblecarre','img/plat/carre.png', 147,85);

		game.load.image('etagere','img/etagre.png',911,107);

   		game.load.spritesheet('ventilo','img/ventilo.png', 235, 405);
   		game.load.image('vent','img/plat/vent.png', 400, 1200);
	},

	create : function(){
		
		suivantmap = platformsbas.create(12000, 1500, 'invisiblecarre');
		suivantmap.scale.setTo(10,4);
		suivantmap.body.immovable = true;

		
		invisiblecarre = platformsbas.create(1745, 2023, 'invisiblecarre');
		invisiblecarre.body.setSize(90,95);
		invisiblecarre.body.immovable = true; //poubelle

		invisiblecarre1 = platformsbas.create(1935, 1955, 'invisiblecarre');
		invisiblecarre1.body.setSize(125,165);
		invisiblecarre1.body.immovable = true; // escalier début niv

		invisiblecarre2 = platformsbas.create(2060, 1885, 'invisiblecarre');
		invisiblecarre2.body.setSize(125,240);
		invisiblecarre2.body.immovable = true;

		invisiblecarre3 = platformsbas.create(2184, 1800, 'invisiblecarre');
		invisiblecarre3.body.setSize(140,320);
		invisiblecarre3.body.immovable = true;

		//platform ventilo 
			invisibleplat1 = platformsbas.create(0, 2117, 'invisibleplat'); //platform début
			invisibleplat1.body.immovable = true;

			ventilo = game.add.sprite(2900, 1135, 'ventilo'); //premier ventilo 
			ventilo.scale.setTo(1.5,1.5);
        	ventilo.animations.add('actif',[0,1,2], 20	, true);
            ventilo.animations.play('actif');


			invisibleplat1 = platformsbas.create(2465, 1738, 'invisibleplat'); //platform ventilo
			invisibleplat1.body.setSize(777,90);
			invisibleplat1.body.immovable = true;

			invisibleplat1 = platformsbas.create(3338,970, 'invisibleplat'); //platform epaisse
			invisibleplat1.body.setSize(1580,900);
			invisibleplat1.body.immovable = true;

			etagere = platformsbas.create(5000,1070, 'etagere'); //platform etagere
			etagere.scale.setTo(0.5,0.5);
			// etagere.body.immovable = true;

			etagere = platformsbas.create(5338,1407, 'etagere'); //platform etagere
			etagere.scale.setTo(0.5,0.5);
			etagere.body.immovable = true;

			etagere = platformsbas.create(5738,1770, 'etagere'); //platform etagere
			etagere.scale.setTo(0.5,0.5);
			etagere.body.immovable = true;

			invisibleplat3 = platformsbas.create(5485, 2117, 'invisibleplat'); //platform continu avt table
			invisibleplat3.body.setSize(1100,90);
			invisibleplat3.body.immovable = true;

			glissade = platformsbas.create(6600, 2117, 'invisibleplat'); //tache
			glissade.body.setSize(220,90);
			glissade.body.immovable = true;

			invisibleplat3 = platformsbas.create(6830, 2117, 'invisibleplat'); //platform avant trou
			invisibleplat3.body.setSize(175,90);
			invisibleplat3.body.immovable = true;

			invisibleplat4 = platformsbas.create(7225, 2117, 'invisibleplat'); //platform apr trou
			invisibleplat4.body.setSize(1000,20);
			invisibleplat4.body.immovable = true;

			invisibleplat5 = platformsbas.create(8300, 2117, 'invisibleplat'); //platform apr coffre
			invisibleplat5.body.setSize(300,20);
			invisibleplat5.body.immovable = true;

			invisibleplat6 = platformsbas.create(8775, 1795, 'invisibleplat'); //platform table
			invisibleplat6.body.setSize(1000,20);
			invisibleplat6.body.immovable = true;
			
			invisibleplat7 = platformsbas.create(8595, 1905, 'invisibleplat'); //platform chaise
			invisibleplat7.body.setSize(125,200);
			invisibleplat7.body.immovable = true;

			invisibleplat8 = platformsbas.create(8115, 2000, 'invisibleplat'); //platform coffre
			invisibleplat8.body.setSize(225,20);
			invisibleplat8.body.immovable = true;

			invisibleplat9 = platformsbas.create(9775, 1905, 'invisibleplat'); //platform chaise
			invisibleplat9.body.setSize(180,200);
			invisibleplat9.body.immovable = true;

			invisibleplat10 = platformsbas.create(10005, 2117, 'invisibleplat'); //platform sol apr chaise
			invisibleplat10.body.setSize(1590,20);
			invisibleplat10.body.immovable = true;

			invisibleplat10 = platformsbas.create(11595, 1800, 'invisibleplat'); //platform mur 
			invisibleplat10.body.setSize(100,200);
			invisibleplat10.body.immovable = true;

			invisibleplat = platformsbas.create(11695, 1800, 'invisibleplat'); //platform mur 
			invisibleplat.body.setSize(100,200);
			invisibleplat.body.immovable = true;

			ventilo2 = game.add.sprite(10800, 1520, 'ventilo'); //deuxieme ventilo
			ventilo2.scale.setTo(1.5,1.5);
        	ventilo2.animations.add('actif',[0,1,2], 20	, true);
            ventilo2.animations.play('actif');

            invisibleplat11 = platformsbas.create(11245, 880, 'invisibleplat'); //platform au dessus ventilo
			invisibleplat11.body.setSize(900,90);
			invisibleplat11.body.immovable = true;

			invisibleplat12 = platformsbas.create(11800, 2117, 'invisibleplat'); //platform sol apr mur
			invisibleplat12.body.setSize(1590,20);
			invisibleplat12.body.immovable = true;

            vent = game.add.image(2880, 800, 'vent'); //vent premier ventilo
        


            vent2 = game.add.image(10800, 800, 'vent'); //vent deuxieme ventilo 
	}	
}

