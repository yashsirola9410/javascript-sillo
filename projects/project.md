# projects Related to Dom

##  Project link background color 
[click] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution 
## Project 1 

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```


## Project 2  bmi calculator 

```javascript
  const form = document.querySelector('form');
// this use case will give you empty

//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (E) {
  E.preventDefault();

  const h = parseInt(document.querySelector('#height').value);
  const w = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (h === '' || h < 0 || isNaN(h)) {
    results.innerHTML = `Please give a valid height ${h}`;
  } else if (w === '' || w < 0 || isNaN(w)) {
    result.innerHTML = `Please give a valid weight ${w}`;
  } else {
    const bmi = (w / ((h * h) / 10000)).toFixed(2);

    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```


##Project 3 digital clock 

```javascript 
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
// kya kiya ismai ??
//clock ko selet kiya
// setInterval function hota hai jo time ke according function ko run karta hai
// to humne function usi mai daal diya
// uske baaad clock ka inner HTML change kar diya

```



## Project 4 Guess The no.

```javascript
     
```

## Project 6 Unlimited colors 


```javascript

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


```