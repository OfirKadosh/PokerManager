import { TournamentView } from "../views/TournamentView.js";
export class TournamentController {
    constructor(stats, prizes, levels) {
        this.isRunning = false;
        this.view = new TournamentView();
        this.stats = stats;
        this.prizes = prizes;
        this.levels = levels;
        this.timerInterval = null;
        this.channel = new BroadcastChannel("tournament_channel");
        this.channel.onmessage = (event) => {
            if (event.data === "start")
                this.startTournament();
            if (event.data === "pause")
                this.pauseTournament();
        };
    }
    startTournament() {
        if (this.isRunning)
            return;
        this.isRunning = true;
        this.view.updatePrizePool(this.prizes);
        this.view.updatePlayerStats(this.stats);
        this.view.updateCurrentBlinds(this.stats.currentLevel);
        this.view.updateTimers(this.stats);
        this.timerInterval = window.setInterval(() => {
            this.updateTimers();
        }, 1000);
    }
    pauseTournament() {
        if (!this.isRunning)
            return;
        this.isRunning = false;
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }
    updateTimers() {
        if (!this.isRunning)
            return;
        this.stats.elapsedTimeSec++;
        this.stats.timeToNextBreakSec--;
        this.stats.currentLevel.duration--;
        this.view.updateTimers(this.stats);
        if (this.stats.currentLevel.duration <= 0) {
            this.advanceLevel();
        }
    }
    advanceLevel() {
        const nextLevel = this.levels.findIndex(l => l.level === this.stats.currentLevel.level) + 1;
        if (nextLevel < this.levels.length) {
            this.stats.currentLevel = this.levels[nextLevel];
            this.view.updateCurrentBlinds(this.stats.currentLevel);
        }
        else {
            this.pauseTournament();
            console.log('Tournament ended.');
        }
    }
}
//# sourceMappingURL=TournamentController.js.map