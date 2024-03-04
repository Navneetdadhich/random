
const randomColor = function(){

    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
const para = document.getElementById('code');

const colorbox = document.querySelector('#colorBox');
document.querySelector('#generate').addEventListener('click', function(){

    
    para.innerHTML = randomColor();
    para.style.color = 'white';
    document.getElementById('canvas').style.backgroundColor = randomColor();
    // console.log(randomColor());

  

});

document.querySelector('#add').addEventListener('click', function(){
    displayGuess( para.innerHTML);
});


function displayGuess(guess){
    colorbox.innerHTML += `${guess}, `;
   }



