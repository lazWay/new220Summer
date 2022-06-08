let drop = [20,50,80,110,140,170,200,230,260,290,320,350,380]
let xSpeed = 5;

function setup(){
    createCanvas(800, 400);
    fill(0,102);
    noStroke();
} 

function draw(){
    background(255);
   
    rect(mouseX, mouseY, 80, 30,);//draw aRect on the screen
    
    fill(64, 22, 15, )// draw aRect 'brick' color

    if (mouseIsPressed === true){ //mouseIsPressed
       
    rect(mouseX,i*[drop], 80, 30,); //brick moving with mousePos
    }
        while (mouseIsPressed === true){
            for (var i = 0; i < 13; i++) {
                console.log(drop[i]);
                circle(i*30,drop[i],dripSize)
                fill(0,0,dripColor);
                drop[i] = drop[i] + xSpeed;   
        }; //moving yDrip 
        
}
}
