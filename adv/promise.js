
// PROMISES : - aisa kuch jo baad mai jaa ke complete hota hai instantly nhi hota.

// Promise is a JavaScript object for asynchronous operation.

// ASYNCHRONOUS TASK ::: --  in JavaScript are operations that allow the program to continue executing other
//   code without waiting for the completion of the task. These tasks are particularly useful when dealing with time-consuming operations like:

// Fetching data from an API.
// Reading or writing files .
// Timers or delays.
// Interacting with databases.

// PRACTICE 1 
const promise_one  = new Promise(function(resolve , reject ){
    //Do any async task here 
    // DB calls , cryptography , network 
    setTimeout(function(){
        console.log('Async task is completed');
        resolve() // resolve is used to complete the promise
    },1000)
})

promise_one.then(function(){
    console.log("promise consumed");
})

//The .then() method is used to handle the promise once it is resolved.

// ye upper wale code mai pehele settimeout wala function complete hoga uske daad then wala 


//PRACTICE 2 
//ye wala direct that without the use of any variable 

new Promise(function(resolve , reject){
  setTimeout(function(){
    console.log("aysnc task 2");
    resolve()
  },1000)
}).then(function(){
    console.log("Async 2 resolve")
})

//PRACTICE 3 
const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username : "Chai" , email :"yash@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


//PRACTICE 4

// this is interesting see in Promise we applied settime out 
//  and we have a condition if error is true then reject else resolve
// when we apply then to whatso ever has been returned by the promise 
// thgen mai user print hua and then usne username return karwa diya aur 
//kuch problem hui to catch mai chale gyi 

const promiseFour = new Promise(function(resolve ,reject){
     setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "yash" , password : "234"})
        }else{
            reject('ERROR : something went wrong')
        }
     },1000)  
})

promiseFour
.then((user)=>{
   console.log(user);
   return user.username 
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);

})
.finally(()=> console.log("The promise is either resolved or rejected "))


//PRACTICE 5

const promise_five = new Promise(function(resolve , reject ){
     setTimeout(function(){
        let error = false 
        if(!error){
            resolve({username : " yash " , password : "3434"})
        }else{
            reject('ERROR : something went wrong')
        }
     },1000)
});


// async Keyword:
// Indicates that the function contains asynchronous code.
// It allows the use of the await keyword to pause execution 
// until a promise is resolved or rejected.

async function consumePromisefive(){
  try {
    const response = await promise_five 
    console.log(response);
  }catch (error){       // koi error hoga to yahan fix ho jayega 
    console.log(error);
  }
}

// consumePromisefive() 



//PRACTICE 6


// async function getAllusers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log("E : ", error);
//     }
//  }
//getAllusers()


//PRACTICE 7
// THIS IS ANOTHER METHOD U CAN USE

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))

// promise.all 












