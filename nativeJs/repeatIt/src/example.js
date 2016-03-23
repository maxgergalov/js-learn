var repeatIt = function(str, n) {
    return (typeof str)[0]=='s'?Array(n+1).join(str):'Not a string'
}
