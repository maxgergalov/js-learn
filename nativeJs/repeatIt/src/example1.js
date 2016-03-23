var repeatIt = function(str, n) {
    if(typeof str != 'string') return 'Not a string'
    var a = ''
    for(var i = n; i>0;i--){
        a=a+str
    }
    return a
}