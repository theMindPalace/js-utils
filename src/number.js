function shortFloat(value, length) {
    var _length = length || 2

    value = Math.floor(value * 100) / 100;

    return value.toFixed(_length) 
}


module.exports = {
    shortFloat: shortFloat
}