/* Challenge:
    Write a function that will convert a word to Pig Latin
    If a word begins with a consonant, take the first consonant or consonant cluster and move it to the end of the word. Once that’s done, add an “ay” at the end.
    If the word doesn’t have a vowel, just add an “ay” at the end.
    If a word begins with a vowel, just add “way” at the end.
*/
function translateToPigLatin(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";
    // if word begins with a vowel
    if(vowels.indexOf(str[0]) > -1);
        newStr = str + "way";
};

translateToPigLatin("i am here");
