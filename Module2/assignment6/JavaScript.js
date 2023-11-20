const list = [];

while (true)
{
    number = parseInt(prompt("Please enter a number: "));
    if(list.includes(number))
    {
        alert("The number has already been given");
        list.forEach(name =>{
            console.log(name)
        })
        break
    }
    else
    {
        list.push(number);
    }
}