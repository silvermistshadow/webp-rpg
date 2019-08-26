import { getRandomIntInclusive } from "./getRandomIntInclusive";
import { Stats } from "./Stats";
import { Character } from "./Character";

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


  playerAttackRoller() {
    let rolledNum = getRandomIntInclusive(1, 20);
    let modifiedNum = rolledNum + this.character.stats.chi;
    return modifiedNum;
  }

  enemyAttackRoller() {
    let rolledNum = getRandomIntInclusive(1, 20);
    let modifiedNum = rolledNum + this.enemy.stats.chi;
    return modifiedNum;
  }

  playerDamageEnemy() {
    let initDamage = this.playerAttackRoller();
    let modifiedDamage = initDamage - this.enemy.stats.resistance;
    return modifiedDamage;
  }

  enemyDamagePlayer() {
    let initDamage = this.enemyAttackRoller();
    let modifiedDamage = initDamage - this.character.stats.resistance;
    return modifiedDamage;
  }

  

}

