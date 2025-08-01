function add(number1, number2) {
    return number1 + number2;
}

function substract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

function typeButton(e) {
    if (e.target.classList.contains("number")) {
        return "number";
    } else if (e.target.classList.contains("operator")) {
        return "operator";
    } else if (e.target.id == "result") {
        return "result";
    } else if (e.target.id == "decimal") {
        return "decimal";
    } else if (e.target.id == "ac") {
        return "ac";
    } else if (e.target.id == "del") {
        return "del";
    }
}

function result(firstNumber, operator, secondNumber) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);

        case "-":
            return substract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);

        case "/":
            return divide(firstNumber, secondNumber);
    }
}

function logic(button, typeButton, calc) {
    switch (typeButton) {
        case "number":
            if (calc.operator === "") {
                calc.firstNumber += button.textContent;
                show(calc.firstNumber);
            } else {
                calc.secondNumber += button.textContent;
                show(calc.secondNumber);
            }
            break;

        case "operator":
            calc.operator = button.textContent;
            show(calc.operator);
            break;

        case "decimal":
            if (calc.operator === "") {
                if (!calc.firstNumber.includes(".") && calc.firstNumber.length >= 1) {
                    calc.firstNumber += button.textContent;
                }
                show(calc.firstNumber);
            } else {
                if (!calc.secondNumber.includes(".") && calc.secondNumber.length >= 1) {
                    calc.secondNumber += button.textContent;
                }
                show(calc.secondNumber);
            }
            break;

        case "result":
            let n1 = parseFloat(calc.firstNumber);
            let n2 = parseFloat(calc.secondNumber);

            if (!isNaN(n1) && !isNaN(n2)) {
                calc.firstNumber = result(n1, calc.operator, n2).toString();
                show(calc.firstNumber);
                calc.operator = "";
                calc.secondNumber = "";
            }
            break;

        case "ac":
            calc.firstNumber = "";
            calc.operator = "";
            calc.secondNumber = "";
            show(calc.firstNumber);
            break;

        case "del":
            if (calc.secondNumber) {
                calc.secondNumber = calc.secondNumber.slice(0, -1);
                show(calc.secondNumber);
            } else if (calc.operator) {
                calc.operator = "";
                show(calc.firstNumber);
            } else if (calc.firstNumber) {
                calc.firstNumber = calc.firstNumber.slice(0, -1);
                show(calc.firstNumber);
            }
            break;
    }
}


function show(result) {
    let screen = document.querySelector("#screen");
    screen.textContent = result;
    screen.scrollLeft = screen.scrollWidth;
}

document.addEventListener('DOMContentLoaded', () => {
    let buttons = document.querySelectorAll('button');

    let calculator = {
        firstNumber: "",
        operator: "",
        secondNumber: ""
    };

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            let type = typeButton(e);
            logic(button, type, calculator);
        })
    });
})