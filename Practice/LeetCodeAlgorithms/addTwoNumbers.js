/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

let l1 = [2,4,3];
let l2 = [5,6,4];

let getNum = (arr) =>{

    let string = "";

for(let i = arr.length -1; i >= 0; i--){

    string += arr[i].toString();
}
return string;
}

let addNums = (num1, num2)=>{

    let result = Number(num1) + Number(num2);
    return result;
}
console.log(getNum(l1));
var addTwoNumbers = function(l1, l2) {

    let num1 = getNum(l1);
    let num2 = getNum(l2);

    let sum = addNums(num1, num2);

    let sumString = sum.toString();

    let newArr = [];

    for(let i = sumString.length -1; i >= 0; i--){

        newArr.push(Number(sumString[i]));
    }

    return newArr
    
};

console.log(addNums("1","2"));

console.log(addTwoNumbers(l1, l2));


