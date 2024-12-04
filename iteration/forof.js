
// FOR OF LOOP (important for future and efficient )
// USED IN ARR , MAPS , STRINGS BUT NOT IN OBJECTS 

//["" , "" , ""]
// [{} , {} , {}]

const arr = [ 1 , 2 ,3 , 4, 5, 6]

for(const element of arr){  // const ke baad kuch bhi name de sakte ho 
    // console.log(element);
}

//FOR STRINGS
const greetings = "Hello World" //each character is printed
for(const gr of greetings){
    // console.log(`each char is ${gr}`)
}


//FOR MAPS

const map = new Map();

map.set('yasu' , "yash sirola")
map.set('neta' , " utsav raj")
map.set('lalli' , "shankar")
map.set('lalli' , "shankar")

// console.log(map);  this is normal printing 

// CAN WE USE FOR OF IN MAPS ????

for(const [key , value] of map){  // we can use [] for printing both key and value 
    console.log(key ,  " -- " , value);
}

// CAN WE USE FOR OBJECTS ??
// YES WE CAN USE FOR OF IN OBJECTS BUT WE NEED TO USE FOR IN OR FOR OF

const myObject = {
    game1 : 'need for speed',
    game2 : 'spiderman'
    }

for(const [key , value] of myObject){
        console.log(key, " "  , value);   // IN THIS CONDITION WE CAN NOT USE 
    }
