import { GameField } from "./GameClass/CreateGameField.class";
import { GoblinGame } from "./GameClass/GoblinGame.class";
import { GetRandom } from "./GameClass/GetRandom.class";
import { Standings } from "./GameClass/Standings.class";

const valueMax = 16;
new Standings();
new GameField(valueMax);

const element = document.querySelectorAll(".goblin-burrow");
const countAttempts = document.querySelector(".count-attempts");
const countMissed = document.querySelector(".count-missed");
const countHit = document.querySelector(".count-hit");

let gameAttempts = 0;
let goblinHit = 0;
let goblinMissed = -1;

setInterval(() => {
  ++gameAttempts;
  const random = new GetRandom(valueMax);
  const goblinGame = new GoblinGame(element, random);

  document.querySelector(".img-goblin").onmousedown = (e) => {
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
