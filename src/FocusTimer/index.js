import state from "./state.js";
import * as events from "./events.js"

export function start(minutes, seconds) {
  start.minutes = minutes;
  state.seconds = seconds;
  
  events.registerControls()
}
