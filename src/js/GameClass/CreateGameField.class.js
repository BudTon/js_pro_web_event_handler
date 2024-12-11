export class GameField {
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
      goblinBurrow.insertAdjacentHTML(
        "beforeend",
        `<li class="goblin-burrow" data-id="${i}"></li>`,
      );
    }
    document.body.appendChild(goblinBurrow);
  }
}
