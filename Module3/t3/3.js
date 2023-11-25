'use strict';
const names = ['John', 'Paul', 'Jones'];

const target = document.getElementById('target');
let element = '';
for (let i = 0; i < names.length; i++)
{
    element = element +  "<li>" + names[i] + "</li>";
}

target.innerHTML = element;