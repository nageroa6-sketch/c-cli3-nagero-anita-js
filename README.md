# c-cli3-nagero-anita-js
# c-cli3-nagero-anita-js


VIDEO SPIEGAZIONI:


// esercizio distr. bevande


let scelta;


// istanzio e deciso senza valore;


do{

    // inserisco valore come prompt per sezionare numero e bevanda
    scelta = Number(prompt("inserisci il numero tra 1,2,3, per la bevanda desiderata."));
    //metodo number trasforma stringa in dato numero
//SEMPRE DENTRO AL DO CREO LE CONDIZIONI 1, 2, 3 

// INIZIO
switch (scelta) {
    case 1:
console.log("hai selezionato ACQUA");

    break;
       case 2:
console.log("hai selezionato coca-cola");
  break;
   case 3:
console.log("hai selezionato Birra");
  break;
  default:

  //scelta inserita - messaggio in console

  console.log("la scelta che hai inserito non vale, riprova..");

}


// fine ciclo 
// inserisco condizione x cui esce il mio messaggio se non fosse valida e di nuovo il promt in altrimenti per rifare la scelta-

}while(scelta < 1 || scelta > 3)


    // creato programma per la simulazione macchinetta con uso: DO WHILE E SWITCH!!!
