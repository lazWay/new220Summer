lights = ['stop', 'slow', 'go'] // array for lights

var dvGreen = document.getElementById ("green");
var dvRed = document.getElementById ("red");
var dvYellow = document.getElementById ("yellow");

function setup(){
    createCanvas(100, 200);
    background(237, 190, 33);
    
}
function draw (){
    
    ellipse(50, 60, 50);
    noStroke();

for (var dvGreen = 0; dvGreen < 40 ; dvGreen++) {
    fill (0,200,0);
    stroke(100);
        for (var dvYellow = 50; dvYellow < 100 ; dvYellow++) {
        fill (227, 220, 14); 
        stroke(100);
            for (var dvRed = 120; dvRed < 160 ; dvRed++) { 
            fill (255,0,0);
            stroke(100);
           }
        }
    }
}

/*
function startTrafficSignal () {
    var green=document.getElementById("green");
    var red=document.getElementById("red");
    var yellow=document.getElementById("yellow");
}

var timer = setInterval(function () {
    startTrafficSignal();
},12000);

startTrafficSignal();*/