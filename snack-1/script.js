// Creo array vuoto
let arrayWithNumbers = [];

let messOneElement = document.getElementById("message-one");
let messTwoElement = document.getElementById("message-two");

let outputElement = document.getElementById("results");


// Inizializzo somma per numero dentro array a 0
let sum = 0;

let number;

while (sum < 50) {

    let number = Number(prompt("Inserisci un numero"));

    if(isNaN(number)) {
        alert("Il numero inserito non è valido");
    }

    sum += number;

    if (sum < 50) {
        arrayWithNumbers.push(number);
        outputElement.innerHTML += number + '<br>';
    }
    
    
}  

messOneElement.innerHTML = "Hai inserito questi numeri:";
messTwoElement.innerHTML = "Il database ha raggiunto il suo limite ed è completo!";










