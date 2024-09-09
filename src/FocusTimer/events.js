import { controls } from "./elements.js";

export function registerControls() {
  controls.forEach((control) => {
    control.addEventListener("click", (event) => {
      const action = event.target.dataset.action; //capturando o btn no html no click
      if (action == undefined) {
        return;
      }
      console.log(action)
    });
  });
}
