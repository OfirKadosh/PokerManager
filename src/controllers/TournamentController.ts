import { Level, Prize, TournamentStats } from "../models/TournamentModels.js";
import { TournamentView } from "../views/TournamentView.js";

export class TournamentController {
    private view: TournamentView;
    private stats: TournamentStats;
    private prizes: Prize[];
    private levels: Level[];
    private timerInterval!: number;
    
    constructor(stats:TournamentStats, prizes:Prize[], levels:Level[]) {
        this.view = new TournamentView();
        this.stats = stats;
        this.prizes = prizes;
        this.levels = levels;
    }

    startTournament(): void {
        this.view.updatePrizePool(this.prizes);
        this.view.updatePlayerStats(this.stats);
        this.view.updateCurrentBlinds(this.stats.currentLevel);

        this.timerInterval = window.setInterval(() =>{
            this.updateTimers();
        }, 1000);
    }

    private updateTimers(): void {
        this.stats.elapsedTimeSec++;
        this.stats.timeToNextBreakSec--;
        this.stats.currentLevel.duration = Math.max(this.stats.currentLevel.duration - (1/60), 0);
        this.view.updateTimers(this.stats);
        if(this.stats.currentLevel.duration <= 0) {
            this.advanceLevel();
        }
    }

    private advanceLevel(): void {
        const nextLevel = this.levels.findIndex(l=> l.level === this.stats.currentLevel.level) + 1;
        if(nextLevel < this.levels.length){
            this.stats.currentLevel = this.levels[nextLevel];
            this.view.updateCurrentBlinds(this.stats.currentLevel);
        } else {
            clearInterval(this.timerInterval);
            console.log('Tournament ended.');
        }
    }
}