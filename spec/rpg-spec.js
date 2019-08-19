import { Character } from "./../src/Character";
import { Stats } from "./../src/Stats";
import { Rpg } from './../src/Rpg';

describe('Character', function() {
  it('should store character data', function() {
  let exampleStats = new Stats(12, 10, 8);
  let exampleChar = new Character("Cecil", "Waterbender", exampleStats);
  console.log(exampleChar.charName, exampleChar.charClass, exampleChar.stats);
  });

});