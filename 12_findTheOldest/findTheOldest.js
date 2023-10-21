const findTheOldest = function(arrayOfPeople) {
    if (arrayOfPeople == null) {
        return undefined;
    }

    const currentYear = (new Date()).getFullYear();

    return arrayOfPeople.reduce((oldestPerson, person) => {
        const newPersonIsOlder = (person.yearOfDeath ? person.yearOfDeath : currentYear) - person.yearOfBirth >
                        (oldestPerson.yearOfDeath ? oldestPerson.yearOfDeath : currentYear) - oldestPerson.yearOfBirth;

        return newPersonIsOlder ? person : oldestPerson;
    }
    , arrayOfPeople[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
