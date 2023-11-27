async function asynchronousFunction() {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const jsonData = await response.json();
    console.log(jsonData.value);
}

asynchronousFunction();
