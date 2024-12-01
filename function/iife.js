// immediately invoked function expression (IIFE)

(function hello(){
    // named IIFE
    console.log(`DB connected`);
})();

((name) => {
    console.log(`DB connected ${name}`);
})("yashsiorla")

// this is how u write iife and don't forget to use ; after first function