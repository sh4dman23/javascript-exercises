const reverseString = function(string) {
    // Return undefined if no string is provided or it is undefined
    if (string == null) {
        return undefined;
    }

    let result = '';
    string = String(string);
    for (let i = string.length - 1; i >= 0; i--) {
        result += string.charAt(i);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
