let sort = (arr) => {

    let smallestIndex = 0;

    let change = false;


    for(let i = 0; i < arr.length; i++){
        if(arr.length === 1){
            return arr;
        }
        if(i === 0){
            smallestIndex = 0;
            continue;
        }

        let currNum = arr[i];
        let currIndex = i;
    
        if(currNum < arr[smallestIndex]){
            smallestIndex = currIndex;
            change = true;
        } 
    }

    let temp = arr[0];
    arr[0] = arr[smallestIndex];
    arr[smallestIndex] = temp;

    // if(change === true){
    //     let firstEl = arr.splice(0,1);
    //     return firstEl.concat(sort(arr))
    // }

    // return arr;

    let firstEl = arr.splice(0,1);
        return firstEl.concat(sort(arr))

}

let testArr = [34, 22, 10, 19, 17]

console.log(sort(testArr))