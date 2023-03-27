let s = "Hello World";
let sArr = s.split("");
console.log(sArr);

let obj = new Map([
    [1,"one"],
    [2,"two"],
    [3,"three"],
    [4,"four"],
    [5,"five"]
]);

obj.set("six", 6)

function printInfo (value, key, map) {
    console.log(`m[${key}] = ${value}`);
}
console.log(obj.values());
    
