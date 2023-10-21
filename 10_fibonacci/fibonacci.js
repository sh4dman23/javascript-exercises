const fibonacci = function(num) {
    if (isNaN(num) || num < 0) {
        return 'OOPS';
    } else if (typeof num === 'string') {
        num = Number(num);
    }

    // Default cases
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
