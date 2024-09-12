import state from "./state.js";
import * as timer from "./timer.js";

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
  console.log("forest Function");
}

export function rain() {
  console.log("rain Function");
}

export function coffe() {
  console.log("coffe Function");
}

export function fireplace() {
  console.log("fireplace Function");
}
