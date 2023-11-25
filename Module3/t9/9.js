const button = document.querySelector('button')
button.addEventListener('click', calculate)

function calculate()
{
    let a;
    const calculation = document.getElementById('calculation').value
    try
    {
        if (calculation.includes('+'))
        {
            const str = calculation.split('+')
            a = parseInt(str[0]) + parseInt(str[1]);
        }
        else if (calculation.includes('-'))
        {
            const str = calculation.split('-')
            a = parseInt(str[0]) - parseInt(str[1]);
        }
        else if (calculation.includes('*'))
        {
            const str = calculation.split('*')
            a = parseInt(str[0]) * parseInt(str[1]);
        }
        else if (calculation.includes('/'))
        {
            const str = calculation.split('/')
            if (str[1] === 0)
            {
                a = 'Calculating result error.'
            }
            else
            {
                a = parseInt(str[0]) / parseInt(str[1]);
            }

        }
    }
    catch (err)
    {
        a = 'Input error.'
    }
    const result1 = document.getElementById('result');
    result1.innerHTML = a;
}