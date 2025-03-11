'use strict';

// add stylesheet
const linkCss = document.createElement('link');

linkCss.rel = 'stylesheet';
linkCss.href = './css/task-5.css';

document.head.append(linkCss);

const button = document.querySelector('p');
button.classList.add('back-button');

// script
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorString = document.querySelector('.color');
const buttonColor = document.querySelector('.change-color');
const background = document.querySelector('.widget');
buttonColor.addEventListener('click', () => {
  const color = getRandomHexColor();
  colorString.style.color = color;
  colorString.textContent = color;
  background.style.backgroundColor = color;
});
