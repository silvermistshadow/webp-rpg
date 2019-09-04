import { Character } from "./Character";
import { Stats } from "./Stats";
import { Rpg, battle } from './Rpg';

let testStats = new Stats(12, 10, 8);
let testCharacter = new Character("Cecil", "Waterbender", testStats);
let testEnemyStats = new Stats(12, 10, 8);
testEnemyStats.enemyStatMaker();
let testEnemy = new Character("Enemy", "Firebender", testEnemyStats);
let testCharArray = [testCharacter, testEnemy];
let testRpg = new Rpg(testCharArray);
let testBattle = new battle(testCharacter, testEnemy);

function displayHealth() {
  $("#player-health").html(testCharacter.stats.health);
  $("#enemy-health").html(testEnemy.stats.health);
}

$(document).ready(function() {
  displayHealth();
  $("button#attack-btn").click(function () {
    testBattle.damageEnemy();
    testBattle.damagePlayer();
  });
})