// this keyword details 

const user = {
    username : "rahul",
    price : 999 , 

    welcomemsg : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomemsg()
// user.username = "yash"
// user.welcomemsg()

// console.log(this);

// const chai  = function(){
//     let username =  " yash "
//     console.log(this.username);
// }

const chai = () => {
    let username = "yash"
    console.log(this);
}

//chai()

// const addtwo = (num1, num2) => {
//     return num1 + num2 ;
// }

const addtwo = (num1 , num2) => ({username : "hitesh"})  //  parenthesis is used to access objects in js 


console.log(addtwo(3 , 4 ))

//const myarray = [2 , 5 , 3 , 7 ]

//myArray.forEach()


