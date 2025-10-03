const removeFromArray = function(Array, ...targets) {
    let newArray = [];
    Array.forEach(element => {
        if(!targets.includes(element)){
            newArray.push(element);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
