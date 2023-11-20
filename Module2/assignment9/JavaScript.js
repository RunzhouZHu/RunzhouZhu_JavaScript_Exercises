function concat(list)
{
    let a = '';
    list.forEach(name =>{
        a = a + name;
    })
    return a;
}

const list = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
result = concat(list)
document.write(result)