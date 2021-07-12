// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// 1 chiedi all'utente di scegliere tra pari e dispari
// 2 chiedi all'utente di scegliere un numero da 1 a 5
// 3 creare una funzione che generi un numero random da 1 a 5 (FUNZIONE)
// 4 sommiamo i due numeri (quello dell'utente e quello del pc)
// 5 creare una funzione che stabilisca se la somma è pari o dispari (FUNZIONE)
// 6 dichiara chi ha vinto

/*----------------------------FUNZIONI---------------------- */

function pariDispari(numero) {
    if (numero % 2 === 0) {
    return 'pari';
    } 
    return 'dispari';
}

function numeroCaso(min, max) {
   return Math.floor(Math.random() * (max - min)+min);
}

/*----------------------------VARIANTI---------------------- */

var pariOdispari = prompt('Pari o dispari?', 'PARI   DISPARI');
var numeroUtente = parseInt(prompt('scegli un numero da 1 a 5', '4'));
var numero = numeroCaso(1, 5);
var somma = numero + numeroUtente;

/*-----------------------DICHIARAZIONI----------------------- */

if (pariDispari(somma) == pariOdispari) {
    var win = document.getElementById('v_p');
    v_p.innerHTML = ('HAI VINTO!');
} else {
    v_p.innerHTML = ('HAI PERSO!');
}

/*----------------------------STAMPA-------------------------- */

var parDisp = document.getElementById('Par_Disp');
Par_Disp.innerHTML = pariOdispari;

var numeroU= document.getElementById('num_ut');
num_ut.innerHTML = numeroUtente;

var numeroComp= document.getElementById('num_Pc');
num_Pc.innerHTML = numero;

var sommaPcUt= document.getElementById('nUnPC');
nUnPC.innerHTML = somma;