function setup() {
  createCanvas(400, 400);
}

function draw() {
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
}
