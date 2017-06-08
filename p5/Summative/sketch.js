/* Summative Game
Cory 
Last Updated 2017-05-12
*/

var posX = 50;
var posY = 50;
var speedX = 0;
var speedY = 0;
var score = 0;
var setting = 1;


function setup() {
	var myCanvas = createCanvas(400, 400);
	myCanvas.parent('Summative Game'); //create id for p5 sketch inorder to be able to insert it in html code
	background(136, 188, 247); //create background 
}
function draw() {
	player ();
	scoreDisplay ();
}	

function player() {
	fill (107, 56, 194);
	ellipse(posX,posY,50,50);
	fill(255, 128, 0);
	triangle (posX-16.5,posY-18.6,posX,posY,posX+16.5,posY-18.6);
	triangle (posX+23.8,posY+6.2,posX,posY,posX+23.8,posY-6.2);
	triangle (posX-16.5,posY+18.6,posX,posY,posX+16.5,posY+18.6);
	triangle (posX-23.8,posY+6.2,posX,posY,posX-23.8,posY-6.2); 	
}	

function scoreDisplay () {
	score = score + 0.05;
	fill(196, 182, 182);
	noStroke();
	rect(0, 0, 68, 17);
	fill(255, 0, 0);
	text ("Score:", 1,13);
	text (round(score), 38,13);	
}
