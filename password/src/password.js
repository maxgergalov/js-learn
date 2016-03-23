'use strict'

function password(str) {
    return str.length >= 8 && str.match(/([A-Z])/) != null && str.match(/([a-z])/) != null && str.match(/([0-9])/) != null ? true : false
}