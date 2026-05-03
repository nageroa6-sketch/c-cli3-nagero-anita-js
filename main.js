// Selfwork Cicli 3
// Scrivi un programma che simuli un distributore di bevande e che rispetti i seguenti passaggi:
// l’utente deve poter inserire un numero (ipotizziamo che l'utente possa inserire SOLO numeri)
// in console dev’essere stampato il messaggio del distributore
// se inserisce 1, seleziona acqua e quindi stampare in console: “E’ stata selezionata l’acqua”
// se inserisce 2, seleziona coca cola e quindi stampare in console: “E’ stata selezionata coca cola”
// se inserisce 3, seleziona birra e quindi stampare in console: “E’ stata selezionata birra”
// se inserisce qualcosa di diverso, il programma dovra’ riproporre automaticamente la domanda di partenza

// Extra: correggere l'esercizio facendo in modo che l'utente non sia obbligato ad inserire 
// 
//solo numeri ma possa scrivere ciò che vuole. Nel caso il dato inserito non sia una scelta 
// accettabile il programma dovrà rifiutare la risposta e riproporre automaticamente la domanda di partenza.




// let scelta;
// let continua= true;


// while (continua) {

//  scelta = Number(prompt("scegli la bevanda: 1 = acqua,2 = coca-cola, 3 =birra")); 


//         if (scelta === 1) {
//          alert("E’ stata selezionata l’acqua");



//           continua=false;



//         } else if (scelta === 2) {


//             alert("E’ stata selezionata coca cola");

//         continua=false;



//         } else if (scelta === 3) {


//            alert("E’ stata selezionata birra");

//         continua=false;



//         } else {
//              alert("Scelta sbagliata! non è valido! ritorna all'inizio");
             

           
// }

// }




// ALTRO MODO



let scelta= Number(prompt("Scegli per favore; 1, 2, 3, acqua, coca-cola o birra. (qualsiasi altro non è valido che inserirai..!!"));

switch(scelta) {
    case 1:
        alert("Hey! Hai scelto acqua!");
        break;

        // metto una pausa

        case 2:
            alert("Hai scelto della coca-cola!");
            break;
            case 3:
     alert("Hai scelto birra!")
     break;
     default:
     alert("scelta non valida");
}
        
