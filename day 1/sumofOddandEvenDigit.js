 //sum of even digit and odd digit


 let num=1234;
 let oddSum=0;
 let evenSum=0;
 while(num>0){
    let lastDigit=num%10
    if (lastDigit%2==0){
        
        evenSum=evenSum+lastDigit
    
    }
    else{
        oddSum=oddSum+lastDigit

    }
     num=Math.floor(num / 10)
 }
 console.log(evenSum,oddSum)