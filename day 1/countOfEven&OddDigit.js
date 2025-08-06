 //count of even and odd digit

 let num=1234567890
 ;
 let oddCount=0;
 let evenCount=0;
 while(num>0){
    let lastDigit = num%10
    if(lastDigit%2==0){
        evenCount++
    }
    else{
        oddCount++
    }
    num=Math.floor(num/10)
 }
 console.log("Even Count:",evenCount,"Odd Count:",oddCount)