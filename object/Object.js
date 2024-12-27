function multiplyby4(num){
    return num * 4 ;
}

multiplyby4.power = 2 ;

console.log(multiplyby4(5));
console.log(multiplyby4.power);
//Here, power is a custom property you created and assigned the value 2.

console.log(multiplyby4.prototype);
//The prototype property is an object that is attached to every function in JavaScript. 
// It is used to add properties and methods to the function.

function createUser(username  , score){
    this.username = username ;
    this.score = score ;
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
// ye upper kya ho raha hai ki ek new hi property type bana diya printme name se 

const yash = new createUser("yashu" , 20)
const tea = createUser("tea", 35)

yash.printMe();   // iska ans kya ayega ???
// iska ans ayega price is 20 because ek printMe name ka upper bana chuke hai 



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that 
it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
If no explicit return value is specified from the constructor, 
JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a 
non-primitive value (object, array, function, etc.), the newly created object is returned.

*/