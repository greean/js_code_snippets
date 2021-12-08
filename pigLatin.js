/* Challenge:
    Write a function that will convert a word to Pig Latin.
    If a word begins with a consonant, take the first consonant or consonant cluster and move it to the end of the word. Once that’s done, add an “ay” at the end.
    If the word doesn’t have a vowel, just add an “ay” at the end.
    If a word begins with a vowel, just add “way” at the end.
*/
function transWordToPigLatin(str) {
    // initial values of vowels and the final string to be returned
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = '';

    // if word begins with a vowel
    if (vowels.indexOf(str[0]) > -1) {
        newStr = str + 'way';
        return newStr;
    } else {
        // check if word contains a vowel. If not 'firstMatch' is set to '0'
        let firstMatch = str.match(/[aeiou]/g) || 0;

        // set 'vowel' to the index of the first vowel found in the string
        let vowel = str.indexOf(firstMatch[0]);

        // everything from the first vowel + starting consonants + ay
        newStr = str.substring(vowel) + str.substring(0, vowel) + 'ay';
        return newStr;
    }
};

console.log(transWordToPigLatin("california"));
console.log(transWordToPigLatin("glove"));
console.log(transWordToPigLatin("rhythm"));
console.log(transWordToPigLatin("eight"));
console.log(transWordToPigLatin("sky"));
