console.log(arrayFilter([1, 2, 4, 5, 6, 7, 8, 9],1,5))

function arrayFilter(numbers, min, max) {
    var result = []
    numbers.forEach(function(el){
        if(el>=min&&el<=max){
            result.push(el)
        }
    })
    return result
}
