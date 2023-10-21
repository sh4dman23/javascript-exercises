const palindromes = function (string) {
    const punctuations = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

    const chars = string.toLowerCase().split('');

    const charsWithoutPunctuation = chars.filter(char => !(punctuations + ' ').includes(char));

    // String without punctuations === reversed string without punctuations?
    return charsWithoutPunctuation.join('') === charsWithoutPunctuation.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
