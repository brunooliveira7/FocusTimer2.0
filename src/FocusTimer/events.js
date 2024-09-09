import { controls } from "./elements.js";

export function registerControls() {
  controls.forEach((control) => {
    control.addEventListener("click", (event) => {
      console.log(event.target); 
    });
  });
}
