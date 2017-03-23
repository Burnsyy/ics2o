/*
A house created using variables
2017-03-22
Cory
*/
function setup() {
  var myCanvas=createCanvas(400, 400);
  myCanvas.position(800,200);
}
function draw() {
var houseXPos =100;
var houseYPos = houseXPos+100;
var houseWidth = 1000;
var houseHeight = houseWidth/2;
//sky
noStroke();
background(63, 191, 250);
//ground
fill(24, 240, 56);
rect(-2,300,402,101);
//clouds
fill(255, 255, 255);
ellipse(100,100,30,30);
ellipse(116,93,30,30);
ellipse(100,78,30,30);
ellipse(122,75,30,30);
ellipse(142,93,30,30);
ellipse(147,72,30,30);
ellipse(131,100,30,30);
ellipse(161,85,30,30);
ellipse(94,91,30,30);

ellipse(316,100-30,30,30);
ellipse(316,93-30,30,30);
ellipse(303,78-30,30,30);
ellipse(323,75-30,30,30);
ellipse(342,93-30,30,30);
ellipse(338,72-30,30,30);
ellipse(331,100-30,30,30);
ellipse(350,85-30,30,30);
ellipse(294,91-30,30,30);
//sun
fill(252, 213, 58);
ellipse(0,0,100,100);
//house
stroke(0, 0, 0);
fill(133, 64, 64);
rect(houseXPos,houseYPos,houseWidth,houseHeight);
//roof
fill(41, 18, 18);
triangle(houseXPos,houseYPos,houseXPos+houseWidth,houseYPos,houseXPos+houseWidth/2,houseYPos-houseHeight/2); 
//door
fill(117, 61, 61);
rect(houseXPos+houseWidth/2,houseYPos+houseHeight/1.5,houseWidth/15,houseHeight/3);
//windows
fill(255, 255, 255);
rect(houseXPos+houseWidth*1/4,houseYPos+houseHeight*1/4,houseWidth/8,houseHeight/4);
rect(houseXPos+houseWidth*27/42,houseYPos+houseHeight*1/4,houseWidth/8,houseHeight/4);

//2nd House
houseXPos =150;
houseYPos = 250;
houseWidth = 100;
houseHeight = houseWidth/2;
//house
stroke(0, 0, 0);
fill(133, 64, 64);
rect(houseXPos,houseYPos,houseWidth,houseHeight);
//roof
fill(41, 18, 18);
triangle(houseXPos,houseYPos,houseXPos+houseWidth,houseYPos,houseXPos+houseWidth/2,houseYPos-houseHeight/2); 
//door
fill(117, 61, 61);
rect(houseXPos+houseWidth/2,houseYPos+houseHeight/1.5,houseWidth/15,houseHeight/3);
//windows
fill(255, 255, 255);
rect(houseXPos+houseWidth*1/4,houseYPos+houseHeight*1/4,houseWidth/8,houseHeight/4);
rect(houseXPos+houseWidth*27/42,houseYPos+houseHeight*1/4,houseWidth/8,houseHeight/4);
}
