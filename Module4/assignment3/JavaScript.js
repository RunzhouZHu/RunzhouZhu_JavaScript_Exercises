async function asynchronousFunction()
{
    const value_from_input = document.getElementById('query').value;
    try
    {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=' + value_from_input);
        const jsonData = await response.json();
        console.log(jsonData);
    }
    catch (error)
    {
        console.log(error.message);
    }
    finally
    {
        console.log('asynchronous load complete');
    }
}

const form = document.querySelector('form')
form.addEventListener('submit', function (evt) {
    evt.preventDefault()
    asynchronousFunction()
})