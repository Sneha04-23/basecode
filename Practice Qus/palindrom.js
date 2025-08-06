//

// 

let arr=[1,2,3,4,3,2,2,8]
let isPalindrome=true
for(let i=0;i<arr.length/2;i++){
    
    if(arr[i]!=arr[arr.length-1-i]){
        isPalindrome=false
        break
    }


}
if(isPalindrome){
    console.log("Palindrome")
}
else{
    console.log("Not Palindrome")
}







