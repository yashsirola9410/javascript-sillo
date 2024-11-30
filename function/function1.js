//function used to perform automated tasks 

function name(){
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("H");
}

//say my name 
// name();

function addtwono(number1 , number2){
    return number1 + number2 ;
}

let result = addtwono(5 , 5);
console.log(result);

//login user menu 
function loginusername(username = "yash"){
    if(!username){
        console.log("please enter the name ");
        return; 
    }

    return `${username} just logged in `
}

console.log(loginusername("yashsirola"));  // ye use kiya jata hai taki tondition ke hisab se name dala jaye 


//example 
// loginusername();  // Output: "yash just logged in"
// loginusername(""); // Output: "please enter the name"
// loginusername("yashsirola");  // Output: "yashsirola just logged in"


//REST OPERATOR 

function calculateprice(...num1){
    return num1;
}

// console.log(calculateprice(200 , 400 , 500))
//this is used when we have to add a lot of values 


//another method 
function calculateCartPrice(val1, val2, ...num1){
    return num1
}



const user = {
    username : "yashsirola",
    price : 999
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleobject(user)

handleobject({
    username : "yash sirola",
    price  : 999 
})

const mynewarr = [200 , 400 , 100 , 600]

function returnsecondvalue(getarr){
    return getarr[1]
}

console.log(returnsecondvalue(mynewarr));









