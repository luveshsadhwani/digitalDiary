let numDisplay = document.getElementById('num');
const btnUp = document.getElementById('btnUp');
const btnDwn = document.getElementById('btnDwn');

let minDisplay = document.getElementById('min');
let secDisplay = document.getElementById('sec');

const btnClock = document.getElementById('clock');
const btnOff = document.getElementById('off');

const addMe = () => {
    let num = parseInt(numDisplay.innerHTML);
    numDisplay.innerHTML = num + 1;
};

const subMe = () => {
    let num = parseInt(numDisplay.innerHTML);
    numDisplay.innerHTML = num - 1;
};

const increaseTime = () => {
    let sec = parseInt(secDisplay.innerHTML);
    secDisplay.innerHTML = sec + 1;

    let min = parseInt(minDisplay.innerHTML);
    if (sec > 58) {
        minDisplay.innerHTML = min + 1;
        secDisplay.innerHTML = sec - 59;
    }
}

const clockStart = () => {
    window.timer = setInterval(increaseTime, 1000);
    btnOff.style.display = 'inline';
}

const clockStop = () => {
    clearInterval(window.timer);
}

btnUp.addEventListener("click", addMe);
btnDwn.addEventListener("click", subMe);

btnClock.addEventListener("click", clockStart);
btnOff.addEventListener("click", clockStop);




