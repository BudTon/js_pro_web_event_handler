export class GetRandom {
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
