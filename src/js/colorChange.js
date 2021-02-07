const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),


};

refs.startBtn.addEventListener('click', startChanging);
refs.stopBtn.addEventListener('click', stopChanging);

const randomColor = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function nextColor() {
    const nextColor = randomColor(0, colors.length - 1);
    refs.body.setAttribute('style', `background-color: ${colors[nextColor]}`);
}
let intervalColor = 0;

function startChanging() {
    intervalColor = setInterval(nextColor, 1000);
    refs.startBtn.setAttribute('disabled', 'disabled');
}

function stopChanging() {
    clearInterval(intervalColor);
    refs.startBtn.removeAttribute('disabled');

}