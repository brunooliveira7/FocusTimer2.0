import * as el from "./elements.js";
import * as actions from "./actions.js";

//forEach - para cada botão, se clicar fora return
export function registerControls() {
  el.controls.forEach((control) => {
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

export function registerSounds() {
  // Itera sobre os botões
  el.sounds.forEach((button) => {
    button.addEventListener("click", (event) => {
      const action = event.currentTarget.dataset.sound; // Captura o data-sound ao clicar

      // Remove a classe 'selected' de todos os botões
      el.sounds.forEach((el) => {
        el.classList.remove("selected");
      });

      // Adiciona a classe 'selected' ao botão clicado
      event.currentTarget.classList.add("selected");

      // Se o tipo da captura não for uma função, retorna
      if (typeof actions[action] !== "function") {
        return;
      }

      // Executa a ação correspondente
      actions[action]();
    });
  });
}

// Chame a função registerSounds para ativar os eventos

