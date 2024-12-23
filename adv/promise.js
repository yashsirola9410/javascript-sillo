
// PROMISES : - aisa kuch jo baad mai jaa ke complete hota hai instantly nhi hota.

// Promise is a JavaScript object for asynchronous operation.

// ASYNCHRONOUS TASK ::: --  in JavaScript are operations that allow the program to continue executing other
//   code without waiting for the completion of the task. These tasks are particularly useful when dealing with time-consuming operations like:

// Fetching data from an API.
// Reading or writing files .
// Timers or delays.
// Interacting with databases.

const promise_one  = new Promise(function(resolve , reject ){
    //Do any async task here 
    // DB calls , cryptography , network 
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)
})