import { assignmentHandler } from "./handlers/assignment-handler.js";
import { delHandler } from "./handlers/del-handler.js";
import { resetHandler } from "./handlers/reset-handler.js";
import { specialOpHandler } from "./handlers/special-op-handler.js";
import { numberHandler } from "./handlers/number-handler.js";

const buttons = document.querySelectorAll("[data-value]");
const operations = document.querySelectorAll("[data-operations]");
const del = document.querySelector("[data-del]");
const res = document.querySelector("[data-res]");
const equals = document.querySelector("[data-equals]");
const specialCharacters = ["+", "-", "x", "/"];

let state = []; // [{type: 'num'|'op', value: ''}]

const hostListeners = function (buttons) {
  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });
};

const handleButtonClick = (clickEvent) => {
  if (clickEvent.target.innerHTML === "=") {
    assignmentHandler(state);
  } else if (clickEvent.target.innerHTML === "DEL") {
    delHandler(state);
  } else if (clickEvent.target.innerHTML === "RESET") {
    resetHandler(state);
  } else if (specialCharacters.includes(clickEvent.target.innerHTML)) {
    specialOpHandler(state, clickEvent);
  } else {
    numberHandler(state, clickEvent);
  }
};

//displaying buttons
hostListeners([...buttons, ...operations, del, res, equals]);

const container = document.querySelector(".container");
const screen = document.querySelector(".screen");
const keypad = document.querySelector(".keypad");
const circle = document.querySelector(".circle");
const toggle = document.querySelector(".toggle");

circle.addEventListener("click", () => {
  container.classList.toggle("light");
  screen.classList.toggle("light");
  keypad.classList.toggle("light");
  res.classList.toggle("light");
  del.classList.toggle("light");
  equals.classList.toggle("light");
  toggle.classList.toggle("light");
  circle.classList.toggle("light");
});
