'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

let target = document.getElementById('target');

for (let i=0;i<students.length;i++)
{
  let element = document.createElement('option');
  element.innerText = students[i].name;
  element.setAttribute('value', students[i].id);
  target.appendChild(element);
}


