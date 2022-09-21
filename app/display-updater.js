export function displayUpdater(state) {
  const display = document.querySelector(".screen");
  if (state && state.length > 0) {
    let valueToDisplay = "";
    state.forEach((s) => {
      valueToDisplay += s.value;
    });
    display.innerHTML = valueToDisplay;
  } else {
    display.innerHTML = "";
  }
}
