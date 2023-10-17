const sumAll = function(num1, num2) {
    /*
        1. Take two numbers && verify
        2. For every number in range [num1, num2], add to a new initialized variable sum
        3. Return sum
    */

    if (
        num1 == null || num2 == null || typeof num1 !== 'number'
        || typeof num2 !== 'number' || Math.floor(num1) !== num1 || Math.floor(num2) !== num2
        || num1 < 0 || num2 < 0
    ) {
        return 'ERROR';
    }

    let sum = 0;
    const smallerNum = num1 < num2 ? num1 : num2;
    const largerNum = num1 + num2 - smallerNum;

    for (let currentNumber = smallerNum, end = largerNum; currentNumber <= end; currentNumber++) {
        sum += currentNumber;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
