// let callStack = [main, func, func] FIFO

class Stack {

    constructor(){

        this.data = [] 
    }

    push(item){

        this.data.push(item);
    }

    pop(){

        return this.data.pop();
    }

    peek(){ //last element in array

        return this.data[this.data.length-1];
    }

    length(){

        return this.data.length;
    }
}

let stack = new Stack();

let balance = (string) => {

    for(i)
}