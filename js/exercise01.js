// Esercizio 01 - Palindromo

/*
1. Domandare all'utente una parola
2. Creare una funzione per capire se la parola inserita è un palindromo
*/

// Fase di preparazione

// Creo la funzione
function isPalindrome(word) {
    // Creo una variabile per salvare la parola invertita
    const reverseWord = word.split("").reverse().join("");
    // Controllo se la parola inserita e la stessa invertita coincidono
    const result = word === reverseWord ? true : false;
    return result;
}

// Fase di raccolta dati

// Recupero la parola tramite prompt
const word = prompt("Parola:");
console.log("const word =", word, "type:", typeof word);

// Fase di produzione

// Stampo il risultato
console.log(isPalindrome(word));