function findMissingNumbers(arr){
    var missing = []
    for(var i = arr[0]; i<=arr[arr.length-1];i++){
        if(arr.indexOf(i)+1==0)
            missing.push(i)
    }
    return missing
}
