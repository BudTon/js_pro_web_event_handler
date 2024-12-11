import img from "../../img/goblin.png";

export class GoblinGame {
  constructor(element, random) {
    this.element = element;
    this.random = random.arr[0];
    this.icon = `<img src="${img}" class="img-goblin hammer" alt="Catch!!!" id="img">`;
    this.createdGoblin();
  }

  clear() {
    this.element.forEach((item) => {
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
