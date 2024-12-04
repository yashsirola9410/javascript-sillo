
// FOR EACH EXAMPLE 

const coding = ["js" , "ruby" , "java" , "python" , "cpp"]


//BY ADDING FUNCTION IN A VARIABLE AND USING THE FORMAT GIVEN BELOW WE CAN EXCESS ANYTHINGH IN THE ARRAY 

const value = coding.forEach((item) => {
    console.log(item);
    return item ;
})

console.log(value);


//*******FILTER******** 

const mynums  =  [1 , 2 , 3 , 4 , 5 , 6 , 7]

const newNums = mynums.filter((item) => {
  return item > 4 
})
 

// console.log(newNums);

// const newnums = []

// //ANOTHER WAY TO WRITE THE ABOVE CODE 
// mynums.forEach((num) => {
//   if(num>4){
//     newnums.push(num)
//   }
// })

// console.log(newnums);

//  LETS APPLY SOME FLTER TO THE REAL DATA
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbook = books.filter((book) => book.genre === "History")

  userbook = books.filter((book) => {
           return book.publish >=1994 && book.genre === "History"
  })

  console.log(userbook);

