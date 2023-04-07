//? 1

let nums = [1, -2, 3, 4, 5];

// let pos = [...nums].filter(function(num){
//     if(num > 0){
//         return num;
//     }
// });
// console.log(nums);
// console.log(pos);

//? 2

// let even = [...nums].filter(function(num){
//     if(num%2 === 0){
//         return num;
//     }
// });
// console.log(nums);
// console.log(even);

//? 3

// let square = [...nums].map(function(num){
//     return num *num;
// })
// console.log(square);

//? 4

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 } ];

// let cool = [...cities].filter(function(city){
//     if(city.temperature < 70){
//         return city;
//     }
// });
// console.log(cool);

//? 5

// let names = [...cities].map(function(city){

//     city = city.name;

//     return city;

// });
// console.log(names);

//? 6

var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// let greet = people.forEach(function(name){
//     console.log(`Good Job, ${name}!`);
// })

//? 7

// let alphabet = [...people].sort();
// console.log(alphabet);

//? 8

// let sort = [...people].sort(function(a, b){
//     return a.length - b.length;
// })

// console.log(sort);

//? 9

// var arr = [
//     [1, 3, 4],
//     [2, 4, 6, 8],
//     [3, 6] ];

// let sort = arr.sort(function(a, b){

//     aSum = 0;
//     bSum = 0;
//     for (let i = 0; i <= a.length - 1; i++){
//         aSum += a[i];
//     }
//     for(let j = 0; j <= b.length - 1; j++){
//         bSum += b[j];
//     }

//     return aSum - bSum;
    
// });

// console.log(sort);;

// //? 10

let fun = function(){
    console.log("Hello, world!");
}

// let call3Times = function(func){
//     func();
//     func();
//     func();
// }

// call3Times(fun);

//? 11

// let callNTimes = function(num, func){
//     for (let i = 0; i <= num -1; i++){
//         func();
//     }
// }
// callNTimes(5,fun);

//? 12

// let nums1 = [1, 2, 3];


// let sum = function (arr) {
//     return arr.reduce(function(total, num){
//         return total + num;
//     }, 0);
// };

// console.log(sum(nums1));

//? 13

// let arr1 = ['national', 'aeronautics', 'space', 'administration'];

// let acro = function(arr){
//     return arr.reduce(function(acc, word){
//         return acc + word[0].toUpperCase();
//     }, "");
// }

// console.log(acro(arr1));

//? Another

// Create a function sumPlusMinus() that takes an array and sums 
// separately positive and negative numbers

// it should return an object like this:

// {
    // plus: 74, // sum of all positive numbers
//     minus: -54 // sum of all negative numbers
// }

// let arr = [18, -25, 34, -12];

// let sum = function(arr){

//     let plusOrMinus = {};
//     let sumPos = arr.reduce(function(acc, num){
//         if(num > 0){
//             return acc + num;
//         } else return acc;
//     }, 0)

//     let sumNeg = arr.reduce(function(acc, num){
//         if(num < 0){
//             return acc + num;
//         } else return acc;
//     }, 0)

//     plusOrMinus.plus = sumPos;
//     plusOrMinus.minus = sumNeg;

//     return plusOrMinus;
    
// }

// console.log(sum(arr));

// Given an array of numbers, find the maximum value (using reduce)
// const numbers = [10, 20, 30, 40, 50];

// let max = function(arr){
//    return arr.reduce(function(max, curr){
//         if(curr > max){
//             max = curr;
//         }
//         return max;
//     }, 0)
// }

// console.log(max(numbers));

// Given an array of elements, count the number of times a specific element occurs
const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'apple'];

let fruitCount = array=>{
    return  array.reduce((prev, curr)=> {
          if(prev[curr]){
              prev[curr] ++
          }
          else{prev[curr] = 1}
          return prev
      }, {})
      
}
  
  let result = fruitCount(fruits)
  console.log(result);

// Given a nested array, flatten it to a single level array
const nestedArray = [[1, 2], [3, 4, [5, 6]], 7, [8, [9, 10]]];

//result should be [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
