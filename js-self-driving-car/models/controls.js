import { lg } from "../../js-util-functions/domUtils.js";
import { event, table } from "../../js-util-functions/utils.js";
import { E, K } from "../../js-util-functions/constants.js";

export class Controls {
  constructor() {
    this.fw = false;
    this.l = false;
    this.r = false;
    this.rv = false;

    this.#addKeyboardListeners();
  }
  #addKeyboardListeners() {
    event(document, E.keydown, (e) => {
      switch (e.key) {
        case K.left:
          this.l = true;
          break;
        case K.right:
          this.r = true;
          break;
        case K.up:
          this.fw = true;
          break;
        case K.down:
          this.rv = true;
          break;
      }
    });
    event(document, E.keyup, (e) => {
      switch (e.key) {
        case K.left:
          this.l = false;
          break;
        case K.right:
          this.r = false;
          break;
        case K.up:
          this.fw = false;
          break;
        case K.down:
          this.rv = false;
          break;
      }
    });
  }
}
