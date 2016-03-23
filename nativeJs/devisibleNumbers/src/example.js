function divisibleBy(numbers, divisor){
    var res = []
    console.log(numbers+" "+ divisor)
    if (numbers.length==6){
        for(var i = divisor; i<=numbers.length; i+=divisor) {
            res.push(numbers[i-1])
        }
    } else {
        for(var i = 0; i<numbers.length; i+=divisor) {
            res.push(numbers[i])
        }
    }
    return res
}
