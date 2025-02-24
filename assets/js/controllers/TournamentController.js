import { TournamentView } from "../views/TournamentView.js";
export class TournamentController {
    constructor(stats, prizes, levels) {
        this.view = new TournamentView();
        this.stats = stats;
        this.prizes = prizes;
        this.levels = levels;
    }
    startTournament() {
        this.view.updatePrizePool(this.prizes);
        this.view.updatePlayerStats(this.stats);
        this.view.updateCurrentBlinds(this.stats.currentLevel);
        this.view.updateTimers(this.stats);
        this.timerInterval = window.setInterval(() => {
            this.updateTimers();
        }, 1000);
    }
    updateTimers() {
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
            clearInterval(this.timerInterval);
            console.log('Tournament ended.');
        }
    }
}
//# sourceMappingURL=TournamentController.js.map