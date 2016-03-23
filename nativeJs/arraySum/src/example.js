Object.prototype.sum = function() {
    return this.length==0 ? 0 : this.reduce(function(sum, current) {return sum + current})
}
