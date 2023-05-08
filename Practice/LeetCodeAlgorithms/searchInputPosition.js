/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length -1;
    while(left <= right){
        if(left === right){
            if(target <= nums[left]){
                return left;
            } else {
                return left + 1;
            }
        }
        const mid = left + Math.floor((right - left)/2);
        if (nums[mid] < target) {
            left = mid + 1;
        }else{
            right = mid;
        }
    }
}
let nums = [1,3,5,6];
let target = 2;
console.log(searchInsert(nums, target));
