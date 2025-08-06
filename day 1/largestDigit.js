 //find the largest digit

let num = 7152934
let lastDigit=0
let largestNUmber=0
 while(num>0){
    lastDigit=num%10
    if(lastDigit>largestNUmber){
        largestNUmber=lastDigit
        
    }
    num=Math.floor(num/10)
    
 }
 console.log(largestNUmber)