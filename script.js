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
        return operator;
    } else if (e.target.id == "result") {
        return "result";
    } else if (e.target.id == "decimal") {
        return "decimal";
    }
}

function check(value) {
    value == undefined ? true : false;
}

function result(firstNumber, operator, secondNumber) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
            break;

        case "-":
            return substract(firstNumber, secondNumber);
            break;

        case "*":
            return multiply(firstNumber, secondNumber);
            break;

        case "/":
            return divide(firstNumber, secondNumber);
            break;
    }
}

function logic(button, typeButton, firstNumber, operator, secondNumber) {
    switch (typeButton) {
        case "number":
            if (operator === undefined) {
                firstNumber += button.textContent;
                show(firstNumber);
            } else {
                secondNumber += button.textContent;
                show(secondNumber);
            }
            break;

        case "operator":
            operator = button.textContent;
            show(operator);
            break;

        case "decimal":
            if (operator === undefined) {
                firstNumber.contains(".") ? false : firstNumber += button.textContent;
                show(firstNumber);

            } else {
                secondNumber.contains(".") ? false : firstNumber += button.textContent;
                show(secondNumber);
            }
            break;

        case "result":
            firstNumber == result(firstNumber, operator, secondNumber);
            show(firstNumber);
            operator = "";
            secondNumber = "";
            break;
    }
}

function show(result) {
    let screen = document.querySelector("#screen");
    screen.textContent = result;
}

document.addEventListener('DOMContentLoaded', () => {
    let buttons = document.querySelectorAll('button');
    let firstNumber;
    let operator;
    let secondNumber;

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            let typeButton = typeButton(e);
            logic(button, typeButton, firstNumber, operator, secondNumber);
        })
    });
})