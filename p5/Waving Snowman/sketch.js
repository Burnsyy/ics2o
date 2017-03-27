/*
Simple waving snowman
2017-03-09
Cory
*/
function setup() {
  var myCanvas=createCanvas(400, 400);
  myCanvas.position(400,200);
}
function draw() {
noStroke();
//background
fill(130, 203, 237);
rect(0, 0, 400, 400);
//ground
fill(214, 195, 195);
rect(0,350,399,50);
// bottom
strokeWeight(3);
stroke(0, 0, 0);
fill(255, 255, 255);
ellipse(200, 300, 150, 150);
// middle
ellipse(200, 200, 100, 100);
//bottom
ellipse(200, 120, 75, 75);
//left arm
line(160,200,50,100);
//right arm
line(240,200,350,122);
//snow
strokeWeight(9);
stroke(255, 255, 255);
point(317,241);
point(69,300);
point(94,262);
point(294,289);
point(64,339);
point(40,229);
point(61,141);
point(105,212);
point(23,300);
point(140,237);
point(106,104);
point(365,227);
point(347,275);
point(343,338);
point(323,203);
point(282,216);
point(236,22);
point(140,151);
point(252,114);
point(149,56);
point(188,54);
point(50,52);
point(50,190);
point(26,112);
point(100,18);
point(378,144);
point(322,67);
point(372,70);
point(352,27);
point(301,109);
point(268,67);
point(282,151);
point(347,154);
point(356,101);
}
