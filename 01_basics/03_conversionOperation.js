// console.log("hardik");
// console.log("demo checking");

// let score = "33"
let score = "33abc"
console.log(score);
console.log(typeof(score));

let valueinnum = Number(score);
console.log(typeof(valueinnum));
console.log(valueinnum);  // nan bcoc 33abc is not a pure number

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0



let islogged = "1"
let booleanislogged = Boolean(islogged);
console.log(typeof(booleanislogged));
// 1 => true; 0 => false
// "" => false
// "hitesh" => true



let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
console.log(typeof (stringNumber));

// *********************** Operations ***********************

let value = 3
let negValue = -value

console.log(value);
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

console.log(1+2); // 3
console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1"+"2"); //12
console.log("1"+ 2 + 2); // 122
console.log( 1 + 2 + "2"); // 32

console.log(+true) //1
console.log(true) //true
console.log(+"") // 0


let num1, num2, num3
num1 = num2 = num3 = 2 + 2
console.log(num3);

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
