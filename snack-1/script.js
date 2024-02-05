// Creo array vuoto
let arrayWithNumbers = [];

let endElement = document.getElementById("results");

// Inizializzo somma per numero dentro array a 0
let sum = 0;

let number;

while (sum < 50) {

    let number = Number(prompt("Inserisci un numero"));

    if(isNaN(number)) {
        alert("Il numero inserito non è valido");
    }

    arrayWithNumbers.push(number);
    
    console.log("Tentativi fatti")
    console.log(sum);
    console.log("Cosa c'è dentro l'array?", arrayWithNumbers);
    

    sum += number;
    
}  

endElement.innerHTML = "Hai raggiunto il limite di 50!";











