import { displayUpdater } from "../display-updater.js";

export function delHandler(state) {
  const lastEl = state[state.length - 1];
  if (lastEl.type === "num") {
    if (lastEl.value.length > 1) {
      lastEl.value = lastEl.value.substr(0, lastEl.value.length - 1);
    } else {
      state.pop();
    }
  } else {
    state.pop();
  }
  displayUpdater(state);
}
