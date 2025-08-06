

// frequency Count

 let nums=[1,2,3,4,5,6,3,3,6]
 let count=0
 for (let i=0;i<nums.length;i++){
    for(let j=0; j<nums.length;j++){
        if(nums[i]==nums[j]){
            count++
            
        }
    }
    console.log(nums[i],":",count)
    count=0

 }

