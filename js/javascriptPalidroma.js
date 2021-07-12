// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt('Inserisci una parola', 'radar');


var parolaDivisa = parola.split('');
console.log(parolaDivisa);

var parolaDivisa = parolaDivisa.reverse();
console.log(parolaDivisa);

var parolaInvertita = parolaDivisa.join('');
console.log(parolaInvertita);

if(parola == parolaInvertita){
  console.log('la parola è palindroma');
} else {
  console.log('la parola non è palindroma');
}
