import { Character } from "./Character";
import { Stats } from "./Stats";
import { Rpg, battle } from './Rpg';
import $ from 'jquery';

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
    displayHealth();
    if (testBattle.winner === 1) {
      $("#winner").html("<p>A WINNER IS YOU</p>" + "<p>Refresh to restart</p>");
      $("button#attack-btn").prop('disabled', true);
    }
    else if (testBattle.winner === 2) {
      $("#winner").html("<p>YOUR HEAD A SPLODE</p>" + "<p>Refresh to restart</p>");
      $("button#attack-btn").prop('disabled', true);
    }
  });

})