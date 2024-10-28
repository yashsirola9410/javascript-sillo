
//const tinderUser = new Object()
const tinderUser = {}      // this way we can represent 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {    // nesting in objects 
    email: "somegmail.com",
    fullname : {
        userfullname :{
            firstname : "yash",
            lastname : "choudhary"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1:"a" , 2 : "b"}
const obj2 = {3 : "a" , 6 : "b"}
const obj4 = {5:"a", 6 : "b"}

//const obj3 = {obj1 , obj2}
//const obj3 = Object.assign({} , obj1 , obj2 , obj4)

const obj3 = { ...obj1 , ...obj2}
console.log(obj3);