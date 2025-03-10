const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));  // end m 2 decimal 

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));   // round off krdia 3 tk


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  // comma lgadiye number m


// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math.floor(4.2));  //4
console.log(Math.ceil(4.2)); //5
console.log(Math.abs(-4));
console.log(Math.round(4.6));  //5
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);   // ek didgit chahiye bs

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

