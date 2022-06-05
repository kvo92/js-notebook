import { gbi, lg } from "../js-util-functions/domUtils.js";
import { table } from "../js-util-functions/utils.js";
import { Car } from "./models/car.js";
import { Road } from "./models/road.js";

let G;

const setGlobal = () => {
  let canvas = gbi("canvas");
  canvas.width = 200;
  let road = new Road(canvas.width / 2, canvas.width * 0.9);
  let car = new Car(road.getLaneCenter(1), 100, 30, 50);
  G = {
    canvas: canvas,
    context: canvas.getContext("2d"),
    road: road,
    car: car, //x,y,h,w // drawing context
  };
};

const drawCar = () => {
  G.car.draw(G.context);
};
const animate = () => {
  G.car.update(G.road.borders);
  G.car.update();
  // resize canvas, clear the before trailing
  G.canvas.height = window.innerHeight;
  // TODO learn what save, translate mean
  G.context.save();
  G.context.translate(0, -G.car.y + G.canvas.height * 0.7);

  G.road.draw(G.context);
  drawCar();

  G.context.restore();
  requestAnimationFrame(animate);
};
const init = () => {
  setGlobal();
  animate();
};
init();
