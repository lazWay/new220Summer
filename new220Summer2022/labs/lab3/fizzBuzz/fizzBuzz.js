function setup() {
    createCanvas(1500, 100);
    strokeWeight(8);
    }
   function draw() {
    background(204);
    noStroke();

    let prpCir = 3;
    let grnSq = 5;

    for (var i = 20; i < 1500; i += 60) {
    ellipse(i, 50, 20);
    fill(0,0,0); 

    if (i%prpCir == prpCir){ //i is divisible by 3 - fill purple
    fill(175, 50, 220);} 
    

    else if(i%grnSq == grnSq){ // i is divisible by 5 - green square
    rect(i, 40, 20, 20);
    fill(0,0,40);
    }
    else if (i%prpCir&&grnSq == prpCir&&grnSq){ // divisible by 3 and 5 - 
        rect(i, 40, 20, 20);
        fill(0, 20, 0);
    }
   }
}
   