function genValue(max) {
    return Math.round(Math.random() * max);
}

const MAX = 50;
const yellowEl = document.querySelector('.flag .yellow');
const valueEl = document.querySelector('.value');
let yValue = 0;
let value = genValue(MAX);

for (let i = 0; i <= value; i++) {
    setTimeout(() => {
        yellowEl.style.flexBasis = `${i}%`;
        valueEl.innerHTML = `${i * 2} %`;
    }, 1000 + i*10);
}