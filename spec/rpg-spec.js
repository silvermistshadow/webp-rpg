import { Character } from "./../src/Character";
import { Stats } from "./../src/Stats";
import { Rpg } from './../src/Rpg';
import { getRandomIntInclusive } from './../src/getRandomIntInclusive';

describe('Character', function() {
  it('should store character data', function() {
    let exampleStats = new Stats(12, 10, 8);
    let exampleChar = new Character("Cecil", "Waterbender", exampleStats);
    exampleChar.assignId();
    console.log(exampleChar);
  });

  it('should make an enemy for the player to fight', function() {
    let exampleStats = new Stats(12, 10, 8);
    console.log(exampleStats);
    exampleStats.enemyStatMaker();
    let enemyMaker = new Character("Enemy", "Firebender", exampleStats);
    enemyMaker.assignId();
    console.log(enemyMaker);
  });

});