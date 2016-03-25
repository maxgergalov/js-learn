var TextService = function () {};

TextService.prototype.parseToJson = function (text) {
    var users = []
    var results = {}
    var lines = text.split('\n')
    lines.forEach(function (line) {
        var userInfo = line.split(' ')
        var userName = userInfo[0] + ' ' + userInfo[1]
        var userBirthday = userInfo[2] + ' ' + userInfo[3] + ' ' + userInfo[4]
        var userPhone = userInfo[5]
        var userAdress = userInfo[6]
        users.push(new User(userName, userBirthday, userPhone, userAdress))
    })
    return users
}

TextService.prototype.getInfo = function(text){
    var wordsNumber = 0
    var lines = text.split('\n')
    lines.forEach(function(line){
        wordsNumber += line.split(' ').length
    })
    return new Info(wordsNumber, lines.length)
}

module.exports = TextService;

function User(name, birth, phone, adress) {
    this.name = name
    this.birth = birth
    this.phone = phone
    this.adress = adress
}
function Info(wordsNumber,linesNumber){
    this.wordsNumber = wordsNumber
    this.linesNumber = linesNumber
}