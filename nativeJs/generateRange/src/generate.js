alert(generateRange(2,50,2))

function generateRange(min, max, step){
    for (var arr = []; min<=max; min+=step)
        arr.push(min)
    return arr
}