let dvHunger = document.getElementById ("hunger")
let dvHappiness = document.getElementById ("happiness")
let dvAge = document.getElementById ("age")


let vPet =  {
    name: "Moe the Mammoth", 
    happiness: 0, 
    energy: 100,
    hunger: 10,
    age: 1,
}

function playWithMoe(){
vPet.happiness = vPet.happiness + 2;
dvHappiness.innerHTML= vPet.happiness

}
function feedMoe(){
    vPet.energy = vPet.energy + 1;
    dvHunger.innerHTML= vPet.hunger

}
function growthMoe(){
    vPet.age = vPet.age + 1;
    dvAge.innerHTML= vPet.age

}

