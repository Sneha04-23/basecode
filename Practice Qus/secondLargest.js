

//2nd Largest 

let marks=[112,2,3,45,3241]
let largestNUmber=marks[0]
let secondMaxNumber=marks[0]

for (let i=0 ; i<marks.length;i++){
    if(marks[i]>largestNUmber){
        largestNUmber=marks[i]
    }
}
for (let i=0 ; i<marks.length;i++){
    if (marks[i]>secondMaxNumber && marks[i]<largestNUmber){
      secondMaxNumber=marks[i]
    }
      
    

}
console.log(largestNUmber)
console.log(secondMaxNumber)