import { getRandomIntInclusive } from "./getRandomIntInclusive";
import { Stats } from "./Stats";

export class Rpg {
  constructor(character) {
    this.character = character;
  }
}

export class battle extends Rpg {
  constructor(character, enemy) {
    super();
    this.character = character;
    this.enemy = enemy;
  }
  /*Okay, this one is going to be a bit complicated. We somehow need to get the stats from both of the previous things:
  the character and the enemy.*/
  playerAttackRoller() {
  }
}

