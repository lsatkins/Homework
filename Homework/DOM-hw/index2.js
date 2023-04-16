const createNode = (string) => {

    //creating a funciton to take the entire element from the original html file
    //and use it as an argument in our new function to insert it into the new 
    //html file

    let strArr = string.split("");

    //creating an array of characters from the string form of the element

    let tag = "";
    let endOfTagIndex = 0;
    let endOfAttIndex;
    let endOfValIndex;
    let strAtt = "";
    let arrAtt = [];
    let strVal = "";
    let arrVal = [];
    let text = "";

    for (let i = 1; i <= strArr.length - 1; i++){

        if(strArr[i] != " "){
            tag += strArr[i];
        } else {

            endOfTagIndex = i;
        break;

        }
        
        //starting at index one to skip the "<"
        // strArr[i] is concatinated to tag until it reaches a " " to create the tag name   
    }

    for (let i = endOfTagIndex + 2; i <= strArr.length -1; i++){

        // starting at endOfTagIndex + 2 to avoid the space between the
        // tag and attributes

        let current = strArr[i];

        //looping through and creating an array of attributes and values

        if(current === ">"){

            arrAtt.push(strAtt)
            endOfAttIndex = i;
            break;
        }

        if(current != ("=" || '"' || " ")){
            strAtt += current;
        }
        if(current === "=" || (current === '"' && strArr[i-1] != "=")){

            arrAtt.push(strAtt);
            strAtt = "";
        }
    }

    for(let i = endOfAttIndex + 1; i <= strArr.length; i++){

        let current = strArr[i];

        //looping through and creating a string of the text within the element

        if(current === "<"){
            break;
        } else {
            text += current;
        }

    }
    arrAtt.pop();

    // ^ was returning an empty string at the end of the array so I popped 
    //   it off.

    let el = document.createElement(tag);

    // looping through array of attributes and values to set them to the 
    // created element

    for(let i = 0; i <= arrAtt.length -2; i+=2){

        // removing the quotes around every second element in the array

        let everyOtherVal = arrAtt[i+1];
        let everyOtherAtt = arrAtt[i];
        let newValue = "";
        let newAtt = "";

        for(let j = 1; j <= everyOtherVal.length -2; j++){
            newValue += everyOtherVal[j];
        }

        if(everyOtherAtt[0] === " "){
            for(let k = 1; k <= everyOtherAtt.length-1; k++){
            
                newAtt += everyOtherAtt[k];
            
            }
            arrAtt[i] = newAtt;
        }

        el.setAttribute(arrAtt[i], arrAtt[i+1])
    }

    el.innerText = text;

    return el;
    
}

let test = createNode('<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">');

console.log(test);
