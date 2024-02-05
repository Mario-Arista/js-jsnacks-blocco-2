/*
Snack 4
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.
*/
alert("Inserisci un numero. se è pari ti stampo il numero, sennò quello successivo");


let tentativi = 0;

do {

    let numeroInserito = prompt("Inserisci un numero. Scrivi STOP se vuoi fermare il loop!");

    const outputElement = document.getElementById("result");

    if (numeroInserito % 2 == 0) {
        alert("Hai inserito:" + numeroInserito);
    } else {
        alert("Hai inserito:" + (numeroInserito + 1));
    }

    tentativi++;


}while (richiesta === "STOP");

