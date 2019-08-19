import { Character, Stats } from './../src/rpg';

describe('Character', function() {
  it('should store character data', function() {
  let exampleStats = [10, 12, 8]
  let exampleChar = new Character("Cecil", "Waterbender", exampleStats);
  console.log(exampleChar.charName, exampleChar.charClass, exampleChar.stats);
  });

});