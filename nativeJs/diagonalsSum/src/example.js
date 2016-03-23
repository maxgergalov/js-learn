function sum(matrix) {
    var sum = 0
    for(var i = 0, k = 0; i<=matrix.length-1; i++, k++){
        sum+=matrix[i][k]
    }
    for(var i = 0, k = matrix.length-1; i<matrix.length; i++, k--){
        sum+=matrix[i][k]
    }
    return sum
}
