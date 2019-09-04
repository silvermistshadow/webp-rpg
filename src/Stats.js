import { getRandomIntInclusive } from "./getRandomIntInclusive";

export class Stats {
  constructor(body, spirit, mind) {
    this.body = body;
    this.spirit = spirit;
    this.mind = mind;
    this.health = body * 10;
    this.resistance = mind * 10;
    this.chi = spirit * 10;
  }
  enemyStatMaker() {
    this.body = getRandomIntInclusive(5, 20);
    this.spirit = getRandomIntInclusive(5, 20);
    this.mind = getRandomIntInclusive(5, 20);
    this.health = this.body * 10;
    this.resistance = this.mind * 10;
    this.chi = this.spirit * 10;
  }
}
