const button = document.querySelector('button');
button.addEventListener('click', calculate);

function calculate()
{
    let a;
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    const select = document.getElementById('operation').value;
    if (select === 'add')
    {
        a = num1 + num2;
    }
    else if (select === 'sub')
    {
        a = num1 - num2;
    }
    else if (select === 'multi')
    {
        a = num1 * num2;
    }
    else if (select === 'div')
    {
        if (num2 === 0)
        {
            a = 'Invalid result.';
        }
        else
        {
            a = num1 / num2;
        }
    }

    const result = document.getElementById('result');
    result.innerHTML = a;
}