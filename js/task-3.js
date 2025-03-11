'use strict';

// add stylesheet
const linkCss = document.createElement('link');

linkCss.rel = 'stylesheet';
linkCss.href = './css/task-3.css';

document.head.append(linkCss);

const text = document.querySelector('h1');
text.classList.add('greet');

//script
const textOut = document.querySelector('#name-output');
const inputField = document.querySelector('#name-input');

inputField.addEventListener('input', typing => {
  if (typing.target.value.trim() === '') {
    textOut.textContent = 'Anonymous';
  } else {
    textOut.textContent = typing.target.value;
  }
});
