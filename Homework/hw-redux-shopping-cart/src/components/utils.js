

export const formatCurrency = (num) => {

    return `$${Number(num).toFixed(2).toString()}`

}

export const displayCount = (num) => {

    if(typeof(num) === 'string'){
        if(num[0] === '0' && num.length > 1){
            let count = 0;
            for(let i = 0; i < num.length; i++){
                if(num[i] === '0'){
                    count += 1
                } else {
                    break;
                } 
            }
            console.log(count)
            num = num.substring(count)
            console.log(num)
        }
        num = Number(num)
        console.log(typeof(num))
    }
    return num;
}