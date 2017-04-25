/* Moving things and staying on the canvas
Cory Byrne
Last updated 2017-04-25*/

//position variables
  var posX = 200;
  var posY = 200;
  var size = 200;
// speed variables
  var speedX = 5;
  var speedY = 5;  

function setup() {
	var myCanvas = createCanvas(400, 400);
	myCanvas.parent('MovingBouncing');
	frameRate(45);
}
	
function draw() {
	background(63, 191, 250); //background
	basketball (); //draw the first basketball
	basket (); //draw the basket
	speedY = speedY + 2;
	posX = posX + speedX;
	posY = posY + speedY;
	//friction
	speedX = speedX - 0.000001;
	speedY = speedY - 0.000001;
  
  // code for staying on the canvas

  if (posX > width-17.5) {    // the object has moved off the canvas to the right
      speedX = -speedX;
  }
  if (posX < 17.5) {    // the object has moved off the canvas to the left
      speedX = -speedX;
  }
  if (posY > height-17.5) {    // the object has moved off the canvas to the bottom
      speedY = -speedY;
  }
  if (posY < 0) {    // the object has moved off the canvas to the top
      speedY = -speedY;
  }
  //code for basketball hitting basket
  if (posX >= 276 && posX <280 && posY >= 179  && posY <= 250) { //ball hits front of backboard
	  speedX = -speedX;
  }
  if (posX >= 282 && posX<286 && posY >=249 && posY <=379) { //ball hits front of pole 
	  speedX = -speedX;
  }
  if (posX <= 333 && posX >307 && posY >= 179  && posY <= 250) { //ball hits back of backboard
	  speedX = -speedX;
  }
  if (posX <= 329 && posX >310 && posY >=249 && posY <=379) { //ball hits back of pole 
	  speedX = -speedX;
  }
  if (posX >= 295 && posX <= 315 && posY >= 159 && posY <= 164) { //ball hits top of basket 
	  speedY = -speedY
  }
}
	//function to create new ball on click
function mouseClicked() {
	basketball (); //create a new basketball
	posX = mouseX; // creates basketball at mouse X position 
	posY = mouseY; // creates basketball at mouse Y position 
	speedX = 1 + round(mouseX/100);
	speedY = round(mouseY/100);
}
	//basketball
function basketball() {
	stroke(0);
	fill(199, 93, 12);
	ellipse(posX,posY,35,35);
	noFill();
	strokeWeight(2);
	arc(posX,posY-10,27.5,9,0.0174,3.141); //top curved line on basketball
	line(posX-17.5,posY,posX+17.0,posY); //horizontal middle line on basketball
	arc(posX,posY+10,27.5,9,3.141,6.282); // bottom curve on basketball
	line(posX,posY-17.5,posX,posY+17.0); //verticle middle line on basketball
}
	//basket
function basket () {
	stroke(0);
	fill(112, 93, 93);
	rect(300,249,10,150); //pole
	fill(255, 255, 255);
	rect(295,177,20,71); //backboard
	noFill ();
	stroke(255, 0, 0);
	ellipse(270,247,50,7); //rim
}
