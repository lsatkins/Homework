let reverse = (string) => {
    let revStr = "";
    if (string.length === 1){
        return string;
    } else{
        revStr += string[string.length-1];
        string = string.substr(0, string.length -1);
        return revStr + reverse(string);
    }
}
// let result = reverse("Hello World");
// console.log(result);

// let isPalindrome = (string) => {
//     if (string === reverse(string)){
//         return true;
//     } else{
//         return false;
//     }
// }


let isPalindrome = (string) => {
    let start = string[0];
    let end = string[string.length-1];
    if(start === end && string.length > 1){
        string = string.slice(1, -1);
        return isPalindrome(string);
    } else if (string.length <= 1){
        return true;
    } else {
        return false
    }
}

let result = isPalindrome("racecar");
console.log(result);