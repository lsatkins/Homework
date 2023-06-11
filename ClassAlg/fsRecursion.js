
// const fib = (n) => {

//     if(n < 2){
//         return n
//     }

//     return fib(n-1) + fib(n-2)
// }

// console.log(fib(5))

const fib = (n, memo=[]) => {  // 

    if(memo[n] !== undefined) return memo[n]

    if(n <=2) return 1; 

    let res = fib(n-1, memo) + fib(n-2, memo);

    memo[n] = res
    console.log(memo)

    return res;
    
}

console.log(fib(50))
