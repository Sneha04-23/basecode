//Even multiples of 7 that do not end with 4 (1 - 100)



 for (let i=1;i<=100;i++){
    if(i%7==0 && i%2==0 && i%10!=4){
        console.log(i)
    }
}