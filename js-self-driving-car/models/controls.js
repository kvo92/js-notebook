import { event } from "../../js-util-functions/utils.js";
export class Controls {
  constructor() {
    this.fw = false;
    this.l = false;
    this.r = false;
    this.rv = false;

    this.#addKeyboardListeners();
  }
  #addKeyboardListeners() {}
}
