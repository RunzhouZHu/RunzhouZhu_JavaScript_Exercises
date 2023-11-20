function even(list)
{
    const list1 = []
    list.forEach(name =>{
        if(name % 2 === 0)
        {
            list1.push(name)
        }
    })
    return list1
}

const list = [1,2,3,4,5,6,7,8,9,10]
list1 = even(list)

console.log(list)
console.log(list1)