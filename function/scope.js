let a = 300
if(true){
    let a = 10 
    const b  = 20 
    
    console.log("Inner : " , a );   // ye 10 print karega kyuki a scope ke undar hai 
}
// console.log(a)  // ye bahar hai to 300 hi print hoga 

function one(){
    const username = "yash"

    function innerf(){
        const website =  "yt"
        console.log(username);  // ye excess kar sakta hai kyuki scope ke undar hai  
    }
    // console.log(website);   ye excess nhi hoga kyuki bahar hai
    innerf()
}

// one()


if(true){
    const username = " yash "
    if(username === "yash"){
        const wensite = "youtube"
        console.log(username + website );
    }
    // console.log(website);  ye code ko chalne nhi dega 
}
console.log(username);

// +++++++++interesting++++++

console.log(addone(5))    // ismai add function chal jayega 

function addone(num){
    return num+1
}


addtwo(5)     // ismai nhi chalega kyuki function ek const ke andar hai 
const addtwo = function(num){
    return num  + 2 
}

