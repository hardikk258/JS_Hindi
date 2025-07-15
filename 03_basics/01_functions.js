console.log("Hardik");

function saymyname(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("D");
    console.log("I");
    console.log("K");
}

saymyname()


function addtwonum(num1, num2){
    console.log(num1 + num2);    
}
addtwonum(3, 7);
// addtwonum(3, null);



function multwonum(num1, num2){
    return (num1 * num2);    
}
const result = multwonum(3, 7);
console.log(result);



function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("hardik"));



function calculateCartPrice(val1, val2, ...num1){   // rest operator // spread operator
    return num1
}
console.log(calculateCartPrice(2,4,5,6));


const user = {
    username : "hardik",
    price : 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user);
handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));

