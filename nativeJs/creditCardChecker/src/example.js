alert(cardChecker('5457 6238 9823 4311'))
alert(cardChecker('5457 6238 9823 4312'))

function validCard(card){
    var res = 0
    card = card.replace(/[ ]/g,'')
    for(var i = 0;i<card.length;i++){
        if(i%2==0){
            if(+card[i]>4)
                res+=+card[i]*2-9
            else
                res+=+card[i]*2
        } else {
            res+=+card[i]
        }
    }
    return res%10==0
}
