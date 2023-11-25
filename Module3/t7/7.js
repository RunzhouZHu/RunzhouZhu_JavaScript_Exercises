const hover = document.querySelector('img');
hover.addEventListener('mouseover', function (evt) {
    const picture = document.getElementById('target');
    picture.src = "img/picB.jpg";
})

hover.addEventListener('mouseout', function (evt) {
    const picture = document.getElementById('target');
    picture.src = "img/picA.jpg";
})