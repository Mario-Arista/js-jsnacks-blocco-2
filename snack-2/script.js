// Prima genero un numero casuale 
const randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);


// Inizializzo variabile per chiedere utente numero
let indovinato = false;

while (!indovinato) {
    let lotteria = Number(prompt("Indovina il numero da 1 a 100 (metti 0 per uscire)"));

    if (lotteria === 0) {
        indovinato = true;

    } else if (lotteria > randomNumber)  {

        alert("hai scelto un numero più alto");
        console.log("Numero troppo alto. Prova ancora!")
        
    } else if (lotteria < randomNumber) {

        alert("hai scelto un numero più basso");
        console.log("Numero troppo basso. Prova ancora!")
    } else {

        indovinato = true;
        console.log("Hai indovinato!")
    }
}

let end = document.getElementById("results").innerHTML = `Il numero era ${randomNumber}... Se lo hai indovinato bravissimo! Se sei uscito premendo 0, che delusione!`;

