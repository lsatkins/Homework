let strs = ["dog","racecar","car"];

var longestCommonPrefix = function(strs){

    let add = true;
    let trackerNums = [];
    
    for(let i = 0; i <= strs.length - 2; i++){

        let firstWord = strs[i];
        let secondWord = strs[i+1];
        let tracker = 0;

        for(let j = 0; j <= firstWord.length - 1; j++){

            if(firstWord[j] != secondWord[j]){
                break;
            } else {
                tracker ++;
            }
        }
        trackerNums.push(tracker);

    }

    let minTrack = 10;

    //set minTrack to a high number so that when finding the
    // minimum tracker value, it will not give a false minimum.

    for (let i = 0; i <= trackerNums.length - 1; i++){
        if(trackerNums[i] < minTrack){
            minTrack = trackerNums[i];
        }
    }

    let oneWord = strs[0];

    let goodLetters = String(oneWord.substr(0,minTrack));

    if (goodLetters.length > 0){
        return goodLetters;
    } else{
        return String("");
    }
   
}

console.log(longestCommonPrefix(strs));