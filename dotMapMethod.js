const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
let start = true;                       // variable used to keep track of the start of the new array

// Map through the animals array and return a new array that contains the first character of each string
const secretMessage = animals.map(words => {
    let char = words.charAt(0);
    if (start) {
        start = false;                  // sets start to false, so won't be actioned again
        return char;
    }
    if (char === char.toUpperCase()) {  // check if the character is uppercase...
        char = ` ${char}`;              // if it is uppercase then add a space in front to start a new word
    }
    return char;
});

// console.log(secretMessage);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => {
  return num / 100;
});

// console.log(smallNumbers);