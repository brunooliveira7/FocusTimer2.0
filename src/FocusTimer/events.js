import { controls } from "./elements.js";
import * as actions from "./actions.js";

//forEach - para cada botão, se clicar fora return
export function registerControls() {
  controls.forEach((control) => {
    control.addEventListener("click", (event) => {
      const action = event.target.dataset.action; //capturando o data-action no html on click individualmente
      //se o tipo da captura, onclick, não for action (html) return
      if (typeof actions[action] != "function") {
        return;
      }
      actions[action]();
    });
  });
}
