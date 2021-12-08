/*  Challenge:
    Given a string, return a new string where 'av' is added before each vowel
*/
const translate = (str) => {
    // set array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let trans = str.split("");
    for (i=0; i<trans.length; i++) {
        for (v=0; v<vowels.length; v++) {
            if(trans[i] === vowels[v]) {
                trans[i] = "av" + trans[i];
            }
        }
    }
    return trans.join("");
}

console.log(translate("Hello World"));