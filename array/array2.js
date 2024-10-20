const marvel = ["thor" , "ironman" , "spiderman"]
const dc = ["superhero" , "flash" , " batman"]

// marvel.push(dc);  // push hoga par ye pura ek element ke tarah 
// console.log(marvel);

const allhero = marvel.concat(dc);  // ismai shi se add hoga do array juud jayenge 

console.log(allhero);

const anotherarr = [1,2, 3,[4 , 5, 6,], 7 ,[6, 7, [4, 5]]]
const newanotherarr = anotherarr.flat(Infinity);  // ye undar ke saare array wale elements ko normal elements mai badal dega
// //out put  = [
//   1, 2, 3, 4, 5, 6, 7, 6, 7, 4,  5]
// console.log(newanotherarr);

console.log(Array.isArray("Yash")); // to check weather it is an array or not 
console.log(Array.from("Yash")); // array bana dega string ko 
console.log(Array.from({name : "yash"})) // interesting 

let score1 = 100 
let score2 = 200 
let score3 = 300 
console.log(Array.of(score1 , score2 , score3));  // teeno ka array bana dega 