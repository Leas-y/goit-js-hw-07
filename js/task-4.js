'use strict';

// add stylesheet
const linkCss = document.createElement('link');

linkCss.rel = 'stylesheet';
linkCss.href = './css/task-4.css';

document.head.append(linkCss);

const labels = document.querySelectorAll('label');
labels.forEach(label => label.classList.add('label'));

//script
const inputFields = document.querySelectorAll('input');

inputFields.forEach(input => {
  input.addEventListener('click', () => {
    input.placeholder = 'Type area';
  });
  input.addEventListener('blur', () => {
    input.placeholder = '';
  });
});

const form = document.querySelector("form");

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const email = formData.get('email');
  const password = formData.get('password');

  if (!email || !password) {
    alert('Fill in all fields!');
    return;
  }

  console.log({ email, password });
  form.reset();
});
