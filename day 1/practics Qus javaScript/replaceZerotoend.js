//Shift All Zeros to End 
let arr=[0,98,0,3,4,0,32,0,3]
let j=0
let l=arr.length
for(let i=0;i<arr.length;i++){
    if(arr[i]==0){
        j=i
        arr.splice(j,1)
        
    }
    j=0
}
for(let i=arr.length;i<l;i++){
  arr[i]=0
}
console.log(arr)