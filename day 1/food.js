let item = "salade"

switch(item){
    case "burger":
    case "fries":
    case "pizza":
        console.log("Fast Food")
        break;
    case "salad":
    case "soup":
    case "sandwich":
        console.log("Healthy Food")
        break;
    case "ice cream":
    case "cake":
    case "brownie":
        console.log("Dessert")
        break;
    default:
        console.log("Item not recoganized")
}