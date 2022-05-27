var x = [];
let xPos = 0;
let xSpeed = 5;

    function setup() {
        createCanvas(1000, 240);
        noStroke();
        frameRate(100); // object scrolling rate
        rect(0, 0, 150, 110); // 
        fill(255, 200);

    for (var i = 0; i < 10000; i++) {
        x[i] = random(-800, 100);
 }
}
    function draw() {
        background(255);
        fill(255, 0, 0, 25 );

    for (var i = 0; i < x.length; i++) {
        x[i] += 0.8;
        var y = i * .019;
        rect(x[i], y, 12, 12, );

        xPos = xPos + xSpeed;
        if (xPos > 100){
            xPos=0;
           }
        
    }
 }