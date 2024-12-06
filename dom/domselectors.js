//DOM (DOCUMENT OBJECT MODEL)
// html dom is a standard object model and programming interface for html 
  // DOM is a W#C(World Wide Consortium) standard .

//TYPES OF SELECTORS 

// 1 - FOR "ID"

// document.getElementById('title')   
//document.getElementById('title').id   <- title ki ID bata dega 
//document.getElementById('title').class   <- undefined ayega kyuki className hota hai yahan
//document.getElementById('title).className  <- heading hai classs name 

   // for get attributes
  //document.getElementById('title').getAttribute('id')  <-  id ka name bata dega 

  //for set attributes
  //document.getElementById('title').setAttribute('class' , 'test heading')  <-  class ka name change hoke test heading ho jayega 


  // AB TIELE KO STORE KARENGE EK VARIABLE KE UNDAR TAKI USMAI CHANGE KAR SAKE 
  //const title = document.getElementById('title')
  //operations we can perform 

  //title.style.backgroundColor = 'blue'
  //title.style.backgroundColor =  ' black '

  //IN TEENO MAI KUCH DIFF HAI DEKHTE HAI 
  //title.innerHTML  YE SAB KUCH DIKHA DETA HAI 
  //title.innerText   YE TEXT DIKHATA HAI BAS 
  //title.innerContent  YE HIDDEN TEXT BHI DIKHA DETA HAI



  // 2 - queryselector
  //used to select the 1st element with the called tag
  
  //document.querySelector('.h2')
  //document.querySelector('#title)
  //document.querySelector('.heading')
  //document.querySelector('ul')  poora ul aa gaya 
  
  // more on this 
  // const myul = document.querySelector('ul')  isse poori list aa gayi aur "myul" mai store ho gyi 

  //myul.querySelector('li')  ab "ul" ke undar jake bhi "li"  ko select kr sakte ho 
  
  //const turnGreen = myul.querySelector('li')    ab myul ko bhi ek aur variable mai daal diya 
  //turngreen.style.backgroundColor = "green"    li ka backgrd color change kar diya 
  // turngreen.innerText
  //turngreen.innerText ="five"



  //*** QUERYSELECTOR ALL ***

  // document.querySelectorAll('li')  isse jitni bhi document mai li hai sab aa jayengi

  //const templist = document.querySelectorAll('li')
  //templist[0].stylecolor ='green'

  // templist.forEach(function(l){
  //   l.style.bakgroundColor = 'green'
  // })
  

  //** I am able to apply for each function using queryselector but not with className in js why ?***
  //  because getElementById does not work like array and should be converted to array first 

  //const templist = document.getElementByClassName('')
  // const myConvertedList =  Array.from(tempList)

  //myConvertedList.forEach(function(li){
 //   li.style.color = 'orange'  
 // })






// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
    
//     <title>DOM learning</title>
//     <style>
//         .bg-black{
//             background-color: #212121;
//             color: #fff;
//         }
//     </style>
// </head>
// <body class="bg-black">
//     <div >
//         <h1  id="title" class="heading">DOM learning on Chai aur code <span style="display: none;">test text</span></h1>
//         <h2>Lorem ipsum dolor sit.</h2>
//         <h2>Lorem ipsum dolor sit.</h2>
//         <h2>Lorem ipsum dolor sit.</h2>
//         <p>Lorem ipsum dolor sit amet.</p>
//         <input type="password" name="" id="">

//         <ul>
//             <li class="list-item">one</li>
//             <li class="list-item">two</li>
//             <li class="list-item">three</li>
//             <li class="list-item">four</li>
//         </ul>
//     </div>
// </body>
// </html>


