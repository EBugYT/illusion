/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("back", "./Stage/costumes/back.png", { x: 480, y: 360 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.effect = -30;
    this.vars.music = 100;
  }

  *whenGreenFlagClicked() {
    this.vars.effect = -30;
    yield* this.wait(1);
    while (true) {
      if (this.mouse.down) {
        if (this.vars.effect == -10) {
          0;
        } else {
          this.vars.effect += 1;
        }
      } else {
        while (!(this.vars.effect == -30)) {
          this.vars.effect += -1;
          yield;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.effects.brightness = this.vars.effect;
      yield;
    }
  }
}
