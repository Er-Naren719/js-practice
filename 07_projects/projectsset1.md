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