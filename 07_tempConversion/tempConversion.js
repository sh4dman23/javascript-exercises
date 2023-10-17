const convertToCelsius = function(temperatureInF) {
    if (temperatureInF == null || typeof temperatureInF !== 'number') {
        return 'ERROR';
    }

    const temperatureInC = (temperatureInF - 32) * 5 / 9;

    return Math.floor(temperatureInC) === temperatureInC ? parseInt(temperatureInC) : Math.round(temperatureInC * 10) / 10;
};

const convertToFahrenheit = function(temperatureInC) {
    if (temperatureInC == null || typeof temperatureInC !== 'number') {
        return 'ERROR';
    }

    const temperatureInF = temperatureInC * 9 / 5 + 32;

    return Math.floor(temperatureInF) === temperatureInF ? parseInt(temperatureInF) : Math.round(temperatureInF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};