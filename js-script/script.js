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
    boxNumber.classList.add('p-4', 'mr-circle', 'd-flex', 'justify-content-center', 'imput-small', 'align-items-center', );
    document.querySelector('.container-number').appendChild(boxNumber);
    boxNumber.innerHTML = number;
    generateImput(i);
}
console.log(numbers);

function removeNumbers() {
    document.querySelector('.container-number').classList.add('d-none');
};

setTimeout(removeNumbers, 4000);

function generateImput(val) {
    const input = document.createElement('input');
    input.type = 'text';
    input.id = val;
    input.classList.add('form-control', 'm-4');
    document.querySelector('.imput-container').appendChild(input);
} 

const userNumberArray = [];
let userNumber;

elbuttonComparison = document.querySelector('.btn.btn-success');

elbuttonComparison.addEventListener('click', () => {
    let userInput = document.querySelectorAll('.form-control');
    for (let i = 0; i < userInput.length; i++) {
        userNumber = parseInt(userInput[i].value);
        console.log(userNumber);
        userNumberArray.push(userNumber);
    };
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === userNumberArray[i]) {
            document.querySelector('.container-result').innerHTML += ` ${userNumberArray[i]}, `
        } else {
            document.querySelector('.container-result').innerHTML += ` ${userNumberArray[i]}, `
        }
    };
    console.log(userNumberArray);
})
