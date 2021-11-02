export const randomNum = (min: number, max: number, min1: number, max1: number) => {
    let rango1 = Math.floor((Math.random() * (max - min)) + min);
    let rango2 = Math.floor((Math.random() * (max1 - min1)) + min1);
    let bool = Math.floor((Math.random() * (2 - 0)) + 0);
    if (bool === 1) {
        return rango1;
    }
    return rango2;
};

export const randomColour = () => {

    let numbers = [];
    for (let i = 0; i < 3; i++) {
        const random = Math.floor(Math.random() * (255));
        numbers.push(random);
    };
    let colour: {
        red: Number,
        green: Number,
        blue: Number,
    } = {
        red: numbers[0],
        green: numbers[1],
        blue: numbers[2]
    }
    return colour;
};



