/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

const startLength = nums.length;

for(let i = 0; i < nums.length; i++){
    let curr = nums[i];
    if(curr === val){
        nums.splice(i, 1);
        i -=1 ;
    }
}
console.log(nums);

const endLength = nums.length;

return endLength;
    
};

let nums = [0,1,2,2,3,0,4,2];
let val = 2;

console.log(removeElement(nums, val));