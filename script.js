// const operator = prompt("Enter operator ( either +, -, * or / ): ");

// const number1 = parseFloat(prompt("Enter first number: "));
// const number2 = parseFloat(prompt("Enter second number: "));

// switch (operator) {
//   case "+":
//     result = number1 + number2;
//     console.log(`${number1} + ${number2} = ${result}`);
//     break;

//   case "-":
//     result = number1 - number2;
//     console.log(`${number1} - ${number2} = ${result}`);
//     break;

//   case "*":
//     result = number1 * number2;
//     console.log(`${number1} * ${number2} = ${result}`);
//     break;

//   case "/":
//     result = number1 / number2;
//     console.log(`${number1} / ${number2} = ${result}`);
//     break;

//   default:
//     console.log("Invalid operator");
//     break;
// }

const buttons = document.querySelectorAll("[data-value]");
const operations = document.querySelectorAll("[data-operations]");
const del = document.querySelector("[data-del]");
const res = document.querySelector("[data-res]");
const equals = document.querySelector("[data-equals]");
const display = document.querySelector(".screen");
const firstNumber = document.querySelector("[data-first-number]");
const secondNumber = document.querySelector("[data-second-number");
const specialCharacters = ["+", "-", "x", "/"];

let displayText = "";

const displayChar = function (input) {
  input.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });
};

const displaySpecialChar = function (input) {
  input.addEventListener("click", handleButtonClick);
};

const updateDisplay = function (value) {
  display.innerHTML = value;
};

const handleButtonClick = function (btn) {
  // console.log(btn.target);
  if (btn.target.innerHTML === "=") {
    updateDisplay(eval(displayText));
  } else if (btn.target.innerHTML === "DEL") {
    const displayTextArr = displayText.split("");
    displayText = displayTextArr.splice(0, displayTextArr.length - 1).join("");
    updateDisplay(displayText);
  } else if (btn.target.innerHTML === "RESET") {
    displayText = "";
    updateDisplay(displayText);
  } else if (btn.target.innerHTML === ".") {
    const last = displayText[displayText.length - 1];
    if (last === ".") return;
    else if (displayText.includes(".") && !displayText.includes("+")) return;
    displayText += ".";
    updateDisplay(displayText);
  } else {
    if (specialCharacters.includes(btn.target.innerHTML)) {
      const last = displayText[displayText.length - 1];
      if (specialCharacters.includes(last)) {
        const displayTextArr = displayText.split("");
        displayText =
          displayTextArr.splice(0, displayTextArr.length - 1).join("") +
          btn.target.innerHTML;
      } else {
        displayText += btn.target.innerHTML;
      }
    } else {
      displayText += btn.target.innerHTML;
    }
    updateDisplay(displayText);
  }
};

//displaying buttons
displayChar(buttons);
//displaying operations
displayChar(operations);
//displaying res
displaySpecialChar(res);
//displayong del
displaySpecialChar(del);
//display equals
displaySpecialChar(equals);
