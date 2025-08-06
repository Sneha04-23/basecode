//Replace Negative Numbers with 0 

let arr=[1,2,3,-93,4,52,4,-1,-9]

for(let i =0;i<arr.length;i++){
    if(arr[i]<0){
        arr[i]=0
    }
}
console.log(arr)