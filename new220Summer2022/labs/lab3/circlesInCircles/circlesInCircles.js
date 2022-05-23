
let centerpoint = 500


function setup(){
    createCanvas(1000, 1000);
}

function draw(){
    background(0);    
    noFill();
   
           for(var i = 0; i < 25; i++) {
           stroke(255 - (i*15));
       
            circle(centerpoint, centerpoint, i * 55);
        
       }
    
    }

    
      

