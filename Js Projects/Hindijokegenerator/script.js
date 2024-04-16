let joke = document.getElementById('joke');
let button = document.getElementById('generate');

let url = 'https://animechan.xyz/api/random';

let getjoke = () => {
    fetch(url)
    .then((data) => data.json())
    .then((item) => {
        console.log(item);
        joke.innerText = `${item.quote}`;
    });
};

button.addEventListener('click', getjoke );