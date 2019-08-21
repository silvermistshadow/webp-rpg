export class Stats {
  constructor(body, spirit, mind) {
    this.body = body;
    this.spirit = spirit;
    this.mind = mind;
    this.health = body * 10;
    this.resistance = mind * 10;
    this.chi = spirit * 10;
  }
}
