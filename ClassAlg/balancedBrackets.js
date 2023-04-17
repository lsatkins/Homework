let balancedOrNot = (string) => {

    let arr = [];

    for(let i = 0; i < string.length; i++){
        
        let curr = string[i];
        if (curr === ("[" || "{" || "(")){
            arr.push(curr);
        } else{
            removeOrNot(curr, arr);
        }
        
    }
    if(arr.length === 0){
        return true;
    } else{
        return false;
    }
}

let removeOrNot = (strAtIndex, array) => {
    let last = array[array.length-1];
    return (strAtIndex === ")" && last === "(") ? array.pop()
    : (strAtIndex === "]" && last === "[") ? array.pop() 
    : (strAtIndex === "}" && last === "{") ? array.pop()
    : array.push(strAtIndex);
}

console.log(balancedOrNot("{[()]}"));