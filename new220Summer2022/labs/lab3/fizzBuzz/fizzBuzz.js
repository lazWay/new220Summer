let positions = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function setup() {
    createCanvas(400,100);
    background(200)
}

function draw() { 
    console.log (positions);
    
    for (var i = 0; i < positions.length; i++){
        circle( positions[i], 50, 10)
        fill(0, 0, 0);
        
    }
}