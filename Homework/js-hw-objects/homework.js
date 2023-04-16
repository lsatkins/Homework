//? 1

// function letterHistogram(word){
//     let lettersUsed = {};
//     for(let i = 0; i <= word.length - 1; i++){
//         let currentLetter = String(word[i]);
//         if (currentLetter in lettersUsed != true){
//             lettersUsed[currentLetter] = 1;
//             //sets a key-value pair of currentLetter = 1
//             //if currentLetter is not in lettersUsed
//         } else {
//         lettersUsed[currentLetter] += 1;
//         //if currentLetter IS in lettersUsed
//         // add one to its value
//         }
//     }
//     return lettersUsed;
// }

// console.log(letterHistogram("banana"));

//?2

function wordHistogram(phrase){
    let arrOfWords = phrase.split(" ");
    // ^ creating an array by splitting the phrase anywhere
    //   that a space occurs

    let objOfWords = {};
    // ^ creating an object to add key-value pairs to

    for(let i = 0; i <= arrOfWords.length - 1; i++){
    // ^ looping through the array of words that we
    //   created by splitting the phrase

        let currentWord = arrOfWords[i].toLowerCase();
        //^ makes currentWord lowercase so that there wont be
        //  multiple keys if one word is capitalized

        if(objOfWords[currentWord]){
            // ^ condition evaluates to true if currentWord key
            //   exists in our object

            objOfWords[currentWord]++;
            // ^ increments by one if currentWord key exists
            //   in our object

        } else {
            objOfWords[currentWord] = 1;
            // ^ adds a key-value pair of currentWord = 1
            //   if the currentWord key exists in our object
        }
    }
    return objOfWords;
    // ^ returns the object that we created at the beginning
    //   of the funcition
}

console.log(wordHistogram("To be or not to be"));