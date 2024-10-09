// dates

let date = new Date()

// console.log(date);
// console.log(date.toString());    // converted to string type 
// console.log(date.toLocaleString());
// console.log(typeof date);    // date is a object 


// let mydate = new Date(2023 , 0 , 24)
// let mydate = new Date(2024 , 5 , 6 ,5, 4)
// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toString())

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());


let mytime = Date.now()

console.log(mytime);
// console.log(myTimeStamp); 
// console.log(myCreatedDate.getTime());   returns millisecond
// console.log(Math.floor(Date.now()/1000))     ;

let newDate = new Date()
console.log(newDate);
console.log(newData.getMonth()+1); //this will tell the month and plus 1 because js mai 0 se jan shuru hota hai 
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "long",
    
})



