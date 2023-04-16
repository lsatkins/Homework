//? 1

// function add(num1, num2){
//     return num1 + num2;
// }

// console.log(add(1,2));

//? 2

// function length(string){
//     return string.length;
// }

// console.log(length("hello"));

//? 3

// function average(numArr){
//     let sum = 0;
//     for(let num of numArr){
//         sum+= num;
//     }
//     let avg = sum / numArr.length;

//     return avg;
// }

// console.log(average([1,2,3,4,5]));

//? 4

// function isEven(num){
//     if(num%2 === 0){
//         return true;
//     } else{
//         return false;
//     }
// }

// console.log(isEven(4));
// console.log(isEven(5));

//? 5

// function cap(arrOfStrings){
//     let newArr = [];
//     for(let string of arrOfStrings){
//         newArr.push(string.toUpperCase());
//     }
//     return newArr;
// }

// console.log(cap(["Hunter", "is", "my", "name"]));

//? 6

// function double(arrOfNums){
//     let newNums = [];
//     for(let num of arrOfNums){
//         newNums.push(num*2);
//     }
//     return newNums;
// }

// console.log(double([1,2,3,4,5]));

//? 7

// function palindrome(string){
//     let backwards = "";
//     for(let i = string.length-1; i >= 0; i--){
//         backwards += string[i];
//     }
//     if(string === backwards){
//         return true;
//     } else{
//         return false;
//     }
// }
// console.log(palindrome("car"));
// console.log(palindrome("mom"));

//? 8

// function longest(array){
//     let longestStr = "";
//     for(let string of array){
//         if(string.length > longestStr.length){
//             longestStr = string;
//         }
//     }
//     return longestStr;
// }

// console.log(longest(["Which", "word", "is", "the", "longest", "in", "this", "sentence."]));

//? 9

// function largest(arrOfNums){
//     let largestNum = 0;
//     for(let num of arrOfNums){
//         if(num > largestNum){
//             largestNum = num;
//         }
//     }
//     return largestNum;
// }

// console.log(largest([1,2,3,4,5,2,3,7,3,2]));

//? 10

let namesAndAges = [
    {
        name: "Hunter",
        age: 30
    },
    {
        name: "Matthew",
        age: 14
    },
    {
        name: "Raegan",
        age: 24
    }
]

function over18(arrOfObjects){
    let names = [];
    for(let object of arrOfObjects){
        if(object.age >= 18){
            names.push(object.name)
        }
    }
    return names;
}

console.log(over18(namesAndAges));