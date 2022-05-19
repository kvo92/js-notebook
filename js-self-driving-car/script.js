import { gbi, lg } from "../js-util-functions/domUtils.js";
import { Car } from "./models/car.js";
let G;
const setGlobal = () => {
  G = {
    canvas: gbi("canvas"),
    context: canvas.getContext("2d"), // drawing context
  };
};
const settingCanvas = () => {
  G.canvas.height = window.innerHeight;
  G.canvas.width = 200;
};
const drawCar = () => {
  const car = new Car(100, 100, 30, 50); //x,y,h,w
  car.draw(G.context);
};
const init = () => {
  setGlobal();
  settingCanvas();
  drawCar();
};
init();
