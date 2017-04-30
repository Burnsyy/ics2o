/* Using the Mouse
Cory 
Last Updated 2017-04-27
*/
	var colourR = 0;
	var colourG = 0;
	var colourB = 0;
	var colour = (colourR,colourB,colourG);
	var bg1 = 242
	var bg2 = 242
	var bg3 = 242
	
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
	//code to crerate drawing
	if (mouseIsPressed && mouseX >= 3 && mouseX <= 18 && mouseY >= 3 && mouseY <= 18) {
	if (mouseIsPressed)  {
      noStroke ();
      fill (colourR, colourG, colourB);
      ellipse (mouseX,mouseY,15,15);
	}}
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
	if (keyIsPressed(97)) { //if '1' is pressed on the numpad make background white
        bg1 = 255
	bg2 = 255
	bg3 = 255
    }
	if (keyIsPressed(98)) { //if '2' is pressed on the numpad make background black
        bg1 = 0
	bg2 = 0
	bg3 = 0
    }
	if (keyIsPressed(99)) { //if '3' is pressed on the numpad make background blue
        bg1 = 0
	bg2 = 0
	bg3 = 255
    }
	if (keyIsPressed(100)) { //if '4' is pressed on the numpad make background red
        bg1 = 255
	bg2 = 0
	bg3 = 0
    }
	if (keyIsPressed(101)) { //if '5' is pressed on the numpad make background orange
        bg1 = 255
	bg2 = 165
	bg3 = 0
    }
	if (keyIsPressed(102)) { //if '6' is pressed on the numpad make background yellow
        bg1 = 255
	bg2 = 255
	bg3 = 0
    }
	if (keyIsPressed(103)) { //if '7' is pressed on the numpad make background green
        bg1 = 0
	bg2 = 100
	bg3 = 0
    }
	if (keyIsPressed(104)) { //if '8' is pressed on the numpad make background purple
        bg1 = 160
	bg2 = 32
	bg3 = 240
    }
	if (keyIsPressed(105)) { //if '9' is pressed on the numpad make background pink
        bg1 = 255
	bg2 = 20
	bg3 = 147
    }
	if (keyIsPressed(96)) { //if '0' is pressed on the numpad make background gray
        bg1 = 190
	bg2 = 190
	bg3 = 190
    }
}
