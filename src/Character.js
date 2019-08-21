
export class Character {
  constructor(charName, charClass, stats) {
    this.charName = charName;
    this.charClass = charClass;
    this.stats = stats;
    this.id = 0;
  }
  assignId() {
    this.id += 1;
    return this.id;
  }
}
