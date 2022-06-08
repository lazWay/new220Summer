let ship;
let aliens = []; // alien array
let lasers = []; // laser array
let points = 0;

/*
function preload(){
    alien1a = loadImage('img/alien1a.png');
    alien1b = loadImage('img/alien1b.png');
    alien2a = loadImage('img/alien2a.png');
    alien2b = loadImage('img/alien2b.png');
}
*/

function setup () {
    createCanvas(600, 400);
    frameRate(10);
    imageMode(CENTER);

    ship = new Ship();

    // bottom row of aliens
    let startX = 80;
    let startY = 80;
    for (var i = 0; i < 6; i++) {
        aliens[i] = new Alien (i * startX + 80, startY, alien1a, alien1b, 5);
    }

// top row of aliens
startY = 40;
let offset = 0;
    for (var j = 6; j < 12; j++) {
        aliens[j] = new Alien(offset * startX + 80, startY, alien2a, alien2b, 10);
        offset++;
    }
    console.log(aliens);
}

function draw(){
    background (50);
    ship.show();
    ship.move();

 //move aliens - universal handler   
 var edge = false;
    for (var i = 0; i < aliens.length; i++){
        aliens[i].show();
        aliens[i].move();
        if (aliens[i].x > width || aliens[i].x < 0 ) {
            edge = true;
        }
        
        }
        // image animation 
        if (edge) {
            for (var k = 0; k < aliens.length; k++) {
                aliens[k].shiftDown();
            }
    }
    //display and move lasers
    for (var las = 0; las < lasers.length; las++){
        lasers[las].show();
        lasers[las].move();
        //collision detection
        for (var j = 0; j < aliens.length; j++){
            if (lasers[las].hits(aliens[j])){
                lasers[las].remove();
                points = points + aliens[j].pts;
                aliens.splice(j, 1); // remove an alien
            }
        } // end of alien loop
    } // end of laser loop #1

    //loop through lasers; remove lasers with flag
    for (var z = lasers.length - 1; z >= 0; z--) {
        if (lasers[z].toDelete) { 
            lasers.splice(z, 1); //remove laser from array
        }
    } // end of laser loop #2
    updateHUD();
    //check if game is over
    if (aliens.length <= 0) {
        gameOver();
    }

} // END OF GLOBAL DRAW FUNCTION

//Key Handlers
function keyReleased() {
    ship.setDir(0);
}

function keyPressed() {
    if (key === ' ') {
        var laser = new Laser(ship.x + (ship.width / 2), ship.y);
        lasers.push(laser);
    }
    if (keyCode === RIGHT_ARROW) {
        ship.setDir(1);
    } else if (keyCode === LEFT_ARROW) { 
        ship.setDir(-1);
    }
}


function updateHUD() {
fill (255);
text("Score: " + points, 10, 20);
text("Aliens Remaining: " + aliens.length, 70, 20);
}

function gameOver() {
    background(0);
    textSize(72);
    textAlign(CENTER);
    text("GAME OVER", width / 2, height / 2);
    noLoop();

}