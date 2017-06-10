/* Summative Game
Cory 
Last Updated 2017-05-12
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

function setup() {
	var myCanvas = createCanvas(400, 400);
	myCanvas.parent('Summative Game'); //create id for p5 sketch inorder to be able to insert it in html code
	rectMode(CENTER);
}

if (screen === 'MENU') { //main menu
    
function menu () {
    textFont(createFont("Impact"), 52);
    fill(103, 0, 181);
    text('GRAVITY SWITCHER',0,58);
    textFont(createFont("Palatino"), 22);
    fill(0, 9, 255);
    text('BY: CORY B',268,83);
    
    fill(4, 0, 255);
    rect(200,200,240,50);
    textFont(createFont("Helvetica"), 37);
    fill(255, 255, 255);
    text('START GAME',82,215);
    
    fill(255, 0, 0);
    rect(100,325,140,50);
    rect(300,325,140,50);
    fill(255, 255, 255);
    textFont(createFont("Helvetica"), 27);
    text('HOW', 68, 337);
    text('SETTINGS',232, 337);
    
    if (mouseIsPressed && mouseX >= 80 && mouseX <= 320 && mouseY >= 175 && mouseY <= 225) {
        screen = 'GAME';
    }
    if (mouseIsPressed && mouseX >= 30 && mouseX <= 170 && mouseY >= 300 && mouseY <= 350) {
        screen = 'HOW';
    }
    if (mouseIsPressed && mouseX >= 230 && mouseX <= 370 && mouseY >= 300 && mouseY <= 350) {
        screen = 'SETTINGS';
    }
};
} //Menu

	if (screen === 'GAME') { //game
function player () {
    fill (107, 56, 194);
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

function keyTyped () {
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

function setting () {
    if (mouseIsPressed && mouseX === 1 && mouseY=== 1) {
    setting = 2;
    }
}

function display () {
	score = score + 0.05;
	fill(196, 182, 182,0);
	noStroke();
	rect(0, 0, 71, 15);
	fill(0, 0, 0);
	text ("Score:", 1,13);
	text (round(score), 38,13);	
	
	if (lives === 5) {
	    if (setting ===1) {
	        fill(74, 19, 19);
	        rect(340,0,60,15);
	    }
	    fill(0, 255, 4);
	    ellipse (346,7,10,10);
	    ellipse (358,7,10,10);
	    ellipse (370,7,10,10);
	    ellipse (382,7,10,10);
	    ellipse (394,7,10,10);
	}
	if (lives === 4) {
	    if (setting ===1) {
	        fill(74, 19, 19);
	        rect(340,0,60,15);
	    }
	    fill (179, 255, 0);
	    ellipse (358,7,10,10);
	    ellipse (370,7,10,10);
	    ellipse (382,7,10,10);
	    ellipse (394,7,10,10);
	}
	if (lives === 3) {
	    if (setting ===1) {
	        fill(74, 19, 19);
	        rect(340,0,60,15);
	    }
	    fill (199, 209, 7);
	    ellipse (370,7,10,10);
	    ellipse (382,7,10,10);
	    ellipse (394,7,10,10);
	}
	if (lives === 2) {
	    if (setting ===1) {
	        fill(74, 19, 19);
	        rect(340,0,60,15);
	    }
	    fill (207, 137, 8);
	    ellipse (382,7,10,10);
	    ellipse (394,7,10,10);
	}
	if (lives === 1) {
	    if (setting ===1) {
	        fill(74, 19, 19);
	        rect(340,0,60,15);
	    }
	    fill (207, 8, 8);
	    ellipse (394,7,10,10);
	}
}

function bckground() {
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
    } else {
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

function obst () {
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
    
    if ((abs(x-objX1)<10) && (abs(y-objY1)<40)) {
	objX1 = 500;
	objY1 = random(70,330);
        lives = lives - 1;    
    }
	if ((abs(x-objX2)<10) && (abs(y-objY2)<40)) {
	objX2 = 500;
	objY2 = random(70,330);
	lives = lives - 1;
    }
	if ((abs(x-objX3)<10) && (abs(y-objY3)<40)) {
	objX3 = 500;
	objY3 = random(70,330); 
	lives = lives - 1;
    }
	if ((abs(x-objX4)<10) && (abs(y-objY4)<40)) {
	objX4 = 500;
	objY4 = random(70,330);   
	lives = lives - 1; 
    }
}
	} //end of game (setting 2)
function draw() {
    background(4, 206, 217);
    player ();
    bckground (); 
    display ();
    obst ();
    menu ();
}
