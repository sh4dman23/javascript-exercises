const leapYears = function(year) {
    if (year == null || typeof year !== 'number') {
        return 'ERROR';
    }

    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
};

// Do not edit below this line
module.exports = leapYears;
