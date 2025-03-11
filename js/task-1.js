'use strict';

// add stylesheet
const linkCss = document.createElement('link');

linkCss.rel = 'stylesheet';
linkCss.href = './css/task-1.css';

document.head.append(linkCss);

// script
const listCategories = document.querySelector('#categories');
const categories = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const titles = category.querySelector('h2').textContent;
  const numberElements = category.querySelectorAll('li').length;
  console.log(`Category: ${titles}`);
  console.log(`Elements: ${numberElements}`);
});
