
function setup() {
    createCanvas(200, 200);
}
//2 loops; 1 in the other
function draw() { 
    for(var i = 0; i < 5; i++) {
        
    for(var x = 0; x < i ; x++){
        fill(255, 0, 0)  //color; red
        rect(25*x, 25*i, 25, 25)
    }   
        
      }
    }