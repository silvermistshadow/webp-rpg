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
    this.winner = 0;
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

  damageEnemy() {
    let initHealth = this.enemy.stats.health;
    let damageCalc = this.playerDamageEnemy();
    let outputHealth = initHealth - damageCalc;
    this.enemy.stats.health = outputHealth;
    if (this.enemy.stats.health <= 0) {
      this.battleOver(this.character);
    }
  }

  damagePlayer() {
    let initHealth = this.character.stats.health;
    let damageCalc = this.enemyDamagePlayer();
    let outputHealth = initHealth - damageCalc;
    this.character.stats.health = outputHealth;
    if (this.character.stats.health <= 0) {
      this.battleOver(this.enemy);
    }
  }

  battleOver(winner) {
    if (winner == this.character) {
      this.winner = 1;
    }
    else if (winner == this.enemy) {
      this.winner = 2;
    }
  }

}

