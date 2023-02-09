//Class exercise 1


function calculate(operation, x, y) {
return operation(x,y)
}

function add(x, y) {
    return x+y;
}

function multiply(x, y) {
    return x * y;
  }

  function divide(x, y) {
    return x / y;
  }

  function substract(x, y) {
    return x - y;
  }
console.log(calculate(add, 3, 5));
console.log(calculate(multiply, 3, 5));
console.log(calculate(divide, 3, 5));
console.log(calculate(substract, 3, 5));

