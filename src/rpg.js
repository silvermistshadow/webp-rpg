export class Character {
  constructor(charName, charClass, stats) {
    this.charName = charName;
    this.charClass = charClass;
    this.stats = [];
    this.id = 0;
  }

  assignId() {
    this.id += 1;
    return this.id;
  }

}

export class Stats {
  constructor(body, spirit, mind) {
    this.body = body;
    this.spirit = spirit;
    this.mind = mind;
  }
}