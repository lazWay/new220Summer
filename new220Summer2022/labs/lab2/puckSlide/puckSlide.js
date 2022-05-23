function setup(){
    background (150)
}   

function draw(){
    createCanvas(200, 100);

    fill(255, 0, 0, ) // red
    
    
    if (mouseIsPressed === true) { // mouse command
        fill(0, 0, 255, ) // blue  
        ellipse(50, 75, 50, 50);
      } else {
        rect(25, 50, 50, 50);
      }
    fill(0, 0, 255, ) // blue
      ellipse(150,75,50,50);

    
}