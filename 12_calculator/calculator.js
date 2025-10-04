const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((sum,value) => sum + value , 0);
};

const multiply = function(array) {
  return array.reduce((product,value) => product * value , 1);
};

const power = function(num1, num2) {
  let result = 1;
	for(let i = 0 ; i < num2 ; i++){
    result *= num1;
  }
  return result;
};

const factorial = function(num1) {
	if(num1 === 1 || num1 === 0) return 1;
  return num1 * factorial(num1 - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
