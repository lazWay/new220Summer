let xPos = 0;
let xSpeed = 5;
let yDrip = [20,50,80,110,140,170,200,230,260,290,320,350,380]; //array (++*30)
var dripColor = math.floor(Math.random() * (50 - 200))+5; //dripSize
var dripColor = math.floor(Math.random() * (0 - 245))+1; //dripSize

function setup(){
    createCanvas(400, 400);
    frameRate(10); //framerate 10px
    }

function draw(){
    var dripSize = Math.floor(Math.random() * (1 - 5))+2; //drip diam. random
            
    fill(40, 150, 250,30) //blue drip + transparency
    noStroke();

       for (var i = 0; i < 13; i++) {
        console.log(yDrip[i]);
        circle(i*30,yDrip[i],dripSize)
        fill(0,0,dripColor);
        yDrip[i] = yDrip[i] + xSpeed; //moving yDrip 
        if (yDrip[i] > 400){
            yDrip[i] = 0;
        }
      
    } 
}
