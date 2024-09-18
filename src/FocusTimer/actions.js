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
  if (!state.isRunning) {
    if (state.minutes > 59) {
      state.minutes = 60;
      return;
    } else {
      state.minutes += 5;
      timer.updateDisplay();
    }
  }
}

export function timeDown() {
  if (!state.isRunning) {
    if (state.minutes === 5) {
      return;
    } else {
      state.minutes -= 5;
      timer.updateDisplay();
    }
  }
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
