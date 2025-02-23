import { Player } from "../models/Player.js";
import { PlayerView } from "../views/PlayersView.js";
export function initPlayerController() {
    const player = new Player("Ofir", 1, "ofir@example.com");
    const playerView = new PlayerView();
    const appElement = document.getElementById("app");
    if (appElement) {
        appElement.innerHTML = playerView.render(player);
    }
}
