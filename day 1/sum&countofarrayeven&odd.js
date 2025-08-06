//Sum of Even number and Odd number and Count of Even and Odd number


let marks = [34,45,56,12,66,77]
 let evenSum=0;
 let oddSum= 0;
 let evenCount = 0;
 let oddCount =0;

 for(let i=0;i<marks.length;i++){
    if(marks[i]%2==0){
        evenSum+=marks[i]
        evenCount++
    }
    else{
        oddSum+=marks[i]
        oddCount++
    }
 }
 console.log("Sum of even numbers:",evenSum,"count:",evenCount)
 console.log("Sum of odd numbers:",oddSum,"count:",oddCount)