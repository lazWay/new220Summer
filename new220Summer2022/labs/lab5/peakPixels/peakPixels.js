let peak = document.getElementById("peak");
peak.style.backgroundColor = "#000099";
peak.style.width = "100px";
peak.style.height = "100px";

//Declare function for changing the peak
let divWidth = 100
//peak.offsetWidth + (1.1*peak.offsetWidth) + "px";
let divHeight = 100
//peak.offsetHeight + (1.1*peak.offsetHeight) + "px";

function peakPx() {
divWidth *= 1.1
divHeight *= 1.1
 
    //Customize peak
        peak.style.width = divWidth + "px";
        peak.style.height = divHeight + "px";

}
