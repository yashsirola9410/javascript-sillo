const user =  {
    username  : "yash",
    login  : 6 ,
    email :  "yash@jnbsd",
    
    getUserDetails : function(){
        //console.log("Got user details from database ");
        //console.log(` user name  : ${this.username }`);
        console.log(this);             
    }
}

//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);


function User(username , login , email){
    this.username = username ;
    this.login = login ;
    this.email = email ,

    this.greeting = function(){
        console.log(`welcome ${this.username }`);
    }
    return this 
}

//new Keyword: Used to create a new object from the User constructor

const userOne = new User("yash" , 20 , true );
const usertwo = new User("neta" , 21 , true );
console.log(userOne.constructor);
//console.log(usertwo);