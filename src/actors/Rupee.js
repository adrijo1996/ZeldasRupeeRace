/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { randomX, randomY } from "../utils/randomPos";

const RedRupee = require("../../assets/RedRupee.png");

class Rupee {
  constructor(pos = { x: randomX(), y: randomY() }, color = "#0d9263") {
    this.color = color;
    this.pos = { x: randomX(), y: randomY() };
    this.x_speed = 5;
    this.direction_x = 1;
    this.y_speed = 5;
    this.direction_y = 1;
    this.state = true;
    this.points = 0;
    this.touched = false;
    this.image = new Image();
    this.image.src = RedRupee;
  }

  update(frame) {}

  draw(ctx, delta) {
    if (this.state) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.pos.x, this.pos.y, 3, 3);
      ctx.drawImage(this.image, this.pos.x - 10, this.pos.y - 10, 25, 25);
    }
  }

  keyboardEventDown(key) {}

  keyboardEventUp(key) {}
}

export { Rupee };
