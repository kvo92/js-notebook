import { gbi, lg } from "../js-util-functions/domUtils.js";
import { table } from "../js-util-functions/utils.js";
import { Car } from "./models/car.js";
import { Road } from "./models/road.js";

let G;

const setGlobal = () => {
  let canvas = gbi("canvas");
  canvas.width = 200;
  G = {
    canvas: canvas,
    context: canvas.getContext("2d"),
    road: new Road(canvas.width / 2, canvas.width * 0.9),
    car: new Car(100, 100, 30, 50), //x,y,h,w // drawing context
  };
};

const drawCar = () => {
  G.car.draw(G.context);
};
const animate = () => {
  // resize canvas, clear the before trailing
  G.canvas.height = window.innerHeight;
  G.car.update();
  G.road.draw(G.context);
  drawCar();
  requestAnimationFrame(animate);
};
const init = () => {
  setGlobal();
  animate();
};
init();
