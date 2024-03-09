let joke = document.getElementById('joke');
let button = document.getElementById('generate');

let url = 'https://v2.jokeapi.dev/joke/Dark?type=single';

let getjoke = () => {
    fetch(url)
    .then((data) => data.json())
    .then((item) => {
        // console.log(item);
        joke.innerText = `${item.joke}`;
    });
};

button.addEventListener('click', getjoke );