import { Character } from "./../src/Character";
import { Stats } from "./../src/Stats";
import { Rpg, battle } from './../src/Rpg';
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

describe('Rpg', function() {
  it('should take a Character object and store it', function() {
    let exampleStats = new Stats(12, 10, 8);
    let exampleChar = new Character("Cecil", "Waterbender", exampleStats);
    let newRpg = new Rpg(exampleChar);
    console.log(newRpg);
  });
});

describe('battle', function() {
  it('should take character and enemy data and store it', function() {
    let exampleStats = new Stats(12, 10, 8);
    let exampleChar = new Character("Cecil", "Waterbender", exampleStats);
    let exampleEnemyStats = new Stats(12, 10, 8);
    exampleEnemyStats.enemyStatMaker();
    let enemyMaker = new Character("Enemy", "Firebender", exampleEnemyStats);
    let exampleBattle = new battle(exampleChar, enemyMaker);
    console.log(exampleBattle);
    expect(exampleChar.charName).toEqual("Cecil");
    expect(exampleChar.charClass).toEqual("Waterbender");
    expect(exampleChar.stats).toEqual(exampleStats);
  });
  it('should roll a number and add it to the character stats', function() {
    let exampleStats = new Stats(12, 10, 8);
    let exampleChar = new Character("Cecil", "Waterbender", exampleStats);
    let exampleEnemyStats = new Stats(12, 10, 8);
    exampleEnemyStats.enemyStatMaker();
    console.log(exampleChar.stats.chi);
    let enemyMaker = new Character("Enemy", "Firebender", exampleEnemyStats);
    let exampleBattle = new battle(exampleChar, enemyMaker);
    console.log(exampleBattle.playerAttackRoller());
  });
  it('should then take the rolled number and subtract the enemys defense', function(){
    let exampleStats = new Stats(12, 10, 8);
    let exampleChar = new Character("Cecil", "Waterbender", exampleStats);
    let exampleEnemyStats = new Stats(12, 10, 8);
    exampleEnemyStats.enemyStatMaker();
    let enemyMaker = new Character("Enemy", "Firebender", exampleEnemyStats);
    let exampleBattle = new battle(exampleChar, enemyMaker);
    let exampleDamage = exampleBattle.playerDamageEnemy();
    console.log(exampleDamage);
  });
  it('should see when one character has lost all health and declare a winner', function() {
    let exampleStats = new Stats(12, 10, 8);
    let exampleChar = new Character("Cecil", "Waterbender", exampleStats);
    let exampleEnemyStats = new Stats(12, 10, 8);
    exampleEnemyStats.enemyStatMaker();
    let enemyMaker = new Character("Enemy", "Firebender", exampleEnemyStats);
    let exampleBattle = new battle(exampleChar, enemyMaker);
    enemyMaker.stats.health = 0;
    exampleBattle.damageEnemy();
  });
});