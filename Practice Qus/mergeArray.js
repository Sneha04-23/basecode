

//Merge Two Arrays 

let array1=[1,2,3,4]
let array2=[2,3,4,5,9]
let m=array1.length+array2.length
let n=0
for (let i=array1.length;i<m;i++){
    array1[i]=array2[n]
    n++
    
}
console.log(array1)