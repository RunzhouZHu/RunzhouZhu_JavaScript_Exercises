async function asynchronousFunction() {
    const value_from_input = document.getElementById('query').value;
    try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=' + value_from_input);
        return await response.json()
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log('asynchronous load complete');
    }
}

const form = document.querySelector('form')
form.addEventListener('submit', async function (evt)
{
    evt.preventDefault()
    const response = await asynchronousFunction()
    const div = document.createElement('div')
    const body = document.querySelector('body')
    body.appendChild(div)
    div.id = "results"
    div.innerText = ""

    for (let i = 0; i < response.length; i++)
    {

        const article = document.createElement('article');

        // Add h2 name
        const h2 = document.createElement('h2');
        h2.innerText = response[i].show.name;
        article.appendChild(h2);

        // Add a url
        const a = document.createElement('a')
        a.setAttribute("target", "_blank")
        a.innerText = response[i].show.url
        article.appendChild(a)

        // Add img
        const img = document.createElement('img')
        response[i].show.image == null ?
            img.src = "https://via.placeholder.com/210x295?text=Not%20Found" :
            img.src = response[i].show.image.medium
        img.alt = response[i].show.name
        article.appendChild(img)

        // Add summary
        const div1 = document.createElement('div')
        div1.innerHTML = response[i].show.summary
        article.appendChild(div1)

        //
        div.appendChild(article)
    }
})