function calculateResult() {
    const expression = document.calc.txt.value;
    try {
        const result = eval(expression);
        document.calc.txt.value = result;
    } catch (error) {
        document.calc.txt.value = "Error";
    }
}

let body = document.querySelector('body');
let btn = document.querySelector('.btn');
btn.onclick = function () {
    body.classList.toggle('light');
}