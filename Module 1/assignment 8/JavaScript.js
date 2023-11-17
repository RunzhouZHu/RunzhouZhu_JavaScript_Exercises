startYear = parseInt(prompt("Please enter the start year: "));
endYear = parseInt(prompt("Please enter the end year: "));
let list = document.getElementById("list")

for (let i = startYear; i <= endYear; i++)
{
    if (i % 100 === 0)
    {
        if (i % 400 === 0)
        {
            const listItem = document.createElement('li');
            listItem.textContent = i;
            list.appendChild(listItem)
        }
    }
    else
    {
        if(i % 4 === 0)
        {
            const listItem = document.createElement('li');
            listItem.textContent = i;
            list.appendChild(listItem)
        }
    }
}