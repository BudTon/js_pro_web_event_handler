export class Standings {
  constructor() {
    this.createdStandings();
  }
  createdStandings() {
    const standings = document.createElement("div");
    standings.classList = "game-standings";
    standings.insertAdjacentHTML(
      "beforeend",
      `<div class="standings">
        Всего ПОПЫТОК:
        <p class="count-attempts">0</p>
        ПРОМАХОВ:      
        <p class="count-missed">0</p>
        ПОПАДАНИЙ:    
        <p class="count-hit">0</p>
      </div>`,
    );

    document.body.appendChild(standings);
  }
}
