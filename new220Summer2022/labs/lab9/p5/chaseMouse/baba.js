//Array containing set of 4 colours.
colours = ['red','green','blue','yellow'];

function setup() {
  
  // Create the canvas and the circle.
  createCanvas(400, 400);
  background(200);
  fill('red');
  ellipse(200, 200, 200, 200);
  
}

// to set colour.
function setColour(s) {
  fill(s);
  ellipse(200, 200, 200, 200);

}

// Click listener
function mousePressed(){
  
  // we will check the position of the mouse and match it with circle's radius
  // to determine if it's clicking the circle or not.

 if (dist(mouseX, mouseY, 200, 200) <= 100){
  setColour(colours[Math.floor(Math.random() * 4)]);

 }
}