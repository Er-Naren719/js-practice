# Projects related to DOM

## Project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-fbt36wcg?file=index.html)


# Solution code

## Project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.body;

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target.id) {
      case 'grey':
        body.style.background = e.target.id;
        break;
      case 'white':
        body.style.background = e.target.id;
        break;
      case 'blue':
        body.style.background = e.target.id;
        break;
      case 'yellow':
        body.style.background = e.target.id;
        break;
      default:
        return '';
    }
  });
});
```

## Project 2
```javascript
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(form.querySelector('#height').value);
  const weight = parseInt(form.querySelector('#weight').value);
  const results = form.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please provide a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please provide a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let displayText;
    if (bmi < 18.6) {
      displayText = 'Under Weight';
    } else if (18.6 < bmi < 24.9) {
      displayText = 'Normal Range';
    } else {
      displayText = 'Overweight';
    }
    results.innerHTML = `Your BMI is <span>${bmi}</span> and body type is ${displayText}`;
  }
});
```