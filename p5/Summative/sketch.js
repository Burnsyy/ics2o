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

function preload() { //function to preload sounds
	buttonSound = loadSound('395541__alayan__button-click.wav'); //load button sound
	lifeSound = loadSound('Realistic Punch Mark.wav'); //load lose life sound
	loseSound = loadSound('Sad Trombone Sound Effect.mp3'); //load lose sound
} 

function setup() { //setup function
	var myCanvas = createCanvas(400, 400); //create a 400 x 400 canvas 
	myCanvas.parent('Summative Game'); //create id for p5 sketch inorder to be able to insert it in html code
	rectMode(CENTER); //change rectangle mode to center
	loseMessage = floor(random(1, 5)); //choose random number for lose message
}

function draw() { //draw loop
    background(4, 206, 217); //set background to light blue
    player ();
    bckground (); 
    display ();
    obst ();
    menu ();
    how ();
    options ();
    lose ();
}
  
function menu () { //function for menu screen
	if (screen === 'MENU') { //run code only if screen is set to 'menu'		
		textFont("Impact"); //set font to impact
		textSize (52); //set text size to 52
		fill(103, 0, 181); //set fill colour
		text("GRAVITY SWITCHER",0,67); //create text 'GRAVITY SWITCHER'
		textFont("Palatino"); //set font to Palatino
		textSize (22); //set text size to 22
		fill(0, 9, 255); //set fill colour
		text("BY: CORY B",268,98); //create text 'BY: CORY B'
		
		fill(4, 0, 255); //set fill colour
		rect(200,200,240,50); //create rectangle at coordinates
		textFont("Helvetica"); //set font to Helvetica
		textSize (37); //set text size to 37
		fill(255, 255, 255); //set fill colour
		text("START GAME",82,215); //create text 'START GAME'
		
		fill(255, 0, 0); //set fill colour
		rect(100,325,140,50); //create rectangle at coordinates
		rect(300,325,140,50); //create rectangle at coordinates
		fill(255, 255, 255); //set fill colour
		textFont("Helvetica"); //set font to Helvetica
		textSize (27); //set text size to 27
		text('HOW', 68, 337); //create text 'HOW'
		text("SETTINGS",232, 337); //create text 'SETTINGS'
		
		if (mouseIsPressed && mouseX >= 80 && mouseX <= 320 && mouseY >= 175 && mouseY <= 225) { //if mouse is pressed on start game button start game
			screen = 'GAME';
			if (sound === 'ON') {  //if sound is on play button sound
				buttonSound.play ();
			}
		}
		if (mouseIsPressed && mouseX >= 30 && mouseX <= 170 && mouseY >= 300 && mouseY <= 350) {
			screen = 'HOW';
			if (sound === 'ON') { //if sound is on play button sound
				buttonSound.play ();
			}
		}
		if (mouseIsPressed && mouseX >= 230 && mouseX <= 370 && mouseY >= 300 && mouseY <= 350) {
			screen = 'SETTINGS';
			if (sound === 'ON') { //if sound is on play button sound
				buttonSound.play ();
			}
		} 
	}
} 

function how () { //function for how screen
	
	if (screen === 'HOW') { //run code only if screen is set to 'how'
		textFont("Impact"); //set font to Impact
		textSize (69); //set text size to 69
		fill(0, 9, 255); //set fill colour
		text('HOW TO PLAY',30,72); //create text 'HOW TO PLAY'
		
		textFont("Comic Sans"); //set font to Comic Sans
		textSize(22); //set text size to 22
		fill(214, 0, 252); //set fill colour
		text('» Press W to move up and down',32,106); //create text '» Press W to move up and down'
		text('» Avoid hitting the obstacles',32,146); //create text '» Avoid hitting the obstacles'
		text('» Everytime you hit a square you will',32,186); //create text '» Everytime you hit a square you will'
		text('lose one life',10,210); //create text 'lose one life'
		text('» The score will go up for as long as',32,246); //create text '» The score will go up for as long as'
		text('you are alive',10,246+24); //create text 'you are alive'
		text('» Stay alive for as long as you can!',32,306); //create text '» Stay alive for as long as you can!'
		
		textFont("Impact"); //set font to Impact
		textSize (45); //set text size to 45
		fill(0, 9, 255); //set fill colour
		text('HAVE FUN',116,392); //create text 'HAVE FUN'
		
		fill(214, 0, 252); //set fill colour
		rect(44,370,76,50); //create rectangle at coordinates
		fill(255, 255, 255); //set fill colour
		textSize(32); //set text size to 32
		text("BACK", 9,385); //create text 'BACK'
    
		if (mouseIsPressed && mouseX >= 6 && mouseX <= 82 && mouseY <= 395  && mouseY >= 345) { //if mouse is pressed on back button go to menu screen
			screen = 'MENU';
			if (sound === 'ON') { //if sound is on play button sound
				buttonSound.play ();
			}
		}
	} 
}

function options () { //function for options
	if (screen === 'SETTINGS') { //run code only if screen is set to 'settings'
		textFont("Impact"); //set font to Impact
		textSize(69); //set text size to 69
		fill(0, 9, 255); //set fill colour
		text('SETTINGS',71,72); //create text 'SETTINGS'
		
		fill(214, 0, 252); //set fill colour
		rect(33,19,66,38); //create rectangle at coordinates
		fill(255, 255, 255); //set fill colour
		textSize(30); //set text size to 30
		text("BACK", 0,32); //create text 'BACK'
			
		if (mouseIsPressed && mouseX>=0 && mouseX<= 66 && mouseY >= 0 && mouseY <=38) { //if mouse is pressed on back button go to menu screen
			screen = 'MENU';
			if (sound === 'ON') { //if sound is on play button sound
				buttonSound.play ();
			}
		}
		
		if (mouseIsPressed && mouseX>=12.5 && mouseX<=87.5 && mouseY >= 125 && mouseY <=175) { //if mouse is pressed on grass button set setting to grass
			setting = 1;
			if (sound === 'ON') { //if sound is on play button sound
				buttonSound.play ();
			}
		}
		if (mouseIsPressed && mouseX>=112.5 && mouseX<=187.5 && mouseY >= 125 && mouseY <=175) {//if mouse is pressed on lava button set setting to lava
			setting = 2;
			if (sound === 'ON') { //if sound is on play button sound
				buttonSound.play ();
			}
		}
		if (mouseIsPressed && mouseX>=212.5 && mouseX<=287.5 && mouseY >= 125 && mouseY <=175) {//if mouse is pressed on ice button set setting to ice
			setting = 3;
			if (sound === 'ON') { //if sound is on play button sound
				buttonSound.play ();
			}
		}
		if (mouseIsPressed && mouseX>=312.5 && mouseX<=387.5 && mouseY >= 125 && mouseY <=175) {//if mouse is pressed on desert button set setting to desert
			setting = 4;
			if (sound === 'ON') { //if sound is on play button sound
				buttonSound.play ();
			}
		}
		
		if (mouseIsPressed && mouseX>=5 && mouseX<=45 && mouseY >= 280 && mouseY <=320) { //if mouse is pressed on purple circle set player colour to purple
			pc1 = 66;
			pc2 = 6;
			pc3 = 115;
			if (sound === 'ON') { //if sound is on play button sound
				buttonSound.play ();
			}
		}
		if (mouseIsPressed && mouseX>=55 && mouseX<=95 && mouseY >= 280 && mouseY <=320) {//if mouse is pressed on red circle set player colour to red
			pc1 = 204;
			pc2 = 0;
			pc3 = 0;
			if (sound === 'ON') { //if sound is on play button sound
				buttonSound.play ();
			}
		}
		if (mouseIsPressed && mouseX>=105 && mouseX<=145 && mouseY >= 280 && mouseY <=320) {//if mouse is pressed on yellow circle set player colour to yellow
			pc1 = 222;
			pc2 = 215;
			pc3 = 4;
			if (sound === 'ON') { //if sound is on play button sound
				buttonSound.play ();
			}
		}
		if (mouseIsPressed && mouseX>=155 && mouseX<=195 && mouseY >= 280 && mouseY <=320) {//if mouse is pressed on green circle set player colour to green
			pc1 = 3;
			pc2 = 89;
			pc3 = 1;
			if (sound === 'ON') { //if sound is on play button sound
				buttonSound.play ();
			}
		}
		if (mouseIsPressed && mouseX>=205 && mouseX<=245 && mouseY >= 280 && mouseY <=320) {//if mouse is pressed on blue circle set player colour to blue
			pc1 = 0;
			pc2 = 30;
			pc3 = 255;
			if (sound === 'ON') { //if sound is on play button sound
				buttonSound.play ();
			}
		}
		if (mouseIsPressed && mouseX>=255 && mouseX<=295 && mouseY >= 280 && mouseY <=320) {//if mouse is pressed on orange circle set player colour to orange
			pc1 = 245;
			pc2 = 90;
			pc3 = 0;
			if (sound === 'ON') { //if sound is on play button sound
				buttonSound.play ();
			}
		}
		if (mouseIsPressed && mouseX>=305 && mouseX<=345 && mouseY >= 280 && mouseY <=320) {//if mouse is pressed on pink circle set player colour to pink
			pc1 = 227;
			pc2 = 12;
			pc3 = 227;
			if (sound === 'ON') { //if sound is on play button sound
				buttonSound.play ();
			}
		}
		if (mouseIsPressed && mouseX>=355 && mouseX<=395 && mouseY >= 280 && mouseY <=320) {//if mouse is pressed on black circle set player colour to black
			pc1 = 0;
			pc2 = 0;
			pc3 = 0;
			if (sound === 'ON') { //if sound is on play button sound
				buttonSound.play ();
			}
		}
		
		if (mouseIsPressed && mouseX>=164 && mouseX<=240 && mouseY >= 346 && mouseY <=396) { //if mouse is pressed on on button turn sound on
			sound = 'ON';
			if (sound === 'ON') { //if sound is on play button sound
				buttonSound.play ();
			}
		}	
		
		if (mouseIsPressed && mouseX>=242 && mouseX<=338 && mouseY >= 346 && mouseY <=396) {//if mouse is pressed on off button turn sound off
			sound = 'OFF';
			if (sound === 'ON') { //if sound is on play button sound
				buttonSound.play ();
			}
		}
		
		if (setting === 1) { //if setting is 1 make outline around grass
			fill(28, 28, 28); //set fill colour
			rect(50,150,95,70);  //create rectangle at coordinates (outline)
			fill(4, 206, 217); //set fill colour
			rect(50,150,85,60);  //create rectangle at coordinates (inline)
		}
		
		if (setting === 2) {//if setting is 2 make outline around lava
			fill(28, 28, 28);  //create rectangle at coordinates (outline)
			rect(150,150,95,70); //outline
			fill(4, 206, 217);  //create rectangle at coordinates (inline)
			rect(150,150,85,60); //inline
		}
		
		if (setting === 3) {//if setting is 3 make outline around ice
			fill(28, 28, 28); //set fill colour
			rect(250,150,95,70);   //create rectangle at coordinates (outline)
			fill(4, 206, 217); //set fill colour
			rect(250,150,85,60); //create rectangle at coordinates (inline)
		}
		
		if (setting === 4) { //if setting is 4 make outline around desert
			fill(28, 28, 28); //set fill colour
			rect(350,150,95,70);   //create rectangle at coordinates (outline)
			fill(4, 206, 217); //set fill colour
			rect(350,150,85,60); //create rectangle at coordinates (inline)
		}
		
		if (pc1 === 66 && pc2 === 6 && pc3 === 115) { //if player color is purple make outline around purple circle
			fill(28, 28, 28); //set fill colour
			rect(25,300,60,60); //create rectangle at coordinates (outline)
			fill(4, 206, 217); //set fill colour
			rect(25,300,50,50); //create rectangle at coordinates (inline)
		}
		
		if (pc1 === 204 && pc2 === 0 && pc3 === 0) { //if player color is red make outline around red circle
			fill(28, 28, 28); //set fill colour
			rect(75,300,60,60); //create rectangle at coordinates (outline)
			fill(4, 206, 217); //set fill colour
			rect(75,300,50,50); //create rectangle at coordinates (inline)
		}
		
		if (pc1 === 222 && pc2 === 215 && pc3 === 4) { //if player color is yellow make outline around yellow circle
			fill(28, 28, 28); //set fill colour
			rect(125,300,60,60); //create rectangle at coordinates (outline)
			fill(4, 206, 217); //set fill colour
			rect(125,300,50,50); //create rectangle at coordinates (inline)
		}
		
		if (pc1 === 3 && pc2 === 89 && pc3 === 1) { //if player color is green make outline around green circle
			fill(28, 28, 28); //set fill colour
			rect(175,300,60,60); //create rectangle at coordinates (outline)
			fill(4, 206, 217); //set fill colour
			rect(175,300,50,50); //create rectangle at coordinates (inline)
		}
		
		if (pc1 === 0 && pc2 === 30 && pc3 === 255) { //if player color is blue make outline around blue circle
			fill(28, 28, 28); //set fill colour
			rect(225,300,60,60); //create rectangle at coordinates (outline)
			fill(4, 206, 217); //set fill colour
			rect(225,300,50,50); //create rectangle at coordinates (inline)
		}
		
		if (pc1 === 245 && pc2 === 90 && pc3 === 0) { //orange
			fill(28, 28, 28); //set fill colour
			rect(275,300,60,60); //create rectangle at coordinates (outline)
			fill(4, 206, 217); //set fill colour
			rect(275,300,50,50); //create rectangle at coordinates (inline)
		}
		
		if (pc1 === 227 && pc2 === 12 && pc3 === 227) { //pink
			fill(28, 28, 28); //set fill colour
			rect(325,300,60,60); //create rectangle at coordinates (outline)
			fill(4, 206, 217); //set fill colour
			rect(325,300,50,50); //create rectangle at coordinates (inline)
		}
		
		if (pc1 === 0 && pc2 === 0 && pc3 === 0) { //black
			fill(28, 28, 28); //set fill colour
			rect(375,300,60,60); //create rectangle at coordinates (outline)
			fill(4, 206, 217); //set fill colour
			rect(375,300,50,50); //create rectangle at coordinates (inline)
		}
		
		if (sound === 'ON') {
			fill(28, 28, 28); //set fill colour
			rect(202,371,76,50); //create rectangle at coordinates (outline)
			fill(4, 206, 217); //set fill colour
			rect(202,371,66,40); //create rectangle at coordinates (inline)
		}
		
		if (sound === 'OFF') {
			fill(28, 28, 28); //set fill colour
			rect(290,371,96,50); //create rectangle at coordinates (outline)
			fill(4, 206, 217); //set fill colour
			rect(290,371,86,40); //create rectangle at coordinates (inline)
		}
		
		textFont("Tahoma"); //set font to Tahoma
		textSize(41); //set text size to 41
		fill(255, 0, 0); //set fill colour
		text('Level:',152,109); //create text 'Level:'
		text('Character:',106,243); //create text 'Character:'
		text('Sound:',36,382); //create text 'Sound:'
		
		noStroke(); // take away outline
		fill(37, 61, 4); //set fill colour
		rect(50,150,75,50); //create rectangle at coordinates
		fill(204, 0, 0); //set fill colour
		rect(150,150,75,50); //create rectangle at coordinates
		fill(0, 188, 209); //set fill colour
		rect(250,150,75,50); //create rectangle at coordinates
		fill(209, 209, 0); //set fill colour
		rect(350,150,75,50); //create rectangle at coordinates
		
		fill(255, 255, 255); //set fill colour
		textFont("Calibri"); //set font to Calibri
		textSize(23); //set text size to 23
		text("GRASS",19,159); //create text 'GRASS'
		text("LAVA",126,159); //create text 'LAVA'
		text("ICE",237,159); //create text 'ICE'
		text("DESERT",316,159); //create text 'DESERT'
		
		noStroke(); // take away outline
		fill(66, 6, 115); //set fill colour
		ellipse(25,300,40,40); //create circle at coordinates
		fill(204, 0, 0); //set fill colour
		ellipse(75,300,40,40); //create circle at coordinates
		fill(222, 215, 4); //set fill colour
		ellipse(125,300,40,40); //create circle at coordinates
		fill(3, 89, 1); //set fill colour
		ellipse(175,300,40,40); //create circle at coordinates
		fill(0, 30, 255); //set fill colour
		ellipse(225,300,40,40); //create circle at coordinates
		fill(245, 90, 0); //set fill colour
		ellipse(275,300,40,40); //create circle at coordinates
		fill(227, 12, 227); //set fill colour
		ellipse(325,300,40,40); //create circle at coordinates
		fill(0, 0, 0); //set fill colour
		ellipse(375,300,40,40); //create circle at coordinates
		
		textFont("Trebuchet"); //set font to Trebuchet
		textSize(40); //set text size to 40
		text("ON",172,385); //create text 'ON'
		text("OFF",250,385); //create text 'OFF'
  }
}

function lose () { //function for lose screen
	if (screen === 'LOSE') { //run code only if screen is set to 'lose'
	    textFont("Impact"); //set font to Impact
	    textSize(69); //set text size to 69
	    fill(0, 9, 255); //set fill colour
	    text('YOU LOSE',76,149); //create text 'YOU LOSE'
 
	    textFont("Helvetica"); //set font to Helvetica
	    textSize(40); //set text size to 40
	    fill(255, 0, 47); //set fill colour
	    text('Your score was:', 17,250); //create text 'Your score was:'
	    text(round(score),304,253); //create text for score

	    fill(219, 7, 173); //set fill colour
	    rect(200,340,200,50); //create rectangle at coordinates
	    fill(255, 255, 255); //set fill colour
	    textFont("Trebuchet"); //set font to Trebuchet
	    textSize(30); //set text size to 30
	    text('RETRY',152,351); //create text 'RETRY'

	    if (mouseIsPressed && mouseX >=100 && mouseX <=300 && mouseY >= 315 && mouseY <= 365) { //if mouse is pressed on retry button do the following:
		screen = 'MENU'; //set screen to menu screen
		lives = 5; //set lives to 5
		score = 0; //set score to 0
		loseMessage = floor(random(1, 5)); //generate new random lose message
		    if (sound === 'ON') {  //if sound is on play button sound
				buttonSound.play ();
			}
	    }
	    textFont("Trebuchet"); //set font to Trebuchet
	    textSize(20); //set text size to 20
	    if (loseMessage === 1) {
		text("Try again next time!", 111,200); //create text 'Try again next time!'
	    }
	    if (loseMessage === 2) {
		text("You can do better than that!", 80,200); //create text 'You can do better than that!'
	    }
	    if (loseMessage === 3) {
		text("Try out some new settings next time!", 43,200); //create text 'Try out some new settings next time!'
	    }
	    if (loseMessage === 4) {
		text("Great job!", 152,200); //create text 'Great job!'
	    }
	    if (loseMessage === 5) {
		text("Try harder next time!", 107,200); //create text 'Try harder next time!'
	    } 
	}
};

function player () {  //function for player
	if (screen === 'GAME') { //run code only if screen is set to 'game'
		fill (pc1, pc2, pc3); //set fill colour
		ellipse(x,y,40,40); //create circle at coordinates
		noStroke (); // take away outline
		fill(255, 128, 0); //set fill colour
		y = y + speedY; // y position of player = y position + speedY
		
		if (y <= 75) { //stop player if ball hits top of screen
			speedY = 0;
		}
		if (y >= 325) { //stop player if ball hits bottom of screen
			speedY = 0;
		}
	}
}

function keyTyped () { //function to check is w is pressed
	if (screen === 'GAME') { //run code only if screen is set to 'game'
		if ( key === 'w') { //if w is pressed do the following
			if (sttus === 1) { //if status is 1 move player down and change stattus
				speedY = 4;
				sttus = 2;
			} else {//if status is 2 move player up and change stattus
				speedY = -4;
				sttus = 1;
			}
		}
	}
} 

function display () { //function for display
	if (screen === 'GAME') { //run code only if screen is set to 'game'
		score = score + 0.05; //add to score every frame player is alive
		fill(196, 182, 182,0); //set fill colour
		noStroke();// take away outline
		rect(0, 0, 71, 15); //create rectangle at coordinates
		textFont("Arial"); //set font to Arial
		textSize (12); //set text size to 12
		fill(0, 0, 0); //set fill colour
		text ("Score:", 1,13); //create text 'Score:'
		text (round(score), 38,13); //create text of score	
		
		if (lives === 5) {
			fill(0, 0, 0, 0); //set fill colour
			rect(372,7,60,15); //create rectangle at coordinates
			fill(0, 255, 4); //set fill colour
			ellipse (346,7,10,10); //create circle at coordinates
			ellipse (358,7,10,10); //create circle at coordinates
			ellipse (370,7,10,10); //create circle at coordinates
			ellipse (382,7,10,10); //create circle at coordinates
			ellipse (394,7,10,10); //create circle at coordinates
		}
		if (lives === 4) { 
			fill(0,0,0,0); //set fill colour
			rect(372,7.5,60,15); //create rectangle at coordinates
			fill (179, 255, 0); //set fill colour
			ellipse (358,7,10,10); //create circle at coordinates
			ellipse (370,7,10,10); //create circle at coordinates
			ellipse (382,7,10,10); //create circle at coordinates
			ellipse (394,7,10,10); //create circle at coordinates
		}
		if (lives === 3) {
			fill(0,0,0,0); //set fill colour
			rect(372,7,60,15); //create rectangle at coordinates
			fill (199, 209, 7); //set fill colour
			ellipse (370,7,10,10); //create circle at coordinates
			ellipse (382,7,10,10); //create circle at coordinates
			ellipse (394,7,10,10); //create circle at coordinates
		}
		if (lives === 2) {
			fill(0,0,0,0); //set fill colour
			rect(372,7,60,15); //create rectangle at coordinates
			fill (207, 137, 8); //set fill colour
			ellipse (382,7,10,10); //create circle at coordinates
			ellipse (394,7,10,10); //create circle at coordinates
		}
		if (lives === 1) {
			fill(0,0,0,0); //set fill colour
			rect(372,7,60,15); //create rectangle at coordinates
			fill (207, 8, 8); //set fill colour
			ellipse (394,7,10,10); //create circle at coordinates
		}
		if (lives <= 0) {
			screen = 'LOSE';
			if (sound === 'ON') { //if sound is on play lose sound
				loseSound.play ();
			}
		}
		
	}
}

function bckground() { //function for background
	if (screen === 'GAME') { //run code only if screen is set to 'game'
		if (setting === 1) { //if setting is 1 set triangle colours to green
			c1 = 74;
			c2 = 19;
			c3 = 19;
			c1A = 13;
			c2A = 79;
			c3A = 22;
			c1B = 19;
			c2B = 107;
			c3B = 31;
		} else if (setting === 2) { //if setting is 2 set triangle colours to red
			c1 = 166;
			c2 = 46;
			c3 = 46;
			c1A = 143;
			c2A = 0;
			c3A = 0;
			c1B = 204;
			c2B = 0;
			c3B = 0;
		} else if (setting === 3) { //if setting is 13 set triangle colours to blue
			c1 = 255;
			c2 = 255;
			c3 = 255;
			c1A = 8;
			c2A = 62;
			c3A = 133;
			c1B = 0;
			c2B = 117;
			c3B = 184;
		} else if (setting === 4) { //if setting is 4 set triangle colours to yellow
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
		
		noStroke(); // take away outline
		fill(c1, c2, c3); //set fill colour
		rect(200,25,400,50); //create rectangle at coordinates
		rect(200,375,400,50); //create rectangle at coordinates
		
		fill(c1A, c2A, c3A); //set fill colour
		triangle(0,50,20,50,20,15); //create triangle at coordinates
		fill(c1B, c2B, c3B); //set fill colour
		triangle(40,50,20,50,20,15); //create triangle at coordinates
		
		fill(c1A, c2A, c3A); //set fill colour
		triangle(40,50,60,50,60,15); //create triangle at coordinates
		fill(c1B, c2B, c3B); //set fill colour
		triangle(80,50,60,50,60,15); //create triangle at coordinates
		
		fill(c1A, c2A, c3A); //set fill colour
		triangle(80,50,100,50,100,15); //create triangle at coordinates
		fill(c1B, c2B, c3B); //set fill colour
		triangle(120,50,100,50,100,15); //create triangle at coordinates
		
		fill(c1A, c2A, c3A); //set fill colour
		triangle(120,50,140,50,140,15); //create triangle at coordinates
		fill(c1B, c2B, c3B); //set fill colour
		triangle(160,50,140,50,140,15); //create triangle at coordinates
		
		fill(c1A, c2A, c3A); //set fill colour
		triangle(160,50,180,50,180,15); //create triangle at coordinates
		fill(c1B, c2B, c3B); //set fill colour
		triangle(200,50,180,50,180,15); //create triangle at coordinates
		
		fill(c1A, c2A, c3A); //set fill colour
		triangle(200,50,220,50,220,15); //create triangle at coordinates
		fill(c1B, c2B, c3B); //set fill colour
		triangle(240,50,220,50,220,15); //create triangle at coordinates
		
		fill(c1A, c2A, c3A); //set fill colour
		triangle(240,50,260,50,260,15); //create triangle at coordinates
		fill(c1B, c2B, c3B); //set fill colour
		triangle(280,50,260,50,260,15); //create triangle at coordinates
		
		fill(c1A, c2A, c3A); //set fill colour
		triangle(280,50,300,50,300,15); //create triangle at coordinates
		fill(c1B, c2B, c3B); //set fill colour
		triangle(320,50,300,50,300,15); //create triangle at coordinates
		
		fill(c1A, c2A, c3A); //set fill colour
		triangle(320,50,340,50,340,15); //create triangle at coordinates
		fill(c1B, c2B, c3B); //set fill colour
		triangle(360,50,340,50,340,15); //create triangle at coordinates
		
		fill(c1A, c2A, c3A); //set fill colour
		triangle(360,50,380,50,380,15); //create triangle at coordinates
		fill(c1B, c2B, c3B); //set fill colour
		triangle(400,50,380,50,380,15); //create triangle at coordinates
		
		fill(c1A, c2A, c3A); //set fill colour
		triangle(0,350,20,350,20,385); //create triangle at coordinates
		fill(c1B, c2B, c3B); //set fill colour
		triangle(40,350,20,350,20,385); //create triangle at coordinates
		
		fill(c1A, c2A, c3A); //set fill colour
		triangle(40,350,60,350,60,385); //create triangle at coordinates
		fill(c1B, c2B, c3B); //set fill colour
		triangle(80,350,60,350,60,385); //create triangle at coordinates
		
		fill(c1A, c2A, c3A); //set fill colour
		triangle(80,350,100,350,100,385); //create triangle at coordinates
		fill(c1B, c2B, c3B); //set fill colour
		triangle(120,350,100,350,100,385); //create triangle at coordinates
		
		fill(c1A, c2A, c3A);//set fill colour
		triangle(120,350,140,350,140,385); //create triangle at coordinates
		fill(c1B, c2B, c3B);//set fill colour
		triangle(160,350,140,350,140,385); //create triangle at coordinates
		
		fill(c1A, c2A, c3A);//set fill colour
		triangle(160,350,180,350,180,385); //create triangle at coordinates
		fill(c1B, c2B, c3B);//set fill colour
		triangle(200,350,180,350,180,385); //create triangle at coordinates
		
		fill(c1A, c2A, c3A);//set fill colour
		triangle(200,350,220,350,220,385); //create triangle at coordinates
		fill(c1B, c2B, c3B);//set fill colour
		triangle(240,350,220,350,220,385); //create triangle at coordinates
		
		fill(c1A, c2A, c3A);//set fill colour
		triangle(240,350,260,350,260,385); //create triangle at coordinates
		fill(c1B, c2B, c3B);//set fill colour
		triangle(280,350,260,350,260,385); //create triangle at coordinates
		
		fill(c1A, c2A, c3A);//set fill colour
		triangle(280,350,300,350,300,385); //create triangle at coordinates
		fill(c1B, c2B, c3B);//set fill colour
		triangle(320,350,300,350,300,385); //create triangle at coordinates
		
		fill(c1A, c2A, c3A);//set fill colour
		triangle(320,350,340,350,340,385); //create triangle at coordinates
		fill(c1B, c2B, c3B);//set fill colour
		triangle(360,350,340,350,340,385); //create triangle at coordinates
		
		fill(c1A, c2A, c3A);//set fill colour
		triangle(360,350,380,350,380,385); //create triangle at coordinates
		fill(c1B, c2B, c3B);//set fill colour
		triangle(400,350,380,350,380,385); //create triangle at coordinates
	}	
}

function obst () { //function for obstacles
	if (screen === 'GAME') { //run code only if screen is set to 'game'
		fill(102, 107, 107);//set fill colour
		rect(objX1+20,objY1+20,40,40); //create rectangle at coordinates
		fill(115, 115, 115);//set fill colour
		triangle(objX1,objY1,objX1+40,objY1,objX1+40,objY1+40); //create triangle on obstacle

		objX1 = objX1 + objectSpeed;
		
		if (objX1 <= -40) {
			objX1 = random(400,500);
			objY1 = random(50,310);
		}
		if (score >= 20) {
			fill(102, 107, 107);//set fill colour
			rect(objX2+20,objY2+20,40,40); //create rectangle at coordinates
			fill(115, 115, 115);//set fill colour
			triangle(objX2,objY2,objX2+40,objY2,objX2+40,objY2+40); //create triangle on obstacle
			objX2 = objX2 + objectSpeed + 0.1;
		}
		if (objX2 <= -40) {
			objX2 = random(400,500);
			objY2 = random(70,330);
		}
		
		if (score >= 40) {
			fill(102, 107, 107);//set fill colour
			rect(objX3+20,objY3+20,40,40); //create rectangle at coordinates
			fill(115, 115, 115);//set fill colour
			triangle(objX3,objY3,objX3+40,objY3,objX3+40,objY3+40); //create triangle on obstacle
			objX3 = objX3 + objectSpeed + 0.2;
		}
		if (objX3 <= -40) {
			objX3 = random(400,500);
			objY3 = random(70,330);
		}
		
		if (score >= 60) {
			fill(102, 107, 107);//set fill colour
			rect(objX4+20,objY4+20,40,40); //create rectangle at coordinates
			fill(115, 115, 115);//set fill colour
			triangle(objX4,objY4,objX4+40,objY4,objX4+40,objY4+40); //create triangle on obstacle
			objX4 = objX4 + objectSpeed + 0.3;
		}
		
		if (objX4 <= -40) {
			objX4 = random(400,500);
			objY4 = random(70,330);
		}
		
		if (score >= 90) {
			fill(102, 107, 107);//set fill colour
			rect(objX5+20,objY5+20,40,40); //create rectangle at coordinates
			fill(115, 115, 115);//set fill colour
			triangle(objX5,objY5,objX5+40,objY5,objX5+40,objY5+40) //create triangle on obstacle
			objX5 = objX5 + objectSpeed + 0.4;
		}
		
		if (objX5 <= -40) {
			objX5 = random(400,500);
			objY5 = random(70,330);
		}
		
		if (score >= 150) {
			fill(102, 107, 107);//set fill colour
			rect(objX6+20,objY6+20,40,40); //create rectangle at coordinates
			fill(115, 115, 115);//set fill colour
			triangle(objX6,objY6,objX6+40,objY6,objX6+40,objY6+40); //create triangle on obstacle
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
			if (sound === 'ON') { //if sound is on life button sound
				lifeSound.play ();
			}
		}
		if ((abs(x-objX2)<10) && (abs(y-objY2)<40)) {
		objX2 = 500;
		objY2 = random(70,330);
		lives = lives - 1;
			if (sound === 'ON') { //if sound is on life button sound
				lifeSound.play ();
			}
		}
		if ((abs(x-objX3)<10) && (abs(y-objY3)<40)) {
		objX3 = 500;
		objY3 = random(70,330); 
		lives = lives - 1;
			if (sound === 'ON') { //if sound is on life button sound
				lifeSound.play ();
			}
		}
		if ((abs(x-objX4)<10) && (abs(y-objY4)<40)) {
		objX4 = 500;
		objY4 = random(70,330);   
		lives = lives - 1; 
			if (sound === 'ON') { //if sound is on life button sound
				lifeSound.play ();
			}
		}
		if ((abs(x-objX5)<10) && (abs(y-objY5)<40)) {
		objX5 = 500;
		objY5 = random(70,330);   
		lives = lives - 1; 
			if (sound === 'ON') { //if sound is on life button sound
				lifeSound.play ();
			}
		}
		if ((abs(x-objX6)<10) && (abs(y-objY6)<40)) {
		objX6 = 500;
		objY6 = random(70,330);   
		lives = lives - 1; 
			if (sound === 'ON') { //if sound is on life button sound
				lifeSound.play ();
			}
		}
	}
}
