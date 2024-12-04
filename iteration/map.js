//MAPS 
//  "Take this array, apply a rule to every element, and give me a new array with the modified elements."

// Why Use map?
// For Transformations: If you want to apply a function to every item in an array (e.g., double numbers, capitalize strings, etc.).
// Keeps Original Array Intact: map doesn’t change the original array—it returns a new one.
// Cleaner Syntax: It’s easier to read and write compared to traditional loops.
// Works Well with Arrow Functions: Makes code concise and modern.


const myNum =  [1,2 ,3 , 4,  5 ]

const newnums  = myNum.map((num) => {return num  +10})

const newNums = myNum
   .map((num) => num*10)
   .map((num) => num +1 )
   .filter((num) => num >=40)

console.log(newNums);