function setup() {
    createCanvas(500, 50);
    background(200)
}
// 25 black circles - forLoop
function draw () { 
    for (var b = 10; b < 500; b += 20) {
        ellipse(b, 25, 20);
        fill(0,0,0);
        stroke(255);
    }
// if divisible by 3 - forLoop
    for(var x = 0; x < b ; x++){
        ellipse(70*x, 25, 20);
        fill(150, 20, 255)  // purple
    }
// if divisible by 5 - forLoop
    for(var y = 0; y < b ; y++){
        rect(80*y, 15, 20, 20); // rectangle
        fill(0,255,0) // green
    }
// if divisible by 3 & 5 - forLoop
    for(var xy = 0; xy < b ; xy++){
    rect(250*xy, 15, 20, 20); // rectangle
    fill(0,0,220) // blue
}

}
