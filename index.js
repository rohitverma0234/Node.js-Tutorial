// console.log("Hello World")

// 3 types of molules in node:-
// 1. File-based modules
// 2. Core Modules (in-built modules)
// 3. External Modules


const obj = require('./square');

const calculate = (a) =>{
    console.log(`Area of object ${a} is ${obj.area(a)}`)

    console.log(`Perimeter of obj ${a} is ${obj.perimeter(a)}`)
}

calculate(5)

console.log(__filename)
console.log(__dirname)