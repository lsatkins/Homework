/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    if(needle.length > haystack.length){
        return -1;
    }else{
        for(let i = 0; i <= haystack.length-needle.length; i++){
            let lengthCount = 0;
            for(let j= 0; j < needle.length; j++){
                let start = i;
                // console.log(start);
                
                // console.log(lengthCount);
                let needleLength = needle.length;
                if(haystack[i+j] !== needle[j]){
                    console.log(i);
                    console.log(j);
                    console.log(lengthCount);
                    break;
                }else{
                    lengthCount ++;
                    console.log(lengthCount);
                    // console.log(lengthCount);
                    if(lengthCount === needleLength){
                        return start;
                    }
                    continue;
                }
            }
        }

    }
    return -1;
};

let haystack = "hello";
let needle = "ll";

console.log(strStr(haystack, needle));