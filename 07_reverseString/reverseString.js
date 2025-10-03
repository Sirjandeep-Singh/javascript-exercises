const reverseString = function(str) {
    let revstr = ""
    for(let i = str.length - 1 ; i >= 0 ; i--){
        revstr += str.charAt(i);
    }
    return revstr;
};

// Do not edit below this line
module.exports = reverseString;
