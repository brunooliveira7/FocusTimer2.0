import state from "./state.js";
import * as timer from "./timer.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countDown();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");

  timer.updateDisplay();
}

export function timeUp() {
  console.log("timeUp Function");
}

export function timeDown() {
  console.log("timeDown Function");
}

export function forest() {
  state.soundActive = true;
  sounds.forest.play(); //pegando do sounds e inserindo no botão
}

export function rain() {
  state.soundActive = true;
  sounds.rain.play();
}

export function coffe() {
  state.soundActive = true;
  sounds.coffe.play();
}

export function fireplace() {
  state.soundActive = true;
  sounds.fireplace.play();
}
