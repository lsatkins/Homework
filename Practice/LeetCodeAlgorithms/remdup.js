//? Remove Duplicates from Sorted Array

// @param {number[]} nums
// @return {number}

// var removeDuplicates = function(nums){

//     let counter = 0;

//     for(let i = 0; i <= nums.length - 2; i++){
//         // console.log(nums);
//         while (nums[i] === nums[i+1]){
//             nums.splice(i+1,1);
//             // nums.push("_");
//             counter ++;
//         }
//     }
//     for(let i = 1; i <= counter; i++){
//         nums.push("_")
//     }
//     let k = nums.length - counter;

//     return k;

// };

// let nums = [-1,0,0,0,0,3,3]

// // [-1,0,0,0,0,3,3]  i = 1 j = 2

// console.log(removeDuplicates(nums));

//? solution from leetcode

/**
//  * @param {number[]} nums
//  * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    let i = 0;
    
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    
    return i + 1;
};

let nums = [-1,0,0,0,0,3,3]; 

// [-1,0,3,0,0,3,3] i=2 j=6

console.log(removeDuplicates(nums));