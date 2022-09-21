import { displayUpdater } from "../display-updater.js";

export function resetHandler(state) {
  while (state.length > 0) {
    state.pop();
  }
  displayUpdater(state);
}
