// Esercizio 02 - Pari e Dispari

/*
1. Domandare all'utente di scegliere tra pari e dispari e un numero da 1 a 5
2. Creare una funzione per generare un numero random da 1 a 5 per il computer
3. Sommare i due numeri
4. Creare una funzione per capire se la somma dei due numeri è pari o dispari
5. Stampare il vincitore
*/

// Fase di preparazione

// Funzioni

// Creo una funzione per generare un numero random da 1 a 5
function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber;
}

// Creo una funzione per determinare se un numero è pari o dispari
function checkEvenOrOdd(number) {
    const result = number % 2 === 0 ? "pari" : "dispari";
    return result;
}

// Fase di raccolta dati

// Recupero la scelta tra pari e dispari tramite prompt
const userChoice = prompt("Pari o Dispari:");
console.log("const userChoice =", userChoice, "type:", typeof userChoice);

// Recupero il numero scelto da 1 a 5 tramite prompt
const userNumber = parseInt(prompt("Numero (da 1 a 5):"));
console.log("const userNumber =", userNumber, "type:", typeof userNumber);

// Recupero il numero da 1 a 5 generato tramite funzione
const computerNumber = getRandomNumber();
console.log("const computerNumber =", computerNumber, "type:", typeof computerNumber);

// Fase di elaborazione e di produzione

// Sommo i due numeri
const sum = userNumber + computerNumber;
console.log("const sum =", sum, "type:", typeof sum);

// Utilizzo la funzione per controllare se la somma dei due numeri è pari o dispari
const result = checkEvenOrOdd(sum);
console.log("const result =", result, "type:", typeof result);

// Controllo e stampo il vincitore
const message = userChoice === result ? "L'utente ha vinto." : "Il computer ha vinto.";
console.log(message);