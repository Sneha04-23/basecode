
let num = 11;

switch(num){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 Days")
        break;
    case 2:
        console.log("28 (29 in leap years)  Days")
        break;
    
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 Days")
        break;
    default:
        console.log("Invailed Entry")
}
