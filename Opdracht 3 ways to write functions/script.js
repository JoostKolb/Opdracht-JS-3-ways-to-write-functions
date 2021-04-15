// Declaration 
function Squared(number1, number2) {
    const squaredNumber1 = number1 * number1;
    const squaredNumber2 = number2 * number2;
    const unSquaredTotal = squaredNumber1 + squaredNumber2;
    const squaredTotal = unSquaredTotal * unSquaredTotal;

    return squaredTotal;
}

console.log(Squared(2, 3))

// Expression (normal)
const SquaredConst = function (number1, number2) {

    return (number1 * number1 + number2 * number2) * (number1 * number1 + number2 * number2);

};
console.log(SquaredConst(2, 3))

// Expression (arrow)
const SquaredArrow = (number1, number2) => {

    return (number1 * number1 + number2 * number2) * (number1 * number1 + number2 * number2);

};
console.log(SquaredArrow(2, 3))