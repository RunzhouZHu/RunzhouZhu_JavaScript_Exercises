const participants = [];

number = parseInt(prompt("Please enter the number of participants: "));

for (let i = 1; i <= number; i++)
{
    name = prompt(`Please enter the name of participant ${i}`);
    participants.push(name)
}

participants.sort();

const orderedList = document.getElementById('List');

participants.forEach(name =>{
    const listItem = document.createElement('li');
    listItem.textContent = name;
    orderedList.appendChild(listItem);
    })