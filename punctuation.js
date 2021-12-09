// function punctuation(str) {
//     let corrected = '';
//     let hasPunc = str.match(/[.,!?]/g) || 0;
//     if (hasPunc != 0) {
//         let punc = str.indexOf(hasPunc);
//         corrected = str.substring(0, punc) + str.substring(punc+1) + hasPunc[0];
//         return corrected;
//     } else {
//         return str;
//     }
// }
function punctuation(str) {
    let hasPunc = str.match(/[.,!?]/g) || 0;
    let punc = str.indexOf(hasPunc);
    let corrected = str.substring(0, punc) + str.substring(punc + 1) + (hasPunc[0] || '');
    return corrected;
}

console.log(punctuation('Andy'));
console.log(punctuation('Lucy.'));
console.log(punctuation('Dav.id'));
console.log(punctuation('Aid!an'));
console.log(punctuation('Josh,ua'));