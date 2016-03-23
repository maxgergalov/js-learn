function countBy(x, n) {
    var z = []
    for (var i = x; z.length < n; i += x) {
        z.push(i)
    }
    return z
}
