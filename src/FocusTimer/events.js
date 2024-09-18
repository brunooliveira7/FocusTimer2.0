import * as el from "./elements.js";
import * as actions from "./actions.js";
import state from "./state.js";
import * as sounds from "./sounds.js";

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

//capturando o clique nos botões de som
export function registerSounds() {
  el.sounds.forEach((event) => {
    event.addEventListener("click", (event) => {
      const element = event.currentTarget.dataset.sound; // Captura o data-sound ao clicar
      console.log(element);
      // Remove a classe 'selected' de todos os botões
      el.sounds.forEach((el) => {
        el.classList.remove("selected");
      });

      // Se o tipo da captura não for uma função, retorna
      if (typeof actions[element] !== "function") {
        return;
      }
      //controle de reprodução de som
      if (state.soundActive) {
        sounds.forest.pause();
        sounds.rain.pause();
        sounds.coffe.pause();
        sounds.fireplace.pause();
        state.soundActive = false;
        console.log(state.soundActive);
      } else {
        sounds[element].play(); //Inicia a reprodução do som correspondente ao valor de element
        event.currentTarget.classList.add("selected"); //'selected' é adicionada ao botão clicado
        state.soundActive = true;
        console.log(state.soundActive);
      }
    });
  });
}
