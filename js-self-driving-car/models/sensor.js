export class sensor {
  constructor(car) {
    this.car = car;
    this.raycount = 3;
    this.rayLength = 100;
    this.raySpread = Math.PI / 4;

    this.rays = [];
  }

  update() {
    this.rays = [];
  }
}
