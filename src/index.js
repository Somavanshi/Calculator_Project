const buttons = document.querySelectorAll(".button");
const resultPanel = document.querySelector(".result");

let result = 0;
let operand1 = undefined;
let operand2 = undefined;
let operator = undefined;

buttons.forEach(element => {
    element.addEventListener("click", function (e) {
        const attr = this.getAttribute("data-value");
        if ( attr === "AC") {
            result = 0;
            operand1 = undefined;
            operand2 = undefined;
        } else if (attr === "=") {
            operand2 = result;
            result = eval(operand1 + " " + operator + " " + operand2);

        } else if (!isNumber(attr)) {
            operand1 = result;
            operator = attr;
            result = null;
        } else {
            result = result * 10 + +attr;
        }
        resultPanel.innerText = result;
    });
});

function isNumber(str) {
    return !isNaN(parseFloat(str)) && isFinite(str);
}