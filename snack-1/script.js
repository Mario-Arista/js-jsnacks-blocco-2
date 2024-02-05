/*
Snack 1
Crea un array vuoto e chiedi all’utente un numero da 
inserire nell’array. Continua a chiedere i numeri 
all’utente e a inserirli nell’array fino a quando la 
somma degli elementi è minore di 50
*/

// Creo array vuoto
let arrayWithNumbers = [];

// Inizializzo somma per numero dentro array a 0
let sum = 0;

let number;

while (sum < 50) {

    let number = Number(prompt("Inserisci un numero"));

    if(isNaN(number)) {
        alert("Il numero inserito non è valido");
    }

    arrayWithNumbers.push(number);

    sum += number;

    console.log("Tentativi fatti")
    console.log(sum);
    console.log(arrayWithNumbers);

}   



