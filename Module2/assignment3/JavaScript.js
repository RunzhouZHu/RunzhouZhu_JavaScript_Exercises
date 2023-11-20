const dogs = [];

for(let i=1;i<=6;i++)
{
    let name = prompt(`Please enter the name of dog ${i}`);
    dogs.push(name);
}

dogs.reverse();

list = document.getElementById('List');
dogs.forEach(name =>{
    const listItem = document.createElement('li');
    listItem.textContent = name;
    list.appendChild(listItem);
})