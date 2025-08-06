 // Reverse Order

let numbers = [1,8,9,2,4,7]
let r=0;
let n1 = []

console.log(numbers.length)
for(let i=numbers.length-1;i>-1;i--){
    n1[r]=numbers[i]
    r+=1
}
numbers=n1
console.log(numbers )