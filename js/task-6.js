'use strict';

// add stylesheet
const linkCss = document.createElement('link');

linkCss.rel = 'stylesheet';
linkCss.href = './css/task-6.css';

document.head.append(linkCss);

//script
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesField = document.querySelector('#boxes');
boxesField.classList.add('boxes-field');

const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const quantityInput = document.querySelector("input[type='number']");

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();

    fragment.appendChild(box);
  }
  boxesField.appendChild(fragment);
}

create.addEventListener('click', () => {
  let quantity = parseInt(quantityInput.value.trim(), 10);

  if (!isNaN(quantity) && quantity >= 1 && quantity <= 100) {
    boxesField.innerHTML = '';
    createBoxes(Number(quantity));
    quantityInput.value = '';
  } else {
    alert('Please enter a valid number between 1 and 100.');
  }
});

destroy.addEventListener('click', () => {
  boxesField.innerHTML = '';
});
