
//Declare Variable for changing the square
let changeSq  = document.getElementById("changeSq");

//Customize changeSq
changeSq.innerHTML = "black";
changeSq.style.width = "100px";
changeSq.style.height = "100px";

//INTERACTION;  color to black when mouse over element.
//INTERACTION;  color to blue when mouse is not over element.

function changeTheSq(){
    changeSq.style.backgroundColor = "#000000";
}
function changedSq(){
    changeSq.style.backgroundColor = "#000099";
}

//place the object on the page

//Customize changedSq
/*changedSq.innerHTML = "blue";
changedSq.style.backgroundColor = "#000099";
changedSq.style.width = "100px";
changedSq.style.height = "100px";

documentbody.appendchild(changedSq);
let changedSq = document.getElementById("changedSq");
*/



