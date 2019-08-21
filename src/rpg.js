import { getRandomIntInclusive } from "./getRandomIntInclusive";
import { Stats, derivedStats } from "./Stats";

export class Rpg {
  constructor(character) {
    this.character = character;
  }
}

export class battle extends Rpg {
  constructor() {
    super();
  }
}

