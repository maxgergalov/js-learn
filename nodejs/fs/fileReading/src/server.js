var fs = require('fs')

var users = []

fs.readFile('data.txt', function (err, logData) {
    if (err) throw err;
    var text = logData.toString();
    var results = {};
    var lines = text.split('\n');

    lines.forEach(function(line) {
        var userInfo = line.split(' ');
        var userName = userInfo[0]+ ' '+ userInfo[1]
        var userBirthday = userInfo[2]+' '+userInfo[3]+' '+userInfo[4]
        var userPhone = userInfo[5]
        var userAdress = userInfo[6]
        users.push(new User(userName,userBirthday,userPhone,userAdress))
    });
    console.log(users)
});

function User(name, birth, phone, adress){
    this.name = name
    this.birth = birth
    this.phone = phone
    this.adress = adress
}