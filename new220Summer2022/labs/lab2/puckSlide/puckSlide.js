function setup() {
  createCanvas(200, 100);
  
  strokeWeight(0);
}  
  function draw() {
    background(125, 125, 125);
    ellipse(mouseX, mouseY, 30, 30); //draw aCircle on the screen
      if (mouseX>100) //aCircle is on the right
        fill(255, 0, 0, ); // draw aCircle red
      else
        fill(0, 0, 255, ) // draw aCircle blue  
}