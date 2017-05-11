/* Traffic Lights
Cory 
Last Updated 2017-05-09
*/

var startTime = 0; //create variable called 'startTime' and set value to 0

function setup() {
	var myCanvas = createCanvas(400, 400);
	myCanvas.parent('Traffic Lights'); //create id for p5 sketch inorder to be able to insert it in html code
	background(136, 188, 247); //create background 
}
function draw() {
if (startTime === 0) { // at the beginning of the sketch have the following:
	lights (); //create traffic lights
	g1on (); //have green light #1 on
	g2off (); //have green light #2 off
	y1off (); //have yellow light #1 off
	y2off (); //have yellow light #2 off
	r1off(); //have red light #1 off
	r2on(); //have red light #2 on
	startTime = millis(); //start timer
}
if ((millis () - startTime) >= 10000 ) { //when timer reaches 10 seconds do the following:
	g1off (); //turn green light #1 off
	y1on (); //turn yellow light #1 on
}
if ((millis () - startTime) >= 13000 ) { //when timer reaches 13 seconds do the following:
	r1on (); //turn red light #1 on
	y1off (); //turn yellow light #1 off
	r2on (); //turn red light #2 on
}
if ((millis () - startTime) >= 15000 ) { //when timer reaches 15 seconds do the following:
	r2off (); //turn red light #2 off
	g2on (); //turn green light #2 on
}
if ((millis () - startTime) >= 25000 ) { //when timer reaches 25 seconds do the following:
	g2off (); //turn green light #2 off
	y2on (); //turn yellow light #2 on
}	
if ((millis () - startTime) >= 28000 ) { //when timer reaches 28 seconds do the following:
	y2off (); //turn yellow light # 2 off
	r2on (); //turn red light #2 on
}	
	
}	
function lights (){ //function to create drawing for the traffic lights
	fill(0, 0, 0);
	rect(50,50,100,250); //left traffic light
	fill(105, 98, 98);
	rect(86,301,25,102); //left pole
	fill (0);
	rect(250,50,100,250); //right traffic light
	fill(105, 98, 98);
	rect(289,301,25,102); //right pole
}
 //green lights
function g1off (){ //function to create drawing of green light #1 off
	fill(0, 140, 0);
	ellipse(100,250,65,65);
}
function g2off (){ //function to create drawing of green light #2 off
	fill(0, 140, 0);
	ellipse(300,250,65,65);
}
function g1on (){ //function to create drawing of green light #1 on
	fill(0, 255, 0);
	ellipse(100,250,65,65);
}
function g2on (){ //function to create drawing of green light #2 on
	fill(0, 255, 0);
	ellipse(300,250,65,65);
}
 //yellow lights
function y1off (){ //function to create drawing of yellow light #1 off
	fill(145, 145, 0);
	ellipse(100,175,65,65);
}
function y2off (){ //function to create drawing of yellow light #2 off
	fill(145, 145, 0);
	ellipse(300,175,65,65);
}
function y1on (){ //function to create drawing of yellow light #1 on
	fill(255, 255, 0);
	ellipse(100,175,65,65);
}
function y2on (){ //function to create drawing of yellow light #2 on
	fill(255, 255, 0);
	ellipse(300,175,65,65);
}
 //red lights
function r1off (){ //function to create drawing of red light #1 off
	fill(156, 0, 0);
	ellipse(100,100,65,65);
}
function r2off (){ //function to create drawing of red light #2 off
	fill(156, 0, 0);
	ellipse(300,100,65,65);
}
function r1on (){ //function to create drawing of red light #1 on
	fill(255, 0, 0);
	ellipse(100,100,65,65);
}
function r2on (){ //function to create drawing of red light #2 on
	fill(255, 0, 0);
	ellipse(300,100,65,65);
}
