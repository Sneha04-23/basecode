//Find All Prime Numbers

let arr=[1,2,3,15,76,23,44]
for(let i=0;i<arr.length;i++){
    if(arr[i]%arr[i]==0 && arr[i]%i!=0){
        console.log(arr[i])

    }
}