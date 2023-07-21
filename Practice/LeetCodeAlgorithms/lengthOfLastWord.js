const lengthOfLastWord = (string) => {
    for(let i = string.length-1; i >= 0; i--){
        if(string[i] !== ' '){
            let j = 0;
            while(string[i] !== ' ' && string[i]){
                j += 1;
                console.log(string[i])

                i -=1;
            }
            return j
        }
    }
}

const string = "Hello worlders ";

console.log(lengthOfLastWord(string))