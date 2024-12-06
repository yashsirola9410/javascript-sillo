// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>DOM | Chai aur code</title>
// </head>
// <body style="background-color: #212121; color: #fff;">
//     <div class="parent">
//         <!-- this is a comment -->
//         <div class="day">Monday</div>
//         <div class="day">Tuesday</div>
//         <div class="day">Wednesday</div>
//         <div class="day">Thursday</div>
//     </div>
// </body>
//<script>

// ****parent*****

//   const parent = document.querySelector('.parent')
//   console.log(parent)    -> isse kya hoga ki parent div ke undar jitne bhi days hai sab show honge
//   console.log(parent.children)  -> HTML collection mil jayega 
//   console.log(parent.children[0])   -> kisi bhi element ko excess kar sakte ho  
//    console.log(parent.children[1].innerHTML);

// for( let i = 0 ; i< parent.children.length ; i++){
//     console.log(parent.children[i].innerHTML);s
// }

//   console.log(parent.firstElementChild);   pehela element ayega 
//  console.log(parent.lastElementChild);


//***child se parent bhi jaa sakte hai  ***
// const dayo = document.querySelector('.day')
//console.log(dayo.parentElement);   -> isse parent ka pata chal jayega 


//  ****** childNodes *****

// console.log("NOdes : " , parent.childNodes)   -> isko likhne ke baad poora hi tree aa jayega children ka 


//</script>
//</html>