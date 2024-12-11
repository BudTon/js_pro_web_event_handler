/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/GameClass/CreateGameField.class.js
class GameField {
  constructor(lengthList) {
    this.lengthList = lengthList;
    this.createdGameFeild();
  }
  createdGameFeild() {
    const goblinBurrow = document.createElement("ul");
    goblinBurrow.classList = "game-field";
    let i = 0;
    while (i < this.lengthList) {
      i++;
      goblinBurrow.insertAdjacentHTML("beforeend", `<li class="goblin-burrow" data-id="${i}"></li>`);
    }
    document.body.appendChild(goblinBurrow);
  }
}
;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/GameClass/GoblinGame.class.js

class GoblinGame {
  constructor(element, random) {
    this.element = element;
    this.random = random.arr[0];
    this.icon = `<img src="${goblin_namespaceObject}" class="img-goblin hammer" alt="Catch!!!" id="img">`;
    this.createdGoblin();
  }
  clear() {
    this.element.forEach(item => {
      const goblinsFace = item.querySelector("#img");
      if (goblinsFace) {
        goblinsFace.remove();
      }
    });
  }
  createdGoblin() {
    this.clear();
    this.element[this.random].insertAdjacentHTML("beforeend", this.icon);
  }
}
;// CONCATENATED MODULE: ./src/js/GameClass/GetRandom.class.js
class GetRandom {
  constructor(valueMax) {
    this.valueMax = valueMax;
    this.arr = [];
    this.getRandom();
  }
  getRandom() {
    let randomA = Math.floor(Math.random() * this.valueMax);
    while (randomA === this.arr[0]) {
      randomA = Math.floor(Math.random() * this.valueMax);
    }
    this.arr[0] = randomA;
    return randomA;
  }
}
;// CONCATENATED MODULE: ./src/js/GameClass/Standings.class.js
class Standings {
  constructor() {
    this.createdStandings();
  }
  createdStandings() {
    const standings = document.createElement("div");
    standings.classList = "game-standings";
    standings.insertAdjacentHTML("beforeend", `<div class="standings">
        Всего ПОПЫТОК:
        <p class="count-attempts">0</p>
        ПРОМАХОВ:      
        <p class="count-missed">0</p>
        ПОПАДАНИЙ:    
        <p class="count-hit">0</p>
      </div>`);
    document.body.appendChild(standings);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js




const valueMax = 16;
new Standings();
new GameField(valueMax);
const app_element = document.querySelectorAll(".goblin-burrow");
const countAttempts = document.querySelector(".count-attempts");
const countMissed = document.querySelector(".count-missed");
const countHit = document.querySelector(".count-hit");
let gameAttempts = 0;
let goblinHit = 0;
let goblinMissed = -1;
setInterval(() => {
  ++gameAttempts;
  const random = new GetRandom(valueMax);
  const goblinGame = new GoblinGame(app_element, random);
  document.querySelector(".img-goblin").onmousedown = e => {
    e.target.classList.add("hammer-down");
    ++goblinHit;
    --goblinMissed;
  };
  ++goblinMissed;
  countMissed.innerHTML = goblinMissed;
  document.querySelector(".img-goblin").onmouseup = () => {
    goblinGame.clear();
  };
  if (goblinMissed > 4) {
    alert(`Игра окончена!!!\n 
      У Вас ${gameAttempts} попыток\n
      Вы попали по гоблину ${goblinHit}\n
      НАЧНЕМ С НАЧАЛА!!!`);
    gameAttempts = 0;
    goblinHit = 0;
    goblinMissed = 0;
    countMissed.innerHTML = goblinMissed;
  }
  countAttempts.innerHTML = gameAttempts;
  countHit.innerHTML = goblinHit;
}, 1000);
;// CONCATENATED MODULE: ./src/index.js



// import "./img/goblin.png";

// import { interval } from "./js/app.js";

// console.log(interval);

// TODO: write your code in app.js
/******/ })()
;