
let aCircle = 500

function setup(){
    createCanvas(1000, 1000);
}

function draw(){
    background(100);    
    noFill();
        for(var i = 0; i < 25; i++) {
        stroke(255 - (i*100));
        ellipse(aCircle, aCircle, i*50);
        }
    }

    
      

