let cirX; // cir xPos
let cirY; // cir yPos
let cirXSpeed = -2;
let cirYSpeed = 2;
let cirR = 30; 

let rectW = 400;
let rectH = 50; 

let rectX = -400; // rect xPos
let rectY = 600; // rect yPos
let rectXSpeed = 2; //xPos movement

function setup(){
    createCanvas(800,700);
    cirX = width - 2*cirR;
    cirY = 2*cirR;
}

function draw(){
    background(255);

    ellipse(cirX, cirY, 2*cirR, 2*cirR); // make a cir

    cirX += cirXSpeed;
    cirY += cirYSpeed;

    rect(rectX, rectY, rectW, rectH); // make a rect
        if(rectX > width) {
            rectX = -rectW; 
        }
        //new Xpos
    rectX += rectXSpeed; 
    if(collideRect( cirX, cirY, rectX, rectY, rectH)) cirYSpeed = -cirYSpeed; // create collideRect fn

    function collideRect(cirX,cirY,rectX,rectY, rectW, rectH){
        if (cirY + cirR > rectY && cirY + cirR < rectY + rectH) { // if cY & cR are on the same axis, 
            return true;
        if (cirX - cirR > rectX && cirX - cirR < rectX + rectW) {
            return false;
        }
        }
    }
}
