/* Using the Mouse
Cory 
Last Updated 2017-04-27
*/
	var colourR = 0;
	var colourG = 0;
	var colourB = 0;
	var colour = (colourR,colourB,colourG);
	bg1 = 242
	bg2 = 242
	bg3 = 242
	
function setup() {
	createCanvas(400, 400);
	background(bg1, bg2, bg3);
}
		//DONT FORGET COMMENTS
function draw() {
	shapeSelection (); //draw shape menu on top left
	noStroke ();
	fill(bg1, bg2, bg3); //create background behind letters
	rect (308, 0,44,50);
	stroke (1);
	colourSelection (); //draw colour display on top right
}

function shapeSelection () {
	noFill();
	rect(0,0,36,110); 
	fill(colourR, colourG, colourB);
	rect(3,3,15,15);
	ellipse(10,33,15,15);
	rect(3,45,30,30);
	ellipse(17,94,30,30);
}	

function colourSelection () {
	if (keyIsDown(82)) { //if 'R' is pressed make colour more red
      colourR = colourR + 3;
    }
	if (keyIsDown(69)) { //if 'E' is pressed make colour less red
      colourR = colourR - 3;
    }
	if (keyIsDown(66)) { //if 'B' is pressed make colour more blue
      colourB = colourB + 3;
    }
	if (keyIsDown(86)) { //if 'V' is pressed make colour less blue
      colourB = colourB - 3;
    }
	if (keyIsDown(71)) { //if 'G' is pressed make colour more green
      colourG = colourG + 3;
    }
	if (keyIsDown(70)) { //if 'F' is pressed make colour less green
      colourG = colourG - 3;
    }
	if (keyIsDown(32)) { //if 'spacebar' is pressed make colour black (reset colour)
	  colourR = 0;
	  colourB = 0;
	  colourG = 0;
	}
	fill(colourR,colourG,colourB);
	rect(350,0,50,50);
	//text beside rectangle on top right
	text (colourR,325,10); //display for amount of red in colour
	text (colourG,325,30); //display for amount of green in colour
	text (colourB,325,50); //display for amount of blue in colour
	text ("R:",310,10); //display 'R:' beside amount of red in colour
	text ("G:",310,30); //display 'G:' beside amount of green in colour
	text ("B:",310,50); //display 'B:' beside amount of blue in colour
}

function background () {
	
}