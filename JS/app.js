
/*Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
per i multipli di 3 stampi “Fizz” al posto del numero e
per i multipli di 5 stampi “Buzz” al post del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.*/

//1. scrivere funzione che parta da un indice di valore 0 
//  e che incrementi di 1 il suo valore se minore di 100.

//2. creare nuova variabile num con indice + 1 per arrivare a 100.

//3. verifica se num è multiplo di 3:
//  crea variabile restoTre da num % 3. Se resto === 0 allora è multiplo di 3

//4. verifica se num è multiplo di 5:
//  crea variabile restoCinque da num % 5. Se resto === 0 allora è multiplo di 5.

//5. SE restoTre === 0 e restoCinque è diverso (!=) da 0
//  allora num = "Fizz"
//  stampare num in console

//6. ALTRIMENTI SE restoCinque === 0 e restoTre è diverso (!=) da 0
//  allora num = "Buzz"
//  stampare num in console

//7. ALTRIMENTI SE restoTre E (&&) restoCinque === 0
//  allora num = "FizzBuzz"
//  stampare num in console

//8. ALTRIMENTI stampare num in console.


