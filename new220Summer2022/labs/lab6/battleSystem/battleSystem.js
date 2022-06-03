var baseHealth= 1000        // health pool
var baseAbility= "bite"    // unique attack
var baseEnergy= 500     // energy pool
var baseAttack= 50     // default attack strength
var baseEnergyTax= .25    // deduct from energy pool    
var baseShield= 200      // deduct from defend

let dvAttack= document.getElementById ("tysonAttack")
let dvAbility= document.getElementById ("tysonAbility")
let dvHealth= document.getElementById ("tysonHealth")

//Declare function for changing the baseHealth
let healthBar= document.getElementById("damage");
healthBar.style.backgroundColor= '#008000'
healthBar.style.width= "500px"
healthBar.style.height= "100px"

let divHealth = baseHealth
healthBar.offsetWidth + "px";
healthBar.style.width = tysonAttack + "px";

//(Lower health) increasing attack value > 1000
function damage() {
dvHealth = (tysonAttack);
console.log(tysonAttack,baseHealth);

if (player1.attack > baseHealth){
    healthBar.style.backgroundColor= "#000000"; // CONTROL //
   }    
}

let player1=  {
    name: "Tyson", 
    attack: (140 + baseAttack),    // add int; baseAttack
    ability: ('bite'),             // tyson is a 'BITER'
    
    health: (2500 + baseHealth),   // add int; baseHealth
    energy: (1200 + baseEnergy ),  // add int; baseEnergy
    
}
function tysonAttack(){
    player1.attack= (baseAttack + player1.attack);
    dvAttack.innerHTML= player1.attack;
    damage();
   
}
function tysonAbility(){
    player1.ability= (baseAbility);
    dvAbility.innerHTML= player1.ability;
}
function tysonHealth(){
    player1.defend= baseShield - 100;
    dvHealth.innerHTML= player1.ability;
}

let dvHolyAttack= document.getElementById ("holyfieldAttack")
let dvHolyAbility= document.getElementById ("holyfieldAbility")
let dvHolyHealth= document.getElementById ("holifieldHealth")

let player2=  {
    name: "Holyfield", 
    attack: (95 + baseAttack),    // add int; baseAttack
    ability: (165 + baseAttack),   // add int; baseAbility
    defend: (400 + baseShield),    // add int; baseDefend 
    health: (2700 + baseHealth),   // add int; baseHealth
    energy: (1000 + baseEnergy ),  // add int; baseEnergy
}

function holyfieldAttack(){
    player2.attack= player2.attack + baseAttack;
    dvHolyAttack.innerHTML= player2.attack;
}

function holyfieldAbility(){

}

function holyfieldDefend(){

}
    


/*
function tysonAbility(){
player1.ability= player1.ability + baseAttack

}

function tysonDefend(){
    player1.defend= player1.defend 

}
*/