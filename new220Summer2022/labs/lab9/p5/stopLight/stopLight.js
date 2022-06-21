lights = ['#FF0000', '#FF00FF', '#00FF00'] // array for lights

function setup(){
    createCanvas(100, 200);
    background(237, 190, 33);
}
function draw (){

for (var i = 0; i < lights.length; i++) {
    console.log([i]);
        ellipse(150, 0, 50);
        noStroke();
        fill (lights[0]);
    }
}