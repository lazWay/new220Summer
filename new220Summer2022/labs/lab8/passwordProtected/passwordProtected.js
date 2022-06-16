let userName = document.querySelector("#txtName"); // assigns userName to an input field on the userend.
let dvOutput = document.querySelector("#dvOutput"); // assings a response to the user's input. 
let password = document.querySelector("#txtPassword"); // assigns a second txt entry password** for future relation to the userName and password sequence.

//fn to create a username and password input field. 
function access(){
    console.log (userName) ;
    dvOutput.innerHTML = "" + password;
console.log (userName,password)

    if ((userName.value == "Ron") && (password.value == "Ronnie")){ // makes a relation to two objects and the correct series of string inputs.
    dvOutput.innerHTML = "Success" 
    } else {
        dvOutput.innerHTML = "Wrong information " + userName.value; // prompts user that input is wrong.
    }
}