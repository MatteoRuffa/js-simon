function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// function generateUniqueRandomNumber(min, max, bombs) {
//   let isFound = false;
//   let randomNumber;
                    
//   while( !isFound) {
//     randomNumber =  getRndInteger(min, max)
                    
//     if (bombs.includes(randomNumber) === false) {
//       isFound = true;
//     }
//   }
//   return randomNumber;
// }