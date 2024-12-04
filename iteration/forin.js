

//  FOR IN LOOP

//USING FOR IN in OBJECTS

const myObject =  {
    js : 'javascript',
    cpp : 'C++',
    rb  : 'ruby',
    swift : 'swift by apple'
}

for(const key in myObject){
    console.log(`${key} shortcut for ${myObject[key]}`);//WE CAN ACCESS BOTH KEY AND OBJECT 
}

const programming = ["js" , "rb" , "py" , "java" , "cpp" ]

for(const key in programming ){
    // console.log(programming[key]); // KHALI KEY LIKHTA TO INDEX PRINT HOTA VALUE NHI 
                                      // ISLIYE PROGRAMMING[KEY] LIKHNA PADA 
}

//FOR IN MAP PE KAAM NHI KAR RAHA ??
// ANS :-  The for...in loop does not work with a Map in JavaScript because for...in is designed to iterate over the enumerable properties of an object,

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
