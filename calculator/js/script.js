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
//looping to add ELs for all number objects
let inputStr = "";
let arrNums = [];
let arrOpp = [];
for(let i = 0; i <= numbers.length - 1; i++){
    numbers[i].addEventListener('click', (e)=>{
        inputStr += e.target.innerText;
        input.innerText = inputStr;
    })
}
// let body = document.querySelector('body');
let nums = ["one", "two", "three", "four", "five", "six", 'seven', 'eight', 'nine', 'zero', 'dot']
let operatorStrings = ["plus", "minus", "multiply", "divide"];
let operatorSymbols = ['+', '-', '/', '*']
// let oppDiv = document.querySelector(".operators")
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let oppObj = [plus, minus, multiply, divide];

for(let i = 0; i <= oppObj.length -1; i++){
    oppObj[i].addEventListener('click', (e)=>{
        
        if((input.innerText != "") && (operatorSymbols.includes(input.innerText) != true)){
            arrNums.push(inputStr);
            inputStr = "";
            arrOpp.push(e.target.innerText);

            input.innerText = e.target.innerText;

            console.log(arrOpp);
            console.log(arrNums);

        } else{
            
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
    let temp = 0;
    if(inputStr != ""){
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
        console.log(arrNums[i]);
        console.log(arrNums[i+1]);
        temp = arrNums[i+1]; 
    }
    input.innerText = temp;
    inputStr = "";
    arrNums = [];
    inputStr =[String(temp)];
    arrOpp = [];
})

// body.addEventListener('click', (e)=>{
//      if(nums.includes(e.target.id)){
//         inputStr += e.target.innerText;
//         input.innerText = inputStr;
//         console.log(e.target);
//         console.log(inputStr);
//         console.log(arrNums);
//         console.log(arrOpp);
//      } else if(operatorStrings.includes(e.target.id)){
//         arrNums.push(inputStr);
//         inputStr = "";
//         input.innerText = e.target.innerText;
//         arrOpp.push(e.target.innerText)
//        if(inputStr === ""){
//         input.innerText = arrOpp[arrOpp.length - 1];
//        }
//     }
// })

// oppDiv.addEventListener('click', (e)=>{
//     if(operatorStrings.includes())
// })