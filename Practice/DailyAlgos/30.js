// You are given an array of non-negative integers that represents a two-dimensional elevation map where each element is unit-width wall and the integer is the height. Suppose it will rain and all spots between two walls get filled up.

// Compute how many units of water remain trapped on the map in O(N) time and O(1) space.

// For example, given the input [2, 1, 2], we can hold 1 unit of water in the middle.

// Given the input [3, 0, 1, 3, 0, 5], we can hold 3 units in the first index, 2 in the second, and 3 in the fourth index (we cannot hold 5 since it would run off to the left), so we can trap 8 units of water.

const findVolume = (arr) => {

let objects = [{index: 0, value: arr[0]}];
let volume = 0;

if (arr.length < 3){
    return 0;
}

for(let i = 0; i < arr.length - 1; i++){

    let currVal = arr[i]
    let nextVal = arr[i+1]
    //
    objects.push({
        index: i+1,
        value: nextVal
    })

    if(nextVal > currVal){
        for(let j = objects.length-2; j >= 0; j--){
            let curr = objects[j].value
            let index = objects[j].index
            if( curr > currVal){
                if(curr >= nextVal){
                    let lowest = curr >= nextVal ? nextVal : curr
                    volume += (nextVal-currVal)*((i+1)-index-1);
                    for(let k = j; k >= 0; k--){
                        console.log('hello')
                        console.log('lowest', lowest)
                        console.log('val', objects[k].value)
                        console.log('j', j)
                        if (lowest >= objects[k].value){
                            console.log('does this ever happen?')
                            console.log('lowest', lowest)
                            arr[objects[k].index] = lowest
                            console.log('array', arr)
                            console.log('j', j)
                        }
                    }

                    break;
                                        
                }
                // if(curr <)
            }
        }
    }
}
return volume;
}

let arr1 = [3, 0, 1, 3, 0, 5]

let arr2 = [2, 1, 2]

console.log(findVolume(arr1))

//! Not completed