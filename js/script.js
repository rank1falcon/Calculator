const display = document.getElementById("display");

function appendToDisplay(input) {
    const lastChar = display.value[display.value.length - 1];
    if (isOperator(lastChar) && isOperator(input)) {
        display.value = display.value.slice(0, -1) + input;
    } else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function isOperator(value) {
    return ['+', '-', '*', '/', '%'].includes(value);
}

function calculatePercentage() {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = currentValue / 100;
    }
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}