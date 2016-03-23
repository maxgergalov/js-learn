'use strict'
var result
//alert(validateHello('hellow asfasfaf asfasf gb'))
alert(validateHello('asfddf gsd g ,,,...///!!23454!...///%^&*(@&*$#!! !hello'))

function validateHello(s) {
    var arr = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc']
    var words = s.replace(/[^\w\d]/g,' ').toLowerCase().split(' ')
    alert(words)
    var result = false
    for(var i = 0 ; i < words.length ; i++){
        if(arr.indexOf(words[i])>=0){
            result = true
            break
        }
    }
    return result
}