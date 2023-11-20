function diceRoll(side)
{
    a = Math.floor(Math.random() * side + 1);
    return a;
}

let side = parseInt(prompt("Please enter the sides of the dice: "));
const results = [];
while (true)
{
    a = diceRoll(side);
    results.push(a)
    if (a === side)
    {
        results.forEach(name =>{
            const list = document.getElementById('list');
            const listItem = document.createElement('li');
            listItem.textContent = name;
            list.appendChild(listItem);
        })
        break
    }
}