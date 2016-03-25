var TextService = require('./textService')

var fs = require('fs')

fs.readFile('data.txt', function (err, logData) {
    if (err) throw err;
    var text = logData.toString();
    var textService = new TextService()
    console.log(textService.parseToJson(text))
    console.log(textService.getInfo(text))
})
