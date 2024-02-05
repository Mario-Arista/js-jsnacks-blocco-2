// Mi creo 2 array 
const arrayOne = [3, 10, 45];

const arrayTwo = [12, 24, 25, 32, 55];

const outputElement = document.getElementById("results");


do {
    let numeroInserito = prompt("Inserisci un numero");

    if(isNaN(numeroInserito)) {
        alert("Devi inserire un numero");
    }

    arrayOne.push(numeroInserito);

    console.log(numeroInserito);
    console.log(arrayOne);
    console.log(arrayTwo);

    const newElement = document.createElement("li");
    outputElement.append(newElement);
    newElement.innerHTML = numeroInserito;
    newElement.classList.add("list-unstyled");

    const messageElement = document.querySelector("h2");
    messageElement.classList.remove("d-none");

    const lastElement = document.querySelector("h3");
    lastElement.classList.remove("d-none");
    
} while(arrayOne.length != arrayTwo.length);

