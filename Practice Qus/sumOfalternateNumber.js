 // Sum of alternate numbers

 let num=[1,2,3,4,5,98,90,5,2]
 let altSum=0
 for(let i=0;i<num.length;i=i+2){
    altSum+=num[i]
 }
 console.log(altSum)