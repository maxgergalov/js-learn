function addLength(str){
    var words = str.split(' ')
    for(var i = 0; i<words.length; i++) {
        words[i]+=' ' + words[i].length
    }
    return words
}
