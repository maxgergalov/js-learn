var simpleWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen']
var tyWords = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
var helpWords = [' hundred', ' thousand', 'teen']

console.log('100 = ' + number2words(100))

function number2words(n){
    var result = getNum2Word(n)
    if (result[result.length-1] == ' '){
        result = result.substr(0,result.length-1)
    }
    return result
}

function getNum2Word(n) {
    var number = n + ''
    var numberLength = number.length
    if (numberLength > 3) {
        var numberOfThousands = '';
        for (var i = 0; i < numberLength - 3; i++) {
            numberOfThousands += number[i]
        }
        var thousandWords = getNum2Word(+numberOfThousands)
        return thousandWords + helpWords[1] + ' ' + lineOf3(number.substr(numberLength - 3), helpWords[0])
    }
    if (numberLength == 3) {
        if (number[0] != '0')
            return lineOf3(n, helpWords[0])
        else
            return less3Line(number.substr(1))
    } else {
        return less3Line(n)
    }
}

function lineOf3(n, helpLine) {
    if (n[0] == '0') return less3Line(n.substr(1))
    var number = n + ''
    return simpleWords[number[0]] + helpLine + ' ' + less3Line(number.substr(1))
}
function less3Line(n) {
    var number = n + ''
    var numberLength = number.length
    for (; ;) {
        if (numberLength <= 2 && numberLength != 0) {
            if (number[0] == '0' && numberLength != 1) {
                if (number[1] == '0') {
                    return ""
                }
                return simpleWords[+number[1]]
            }
            if (n > 19) {
                var returnedResult = tyWords[+number[0] - 2]
                if (number[1] != '0') {
                    return returnedResult + '-' + simpleWords[number[1]]
                }
                return returnedResult
            }
            if (n > 13) {
                return simpleWords[n - 10] + helpWords[2]
            } else {
                return simpleWords[n]
            }
        }
    }
}