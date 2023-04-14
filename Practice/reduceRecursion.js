// Given a nested array, flatten it to a single level array
const nestedArray = [[1, 2], [3, 4, [5, 6]], 7, [8, [9, 10]]];

//result should be [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//? for loops and if statement solution

function flatArr(arr){

    for(let i = 0; i <= arr.length - 1; i++){

        if(typeof arr[i] === "object"){

            for(let j = 0; j <= arr[i].length -1; j++){
                arr.splice(i + j + 1, 0, arr[i][j]); // looping through nested array and adding its contents behind it
            }

            arr.splice(i, 1); //removing the array we just looped through
        }
    }
    return arr
}

console.log(flatArr(nestedArray));

//? reduce and recursion solution

