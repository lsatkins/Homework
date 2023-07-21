let arr1 = [1, 3, 9, 10, 12]

const searchIterative = (arr, target) => {

    let mid = Math.floor(arr.length/2)
    let high = arr.length - 1;
    let low = 0;
    if(arr[mid] === target){
        return mid;
    }
    else if(target > arr[high]){
        return -1;
    }
    else if(target < arr[low]){
        return -1;
    }
    else if(arr[mid] > target){

        high = mid - 1

        for(let i = low; i < high-low; i++){
            if(arr[i] === target){
                return i
            }
        }
        return -1;

    }else{
        low = mid + 1;

        for(let i = low; i < high-low; i++){
            if(arr[i] === target){
                return i;
            }
        }
        return -1;
    }

}

// console.log(searchIterative(arr1, 10))

const search = (arr, high, low, target) => {

    if(high-low <= 1){
        if(arr[high] === target){
            return high;
        }
        else if(arr[low] === target){
            return low;
        }
        else{
            return -1;
        }
    }
    else{
        console.log('here')
        let mid = high - low
        if(arr[mid] === target){
            console.log('mid', mid)
            console.log('arr[mid]', arr[mid])
            console.log('equals')
            return mid;
        }
        if(target > arr[mid]){
            console.log('higher')
            low = mid + 1
            console.log(high, low)
            return search(arr, high, low, target)
        }
        if(target < arr[mid]){
            console.log('lower')
            console.log('before', high)
            high = mid - 1
            console.log('after', high)
            return search(arr, high, low, target)
        }
    }

}

const searchRecursive = (arr, target) => {

    let high = arr.length -1;
    let low = 0;
    return search(arr, high, low, target)

}

let arr3 = [3]

// console.log(searchRecursive(arr1, 12))

// We're given a sorted integer array, nums and an integer value, target. The array is rotated by some arbitrary number. Search the target in this array. If the target does not exist then return -1.

// [1, 2, 3, 4, 5, 8, 10, 22, 45, 76, 87, 98] // target 76
//        |
//                     s 
//                                       e

    let arr = [45, 76, 87, 98, 1, 2, 3, 4, 5, 8, 10, 22]
    let target = 76

//   m                      
//   s   
//         e         


const binarySearchSorted = (nums, target) => {
    
    let start = 0; 
    let end = nums.length - 1;

    while(start <= end){

        let mid = start + Math.floor((end - start / 2))
    

        if(nums[mid] == target){
            return mid;
        }

        //checking to see which side is ordered
        if(nums[start] <= nums[mid]){

            //checking if target is in range
            if(nums[start]<= target && target < nums[mid]){
                end = mid - 1
            }
            else{
                start = mid + 1
            }
        }
        else{

            //checking if target is in range
            if(nums[mid] < target &&  target <= nums[end]){

                start = mid + 1
            }
            else{
                end = mid - 1
            }
        }
    }

}

console.log(binarySearchSorted(arr, 5))










