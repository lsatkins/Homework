//! DO NOT REMOVE 
const prompt = require('prompt-sync')({sigint: true});

/**
  Example usage to prompt a user: 
  const name = prompt('What is your name?');
  console.log(`Hey there ${name}`);

  All user input will be read as a String, so in order to treat user input as numbers, you’ll need to convert the input:
*/

//? 1

// for (let i = 20; i <= 100; i+=2){
//   console.log(i);
// }

//? 2

// for (let i = 1; i <= 15; i+=2){
//   console.log(i);
// }

//? 3

// const start = Number(prompt("Start from: "));
// const end = Number(prompt("End on : "));

// for (let i = start; i <= end; i++){
//   console.log(i);
// }

//? 4

// let sum = 0;

// for (let i = 1; i <= 100; i++){
//   sum += i;
// }

// console.log(sum);

//? 5

// const num = Number(prompt("Pick a number: "));
// let numFact = num;

// for (let i = num-1; i >= 2; i--){
//   numFact = numFact * i;
// }

// console.log(numFact);

//? 6

// const terms = Number(prompt("Pick how many Fibonacci terms: "));

// let first = 0;
// let second = 1;
// console.log(first);
// console.log(second);

// for (let i = 1; i <= terms-2; i++){
//   console.log(first + second);
  
//   let temp = first;
//   first = second;
//   second = first + temp;
// }

//? 7

// for (let i = 1; i <= 5; i++){
//   console.log("*****");
// }

//? 8

// const num = Number(prompt("How big is the square? "));

// let oneLine = ""
// for (let i = 1; i <= num; i++){
//   oneLine = `${oneLine}*`
// }
// for (let i = 1; i<=num; i++){
//   console.log(oneLine);
// }

//? 9

// let choice ="";
// let coins = 0;

// console.log(`You have ${coins} coins`);

// while (choice != "no"){
//   choice = prompt("Do you want another? (yes or no) ");
//   if(choice == "yes"){
//     coins++;
//     console.log(`You have ${coins} coins`);
//   }
// }
// console.log("Bye"); 

//? 10

// let middle = "*";
// let longSide = "";
// let height = Number(prompt("Select a height for the box: "));
// let width = Number(prompt("Select a width for the box: "));

// for (i = 1; i <= width; i++){
//   longSide+="*";
// }

// console.log(longSide);

// for (i = 1; i <= width-2; i++){
//   middle+=" ";
// }
// middle = `${middle}*`
// for (i =1; i <= height-2; i++){
//   console.log(middle);
// }

// console.log(longSide);

//? 11

// let num = 0;
// let space = " ";
// let star = "*";
// let length = (num * 2) - 1;
// let inc = Number(1);

// num = Number(prompt("How many rows tall do you want your triangle to be? "));

// for (let i = num; i >= 1; i--){
//   console.log(`${space.repeat(i-1)}${star.repeat(inc)}${space.repeat(i-1)}`);
//   inc = inc+=2;
// }

//? 12

for (i = 1; i <= 10; i++){
  for (j = 1; j <= 10; j++){
    console.log(`${i} X ${j} = ${i * j}`);
  }
  console.log("");
}





