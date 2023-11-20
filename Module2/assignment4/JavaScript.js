const list = [];
let number;
do {
    number = parseInt(prompt("Please enter a number: "));
    list.push(number);
}while (number !== 0)

list.sort();
list.reverse();

for(let a of list)
{
    console.log(a);
}