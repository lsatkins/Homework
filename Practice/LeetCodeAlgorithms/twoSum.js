/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    
    let differences = {}; // object that we will add difference : index to
    let result = []; // array that we will add 

    for(let i = 0; i <= nums.length -1; i++){
        let diff = target - nums[i]; 
        // diff between target and the number at the current index
        // in the nums array
        let indOfDiff = differences[nums[i]]; 
        // index of difference that we are looking for in the 
        // differences object

        if (indOfDiff !== undefined){
            // Checkes to see if we have already seen the diff
                result[0] = indOfDiff;
                result[1] = i;
                break;
        } else {
            // creates a key-value pair within differences of current difference : index
            differences[diff] = i;
        }
    }
    return result;
};

let nums = [2,7,11,15];

let target = 9;

console.log(twoSum(nums, target));