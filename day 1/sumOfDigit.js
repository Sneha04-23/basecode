 //sum of all the digit of the number
 //math.floor remove decimal number
 
 
 let num=1234;
 let sum=0;

 while(num>0){

   let lastDigit=num%10
    sum=sum+lastDigit
    num=Math.floor(num / 10) // math.floor give the integer if num/10=123.4 but using math.floor(num/10) we get 123

 }
 
 console.log(sum)
