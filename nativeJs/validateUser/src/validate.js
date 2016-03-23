validateUsr('asddsa09_')

function validateUsr(username) {
    return username.length >= 4 && /^[a-zA-Z0-9_]+$/.test(username)
}