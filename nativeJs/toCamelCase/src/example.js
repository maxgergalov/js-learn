console.log(camelize('background-color'))
console.log(camelize('list-style-image'))
console.log(camelize('some-various-example-of-class-or-variable'))

function camelize(line) {
    var words = line.split('-')
    var res = []
    res.push(words[0])
    for(var i = 1;i<words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1)
        res.push(words[i])
    }
    return res.join('')
}

