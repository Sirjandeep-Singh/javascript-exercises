const getAge = function(birth, death){
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}
const findTheOldest = function(array) {
    return array.reduce((oldestPerson, currentPerson) => {
        const oldestPersonage = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currentPersonage = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestPersonage > currentPersonage ? oldestPerson : currentPerson;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
