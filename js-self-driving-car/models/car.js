import { Controls } from "./controls.js";

export class Car {
  constructor(x, y, width, height) {
    this.controls = new Controls();

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.angle = 0;

    this.speed = 0;
    this.acceleration = 0.2;
    this.maxSpeed = 3;
    this.friction = 0.05;
  }

  draw(context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(-this.angle);
    context.beginPath();
    context.rect(
      -this.width / 2,
      -this.height / 2,
      // this.x - this.width / 2,
      // this.y - this.height / 2,
      this.width,
      this.height
    );
    context.fill();
    context.restore();
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
      // this.x -= 2;
      this.angle += 0.03;
    } else if (this.controls.r) {
      // this.x += 2;
      this.angle -= 0.03;
    }
    this.x -= Math.sin(this.angle) * this.speed;
    this.y -= Math.cos(this.angle) * this.speed;
    // this.y -= this.speed;
  }
}
