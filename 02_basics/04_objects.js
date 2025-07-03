// const tinderUser = new Object() 

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Hardik"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hardik",
            lastname: "singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  // 2 diff object combined seperately

// const obj3 = Object.assign({}, obj1, obj2)  // {} empty object for target and obj1,obj2 as source
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "1@gmail.com"
    },
    {
        id: 2,
        email: "2@gmail.com"
    },
    {
        id: 3,
        email: "3@gmail.com"
    },
]

users[1].email
// console.log(users[2].email);

// console.log(tinderUser);
console.log(Object.keys(users));
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


