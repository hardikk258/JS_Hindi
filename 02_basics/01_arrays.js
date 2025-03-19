/////////////
////array////
/////////////
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9) // at the begining
myArr.shift()   // remove from begining

// console.log(myArr);

// console.log(myArr.includes(9));

// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // 1 se 3 tk but 3 ko nhi lena mtlb only 1 & 2
console.log(myn1);


console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)  // 1 se 3 tk but 3 ko bhi lena h range ka diff h
console.log(myn2);


console.log("C ", myArr);   //splice se actuall array m se value htjayngi vo htadeta h
console.log(myn2);




