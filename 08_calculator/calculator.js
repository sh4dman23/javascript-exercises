const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
    return num1 - num2;
};

const sum = function(array) {
    if (!Array.isArray(array)) {
        return undefined;
    } else if (array.length === 0) {
        return 0;
    }

    return array.reduce((sumOfElements, element) => {
        if (!isNaN(element)) {
            sumOfElements += Number(element);
        }
        return sumOfElements;
    });
};

const multiply = function(array) {
    if (!Array.isArray(array)) {
        return undefined;
    } else if (array.length === 0) {
        return 0;
    }

    return array.reduce((productOfElements, element) => {
        if (!isNaN(element)) {
            productOfElements *= element;
        }
        return productOfElements;
    });
};

const power = function(num1, num2) {
    return num1 ** num2;
};

const factorial = function(num) {
    if (num < 0 || Math.floor(num) !== num || isNaN(num)) {
        return undefined;
    } else if (num === 0) {
        return 1;
    }

    return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
