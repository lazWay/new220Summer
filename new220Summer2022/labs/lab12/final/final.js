var memoryArr = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8']; // array of values for cards to match

var memoryValues = []; // empty array for temporary storing 

var memoryCardIds = []; // empty array for temporary storing 

var tiles_flipped = 0; // variable 

//prototype to shuffle the array values

Array.prototype.memory_shuffle = function(){ 

var i = this.length, j, temp;

while(--i > 0){

j = Math.floor(Math.random() * (i+1));

temp = this[j];

this[j] = this[i];

this[i] = temp;

}

}

//Flip card and find match

function flipCard(cardTile, val){debugger; // breakpoint in script - init debugging if necessary

if(cardTile.innerHTML == "" && memoryValues.length < 2){ //get a value from the memory array

cardTile.innerHTML = val; //show card value

if(memoryValues.length == 0){ // always provide a number from the array.memoryValues

memoryValues.push(val); // force a value from the memory array

memoryCardIds.push(cardTile.id); //empty array

} else if(memoryValues.length == 1){

memoryValues.push(val); // force a value from the memory.array

memoryCardIds.push(cardTile.id); 

if(memoryValues[0] == memoryValues[1]){ 

tiles_flipped += 2; // clear 2 cards; the two correct cards the user chooses.

// Clear both arrays

memoryValues = []; // restarting a cardflip; empty array

memoryCardIds = []; // restarting a cardflip; empty array

// Check to see if the whole board is cleared

if(tiles_flipped == memoryArr.length){ // if the # of cards matched == the number of cards in the array
//prompt

alert("You Won! Congrats!!!");

}

} else { // if more values are left unmatched from the arrays, turn cards over.


//  fn to "flip" cards from showing no value, to showing a value.
  function flip2Back(){

// Flip the 2 tiles back over

var tile_1 = document.getElementById(memoryCardIds[0]);

var tile_2 = document.getElementById(memoryCardIds[1]);

tile_1.innerHTML = ""; // remove stored value to no value.

tile_2.innerHTML = ""; // remove stored value to no value.


// Clear both arrays

memoryValues = []; // empty stored array value

memoryCardIds = []; // empty stored array value

}

setTimeout(flip2Back, 700); // while neither values match, wait a moment to init.flipCard

}

}

}

}

//This method triggers when all elements inside the html loaded

function LoadElements() 

{

memoryArr.memory_shuffle(); // the array and its bound function

var card = document.querySelectorAll(".card"); // assigning card to all .card div's 

//loop through cards put same listener on e

for(var i = 0; i < card.length; i++) { // for loop to init.card.array

card[i].setAttribute("id", "card_" + i + "_" + memoryArr[i]); 

}

}

//Dom listener to set the click event of card

document.addEventListener('DOMContentLoaded', function() {

document.body.addEventListener('click', function ( event ) {

if(event.srcElement.className == 'card' ) {

var idElement = event.srcElement.id.split("_");

flipCard(event.srcElement, idElement[2]);

};

});

});