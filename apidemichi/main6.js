const URL = 'https://cataas.com/cat';

function myCat() {
    const img = document.querySelector('.image');

    img.src = `${URL}?random=${Math.random()}`;
}

const myButton = document.querySelector('.random-cat-button');

myButton.onclick = myCat;