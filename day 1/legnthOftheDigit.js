 // how many digit in an number

 let num=98769;
 let count=0;

 while(num>0){
    count+=1
    num=Math.floor(num/10)

 }
 console.log(count)