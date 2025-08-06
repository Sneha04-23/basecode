//Sort the Array 
let arr=[1,3,2,4,7,5]
let shortArr=[]
let min = arr[0]
let m=0
let n=arr.length

for (let i=0 ; i<n;i++){
    for(let j=0 ; j < n;j++){
        if(arr[j]<min){
            min=arr[j]
            m=j
        }
    }
  shortArr[shortArr.length]=min
  arr.splice(m, 1)
  min=arr[0]
  m=0


}
//console.log(arr)
console.log(shortArr)