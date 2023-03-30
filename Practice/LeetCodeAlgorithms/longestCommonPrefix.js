let strs = ["cats","catsl","catsew"];

// var longestCommonPrefix = function(strs){

//     let add = true;
//     let trackerNums = [];
    
//     for(let i = 0; i <= strs.length - 2; i++){

//         let firstWord = strs[i];
//         let secondWord = strs[i+1];
//         let tracker = 0;

//         for(let j = 0; j <= firstWord.length - 1; j++){

//             if(firstWord[j] != secondWord[j]){
//                 break;
//             } else {
//                 tracker ++;
//             }
//         }
//         trackerNums.push(tracker);

//     }

//     let minTrack = 10;

//     //set minTrack to a high number so that when finding the
//     // minimum tracker value, it will not give a false minimum.

//     for (let i = 0; i <= trackerNums.length - 1; i++){
//         if(trackerNums[i] < minTrack){
//             minTrack = trackerNums[i];
//         }
//     }

//     let oneWord = strs[0];

//     let goodLetters = String(oneWord.substr(0,minTrack));

//     if (goodLetters.length > 0){
//         return goodLetters;
//     } else{
//         return String("");
//     }
   
// }

//todo Another solution

var longestCommonPrefix = function(strs){

    let goodLetters = "";
    let refWord = strs[0];

    function sameLetter(arrOfStrings, indexOfLetter) {

        let isSameLetter = true;

        let funcLetters = "";
        
        for(let i = 1; i <= arrOfStrings.length - 1; i++){

            //looping through array and checking if letter
            //at given index is the same for each word

            let currentWord = arrOfStrings[i];

            const firstWord = arrOfStrings[0];

            if(firstWord[indexOfLetter] != currentWord[indexOfLetter]){
                isSameLetter = false;
                break;
            }
        }

        if(isSameLetter === true){
            funcLetters += refWord[indexOfLetter];
        }

        return funcLetters;

        //returns the letter at the given index if they are the
        //same for every word in the array
    }

    for(let i = 0; i <= refWord.length - 1; i++){

        if(sameLetter(strs, i) != ""){

            goodLetters += sameLetter(strs,i);

        }
    }

    return goodLetters;
}

console.log(longestCommonPrefix(strs));