const list = []
let number;
do {
    number = parseInt(prompt("Please enter a number: "));
    list.push(number);
}while (number !== 0)

list.reverse();

for(let name in list)
{
    console.log(name);
}