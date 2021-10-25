"use strict";
exports.__esModule = true;
exports.randomNum = function (min, max, min1, max1) {
    var rango1 = Math.floor((Math.random() * (max - min)) + min);
    var rango2 = Math.floor((Math.random() * (max1 - min1)) + min1);
    var bool = Math.floor((Math.random() * (2 - 0)) + 0);
    if (bool === 1) {
        return rango1;
    }
    return rango2;
};
exports.randomColour = function () {
    var numbers = [];
    for (var i = 0; i < 3; i++) {
        var random = Math.floor(Math.random() * (255));
        numbers.push(random);
    }
    ;
    var colour = {
        red: numbers[0],
        green: numbers[1],
        blue: numbers[2]
    };
    return colour;
};
