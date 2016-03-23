function digitSum(s){
    for(var i = 0;s.length>1;i++) {
        var arr = s.toString().split('')
        s = arr.reduce(function (a, b) {return +a + +b}) + ''
    }
    return s
}
