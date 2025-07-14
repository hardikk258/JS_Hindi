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


