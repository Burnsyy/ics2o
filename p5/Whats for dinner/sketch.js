/*
Simple waving snowman
*/
function setup() {
  var myCanvas=createCanvas(400, 400);
  myCanvas.position(200,200);
}
function draw() {
noStroke();
//table
background(186, 145, 20); 
// plate
ellipse(200, 200, 350, 350); 
ellipse(200, 200, 300, 300); 
//fish
noStroke();
fill(48, 184, 184);
bezier(133, 168, 386, 359, 427, 108, 111, 201);
//fisheye
fill(255, 255, 255);
ellipse(302,208,10,10);
//eyeball
fill(0, 0, 0);
ellipse(302,208,5,5);
//potato
fill(112, 59, 35);
ellipse(200,115,133,75);
//mash
fill(161, 126, 126);
ellipse(200,115, 110,14);
//pizza
fill(214, 142, 54);
triangle(304,267,115,333,97,227);
//crust
stroke(143, 80, 80);
strokeWeight(19);
line(103,231,122,329);
//pepperoni
noStroke();
fill(199, 37, 37);
ellipse(151,293,30,30);
ellipse(198,263,30,30);
ellipse(151,257,30,30);
ellipse(234,275,30,30);
ellipse(183,288,30,30);
}
