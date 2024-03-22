/*
Descrizione:
Visualizzare in pagina 5 numeri casuali ( tra 1 e 100) non duplicati.
Da lì parte un timer di 30 secondi.
Dopo i 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri 
che ha visto precedentemente, tramite il prompt() ( o meglio caselle di input).
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da 
indovinare sono stati individuati.
*/

let numbers = [];

function  generateUniqueRandomNumber(min, max, numbers) {
    let isFound = false;
    let randomNumber;

    while( !isFound) {
        randomNumber =  getRndInteger(min, max)
                      
        if (numbers.includes(randomNumber) === false) {
          isFound = true;
        }
    }
    numbers.push(randomNumber);
    return randomNumber;
};

for (let i = 0; i < 5; i++) {
    let number = generateUniqueRandomNumber(1, 100, numbers);
    let boxNumber = document.createElement('div');
    boxNumber.classList.add('p-4', 'mr-circle', 'd-flex', 'justify-content-center', 'align-items-center', );
    document.querySelector('.container-number').appendChild(boxNumber);
    boxNumber.innerHTML = number;
}
console.log(numbers);

function removeNumbers() {
    document.querySelector('.container-number').classList.add('d-none');
};

setTimeout(removeNumbers, 4000);

