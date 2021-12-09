/* Challenge:
    If punctuation (.,!?) appears in the middle of a word, move the punctuation to the end of the word
*/
function punctuation(str) {
    // check for any punctuation in the word
    let hasPunc = str.match(/[.,!?]/g) || 0;

    // get the index of where the punctuation appears
    let punc = str.indexOf(hasPunc);

    // re-order the word putting the punctuation at the end of the word
    let corrected = str.substring(0, punc) + str.substring(punc + 1) + (hasPunc[0] || '');
    return corrected;
}

console.log(punctuation('Andy'));       // => 'Andy'
console.log(punctuation('Lucy.'));      // => 'Lucy.'
console.log(punctuation('Dav.id'));     // => 'David.'
console.log(punctuation('Aid!an'));     // => 'Aidan!'
console.log(punctuation('Josh,ua'));    // => 'Joshua,'