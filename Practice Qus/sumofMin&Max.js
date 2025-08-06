// Sum of Max and Min Element 

let arr=[1,23,4,65,2]
let min=arr[0]
let max=arr[0]
let sum=0
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
    else if(arr[i]<min){
        min=arr[i]
    }


}
sum=min+max
console.log(sum)