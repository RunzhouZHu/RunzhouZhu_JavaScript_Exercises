const first_item = document.createElement('li');
first_item.innerText = 'First item';
const second_item = document.createElement('li');
second_item.innerText = 'Second item';
const third_item = document.createElement('li');
third_item.innerText = 'Third item';

const target = document.getElementById('target');
target.appendChild(first_item);
target.appendChild(second_item);
target.appendChild(third_item);

target.classList.add('my-item');