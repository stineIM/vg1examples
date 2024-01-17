const checkDuck = () => {
    let walks = document.getElementById("walks").checked;
    let talks = document.getElementById("talks").checked; 
    let text = document.getElementById("text"); 
    text.innerText = ""; 

    if (walks == true && talks == true) {
        text.innerText = "Dette er en and"; 
    }
}