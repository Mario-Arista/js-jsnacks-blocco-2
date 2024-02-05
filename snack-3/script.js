/*
Snack 3
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi
fino a quando ne avrà tanti quanti l’altro.
(Se iniziate con un array da 3 elementi e l'altro da 5,
eseguite istruzioni sinchè non ne hanno entrambi 5)
*/

// Mi creo 2 array 
const arrayOne = [3, 10, 45];

const arrayTwo = [12, 24, 25, 32, 55];


do {
    let numeroInserito = prompt("Inserisci un numero");

    if(isNaN(numeroInserito)) {
        alert("Devi inserire un numero");
    }

    arrayOne.push(numeroInserito);
    console.log(numeroInserito);
    console.log(arrayOne);
    console.log(arrayTwo);


} while(arrayOne.length != arrayTwo.length);