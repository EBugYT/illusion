/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("7", "./_7/costumes/7.svg", { x: 240, y: 180 })
    ];

    this.sounds = [new Sound("pop", "./_7/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
