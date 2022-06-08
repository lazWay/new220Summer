
let xCircle = 1000;
let yCircle = 1000;

function setup(){
    createCanvas(2000, 2000);
}

function draw(){
    background(255);    
    noFill();
        for(var i = 0.1; i < 50; i++) { // for loop to draw 25 circles
        stroke(255 - (i*35)); // stroke spaceing
        ellipse(xCircle, yCircle, i*40); // circle positioning
        }
    }

    
      

