/* 
@param {string} s
@return {boolean}
*/

var isValid = function(s) {

    let isTrue = true;

    if((s[0] === ("(" || "{" || "["))&&(s[s.length - 1] === (")" || "}" || "]"))){

        for(let i = 0; i <= s.length - 2; i++){

            switch(true){
                case(s[i] === "(" && s[i+1] === ")"):
                    break;
                    
                case(s[i] === "{" && s[i+1] === "}"):
                    break;
                case(s[i] === "[" && s[i+1] === "]"):
                    break;
                default:
                    isTrue = false;
                    break;

            }
  
        }
    } else {
        isTrue = false;
    }

    return isTrue;

};

let s = "()({}][";

console.log(isValid(s));