import { displayUpdater } from "../display-updater.js";

export function numberHandler(state, clickEvent) {
  const newValue = { type: "num" };
  if (state.length === 0) {
    newValue.value = clickEvent.target.innerHTML;
    state.push(newValue);
  } else {
    const lastRecord = state[state.length - 1];
    if (lastRecord.type === "num") {
      if (
        clickEvent.target.innerHTML === "." &&
        lastRecord.value.includes(".")
      ) {
        return;
      }
      lastRecord.value += clickEvent.target.innerHTML;
    } else {
      if (clickEvent.target.innerHTML === ".") {
        return;
      }
      newValue.value = clickEvent.target.innerHTML;
      state.push(newValue);
    }
  }

  displayUpdater(state);
}
