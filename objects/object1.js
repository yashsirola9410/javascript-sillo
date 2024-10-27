//singelton
// Object.create

//Object Literals  it is type to represent the objects 

const mysymb = Symbol("key1")

const Jsuser ={
    name : "yash" , 
    "fullname" : " yash sirola ",
    [mysymb] : "mykey1", // [] are used to use Symbol as objects in js the keys are immutable 
    age : 20 ,
    location : " Jaipur",
    email : " yashofficial9410@gmail.com",
    isLoggedIn : false ,
    lastLoginDays : ["Monday" , " Saturday"]
}


console.log(Jsuser.email)   // Cannot be used if the property name is stored in a variable
console.log(Jsuser["email"])  // Can be used with any property name, including those with special characters, spaces, or if the name is stored in a variable.

console.log(Jsuser["full name"]) // cannot be accessed like this 
console.log(Jsuser[mysymb])

Jsuser.email = "yashsirola9410@yahoo.com"
// Object.freeze(Jsuser)    // iske baad change nhi kar sakte 
Jsuser.email = "yashofficial9410@gpt.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Helo Js User");
}
Jsuser.greetingTwo = function(){
    console.log(`hello js user , ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

