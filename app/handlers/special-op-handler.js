import { displayUpdater } from "../display-updater.js";

export function specialOpHandler(state, clickEvent) {
  const lastRecord = state[state.length - 1];
  if (lastRecord.type === "op") {
    lastRecord.value = clickEvent.target.innerHTML;
  } else {
    state.push({ type: "op", value: clickEvent.target.innerHTML });
  }

  displayUpdater(state);
}
