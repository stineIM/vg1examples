let header = document.getElementById("header");
header.innerText = "Hei";
header.style.color = "green";

const temp = 23; 

let number1 = 30;

let number2 = 20; 
let result; 

result = 100; 
result = 150;

let text = "Resultatet blir: " + result; 

console.log(text); 

result = number1 + 23; 

result = "hei"; 

result = 100; 

// Einlinje kommentar 

/*
text = "Resultatet blir: " + result;

console.log(text);

alert("Hallo!");

let firstName = prompt("Kva er navnet ditt?"); 
header.innerText = "Velkommen, " + firstName; 
*/ 

function buttonClick() {
    document.getElementById("header").style.display = "none";
}

function showImage() {
    document.getElementById("icecream").style.display = "block";
}
