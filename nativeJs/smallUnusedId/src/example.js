function nextId(ids){
    for(var i = 0;;i++) {
        if(ids.indexOf(i)<0) return i
    }
    return 'incorrect input'
}