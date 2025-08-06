//Remove Duplicates 

let nums=[1,2,3,6,9,9,4,5,6,3,3,6,8,4,8]
 let count=0
 let c=0
 for (let i=0;i<nums.length;i++){
    for(let j=0; j<nums.length;j++){
        if(nums[i]==nums[j]){
            count++
            c=j
        }
    }
    
    if(count!=1){
        nums.splice(c,1)

    }
    count=0
    c=0
 }
console.log(nums)
