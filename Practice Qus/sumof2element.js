// Sum of 2 element is equal to 6

let arr=[1,2,3,4,5,6]
let target=6
let n=[]

for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
        
            if(arr[i]+arr[j]==target){
                n[n.length]=[arr[i],arr[j]]

                

            }
    
    }
}
console.log(n)