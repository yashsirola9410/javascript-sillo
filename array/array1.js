const arr = [0  ,1  ,3 ,4 ,5 ]  // representation 
const myheros = ["yash " , "neta ", " juaari"] // for string 

const  myarr2 = new Array(1, 2, 3 , 34 , 5 ) // another type of representation 
// console.log(myarr2);

const heros2 = ["sidhu" , " gaddar" , "lulli"]

//array methods 

arr.push(8);   // piche se add 
arr.push(7);
arr.pop();  // last element ko out 

// console.log(arr);

arr.unshift(10);  // starting se insert 
// console.log(arr);
arr.shift();       // starting se remove
// console.log(arr);  

console.log(arr.includes(45));  // exist or not 
console.log(arr.indexOf(3));   // to check the index 

const newarr = arr.join()    // join converts the elements into string 
// console.log(arr);
// console.log(newarr);


//splice and slice 

//slice 
console.log("A "+ arr);
const  myn = arr.slice(1, 3);   // ismai original arr mai koi change nhi hota 

console.log(myn);
console.log("B" , arr);

//splice 
console.log("C "+ arr );
const myn2 = arr.splice(1,3);  // ismai origianl arr bhi kat jata hai aur poori range include hoti hai  

console.log(myn2);
console.log("D "+ arr);

