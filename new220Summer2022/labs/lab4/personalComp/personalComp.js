var x = [];
var w = [];

let xPos = 0;
let xSpeed = 8;

    function setup() {
        createCanvas(3000, 3000);
        noStroke();
        frameRate(1000); // object scrolling rate
        rect(0, 0, 150, 20); // 
        fill(255, 200);

    for (var i = 0; i < 4500; i++) {
        x[i] = random(-800, 100);
 }
}
    function draw() {
        background(255);
        fill(255, 0, 0, 25 );

    for (var i = 0; i < x.length; i++) {
        x[i] += 1.8;

        //looping through
        var y = i * .02;
        for (var top = 0; top < 13; top++){
            rect(x[i], y+top*180, 12, 12 );
       } 
        
        xPos = xPos + xSpeed;
        if (xPos > 100){
            xPos=0;
           }
        
    }
 }