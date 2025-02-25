import { TournamentController } from "./TournamentController.js";

export class AdminController {
    private channel: BroadcastChannel;

    constructor() {
        this.channel = new BroadcastChannel("tournament_channel");
        this.setupEventListeners();
    }

    private setupEventListeners(): void {
        document.getElementById("start-tournament")?.addEventListener("click", () => {
            this.channel.postMessage("start");
        });

        document.getElementById("pause-tournament")?.addEventListener("click", () => {
            this.channel.postMessage("pause");
        });
    }
}