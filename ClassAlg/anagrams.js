let arr = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];
console.log(arr);

let anagrams = (arr) => {

    let newArr = [];

    let wholeArr = [];

    let first = arr[0];

    if(arr.length > 1){

        for(let i = 1; i < arr.length; i++){

            for(let j = 0; j < first.length; j++){

                if(arr[i].includes(first[j]) && arr[i].length === first.length){

                    if(j+1 === first.length && j+1 ===arr[i].length){

                        newArr.push(arr[i]);
                        arr.splice(i,1);
                    }

                } else{
                    break;
                }
            }
        }
        newArr.push(first);
        arr.splice(0,1);
        wholeArr.push(newArr);
        return wholeArr.concat(anagrams(arr));

    } else {
        return [[first]];
    }
}

let result = anagrams(arr);
console.log(result);