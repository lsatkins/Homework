const mySqrt = (x) => {
    if(x <0){
        return ('this is not a positive number')
    }
    if(x === 0){
        return 0
    }
    if(x === 1){
        return 1
    }
    
    let upper = x;
    let lower = 0;
    let middle = Math.floor((upper-lower)/2)
    let count = 0;
    while(((middle * middle) !==x)){
        count ++
        let squared = middle * middle
        let oneMoreSquared = (middle + 1) * (middle + 1)
        if((squared <= x) && (x < oneMoreSquared)){
            x = middle
            return middle;
        } else if(squared > x){
            upper = middle - 1;
            middle = Math.floor((upper - lower)/2)
        }else if(squared < x){
            lower = middle + 1;
            middle = Math.floor((upper + lower)/ 2)
        }
    }

}

console.log('answer', mySqrt(75))