//Class exercise 2

function calculate(operation, x, y) {
    return new Promise((resolve, reject) => {
        
        resolve(operation(x, y))
        .catch(e => {
            reject(e)
        })
    })
    }

// const calculate = async (operation, x, y) => {
//     return await new Promise((resolve, reject) => {
        
//         resolve(operation(x, y))
//         .catch(e => {
//             reject(e)
//         })
//     })
//     }

    
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


    calculate(divide, 3, 0)
    .then(res => console.log(res));

    calculate(add, 4, 6)
    .then(res => {
        console.log(res)
        calculate(substract, 4, 1)
        .then(res2 => console.log(res2))
        calculate(multiply, 4, 7)
        .then( res3 => console.log(res3))
        calculate(divide, 7,2)
        .then(res4 => console.log(res4))
    })
    