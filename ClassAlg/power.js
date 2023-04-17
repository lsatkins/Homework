let power = (baseNum, expNum) => {

    if (expNum === 1){
        return baseNum;
    } else {
        return baseNum * power(baseNum, expNum -1);
    }
}

let result = power(2,5);
console.log(result);