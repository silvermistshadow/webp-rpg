import { getRandomIntInclusive } from './getRandomIntInclusive';
import { Stats } from "./Stats";

export class Character {
  constructor(charName, charClass, stats) {
    this.charName = charName;
    this.charClass = charClass;
    this.stats = stats;
    this.id = 0;
  }
  //Might be useful in a full game; there could be multiple characters and enemies and using an id is quicker
  assignId() {
    this.id += 1;
    return this.id;
  }
}
