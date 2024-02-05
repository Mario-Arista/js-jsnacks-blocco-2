/*
SNACK 2 Genera un numero casuale tra 1 e 100
poi chiedi all'utente di indovinare il numero. 
Il programma poi deve far comparire un messaggio
"il numero è troppo alto" oppure "il numero è troppo basso"
nel momento in cui il numero detto dall'utente non è 
perfettamente uguale al numero estratto in modo casuale.
Quando l'utente trova il numero, fateglielo sapere!
*/

// Prima genero un numero casuale 
const randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);


// Inizializzo variabile per chiedere utente numero
let indovinato = false;
let tentativi = 0;

while (!indovinato) {
    let lotteria = Number(prompt("Indovina il numero da 1 a 100:"));

    if (lotteria > randomNumber)  {

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

