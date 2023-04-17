/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    let newArr = [];
    while(list1.length > 0 && list2.length > 0){

        // newArr.push(list1.splice(0,1)[0]);
        // console.log(list1);

        if(list1[0] < list2[0]){
            newArr.push(list1.splice(0,1)[0]);
        }
        if(list2[0] < list1[0]){
            newArr.push(list2.splice(0,1)[0]);
        }
        if(list1[0] === list2[0]){
            newArr.push(list1.splice(0,1)[0]);
        }
        
        // console.log(newArr);
    }
    if(list1.length === 0){
        newArr = newArr.concat(list2);
    }
    if(list2.length === 0){
        newArr = newArr.concat(list1);
    }
    return newArr;
};

let list1 = [];
let list2 = [0];

let result = mergeTwoLists(list1, list2);
console.log(result);
