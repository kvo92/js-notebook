import { Controls } from "./controls.js";

export class Car {
  constructor(x, y, width, height) {
    this.controls = new Controls();

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.speed = 0;
    this.acceleration = 0.2;
    this.maxSpeed = 3;
    this.friction = 0.05;
  }

  draw(context) {
    context.beginPath();
    context.rect(
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );
    context.fill();
  }
  update() {
    if (this.controls.fw) {
      // this.y -= 2;
      this.speed += this.acceleration;
    } else if (this.controls.rv) {
      // this.y += 2;
      this.speed -= this.acceleration;
    }

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    } else if (this.speed < -this.maxSpeed / 2) {
      this.speed = -this.maxSpeed / 2;
    }

    if (this.speed > 0) {
      this.speed -= this.friction;
    } else if (this.speed < 0) {
      this.speed += this.friction;
    }

    if (Math.abs(this.speed) < this.friction) {
      this.speed = 0;
    }

    if (this.controls.l) {
      this.x -= 2;
    } else if (this.controls.r) {
      this.x += 2;
    }
    this.y -= this.speed;
  }
}
