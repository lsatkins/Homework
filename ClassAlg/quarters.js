// You have a line of quarters. Write a function that returns the minimum number of changes necessary to make each quarter in the line of quarters alternate between heads and tails. For instance if the line of quarters were represented by the array [1,1,0,1,1], your function should return 2 because you need only 2 changes: changing the first 1 and the last 1 to zero.

let howManyChanges = (arr) => {

    let count1 = 0;
    let count0 = 0;
    let array = [...arr];
    let array0 = [...arr];
    if(arr.length === 1){
        return 0;
    }
    for(let i = 0; i < array.length; i++){
        let curr = array[i];
        let prev = array[i-1];
        if(i === 0){
            if(curr === 1){

            }else{
                curr = 1;
                array[i] = 1;
                count1 ++;
            }
        }else{
            if(curr === prev){
                if(prev === 0){
                    curr = 1;
                    array[i] = 1;
                    count1 ++;
                }else{
                    curr = 0;
                    array[i] = 0;
                    count1 ++;
                }
            }
        }
        
    }
    for(let i = 0; i < array0.length; i++){
        let curr = array0[i];
        let prev = array0[i-1];
        if(i === 0){
            if(curr === 0){
            }else{
                curr = 0;
                array0[i] = 0
                count0 ++;
            }
        }else{
            if(curr === prev){
                if(prev === 0){
                    curr = 1;
                    array0[i] = 1;
                    count0 ++;
                }else{
                    curr = 0;
                    array0[i] = 0;
                    count0 ++;
                }
            }
        }
    }
    
    if(count1 >= count0){
        return count0;
    } else {
        return count1;
    }
}
// let arr = [1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0]
let arr = [1,0,1,1];
// let arr = [0,1,0,1,0,1,0,1];
// let arr = [1,1];
// let arr = [0,0,1,0,0]
console.log(howManyChanges(arr));
// arr[2] = 0;
// console.log(arr);