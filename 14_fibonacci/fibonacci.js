const fibonacci = function(targetidx) {
    if(targetidx < 0) return "OOPS";
    let var1 = 0;
    let var2 = 1;
    let var3 = 1
    for(let i = 0 ; i < targetidx; i++){
        var1 = var2;
        var2 = var3;
        var3 = var1 + var2;
    }
    return var1;
};

// Do not edit below this line
module.exports = fibonacci;
