import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Element1 from "./Element1/Element1.js";
import Element2 from "./Element2/Element2.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import _7 from "./_7/_7.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Element1: new Element1({
    x: -203,
    y: 158,
    direction: 21,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Element2: new Element2({
    x: 216,
    y: 180,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite4: new Sprite4({
    x: -138,
    y: 10,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite1: new Sprite1({
    x: -10,
    y: -9,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true
  }),
  _7: new _7({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
