//? 1

// function letterHistogram(word){
//     let lettersUsed = {};
//     for(let i = 0; i <= word.length - 1; i++){
//         let currentLetter = String(word[i]);
//         if (currentLetter in lettersUsed != true){
//             lettersUsed[currentLetter] = 1;
//         } else {
//         lettersUsed[currentLetter] += 1;
//         }
//     }
//     return lettersUsed;
// }

// console.log(letterHistogram("banana"));

//?2

function wordHistogram(phrase){
    let arrOfWords = phrase.split(" ");
    let objOfWords = {};

    for(let i = 0; i <= arrOfWords.length - 1; i++){
        let currentWord = arrOfWords[i].toLowerCase();
        if(objOfWords[currentWord]){
            objOfWords[currentWord]++;
        } else {
            objOfWords[currentWord] = 1;
        }
    }
    return objOfWords;
}

console.log(wordHistogram("To be or not to be"));