const score = 60 

const balance = new Number(60)    // isse koi bhi value ho no. mai hi rahegi
console.log(balance);

// console.log(balance.toString().length);
// console.log(typeof balance.toFixed(1));  //for convertion to string and and rounding off


const othernumber = 123.8966

// console.log(othernumber.toPrecision(4));  // jitna value daloge utne tak round off karke de dega 


//currency conversion
const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'));  //en-IN is for indian currency

//*********maths*********

// console.log(Math); 
// console.log(Math.abs(-4));    for getting the absolute value that is positive value 
// console.log(Math.round(4.6));      for getting the round off value 
// console.log(Math.ceil(4.2));        for getting the upper roundoff value that is 5 for this
// console.log(Math.floor(4.9));     for getting the lower round off value that is 4 for this one 

// console.log(Math.min(4, 5, 6 ,7 , 8 ));
// console.log(Math.max(4,5 , 6, 7, 8))


//random values 

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.florr(Math.random()*10)+1);


// ******very imp formula ****

const min = 10 ; 
const max = 20 ;

console.log(Math.floor(Math.random()*(max - min + 1))+min)





