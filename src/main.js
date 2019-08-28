import { Character } from "./Character";
import { Stats } from "./Stats";
import { Rpg } from './Rpg';

let testStats = new Stats(12, 10, 8);
let testCharacter = new Character("Cecil", "Waterbender", testStats);
let testEnemyStats = new Stats(12, 10, 8);
testEnemyStats.enemyStatMaker();
let testEnemy = new Character("Enemy", "Firebender", testEnemyStats);
let testCharArray = [testCharacter, testEnemy];
let testRpg = new Rpg(testCharArray);

function displayHealth() {
  $("#player-health").html(testCharacter.stats);
  $("#enemy-health").html(testEnemy.stats);
}