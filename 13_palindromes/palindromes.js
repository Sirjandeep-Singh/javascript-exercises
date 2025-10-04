const palindromes = function (String) {
    let allowed = 'abcdefghijklmnopqrstuvwxyz1234567890';
    const CleanedString = String
    .toLowerCase()
    .split('')
    .filter((char) => allowed.includes(char))
    .join('');
    const StringReversed = CleanedString
    .split('')
    .reverse()
    .join('');
    return StringReversed === CleanedString;
};

// Do not edit below this line
module.exports = palindromes;
