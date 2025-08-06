// && it is and operator

let num1 = 80.00001;
let num2 = 50;
let num3 = 80;

if(num1 > num2 && num1 > num3){
    console.log(num1+" Is Largest")
}
else if( num2 > num1 && num2 > num3){
    console.log(num2+" Is Largest")
}
else{
    console.log(num3+" Is Largest")
}