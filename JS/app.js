
/*Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
per i multipli di 3 stampi “Fizz” al posto del numero e
per i multipli di 5 stampi “Buzz” al post del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.*/

/*Crea un container nel DOM,
aggiungendo un elemento html con il numero o la stringa corretta da mostrare.*/

//9. dichiara elemento container nel DOM selezionandolo per classe (querySelector)
const rowElement = document.querySelector(".row"); //object | null
//console.log(rowElement);


//1. scrivere funzione che parta da un indice di valore 0 
//  e che incrementi di 1 il suo valore se minore di 100.

for (let i = 0; i < 100; ++i) {

    const divElement = document.createElement("div"); //object

    divElement.classList.add("col");
    divElement.classList.add("num");

    //2. creare nuova variabile num con indice + 1 per arrivare a 100.
    let num = i + 1; //number
    //console.log(num);

    //3. verifica se num è multiplo di 3:
    //  crea variabile restoTre da num % 3. Se resto === 0 allora è multiplo di 3
    let restThree = num % 3; //number
    //console.log(restThree);

    //4. verifica se num è multiplo di 5:
    //  crea variabile restoCinque da num % 5. Se resto === 0 allora è multiplo di 5.
    let restFive = num % 5;
    //console.log(restFive);

    //5. SE restoTre === 0 e restoCinque è diverso (!=) da 0
    //  allora num = "Fizz"
    //  stampare num in console
    if (restThree === 0 && restFive != 0) {
        num = "Fizz"; //string
        console.log(num);

        divElement.classList.add("background-pink");
    }

    //6. ALTRIMENTI SE restoCinque === 0 e restoTre è diverso (!=) da 0
    //  allora num = "Buzz"
    //  stampare num in console
    else if (restFive === 0 && restThree != 0) {
        num = "Buzz"; //string
        console.log(num); //string

        divElement.classList.add("background-red");
    }

    //7. ALTRIMENTI SE restoTre E (&&) restoCinque === 0
    //  allora num = "FizzBuzz"
    //  stampare num in console
    else if (restThree === 0 && restFive === 0) {
        num = "FizzBuzz"; //string
        console.log(num); //string

        divElement.classList.add("background-blue");
    }
    //8. ALTRIMENTI stampare num in console.
    else console.log(num); //string
    
    divElement.classList.add("background-light-blue");

    //USANDO IL METODO innerHTML CON STRINGA (in questo caso non lo utilizzo):

    //10a. dichiara costante div come stringa che contiene num
    //const divString = `<div>${num}</div>`; //string

    //11a. usando innerHTML, aggiungi dentro all'elemento container la costante div
    //rowElement.innerHTML += divString;


    //USANDO IL METODO append CON ELEMENTO:

    //10b. dichiara costante div come elemento
        //(vedi sopra)

    //10.5 dai all'elemento div la classe .col
        //(vedi sopra)

    //11.b usando innerHTML, aggiungi nell'elemento div la variabile num
    divElement.innerHTML = num;

    //12. usando append inserisci elemento div in elemento container
    rowElement.append(divElement);

}




