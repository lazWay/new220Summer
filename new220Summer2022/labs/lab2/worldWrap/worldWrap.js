let xPos = 0;
let xSpeed = 5;

function setup(){
    createCanvas(800,600);
}
function draw(){
    background(62,237,108)
    xPos = xPos + xSpeed; //moving aCircle
    circle(xPos,300,30); //aCircle that is moving
    fill(19, 71, 26);// fill aCircle 'green'
    console.log( xPos);
   if (xPos > 800){
    xPos=0;
   }
}
    

