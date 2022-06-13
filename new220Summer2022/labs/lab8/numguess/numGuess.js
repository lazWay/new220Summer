let txtGuess = document.getElementById("txtGuess"); // ref index.hmtl div id= dvGuess
let dvResult = document.getElementById("dvResult"); // ref index.html divResult


// fn takes a number value from the input box and produces a random number result and output. 
function guess() {
    let numGuess = Number(txtGuess.value); // converts txtGuess.value (string) into a numeric value.
    let randomNum = 1 + Math.floor(Math.random() * numGuess); // results a random number 0:20.
   
    dvResult.innerHTML = randomNum; // outputs txt, in this case, the result of randomNum.
    randomNum.value = ""; // clearing out value

        if (txtGuess.value == 7){
        dvResult.innerHTML = "WIN!"
        if (txtGuess.value > 7)
        dvResult.innerHTML = "lower.."
        if (txtGuess.value < 7){
            dvResult.innerHTML = "higher ... "
        } else {dvResult.innerHTML = randomNum}
      
            
    }
}

