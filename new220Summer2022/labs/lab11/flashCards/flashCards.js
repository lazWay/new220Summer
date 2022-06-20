function myFunction(clicked) {
    if (clicked=="Indianapolis")//here it check if value is correct
    document.getElementById("answer").innerHTML = "It is Right Answer ::"+clicked; //message to div for user
    else
    document.getElementById("answer").innerHTML = "You have Choose Incorrect.True Answer is ::Indianapolis"; //message to div for user
}