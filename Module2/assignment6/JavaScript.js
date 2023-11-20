function diceRoll()
{
    a = Math.floor(Math.random() * 6 + 1);
    return a;
}

const results = [];
while (true)
{
    a = diceRoll();
    results.push(a)
    if (a === 6)
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