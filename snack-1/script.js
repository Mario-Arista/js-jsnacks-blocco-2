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

}  

console.log("Tentativi fatti")
console.log(sum);
console.log(arrayWithNumbers);

const end = document.getElementById("results").innertext = `Hai raggiunto il limite di 50. I numeri che hai inserito sono ${number}. La somma di questi numeri è ${sum}`;








