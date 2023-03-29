// 1. Sum the Numbers
// Find the sum of all elements in an array and print to the console.

//? 1


// let sum = [11, 23, 34, 54, 57];

// let result = 0;

// for (let i = 0; i <= sum.length - 1; i++){
// result+=sum[i];
// }

// console.log(result);


// 2. Largest Number
// Find the largest element in an array and print to the console.

//? 2

// const largest = [5, 7, 2, 4, 9];
// let num = 0;

// for (let i = 0; i <= largest.length -1; i++){
//     if (largest[i] > num){
//         num = largest[i];
//     }
// }

// console.log(num);

// 3. Smallest Number
// Find the smallest element in an array and print to the console.

//? 3



// const smallest = [5, 7, 2, 4, 9];
// let num = smallest[0];

// for(let i = 0; i <= smallest.length-1; i++){
//     if(smallest[i]<num){
//         num = smallest[i];
//     }
// }

// console.log(num);


// 4. Even Numbers
// For the given array of numbers, print each number in the array that is even.

//? 4

// const even = [34, 56, 43, 11, 87, 67, 55, 44, 12, 6, 4, 98, 83]

// for(let i = 0; i <= even.length - 1; i++){
//     if(even[i] % 2 == 0){
//         console.log(even[i]);
//     }
// }


// 5. Positive Numbers
// For the given array of numbers, print each number in the array that is greater than zero.

//? 5

// const positive = [34, -56, 16, 23, -4, -6, -8, 12, 11, 78, -3, -2, 5, -44 ]

// for(let i = 0; i <= positive.length -1; i++){
//     if(positive[i] > 0){
//         console.log(positive[i]);
//     }
// }


// 6. Positive Numbers II
// For the given array of numbers, create a new array which contains every number in the given array which is positive.

//? 6

// const positive2 = [34, -56, 16, 23, -4, -6, -8, 12, 11, 78, -3, -2, 5, -44 ];

// let newArr = [];

// for(let i = 0; i <= positive2.length -1; i++){
//     if(positive2[i] > 0){
//         newArr.push(positive2[i]);
//     }
// }

// console.log(newArr);


// 7. Given an array of strings, print the ones that start with the letter 'A'.

//? 7

// const strings = ['Apple', 'Banana', 'Apricot', 'Cherry', 'Avocado'];

// for(let i = 0; i <= strings.length - 1; i++){
//     if(strings[i][0].toUpperCase() == "A"){
//         console.log(strings[i]);
//     }
// }

// 8. Given an array of strings, print the longest one.

//? 8

// const strings = ['short', 'longer', 'longest', 'medium'];

// let length = strings[0].length;
// let string = "";

// for(let i = 0; i <= strings.length - 1; i++){
//     if(strings[i].length > length){
//         length = strings[i].length;
//         string = strings[i];
//     }
// }
// console.log(string);

// 9. Multiply a array
// For the given array of numbers, and a factor of 5, create a new array consisting of each of the numbers in the array multiplied by the factor. Print this array.

//? 9

// const positive2 = [34, -56, 16, 23, -4, -6, -8, 12, 11, 78, -3, -2, 5, -44 ]

// let multiplied = [];

// for(let i = 0; i <= positive2.length - 1; i++){
//     multiplied.push(positive2[i]*5);
// }

// console.log(multiplied);

// 10. Reverse a String
// Given a string, print the string reversed. For example, reverse the string "Hello World".

//? 10

// let str = "Hello World";

// let strArr = str.split("");

// let revArr = [];

// let rev = "";

// for(let i = strArr.length - 1; i >= 0; i--){
//     revArr.push(strArr[i]);
// }

// rev = revArr.join("");

// console.log(rev);

// 11. Multiply Vectors
// Given two arrays of numbers of the same length, create a new array by multiplying the pairs of numbers in corresponding positions in the two arrays. Example:

// [2, 4, 5] x [2, 3, 6] = [4, 12, 30]

//? 11

// let first = [2, 4, 5];

// let second = [2, 3, 6];

// let third = [];

// for(let i = 0; i <= first.length-1; i++){
//     third.push(first[i]*second[i])
// }

// console.log(third);

// 12. Matrix Addition
// Given two two-dimensional arrays of numbers of the size 2x2 two dimensional array is represented as an array of arrays:

// [ [2, -2],
//    [5, 3] ]
// Calculate the result of adding the two matrices. The number in each position in the resulting matrix should be the sum of the numbers in the corresponding addend matrices. Example: to add

// 1 3
// 2 4
// and

// 5 2
// 1 0 
// results in

// 6 5
// 3 4

//? 12

// let first = [[1,3],
//              [2,4]];

// let second = [[5,2],
//               [1,0]];

// let third = [];

// let condensed = [];

// for(let i = 0; i <= first.length - 1; i++){
//     for (let j = 0; j <= first[i].length - 1; j++){
//         third.push(first[i][j] + second[i][j]);
//     }
// }

// for (let i = 0; i <= third.length -1; i+=2){
//     condensed.push(third.slice(i,i+2));
// }

// console.log(condensed);

//todo Sedond Solution

// let first = [[1,3],
//              [2,4]];

// let second = [[5,2],
//               [1,0]];

// let third = [];

// for(let i = 0; i <= first.length - 1; i ++){

//     let innerArr = [];

//     for(let j = 0; j <= first[i].length - 1; j++){

//         innerArr.push(first[i][j] + second[i][j]);
    
//     }

//     third.push(innerArr);

// }

// console.log(third);

// 13. Matrix Addition II
// Use your solution in Matrix Addition, and extend it to work for a pair of matrices of any size, as long as they have the same size.

//? 13

// let first = some array with nested arrays
// let second = some other array with nested arrays

// if (first.length === second.length){
//     let third = [];

// let condensed = [];

// for(let i = 0; i <= first.length - 1; i++){
//     for (let j = 0; j <= first[i].length - 1; j++){
//         third.push(first[i][j] + second[i][j]);
//     }
// }

// for (let i = 0; i <= third.length -1; i+=2){
//     condensed.push(third.slice(i,i+2));
// }

// console.log(condensed);
// } else {
//     console.log("Please use arrays of the same length.");
// }


// 14. De-dup
// Given a array of numbers or strings, create a new array containing the same elements as the first array, except with any duplicate values removed. Print the array.

//? 14

// let arr = [1,2,3,4,2,3,5,6,6,7,7,3,8,5,9];

// let newArr = [];

// for(let i = 0; i <= arr.length - 1; i++){
//     if (newArr.includes(arr[i]) != true){
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

//todo Another solution for 14

// let arr = [1,2,3,4,2,3,5,6,6,7,7,3,8,5,9];

// let newArr = [];

// let add;

// for(let i = 0; i <= arr.length - 1; i++){
//     add = true;
//     for(let j = i + 1; j <= arr.length - 1; j++){
//         if(arr[i] === arr[j]){
//             add = false;
//         } 
//     }
//     if(add != false){
//         newArr.push(arr[i]);
//     }
// }

// console.log(arr);
// console.log(newArr);

// 15. Leetspeak
// Given a paragraph of text as a String, print the paragraph in leetspeak.

// To translate a String to leetspeak, you need to replace make the following character replacements (treat all input characters as uppercase):

// Letter	Translates To
// A	4
// E	3
// G	6
// I	1
// O	0
// S	5
// T	7
// Example: If your program is given the String "I am a leet programmer", it should print "1 4m 4 l337 pr0gr4mm3r" as the leetspeak translation

// //? 15

// let translator = ["A", "4", "E", "3", "G", "6", "I", "1", "O", "0", "S", "5", "T", "7"]
// let string = "I am a leet programmer";

// let split = string.split("");

// let leetSplit = []

// let strUp = string.toUpperCase();

// let strArr = strUp.split("");

// let location = 0;

// for(let i = 0; i <= strArr.length - 1; i++){
//     if(translator.includes(strArr[i])){
//         location = translator.indexOf(strArr[i]);
//         leetSplit.push(translator[location + 1]);
//     } else{
//         leetSplit.push(split[i]);
//     }
// }

// let leet = leetSplit.join("");
// console.log(leet);

// 16. Long-long Vowels
// Given a word as a string, print the result of extending any long vowels to the length of 5.

// Examples:

// Good => Goooood 
// Cheese => Cheeeeese 
// Man => Man 
// Spoon => Spooooon 

//? 16

// let word = "Cheese";
// let long = "";
// let longArr = [];

// let vowels = ["a", "e", "i", "o", "u"];

// for(let i = 0; i <= word.length - 1; i++){
//     if((vowels.includes(word[i]))&&(word[i] === word[i+1])){
//         longArr.push(word[i].repeat(4));    
//     } else{
//         longArr.push(word[i]);
//     }
// }

// long = longArr.join("");
// console.log(long);

// 17. Caesar Cipher
// Given a string, print the Caesar Cipher (or ROT13) of that string. What is Caesar Cipher? Learn about it here.

// Use your solution to decipher the following text: "lbh zhfg hayrnea jung lbh unir yrnearq"

//? 17

// let text = "lbh zhfg hayrnea jung lbh unir yrnearq";

// let split = text.split("");

// let offset = 13;

// let newLetters = [];

// let newSplit = [];

// let newText = "";

// let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// for(let i = 0; i <= letters.length-1; i++){
//     if(i + offset >= letters.length){     
//         newLetters.push(letters[i - 26 + offset]); //todo offsets letters to the front of newLetters if they would have been moved to an index past newLetters.length
//     } else {
//         newLetters.push(letters[i + offset]);  //todo adds an offset to the letters within newLetters
//     }
// }

// for(i = 0; i <= split.length-1; i++){
//     if(split[i] === " "){
//         newSplit.push(" ");         
//     } else {
//         newSplit.push(newLetters[letters.indexOf(split[i])]);   //todo   USING OFFSET OF 1 AND i = 1 ...  newSplit.push(newLetters[letters.indexOf("b")])
//     }                                                           //todo                                    newSplit.push(newLetters[1])                                          
// }                                                               //todo                                    newSplit.push("c")   offset of 1 changed "b" to "c"

// newText = newSplit.join("");

// console.log(newText);

//? Reverse Number

// let number = -100453;

// let numString = number.toString();

// let splitNum = numString.split("");

// let newSplitNum = [];

// let newNumString = "";

// let newNum;

// for(let i = 0; i <= splitNum.length - 1; i ++){
//     if(splitNum[i] === "-"){
//         newSplitNum[i] = splitNum[i];
//     } else {
//         if(newSplitNum[0] === "-"){
//             newSplitNum[i] = splitNum[splitNum.length  - i];
//         } else {
//             newSplitNum[i] = splitNum[splitNum.length - 1 - i];
//         }
//     }
// }

// newNumString = newSplitNum.join("");

// newNum = Number(newNumString);

// console.log(newNum);
