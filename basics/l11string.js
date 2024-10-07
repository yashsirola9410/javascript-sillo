const name = " yash "
const no = 22 

//old method 
console.log(name + no + " value")



//new method
console.log(`hello everyone my name is ${name} and my no is ${no}`) ;


const gamename = new String('yash-sirola')


// console.log(gamename[0]);
// console.log(gamename.length);


//methods 
// console.log(gamename.toUpperCase());

console.log(gamename.charAt(2));
console.log(gamename.indexOf('h'));

const newString = gamename.substring(0,4);
console.log(newString);

const newString2 = gamename.slice(2 , 4);
console.log(newString2);

const newString3 = "  yash   "
console.log(newString3);
console.log(newString3.trim());    // used to remove the spaces 

const url = "https://yash.com/yashsirola9410"

console.log(url.replace("94" ,  " "));

console.log(url.includes('yash'));      // exist karta hai ki nhi batata hai 

console.log(gamename.split('-'));


// many more methods to practice from MDN or any other sourse 

//bye bye 


