/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Element1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostium2", "./Element1/costumes/kostium2.svg", {
        x: -13,
        y: 22
      })
    ];

    this.sounds = [
      new Sound("miauczenie", "./Element1/sounds/miauczenie.wav"),
      new Sound("Innovative", "./Element1/sounds/Innovative.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      yield* this.glide(0.5, -203, this.sprites["Element2"].y);
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    yield* this.wait(1);
    while (true) {
      if (this.mouse.down) {
        yield* this.playSoundUntilDone("Innovative");
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {}

  *whenGreenFlagClicked4() {
    while (true) {
      this.audioEffects.volume = this.stage.vars.music;
      yield;
    }
  }
}
