/* Challenge:
    Write a function that will convert a word to Pig Latin.
    If a word begins with a consonant, take the first consonant or consonant cluster and move it to the end of the word. Once that’s done, add an “ay” at the end.
    If the word doesn’t have a vowel, just add an “ay” at the end.
    If a word begins with a vowel, just add “way” at the end.
*/

// function to correct punctuation at the end of a sentence
function punctuation(str) {
    let hasPunc = str.match(/[.,!?]/g) || 0;
    let punc = str.indexOf(hasPunc);
    let corrected = str.substring(0, punc) + str.substring(punc + 1) + (hasPunc[0] || '');
    return corrected;
}

// function to convert words to pig latin
function transWordToPigLatin(str) {
    // initial values of vowels and the final string to be returned
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = '';

    // if word begins with a vowel
    if (vowels.indexOf(str[0]) > -1) {
        newStr = str + 'way';
        return punctuation(newStr);
    } else {
        // check if word contains a vowel. If not 'firstMatch' is set to '0'
        let firstMatch = str.match(/[aeiou]/g) || 0;

        // set 'vowel' to the index of the first vowel found in the string
        let vowel = str.indexOf(firstMatch[0]);

        // everything from the first vowel + starting consonants + ay
        newStr = str.substring(vowel) + str.substring(0, vowel) + 'ay';
        return punctuation(newStr);
    }
};

// function to split sentence into words, perform above function on each word and then join back together
function transPigLatinSentence(str) {
    let array = str.split(' ');
    let sentence = [];
    for (i=0; i<array.length; i++) {
        sentence.push(transWordToPigLatin(array[i]));
    }
    let translation = sentence.join(' ');
    return translation;
};

console.log(transPigLatinSentence("I can't wait for saturday. We're going out for a meal!"));