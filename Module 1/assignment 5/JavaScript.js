name = prompt("Please enter your name: ")
sorting = Math.floor(Math.random()*4)

if(sorting === 0)
{
    document.write(`${name}, you are at Gryffindor.`)
}
else if(sorting === 1)
{
    document.write(`${name}, you are at Slytherin.`)
}
else if(sorting === 2)
{
    document.write(`${name}, you are at Hufflepuff.`)
}
else
{
    document.write(`${name}, you are at Ravenclaw.`)
}