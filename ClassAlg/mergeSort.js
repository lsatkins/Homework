// const arr1 = [3,7,9,11]
// const arr2 = [1,3,6,9,13,14,18]
// const arr3 = [3]
// const arr4 =[7]

let sortArrs = (arr1, arr2) => {

    let i = 0
    let j = 0;
    let combined = []

while(i < arr1.length && j < arr2.length){
    let curr1 = arr1[i]
    let curr2 = arr2[j]

    if(curr1 < curr2){
        combined.push(curr1)
        i++
    }
    else if(curr2 < curr1){
        combined.push(curr2)
        j++
    }
    else{
        combined.push(curr1);
        combined.push(curr2);
        i++;
        j++;
    }
    
}
if (i < arr1.length){
    let leftover1 = arr1.slice(i)
    combined = combined.concat(leftover1)
}
if (j < arr2.length){
    let leftover2 = arr2.slice(j);
    // combined = [...combined,]
    combined.push(...leftover2)
    // console.log(combined)
}
return(combined)

}

// console.log(sortArrs(arr3,arr4))

let splitArr = (array) => {
    let arrLeft;
    let arrRight;
    let half= array.length / 2;
    let mid;
    if(array.length % 2 == 0){
        arrLeft = array.splice(0, half)
        arrRight = array
    }
    else{
        mid = Math.floor(half)
        arrLeft = array.splice(0, mid)
        arrRight = array
    }
    return [arrLeft, arrRight]
}
// console.log(splitArr(arr4))

let mergeSort = (array) => {

    if(array.length < 2){
        return array
    }
    else{

    let split = splitArr(array)
    let left = split[0]
    let right = split[1]
    
    return sortArrs(mergeSort(left), mergeSort(right))
        
    }
    
}
// const arr5 = [4,2,6,0]

let arr18 = [-823, 164, 48, -987, 323, 399, -293, 183, -908, -376, 14, 980, 965, 842, 422, 829, 59, 724, -415, -733, 356, -855, -155, 52, 328, -544, -371, -160, -942, -51, 700, -363, -353, -359, 238, 892, -730, -575, 892, 490, 490, 995, 572, 888, -935, 919, -191, 646, -120, 125, -817, 341, -575, 372, -874, 243, 610, -36, -685, -337, -13, 295, 800, -950, -949, -257, 631, -542, 201, -796, 157, 950, 540, -846, -265, 746, 355, -578, -441, -254, -941, -738, -469, -167, -420, -126, -410, 59]

console.log(mergeSort(arr18))