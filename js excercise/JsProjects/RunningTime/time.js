
const clock = document.getElementById('clock');

setInterval( function () {
    let date = new Date();
    clock.style.fontSize = "30px";
    clock.style.paddingTop = "10px";
    clock.innerHTML = date.toLocaleTimeString();
}, 1000 )