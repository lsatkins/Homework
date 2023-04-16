let input = document.querySelector("#input");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");
let dot = document.querySelector("#dot");
let numbers = [one, two, three, four, five, six, seven, eight, nine, zero, dot];

let inputStr = "";
let arrNums = [];
let arrOpp = [];

//looping to add ELs for all number objects
for(let i = 0; i <= numbers.length - 1; i++){
    numbers[i].addEventListener('click', (e)=>{
        inputStr += e.target.innerText;
        input.innerText = inputStr;
    })
}

let operatorSymbols = ['+', '-', '/', '*']

let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let oppObj = [plus, minus, multiply, divide];

for(let i = 0; i <= oppObj.length -1; i++){
    oppObj[i].addEventListener('click', (e)=>{
        
        if((input.innerText != "") && (operatorSymbols.includes(input.innerText) != true)){ //checking to make sure input is not empty and does not contain an operator symbol
            arrNums.push(inputStr);
            inputStr = "";
            arrOpp.push(e.target.innerText);

            input.innerText = e.target.innerText;

        }
    })
}

let clear = document.querySelector("#clear");

clear.addEventListener('click', (e)=>{
    input.innerText = "";
    inputStr = "";
    arrNums = [];
    arrOpp = [];
});

let result = document.querySelector("#result");

result.addEventListener('click', (e)=>{
    let temp = ""; //

    if(inputStr != ""){ //checking to see if input string is empty
                        // if it isn't, we push the input string into our array of string numbers
        arrNums.push(inputStr);
    }
    for(let i = 0; i<= arrNums.length -1; i++){
        arrNums[i] = Number(arrNums[i]);
        // ^converting strings to numbers
    }
    for(let i = 0; i<= arrNums.length - 2; i++){
        if (arrOpp[i] === "+"){
            arrNums[i+1] = arrNums[i] + arrNums[i+1];
        } 
        else if (arrOpp[i] === "-"){
            arrNums[i+1] = arrNums[i] - arrNums[i+1];
        } 
        else if (arrOpp[i] === "*"){
            arrNums[i+1] = arrNums[i] * arrNums[i+1];
        } 
        else {
            arrNums[i+1] = arrNums[i] / arrNums[i+1];
        }

        console.log(arrOpp);
        console.log(arrNums);

    
        temp = arrNums[i+1]; //setting temp equal to whatever the value of arrNums[i+1] is at the end of the loop

        console.log(temp);
    }
    input.innerText = temp;
    arrNums = [];
    inputStr =String(temp);
    arrOpp = [];
})

