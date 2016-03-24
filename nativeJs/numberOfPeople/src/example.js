var number = function(busStops){
    var res = 0;
    for(var i = 0 ;i<busStops.length;i++) {
        res += (busStops[i][0] - busStops[i][1]);
    }
    return res;
}
