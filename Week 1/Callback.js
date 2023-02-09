
// Higher Order Functions

function createMultiplier(y) {
    return x => x*y;
}

const timesTwo = createMultiplier(2);
const timesThree = createMultiplier(3);
const timesFour = createMultiplier(4);

console.log(timesThree(5));
console.log(timesFour(5));

// Callbacks

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const square = numbers.map(x => x **2)
// console.log(square);

function map(array, callback) {
    const mapArray = []; 

    for (let i = 0; i < array.length; i++) {
        const result = callback(array[i], i);
        mapArray.push(result);
    }

    return mapArray;
}

const square = map(numbers, (num) => num * 2);

console.log(square);

const evenNumbers = numbers.filter( x => x % 2 === 0 );
console.log(evenNumbers)

function filterFunction (array, callback){
const filterArray = [];

for (let i = 0; i < array.length; i++) {
    if(callback(array[i])){
        filterArray.push(array[i]);
    }  
}
return filterArray;
}

const something = filterFunction(numbers, x => x % 2 === 0);
console.log(something);

const reduceArray = (array, callback, initialValue) => {
    let sum = initialValue;
    for (let i = 0; i < array.length; i++) {
        sum = callback(sum, array[i])
    }
    return sum;
}

const sum = reduceArray(numbers, (sum,num ) => sum + num, 0);
// const multiply = reduceArray(numbers, (sum, num) => sum * num, 1);
console.log(sum);
// console.log(multiply);

 const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function greeting(name) {
    console.log(`Hello, ${name}!`);
    readline.close();
  }
  
  function processUserInput(callback) {
    readline.question(`What's your name? `, callback);
  }

//   processUserInput((name) => 
//     greeting(name.toUpperCase())
//   )

//   processUserInput((name) => 
//     greeting(name.length)
//   )


  function add(x, y) {
    return x + y;
  }
  
  function multiply(x, y) {
    return x * y;
  }
  
  function operateOnNumbers(operator, x, y) {
    return operator(x, y);
  }
  
  console.log(operateOnNumbers((x, y) => x - y, 3, 4 ));   
  console.log(operateOnNumbers(add, 3, 4));   // 7
  console.log(operateOnNumbers(multiply, 3, 4));   // 12

  function somethingFunction(callback1, callback2, array){
    const newArray = [];
    
    for (let i = 0; i < array.length; i++) {
        let bla = callback1(array[i]);
        bla = callback2(bla);
        newArray.push(bla);
    }
    return newArray;
  }
  
  const result = somethingFunction((x) => x **2, (y) => y/10, numbers)

  console.log(result)