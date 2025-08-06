let num1 = 40;
let num2 = 30;
let num3 = 25;

if(num1 > num2){
    if (num1 > num3){
        console.log(num1+ " Is Largest")
    }
    else{
        console.log(num3+" Is Largest")
    }
}
else if (num2>num1){
    if (num2> num3){
        console.log(num2+" Is Largest")
    }
    else{
        console.log(num3+" Is Largest")
    }
}
else{
    console.log(num3+" Is Largest")
}