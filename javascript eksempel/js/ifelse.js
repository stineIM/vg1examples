let ageCar = 18; 
let ageScooter = 16; 
let personAge = prompt("Alder:"); 

if(personAge >= ageCar) {
    console.log("Person1 er gammal nok til å kjøre bil."); 
}
else if(personAge >= ageScooter){
    console.log("Person1 er gammal nok til å kjøre moped."); 
}
else {
    console.log("Du er ikkje gammal nok til å ta førarkort.");
}

