'use strict'
alert(lowercaseCount('abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~'))

function lowercaseCount(s){
    return s.replace(/[^a-z]/g,'').length
}
