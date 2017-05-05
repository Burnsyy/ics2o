/* Traffic Lights
Cory 
Last Updated 2017-05-05
*/

var startTime = 0;

function setup() {
	createCanvas(400, 400);
	background(136, 188, 247);
}
function draw() {
if (startTime === 0) {
	lights ();	
	g1on ();
	g2off ();
	y1off ();
	y2off ();
	r1off();
	r2on();
	startTime = millis();
}
if ((millis () - startTime) >= 10000 ) {
	g1off ();
	y1on ();
}
if ((millis () - startTime) >= 13000 ) {
	r1on ();
	y1off ();
	r2on ();
}
if ((millis () - startTime) >= 16000 ) {
	r2off ();
	g2on ();
}
if ((millis () - startTime) >= 26000 ) {
	g2off ();
	y2on ();
}	
if ((millis () - startTime) >= 29000 ) {
	y1off ();
	r2on ();
}	
	
}	
function lights (){
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
function g1off (){
	fill(0, 140, 0);
	ellipse(100,250,65,65);
}
function g2off (){
	fill(0, 140, 0);
	ellipse(300,250,65,65);
}
function g1on (){
	fill(0, 255, 0);
	ellipse(100,250,65,65);
}
function g2on (){
	fill(0, 255, 0);
	ellipse(300,250,65,65);
}
 //yellow lights
function y1off (){
	fill(145, 145, 0);
	ellipse(100,175,65,65);
}
function y2off (){
	fill(145, 145, 0);
	ellipse(300,175,65,65);
}
function y1on (){
	fill(255, 255, 0);
	ellipse(100,175,65,65);
}
function y2on (){
	fill(255, 255, 0);
	ellipse(300,175,65,65);
}
 //red lights
function r1off (){
	fill(156, 0, 0);
	ellipse(100,100,65,65);
}
function r2off (){
	fill(156, 0, 0);
	ellipse(300,100,65,65);
}
function r1on (){
	fill(255, 0, 0);
	ellipse(100,100,65,65);
}
function r2on (){
	fill(255, 0, 0);
	ellipse(300,100,65,65);
}
