/* Summative Game
Cory 
Last Updated 2017-06-17
*/

var x = 50;
var y = 200;
var setting = 3;
var screen = 'MENU';
var score = 0;
var speedX = 0;
var speedY = 0;
var sttus = 2;
var lives = 5;
var objX1 = 500;
var objY1 = 500;
var objX2 = 501;
var objY2 = 501;
var objX3 = 502;
var objY3 = 502;
var objX4 = 503;
var objY4 = 503;
var objX5 = 504;
var objY5 = 504;
var objX6 = 505;
var objY6 = 505;
var objectSpeed = -3.5;
var c1 = 0;
var c2 = 0;
var c3 = 0;
var c1A = 0;
var c2A = 0;
var c3A = 0;
var c1B = 0;
var c2B = 0;
var c3B = 0;
var sound = 'ON';
var pc1 = 204;
var pc2 = 0;
var pc3 = 0;
var loseMessage = 1;

function preload() {
	buttonSound = loadSound('395541__alayan__button-click.wav'); 
	lifeSound = loadSound('Realistic Punch Mark.wav'); 
	loseSound = loadSound('Sad Trombone Sound Effect.mp3'); 
} 

function setup() {
	var myCanvas = createCanvas(400, 400);
	myCanvas.parent('Summative Game'); //create id for p5 sketch inorder to be able to insert it in html code
	rectMode(CENTER);
	loseMessage = floor(random(1, 5));
	lifeSound.setVolume(0.1);
	loseSound.setVolume(0.1);
}

function draw() {
    background(4, 206, 217);
    player ();
    bckground (); 
    display ();
    obst ();
    menu ();
    how ();
    options ();
    lose ();
}
  
function menu () {
	if (screen === 'MENU') { //main menu		
		textFont("Impact");
		textSize (52);
		fill(103, 0, 181);
		text("GRAVITY SWITCHER",0,67);
		textFont("Palatino");
		textSize (22);
		fill(0, 9, 255);
		text("BY: CORY B",268,98);
		
		fill(4, 0, 255);
		rect(200,200,240,50);
		textFont("Helvetica");
		textSize (37);
		fill(255, 255, 255);
		text("START GAME",82,215);
		
		fill(255, 0, 0);
		rect(100,325,140,50);
		rect(300,325,140,50);
		fill(255, 255, 255);
		textFont("Helvetica");
		textSize (27);
		text('HOW', 68, 337);
		text("SETTINGS",232, 337);
		
		if (mouseIsPressed && mouseX >= 80 && mouseX <= 320 && mouseY >= 175 && mouseY <= 225) {
			screen = 'GAME';
			if (sound === 'ON') {
				buttonSound.play ();
			}
		}
		if (mouseIsPressed && mouseX >= 30 && mouseX <= 170 && mouseY >= 300 && mouseY <= 350) {
			screen = 'HOW';
			if (sound === 'ON') {
				buttonSound.play ();
			}
		}
		if (mouseIsPressed && mouseX >= 230 && mouseX <= 370 && mouseY >= 300 && mouseY <= 350) {
			screen = 'SETTINGS';
			if (sound === 'ON') {
				buttonSound.play ();
			}
		} 
	}
} 

function how () {
	
	if (screen === 'HOW') {
		textFont("Impact");
		textSize (69);
		fill(0, 9, 255);
		text('HOW TO PLAY',30,72);
		
		textFont("Comic Sans");
		textSize(22);
		fill(214, 0, 252);
		text('» Press W to move up and down',32,106);
		text('» Avoid hitting the obstacles',32,146);
		text('» Everytime you hit a square you will',32,186);
		text('lose one life',10,210);
		text('» The score will go up for as long as',32,246);
		text('you are alive',10,246+24);
		text('» Stay alive for as long as you can!',32,306);
		
		textFont("Impact");
		textSize (45);
		fill(0, 9, 255);
		text('HAVE FUN',116,392);
		
		fill(214, 0, 252);
		rect(44,370,76,50);
		fill(255, 255, 255);
		textSize(32);
		text("BACK", 9,385);
    
		if (mouseIsPressed && mouseX >= 6 && mouseX <= 82 && mouseY <= 395  && mouseY >= 345) {
			screen = 'MENU';
			if (sound === 'ON') {
				buttonSound.play ();
			}
		}
	} 
}

function options () {
	if (screen === 'SETTINGS') {
		textFont("Impact");
		textSize(69);
		fill(0, 9, 255);
		text('SETTINGS',71,72);
		
		fill(214, 0, 252);
			rect(33,19,66,38);
			fill(255, 255, 255);
			textSize(30);
			text("BACK", 0,32);
			
		if (mouseIsPressed && mouseX>=0 && mouseX<= 66 && mouseY >= 0 && mouseY <=38) {
			screen = 'MENU';
			if (sound === 'ON') {
				buttonSound.play ();
			}
		}
		
		if (mouseIsPressed && mouseX>=12.5 && mouseX<=87.5 && mouseY >= 125 && mouseY <=175) {
			setting = 1;
			if (sound === 'ON') {
				buttonSound.play ();
			}
		}
		if (mouseIsPressed && mouseX>=112.5 && mouseX<=187.5 && mouseY >= 125 && mouseY <=175) {
			setting = 2;
			if (sound === 'ON') {
				buttonSound.play ();
			}
		}
		if (mouseIsPressed && mouseX>=212.5 && mouseX<=287.5 && mouseY >= 125 && mouseY <=175) {
			setting = 3;
			if (sound === 'ON') {
				buttonSound.play ();
			}
		}
		if (mouseIsPressed && mouseX>=312.5 && mouseX<=387.5 && mouseY >= 125 && mouseY <=175) {
			setting = 4;
			if (sound === 'ON') {
				buttonSound.play ();
			}
		}
		
		if (mouseIsPressed && mouseX>=5 && mouseX<=45 && mouseY >= 280 && mouseY <=320) {
			pc1 = 66;
			pc2 = 6;
			pc3 = 115;
			if (sound === 'ON') {
				buttonSound.play ();
			}
		}
		if (mouseIsPressed && mouseX>=55 && mouseX<=95 && mouseY >= 280 && mouseY <=320) {
			pc1 = 204;
			pc2 = 0;
			pc3 = 0;
			if (sound === 'ON') {
				buttonSound.play ();
			}
		}
		if (mouseIsPressed && mouseX>=105 && mouseX<=145 && mouseY >= 280 && mouseY <=320) {
			pc1 = 222;
			pc2 = 215;
			pc3 = 4;
			if (sound === 'ON') {
				buttonSound.play ();
			}
		}
		if (mouseIsPressed && mouseX>=155 && mouseX<=195 && mouseY >= 280 && mouseY <=320) {
			pc1 = 3;
			pc2 = 89;
			pc3 = 1;
			if (sound === 'ON') {
				buttonSound.play ();
			}
		}
		if (mouseIsPressed && mouseX>=205 && mouseX<=245 && mouseY >= 280 && mouseY <=320) {
			pc1 = 0;
			pc2 = 30;
			pc3 = 255;
			if (sound === 'ON') {
				buttonSound.play ();
			}
		}
		if (mouseIsPressed && mouseX>=255 && mouseX<=295 && mouseY >= 280 && mouseY <=320) {
			pc1 = 245;
			pc2 = 90;
			pc3 = 0;
			if (sound === 'ON') {
				buttonSound.play ();
			}
		}
		if (mouseIsPressed && mouseX>=305 && mouseX<=345 && mouseY >= 280 && mouseY <=320) {
			pc1 = 227;
			pc2 = 12;
			pc3 = 227;
			if (sound === 'ON') {
				buttonSound.play ();
			}
		}
		if (mouseIsPressed && mouseX>=355 && mouseX<=395 && mouseY >= 280 && mouseY <=320) {
			pc1 = 0;
			pc2 = 0;
			pc3 = 0;
			if (sound === 'ON') {
				buttonSound.play ();
			}
		}
		
		if (mouseIsPressed && mouseX>=164 && mouseX<=240 && mouseY >= 346 && mouseY <=396) {
			sound = 'ON';
			if (sound === 'ON') {
				buttonSound.play ();
			}
		}	
		
		if (mouseIsPressed && mouseX>=242 && mouseX<=338 && mouseY >= 346 && mouseY <=396) {
			sound = 'OFF';
			if (sound === 'ON') {
				buttonSound.play ();
			}
		}
		
		if (setting === 1) { //grass
			fill(28, 28, 28);
			rect(50,150,95,70); //outline
			fill(4, 206, 217);
			rect(50,150,85,60); //inline
		}
		
		if (setting === 2) { //lava
			fill(28, 28, 28);
			rect(150,150,95,70); //outline
			fill(4, 206, 217);
			rect(150,150,85,60); //inline
		}
		
		if (setting === 3) { //ice
			fill(28, 28, 28);
			rect(250,150,95,70); //outline
			fill(4, 206, 217);
			rect(250,150,85,60); //inline
		}
		
		if (setting === 4) { //desert
			fill(28, 28, 28);
			rect(350,150,95,70); //outline
			fill(4, 206, 217);
			rect(350,150,85,60); //inline
		}
		
		if (pc1 === 66 && pc2 === 6 && pc3 === 115) { //purple
			fill(28, 28, 28);
			rect(25,300,60,60); //outline
			fill(4, 206, 217);
			rect(25,300,50,50); //inline
		}
		
		if (pc1 === 204 && pc2 === 0 && pc3 === 0) { //red
			fill(28, 28, 28);
			rect(75,300,60,60); //outline
			fill(4, 206, 217);
			rect(75,300,50,50); //inline
		}
		
		if (pc1 === 222 && pc2 === 215 && pc3 === 4) { //yellow
			fill(28, 28, 28);
			rect(125,300,60,60); //outline
			fill(4, 206, 217);
			rect(125,300,50,50); //inline
		}
		
		if (pc1 === 3 && pc2 === 89 && pc3 === 1) { //green
			fill(28, 28, 28);
			rect(175,300,60,60); //outline
			fill(4, 206, 217);
			rect(175,300,50,50); //inline
		}
		
		if (pc1 === 0 && pc2 === 30 && pc3 === 255) { //blue
			fill(28, 28, 28);
			rect(225,300,60,60); //outline
			fill(4, 206, 217);
			rect(225,300,50,50); //inline
		}
		
		if (pc1 === 245 && pc2 === 90 && pc3 === 0) { //orange
			fill(28, 28, 28);
			rect(275,300,60,60); //outline
			fill(4, 206, 217);
			rect(275,300,50,50); //inline
		}
		
		if (pc1 === 227 && pc2 === 12 && pc3 === 227) { //pink
			fill(28, 28, 28);
			rect(325,300,60,60); //outline
			fill(4, 206, 217);
			rect(325,300,50,50); //inline
		}
		
		if (pc1 === 0 && pc2 === 0 && pc3 === 0) { //black
			fill(28, 28, 28);
			rect(375,300,60,60); //outline
			fill(4, 206, 217);
			rect(375,300,50,50); //inline
		}
		
		if (sound === 'ON') {
			fill(28, 28, 28);
			rect(202,371,76,50); //outline
			fill(4, 206, 217);
			rect(202,371,66,40); //inline
		}
		
		if (sound === 'OFF') {
			fill(28, 28, 28);
			rect(290,371,96,50); //outline
			fill(4, 206, 217);
			rect(290,371,86,40); //inline
		}
		
		textFont("Tahoma");
		textSize(41);
		fill(255, 0, 0);
		text('Level:',152,109);
		text('Character:',106,243);
		text('Sound:',36,382);
		
		noStroke();
		fill(37, 61, 4);
		rect(50,150,75,50);
		fill(204, 0, 0);
		rect(150,150,75,50);
		fill(0, 188, 209);
		rect(250,150,75,50);
		fill(209, 209, 0);
		rect(350,150,75,50);
		
		fill(255, 255, 255);
		textFont("Calibri");
		textSize(23);
		text("GRASS",19,159);
		text("LAVA",126,159);
		text("ICE",237,159);
		text("DESERT",316,159);
		
		noStroke();
		fill(66, 6, 115); 
		ellipse(25,300,40,40);
		fill(204, 0, 0); 
		ellipse(75,300,40,40);
		fill(222, 215, 4);
		ellipse(125,300,40,40);
		fill(3, 89, 1);
		ellipse(175,300,40,40);
		fill(0, 30, 255);
		ellipse(225,300,40,40);
		fill(245, 90, 0);
		ellipse(275,300,40,40);
		fill(227, 12, 227);
		ellipse(325,300,40,40);
		fill(0, 0, 0);
		ellipse(375,300,40,40);
		
		textFont("Trebuchet");
		textSize(40);
		text("ON",172,385);
		text("OFF",250,385);
  }
}

function lose () {
	if (screen === 'LOSE') {
	    textFont("Impact");
	    textSize(69);
	    fill(0, 9, 255);
	    text('YOU LOSE',76,149);

	    textFont("Helvetica");
	    textSize(40);
	    fill(255, 0, 47);
	    text('Your score was:', 17,250);
	    text(round(score),304,253);

	    fill(219, 7, 173);
	    rect(200,340,200,50);
	    fill(255, 255, 255);
	    textFont("Trebuchet");
	    textSize(30);
	    text('RETRY',152,351);

	    if (mouseIsPressed && mouseX >=100 && mouseX <=300 && mouseY >= 315 && mouseY <= 365) {
		screen = 'MENU';    
		lives = 5;
		score = 0;
		loseMessage = floor(random(1, 5));
		    if (sound === 'ON') {
				buttonSound.play ();
			}
	    }
	    textFont("Trebuchet");
	    textSize(20);
	    if (loseMessage === 1) {
		text("Try again next time!", 111,200);
	    }
	    if (loseMessage === 2) {
		text("You can do better than that!", 80,200);
	    }
	    if (loseMessage === 3) {
		text("Try out some new settings next time!", 43,200);
	    }
	    if (loseMessage === 4) {
		text("Great job!", 152,200);
	    }
	    if (loseMessage === 5) {
		text("Try harder next time!", 107,200);
	    }
	}
};

function player () {
	if (screen === 'GAME') {
		fill (pc1, pc2, pc3);
		ellipse(x,y,40,40);  
		noStroke ();
		fill(255, 128, 0);
		
		x = x + speedX;
		y = y + speedY;
		
		if (y <= 75) {
			speedY = 0;
		}
		if (y >= 325) {
			speedY = 0;
		}
	}
}

function keyTyped () {
	if (screen === 'GAME') {
		if ( key === 'w') {
			if (sttus === 1) {
				speedY = 4;
				sttus = 2;
			} else {
				speedY = -4;
				sttus = 1;
			}
		}
	}
} 

function display () {
	if (screen === 'GAME') {
		score = score + 0.05;
		fill(196, 182, 182,0);
		noStroke();
		rect(0, 0, 71, 15);
		textFont("Arial");
		textSize (12);
		fill(0, 0, 0);
		text ("Score:", 1,13);
		text (round(score), 38,13);	
		
		if (lives === 5) {
			fill(0, 0, 0, 0);
			rect(372,7,60,15);
			fill(0, 255, 4);
			ellipse (346,7,10,10);
			ellipse (358,7,10,10);
			ellipse (370,7,10,10);
			ellipse (382,7,10,10);
			ellipse (394,7,10,10);
		}
		if (lives === 4) {
			fill(0,0,0,0);
			rect(372,7.5,60,15);
			fill (179, 255, 0);
			ellipse (358,7,10,10);
			ellipse (370,7,10,10);
			ellipse (382,7,10,10);
			ellipse (394,7,10,10);
		}
		if (lives === 3) {
			fill(0,0,0,0);
			rect(372,7,60,15);
			fill (199, 209, 7);
			ellipse (370,7,10,10);
			ellipse (382,7,10,10);
			ellipse (394,7,10,10);
		}
		if (lives === 2) {
			fill(0,0,0,0);
			rect(372,7,60,15);
			fill (207, 137, 8);
			ellipse (382,7,10,10);
			ellipse (394,7,10,10);
		}
		if (lives === 1) {
			fill(0,0,0,0);
			rect(372,7,60,15);
			fill (207, 8, 8);
			ellipse (394,7,10,10);
		}
		if (lives <= 0) {
			screen = 'LOSE';
			if (sound === 'ON') {
				loseSound.play ();
			}
		}
		
	}
}

function bckground() {
	if (screen === 'GAME') {
		if (setting === 1) {
			c1 = 74;
			c2 = 19;
			c3 = 19;
			c1A = 13;
			c2A = 79;
			c3A = 22;
			c1B = 19;
			c2B = 107;
			c3B = 31;
		} else if (setting === 2) {
			c1 = 166;
			c2 = 46;
			c3 = 46;
			c1A = 143;
			c2A = 0;
			c3A = 0;
			c1B = 204;
			c2B = 0;
			c3B = 0;
		} else if (setting === 3) {
			c1 = 255;
			c2 = 255;
			c3 = 255;
			c1A = 8;
			c2A = 62;
			c3A = 133;
			c1B = 0;
			c2B = 117;
			c3B = 184;
		} else if (setting === 4) {
			c1 = 207;
			c2 = 203;
			c3 = 75;
			c1A = 186;
			c2A = 171;
			c3A = 4;
			c1B = 211;
			c2B = 222;
			c3B = 0;
		}
		
		noStroke();
		fill(c1, c2, c3);
		rect(200,25,400,50);
		rect(200,375,400,50);
		
		fill(c1A, c2A, c3A);
		triangle(0,50,20,50,20,15);
		fill(c1B, c2B, c3B);
		triangle(40,50,20,50,20,15);
		
		fill(c1A, c2A, c3A);
		triangle(0+40,50,20+40,50,20+40,15);
		fill(c1B, c2B, c3B);
		triangle(40+40,50,20+40,50,20+40,15);
		
		fill(c1A, c2A, c3A);
		triangle(0+40+40,50,20+40+40,50,20+40+40,15);
		fill(c1B, c2B, c3B);
		triangle(40+40+40,50,20+40+40,50,20+40+40,15);
		
		fill(c1A, c2A, c3A);
		triangle(0+40+40+40,50,20+40+40+40,50,20+40+40+40,15);
		fill(c1B, c2B, c3B);
		triangle(40+40+40+40,50,20+40+40+40,50,20+40+40+40,15);
		
		fill(c1A, c2A, c3A);
		triangle(0+40+40+40+40,50,20+40+40+40+40,50,20+40+40+40+40,15);
		fill(c1B, c2B, c3B);
		triangle(40+40+40+40+40,50,20+40+40+40+40,50,20+40+40+40+40,15);
		
		fill(c1A, c2A, c3A);
		triangle(0+40+40+40+40+40,50,20+40+40+40+40+40,50,20+40+40+40+40+40,15);
		fill(c1B, c2B, c3B);
		triangle(40+40+40+40+40+40,50,20+40+40+40+40+40,50,20+40+40+40+40+40,15);
		
		fill(c1A, c2A, c3A);
		triangle(0+40+40+40+40+40+40,50,20+40+40+40+40+40+40,50,20+40+40+40+40+40+40,15);
		fill(c1B, c2B, c3B);
		triangle(40+40+40+40+40+40+40,50,20+40+40+40+40+40+40,50,20+40+40+40+40+40+40,15);
		
		fill(c1A, c2A, c3A);
		triangle(0+40+40+40+40+40+40+40,50,20+40+40+40+40+40+40+40,50,20+40+40+40+40+40+40+40,15);
		fill(c1B, c2B, c3B);
		triangle(40+40+40+40+40+40+40+40,50,20+40+40+40+40+40+40+40,50,20+40+40+40+40+40+40+40,15);
		
		fill(c1A, c2A, c3A);
		triangle(0+40+40+40+40+40+40+40+40,50,20+40+40+40+40+40+40+40+40,50,20+40+40+40+40+40+40+40+40,15);
		fill(c1B, c2B, c3B);
		triangle(40+40+40+40+40+40+40+40+40,50,20+40+40+40+40+40+40+40+40,50,20+40+40+40+40+40+40+40+40,15);
		
		fill(c1A, c2A, c3A);
		triangle(0+40+40+40+40+40+40+40+40+40,50,20+40+40+40+40+40+40+40+40+40,50,20+40+40+40+40+40+40+40+40+40,15);
		fill(c1B, c2B, c3B);
		triangle(40+40+40+40+40+40+40+40+40+40,50,20+40+40+40+40+40+40+40+40+40,50,20+40+40+40+40+40+40+40+40+40,15);
		
		fill(c1A, c2A, c3A);
		triangle(0,350,20,350,20,385);
		fill(c1B, c2B, c3B);
		triangle(40,350,20,350,20,385);
		
		fill(c1A, c2A, c3A);
		triangle(0,350,20,350,20,385);
		fill(c1B, c2B, c3B);
		triangle(40,350,20,350,20,385);
		
		fill(c1A, c2A, c3A);
		triangle(0+40,350,20+40,350,20+40,385);
		fill(c1B, c2B, c3B);
		triangle(40+40,350,20+40,350,20+40,385);
		
		fill(c1A, c2A, c3A);
		triangle(0+40+40,350,20+40+40,350,20+40+40,385);
		fill(c1B, c2B, c3B);
		triangle(40+40+40,350,20+40+40,350,20+40+40,385);
		
		fill(c1A, c2A, c3A);
		triangle(0+40+40+40,350,20+40+40+40,350,20+40+40+40,385);
		fill(c1B, c2B, c3B);
		triangle(40+40+40+40,350,20+40+40+40,350,20+40+40+40,385);
		
		fill(c1A, c2A, c3A);
		triangle(0+40+40+40+40,350,20+40+40+40+40,350,20+40+40+40+40,385);
		fill(c1B, c2B, c3B);
		triangle(40+40+40+40+40,350,20+40+40+40+40,350,20+40+40+40+40,385);
		
		fill(c1A, c2A, c3A);
		triangle(0+40+40+40+40+40,350,20+40+40+40+40+40,350,20+40+40+40+40+40,385);
		fill(c1B, c2B, c3B);
		triangle(40+40+40+40+40+40,350,20+40+40+40+40+40,350,20+40+40+40+40+40,385);
		
		fill(c1A, c2A, c3A);
		triangle(0+40+40+40+40+40+40,350,20+40+40+40+40+40+40,350,20+40+40+40+40+40+40,385);
		fill(c1B, c2B, c3B);
		triangle(40+40+40+40+40+40+40,350,20+40+40+40+40+40+40,350,20+40+40+40+40+40+40,385);
		
		fill(c1A, c2A, c3A);
		triangle(0+40+40+40+40+40+40+40,350,20+40+40+40+40+40+40+40,350,20+40+40+40+40+40+40+40,385);
		fill(c1B, c2B, c3B);
		triangle(40+40+40+40+40+40+40+40,350,20+40+40+40+40+40+40+40,350,20+40+40+40+40+40+40+40,385);
		
		fill(c1A, c2A, c3A);
		triangle(0+40+40+40+40+40+40+40+40,350,20+40+40+40+40+40+40+40+40,350,20+40+40+40+40+40+40+40+40,385);
		fill(c1B, c2B, c3B);
		triangle(40+40+40+40+40+40+40+40+40,350,20+40+40+40+40+40+40+40+40,350,20+40+40+40+40+40+40+40+40,385);
		
		fill(c1A, c2A, c3A);
		triangle(0+40+40+40+40+40+40+40+40+40,350,20+40+40+40+40+40+40+40+40+40,350,20+40+40+40+40+40+40+40+40+40,385);
		fill(c1B, c2B, c3B);
		triangle(40+40+40+40+40+40+40+40+40+40,350,20+40+40+40+40+40+40+40+40+40,350,20+40+40+40+40+40+40+40+40+40,385);
	}	
}

function obst () {
	if (screen === 'GAME') {
		fill(102, 107, 107);
		rect(objX1+20,objY1+20,40,40);
		fill(115, 115, 115);
		triangle(objX1,objY1,objX1+40,objY1,objX1+40,objY1+40);

		objX1 = objX1 + objectSpeed;
		
		if (objX1 <= -40) {
			objX1 = random(400,500);
			objY1 = random(50,310);
		}
		if (score >= 15) {
			fill(102, 107, 107);
			rect(objX2+20,objY2+20,40,40);
			fill(115, 115, 115);
			triangle(objX2,objY2,objX2+40,objY2,objX2+40,objY2+40);
			objX2 = objX2 + objectSpeed + 0.1;
		}
		if (objX2 <= -40) {
			objX2 = random(400,500);
			objY2 = random(70,330);
		}
		
		if (score >= 30) {
			fill(102, 107, 107);
			rect(objX3+20,objY3+20,40,40);
			fill(115, 115, 115);
			triangle(objX3,objY3,objX3+40,objY3,objX3+40,objY3+40);
			objX3 = objX3 + objectSpeed + 0.2;
		}
		if (objX3 <= -40) {
			objX3 = random(400,500);
			objY3 = random(70,330);
		}
		
		if (score >= 40) {
			fill(102, 107, 107);
			rect(objX4+20,objY4+20,40,40);
			fill(115, 115, 115);
			triangle(objX4,objY4,objX4+40,objY4,objX4+40,objY4+40);
			objX4 = objX4 + objectSpeed + 0.3;
		}
		
		if (objX4 <= -40) {
			objX4 = random(400,500);
			objY4 = random(70,330);
		}
		
		if (score >= 50) {
			fill(102, 107, 107);
			rect(objX5+20,objY5+20,40,40);
			fill(115, 115, 115);
			triangle(objX5,objY5,objX5+40,objY5,objX5+40,objY5+40);
			objX5 = objX5 + objectSpeed + 0.4;
		}
		
		if (objX5 <= -40) {
			objX5 = random(400,500);
			objY5 = random(70,330);
		}
		
		if (score >= 60) {
			fill(102, 107, 107);
			rect(objX6+20,objY6+20,40,40);
			fill(115, 115, 115);
			triangle(objX6,objY6,objX6+40,objY6,objX6+40,objY6+40);
			objX6 = objX6 + objectSpeed + 0.4;
		}
		
		if (objX6 <= -40) {
			objX6 = random(400,500);
			objY6 = random(70,330);
		}
		
		if ((abs(x-objX1)<10) && (abs(y-objY1)<20)) {
		objX1 = 500;
		objY1 = random(70,330);
			lives = lives - 1;    
			if (sound === 'ON') {
				lifeSound.play ();
			}
		}
		if ((abs(x-objX2)<10) && (abs(y-objY2)<40)) {
		objX2 = 500;
		objY2 = random(70,330);
		lives = lives - 1;
			if (sound === 'ON') {
				lifeSound.play ();
			}
		}
		if ((abs(x-objX3)<10) && (abs(y-objY3)<40)) {
		objX3 = 500;
		objY3 = random(70,330); 
		lives = lives - 1;
			if (sound === 'ON') {
				lifeSound.play ();
			}
		}
		if ((abs(x-objX4)<10) && (abs(y-objY4)<40)) {
		objX4 = 500;
		objY4 = random(70,330);   
		lives = lives - 1; 
			if (sound === 'ON') {
				lifeSound.play ();
			}
		}
		if ((abs(x-objX5)<10) && (abs(y-objY5)<40)) {
		objX5 = 500;
		objY5 = random(70,330);   
		lives = lives - 1; 
			if (sound === 'ON') {
				lifeSound.play ();
			}
		}
		if ((abs(x-objX6)<10) && (abs(y-objY6)<40)) {
		objX6 = 500;
		objY6 = random(70,330);   
		lives = lives - 1; 
			if (sound === 'ON') {
				lifeSound.play ();
			}
		}
	}
}
	
