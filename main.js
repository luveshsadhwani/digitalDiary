let numDisplay = document.getElementById('num');
const btnUp = document.getElementById('btnUp');
const btnDwn = document.getElementById('btnDwn');

const addMe = () => {
    let num = parseInt(numDisplay.innerHTML);
    numDisplay.innerHTML = num + 1;
};

const subMe = () => {
    let num = parseInt(numDisplay.innerHTML);
    numDisplay.innerHTML = num - 1;
};

// setInterval(addMe, 1000);
btnUp.addEventListener("click", addMe);
btnDwn.addEventListener("click", subMe);




