function recursion(sum, number, max) {
    sum += number
    console.log('sum:' + sum + ' number:' + number)
    if (number < max) {
        number++
        return recursion(sum, number, max)
    } else {
        return 'success sum is ->' + sum
    }
}

function cycle(number, max) {
    var sum = 0
    for ( ; number <= max; number++) {
        sum += number
        console.log('Now sum is ->'+sum)
    }
    return sum
}

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

function fibona4i(num){
    var fibArr = [1,1,2]
    for (var i = 3;fibArr.length<num;i++){
        if(i==fibArr[fibArr.length-1]+fibArr[fibArr.length-2]){
            fibArr.push(i)
        }
    }
    return [fibArr[num-1]]
}

console.log(recursion(0, 1, 20))
console.log('..................')
console.log(cycle(1, 20))
console.log('..................')
console.log(factorial(5))
console.log('..................')
console.log(fibona4i(20))
