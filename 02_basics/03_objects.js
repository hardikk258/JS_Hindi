// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "hardik",
    "full name": "Hardik singh",
    [mySym]: "mykey1",   // mySym : "mykey1",   // [ ]  represents symbol
    age: 18,
    location: "modinagar",
    email: "hardik@gmail.com",
    isLoggedIn : false,
    lastLogindays : ["monday", "saturday"]
}

console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  // we freeze this, now no more changes
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // we use this to get access
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
