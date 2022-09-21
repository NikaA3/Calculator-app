import { displayUpdater } from "../display-updater.js";

export function assignmentHandler(state) {
  const shifted = state.shift();
  let finalResult = parseFloat(shifted.value);

  state.forEach((s, index) => {
    if (s.type === "num") {
      const previousEl = state[index - 1];

      switch (previousEl.value) {
        case "+":
          finalResult += parseFloat(s.value);
          break;
        case "-":
          finalResult -= parseFloat(s.value);
          break;
        case "x":
          finalResult *= parseFloat(s.value);
          break;
        case "/":
          finalResult /= parseFloat(s.value);
          break;
      }
    }
  });

  state = [{ type: "num", value: finalResult }];
  displayUpdater(state);
}
