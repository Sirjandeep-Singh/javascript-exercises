const leapYears = function(myYear) {
    if(myYear%400 === 0) return true;
    if(myYear%100 === 0) return false;
    if(myYear%4 === 0) return true;
    return false;
};

// Do not edit below this line
module.exports = leapYears;
