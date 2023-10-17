const reverseString = function(string) {
    // Return undefined if no string is provided or it is undefined
    if (string == null) {
        return undefined;
    }

    let result = string.split('').reverse().join('');
    return result;
};

// Do not edit below this line
module.exports = reverseString;
