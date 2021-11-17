/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostium1", "./Sprite4/costumes/kostium1.svg", {
        x: 34,
        y: 52
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    yield* this.wait(1);
    while (true) {
      if (this.mouse.down) {
        this.createClone();
        this.visible = false;
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *startAsClone() {
    this.visible = true;
    this.goto(this.mouse.x, this.mouse.y);
    yield* this.glide(2, 240, this.sprites["Element1"].y);
    this.deleteThisClone();
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.y = 10;
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      this.effects.ghost = 70;
      yield;
    }
  }
}
