// Given an array and chunk size, divide the array into many subarrays where each subarray
// is of length size





// 1:22
// chunk([1, 2, 3, 4], 2)
// [[1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2)
// [[1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)
// [[1, 2, 3], [4, 5, 6], [7, 8]]

let chunk = (paramArr, num) => {
    if(num <= 0){
        return console.log("pick a valid number");
    }else{
        let arrLength = paramArr.length;
        let arr = [...paramArr];
        newArr = [];
        
        if(arrLength % num !== 0){
            let remLength = arrLength % num;
            let shortArr = arr.splice(0, arr.length - remLength);
            let remArr = arr
            for(let i = 0; i < shortArr.length-num+1; i+=num){
                let cutArr = [...shortArr];
                newArr.push(cutArr.splice(i,num));
                // console.log(shortArr.splice(i,num));
            }
            newArr.push(remArr);
            return newArr;
        } else {
            for(let i = 0; i < paramArr.length-num+1; i+=num){
                let cutArr = [...arr];
                newArr.push(cutArr.splice(i,num));
            }
            return newArr;
        }
        }
    
}
let paramArr = [1,2,3,4,5,6,7,8,9];
let num = 0;
// let newArr = arr.splice(1,2);
// console.log(newArr);
console.log(chunk(paramArr, num));