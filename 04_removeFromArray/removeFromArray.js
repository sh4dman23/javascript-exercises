const removeFromArray = function(array, ...elementsToRemove) {
    if (arguments == null) {
        return undefined;
    } else if (elementsToRemove == null) {
        return array;
    }

    return array.filter((element) => !elementsToRemove.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
