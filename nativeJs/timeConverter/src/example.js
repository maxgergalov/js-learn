function convert(time){
    var mil = time.getMilliseconds().toString()
    while(mil.length<3)
        mil="0"+mil
    return time.toString().split(' ')[4]+","+mil
}
