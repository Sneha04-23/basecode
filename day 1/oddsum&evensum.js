//sum of even and odd number 
 
 let evenSum=0
 let oddSum=0

 for(let i = 1;i<=100;i++){
    if (i%2==0){
        evenSum=evenSum+i  
    }
    else{
        oddSum+=i
        }
 }
 console.log(evenSum,oddSum)