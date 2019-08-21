export class Stats {
  constructor(body, spirit, mind) {
    this.body = body;
    this.spirit = spirit;
    this.mind = mind;
  }
  derivedStats() {
    let health = this.body * 10;
    let resistance = this.mind * 10;
    let chi = this.spirit * 10;
  }
}
