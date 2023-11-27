async function asynchronousFunction() {
    const value_from_input = document.getElementById('query').value;
    const response = await fetch('https://api.chucknorris.io/jokes/search?query=' + value_from_input);
    return await response.json()
}

const form = document.querySelector('form');
form.addEventListener('submit', async function (evt)
{
    evt.preventDefault();
    const response = await asynchronousFunction();
    const article = document.createElement('article');
    const body = document.querySelector('body');
    for (let i=0;i<response.result.length;i++)
    {
        const p = document.createElement('p');
        p.innerText = response.result[i].value;
        article.appendChild(p);
    }
    body.appendChild(article);
})
