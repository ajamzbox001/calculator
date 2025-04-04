let display = document.getElementById("display");
let buttons = document.querySelectorAll(".num, .operator");
let clearButton = document.getElementById("clear");
let backspaceButton = document.getElementById("backspace");
let equalsButton = document.getElementById("equals");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.textContent;
    });
});

equalsButton.addEventListener("click", () => {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
});

clearButton.addEventListener("click", () => {
    display.value = "";
});

backspaceButton.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});