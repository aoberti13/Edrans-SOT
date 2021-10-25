"use strict";

const randomNum = (min, max, min1, max1) => {
  let rango1 = Math.floor(Math.random() * (max - min) + min);
  let rango2 = Math.floor(Math.random() * (max1 - min1) + min1);
  let bool = Math.floor(Math.random() * (2 - 0) + 0);

  if (bool === 1) {
    return rango1;
  }

  return rango2;
};

const randomColour = () => {
  let colour = {};
  let numbers = [];

  for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * 255);
    numbers.push(random);
  }

  ;
  colour.red = numbers[0];
  colour.green = numbers[1];
  colour.blue = numbers[2];
  return colour;
};

module.exports = {
  randomNum,
  randomColour
};